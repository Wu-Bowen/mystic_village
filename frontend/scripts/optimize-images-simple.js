const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'src/assets/images';
const outputDir = 'src/assets/images-optimized';

async function optimizeImages() {
    console.log('Starting image optimization with Sharp...');
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        const imageFiles = getAllImageFiles(inputDir);
        console.log(`Found ${imageFiles.length} images to optimize`);
        
        for (const file of imageFiles) {
            await processImage(file);
        }

        console.log('Image optimization complete!');
        console.log(`Optimized images saved to ${outputDir}`);
        
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

async function processImage(filePath) {
    const relativePath = path.relative(inputDir, filePath);
    const parsedPath = path.parse(relativePath);
    const outputPath = path.join(outputDir, parsedPath.dir);
    
    // Ensure output directory exists
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    const fileName = parsedPath.name;
    console.log(`Processing: ${relativePath}`);

    try {
        // Create optimized original format
        const originalOutput = path.join(outputPath, `${fileName}${parsedPath.ext}`);
        await sharp(filePath)
            .jpeg({ quality: 80, progressive: true })
            .toFile(originalOutput);

        // Create WebP version
        const webpOutput = path.join(outputPath, `${fileName}.webp`);
        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(webpOutput);

        // Create responsive sizes
        const sizes = [
            { width: 400, suffix: '-small' },
            { width: 800, suffix: '-medium' },
            { width: 1200, suffix: '-large' }
        ];

        for (const size of sizes) {
            // Responsive JPEG
            const responsiveJpeg = path.join(outputPath, `${fileName}${size.suffix}.jpg`);
            await sharp(filePath)
                .resize(size.width, null, { 
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .jpeg({ quality: 80, progressive: true })
                .toFile(responsiveJpeg);

            // Responsive WebP
            const responsiveWebp = path.join(outputPath, `${fileName}${size.suffix}.webp`);
            await sharp(filePath)
                .resize(size.width, null, { 
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: 80 })
                .toFile(responsiveWebp);
        }
        
    } catch (error) {
        console.warn(`Could not process ${filePath}:`, error.message);
    }
}

function getAllImageFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...getAllImageFiles(fullPath));
        } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
            files.push(fullPath);
        }
    }
    
    return files;
}

// Run the optimization
optimizeImages();