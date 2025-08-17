const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const items = fs.readdirSync(src);
    
    for (const item of items) {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);
        const stat = fs.statSync(srcPath);
        
        if (stat.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

const optimizedDir = 'src/assets/images-optimized';
const distOptimizedDir = 'dist/src/assets/images-optimized';

if (fs.existsSync(optimizedDir)) {
    console.log('Copying optimized images to dist directory...');
    copyDir(optimizedDir, distOptimizedDir);
    console.log('✅ Optimized images copied successfully!');
} else {
    console.log('⚠️  No optimized images found. Run "npm run optimize-images" first.');
}