const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'src/assets/images';
const outputDir = 'src/assets/images-optimized';

async function optimizeImages() {
    console.log('Starting image optimization...');
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        // Step 1: Convert JPG images to optimized JPG and WebP
        console.log('Converting JPG images...');
        await imagemin([`${inputDir}/**/*.jpg`], {
            destination: outputDir,
            plugins: [
                imageminMozjpeg({ quality: 80 }) // Optimize JPG
            ]
        });
        
        await imagemin([`${inputDir}/**/*.jpg`], {
            destination: outputDir,
            plugins: [
                imageminWebp({ quality: 80 }) // Convert to WebP
            ]
        });

        // Step 2: Convert PNG images to WebP
        console.log('Converting PNG images...');
        await imagemin([`${inputDir}/**/*.png`], {
            destination: outputDir,
            plugins: [
                imageminWebp({ quality: 80 })
            ]
        });

        // Step 3: Create responsive image sizes using Sharp
        console.log('Creating responsive image sizes...');
        await createResponsiveImages();

        console.log('Image optimization complete!');
        console.log(`Optimized images saved to ${outputDir}`);
        
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

async function createResponsiveImages() {
    const sizes = [
        { width: 400, suffix: '-small' },
        { width: 800, suffix: '-medium' },
        { width: 1200, suffix: '-large' }
    ];

    const imageFiles = getAllImageFiles(inputDir);
    
    for (const file of imageFiles) {
        const relativePath = path.relative(inputDir, file);
        const parsedPath = path.parse(relativePath);
        const outputPath = path.join(outputDir, parsedPath.dir);
        
        // Ensure output directory exists
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath, { recursive: true });
        }

        for (const size of sizes) {
            const outputFileName = `${parsedPath.name}${size.suffix}${parsedPath.ext}`;
            const outputFilePath = path.join(outputPath, outputFileName);
            
            try {
                await sharp(file)
                    .resize(size.width, null, { 
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .jpeg({ quality: 80 })
                    .toFile(outputFilePath);
                
                // Also create WebP versions
                const webpFileName = `${parsedPath.name}${size.suffix}.webp`;
                const webpFilePath = path.join(outputPath, webpFileName);
                
                await sharp(file)
                    .resize(size.width, null, { 
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .webp({ quality: 80 })
                    .toFile(webpFilePath);
                    
            } catch (error) {
                console.warn(`Could not process ${file}:`, error.message);
            }
        }
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