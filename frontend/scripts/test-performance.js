const fs = require('fs');
const path = require('path');

function calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    function getSize(itemPath) {
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
            const files = fs.readdirSync(itemPath);
            files.forEach(file => {
                getSize(path.join(itemPath, file));
            });
        } else {
            totalSize += stats.size;
        }
    }
    
    getSize(dirPath);
    return totalSize;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function countFiles(dirPath, extensions) {
    let count = 0;
    
    function countInDir(itemPath) {
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
            const files = fs.readdirSync(itemPath);
            files.forEach(file => {
                countInDir(path.join(itemPath, file));
            });
        } else {
            const ext = path.extname(itemPath).toLowerCase();
            if (extensions.includes(ext)) {
                count++;
            }
        }
    }
    
    countInDir(dirPath);
    return count;
}

console.log('📊 Image Optimization Performance Report');
console.log('==========================================\n');

// Original images analysis
const originalDir = 'src/assets/images';
const optimizedDir = 'src/assets/images-optimized';

if (fs.existsSync(originalDir)) {
    const originalSize = calculateDirectorySize(originalDir);
    const originalJpgCount = countFiles(originalDir, ['.jpg', '.jpeg']);
    const originalPngCount = countFiles(originalDir, ['.png']);
    
    console.log('🔍 Original Images:');
    console.log(`   Total size: ${formatBytes(originalSize)}`);
    console.log(`   JPG files: ${originalJpgCount}`);
    console.log(`   PNG files: ${originalPngCount}`);
    console.log(`   Total files: ${originalJpgCount + originalPngCount}\n`);
}

if (fs.existsSync(optimizedDir)) {
    const optimizedSize = calculateDirectorySize(optimizedDir);
    const webpCount = countFiles(optimizedDir, ['.webp']);
    const jpgCount = countFiles(optimizedDir, ['.jpg', '.jpeg']);
    
    console.log('✨ Optimized Images:');
    console.log(`   Total size: ${formatBytes(optimizedSize)}`);
    console.log(`   WebP files: ${webpCount}`);
    console.log(`   Optimized JPG files: ${jpgCount}`);
    console.log(`   Total files: ${webpCount + jpgCount}\n`);
    
    // Calculate potential savings with WebP
    const webpDir = path.join(optimizedDir, '**');
    const webpFiles = [];
    
    function findWebpFiles(dir) {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stats = fs.statSync(fullPath);
            
            if (stats.isDirectory()) {
                findWebpFiles(fullPath);
            } else if (item.endsWith('.webp') && !item.includes('-small') && !item.includes('-medium') && !item.includes('-large')) {
                webpFiles.push(fullPath);
            }
        });
    }
    
    findWebpFiles(optimizedDir);
    
    let webpTotalSize = 0;
    webpFiles.forEach(file => {
        webpTotalSize += fs.statSync(file).size;
    });
    
    console.log('📈 Performance Improvements:');
    if (fs.existsSync(originalDir)) {
        const originalSize = calculateDirectorySize(originalDir);
        const savingsPercent = ((originalSize - webpTotalSize) / originalSize * 100).toFixed(1);
        console.log(`   WebP only size: ${formatBytes(webpTotalSize)}`);
        console.log(`   Potential savings: ${formatBytes(originalSize - webpTotalSize)} (${savingsPercent}%)`);
    }
    console.log(`   Responsive images: 3 sizes per image (small: 400px, medium: 800px, large: 1200px)`);
    console.log(`   Lazy loading: Images load only when needed`);
    console.log(`   Modern format: WebP with JPEG fallback\n`);
}

console.log('🚀 Implementation Features:');
console.log('   ✅ Lazy loading with react-lazyload');
console.log('   ✅ WebP format with JPEG fallback');
console.log('   ✅ Responsive images (3 sizes)');
console.log('   ✅ Progressive JPEG optimization');
console.log('   ✅ Loading placeholder animations');
console.log('   ✅ Optimized carousel (loads adjacent images only)');
console.log('\n📋 Next Steps:');
console.log('   1. Test the website with: npm start');
console.log('   2. Check Network tab in DevTools for lazy loading');
console.log('   3. Verify WebP is served to supported browsers');
console.log('   4. Test on mobile devices for responsive images');