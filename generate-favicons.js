import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { promises as fs } from 'fs';
import path from 'path';

const inputFile = './public/images/icons/favicon-square.png';
const outputDir = './public';
const iconsDir = './public/images/icons';

async function generateFavicons() {
  try {
    // Read the source image
    const image = sharp(inputFile);
    const metadata = await image.metadata();

    console.log(`Source image: ${metadata.width}x${metadata.height}`);

    // Generate different sizes
    const sizes = [
      { size: 16, name: 'favicon-16x16.png', dir: iconsDir },
      { size: 32, name: 'favicon-32x32.png', dir: iconsDir },
      { size: 48, name: 'favicon-48x48.png', dir: iconsDir },
      { size: 96, name: 'favicon-96x96.png', dir: iconsDir },
      { size: 180, name: 'apple-touch-icon.png', dir: iconsDir },
      { size: 192, name: 'favicon-192x192.png', dir: iconsDir },
      { size: 512, name: 'favicon-512x512.png', dir: iconsDir },
    ];

    for (const { size, name, dir } of sizes) {
      await sharp(inputFile)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(path.join(dir, name));
      console.log(`Created ${name}`);
    }

    // Create favicon.ico with multiple sizes (16, 32, 48)
    const icoBuffer = await pngToIco([
      path.join(iconsDir, 'favicon-16x16.png'),
      path.join(iconsDir, 'favicon-32x32.png'),
      path.join(iconsDir, 'favicon-48x48.png'),
    ]);
    await fs.writeFile(path.join(outputDir, 'favicon.ico'), icoBuffer);
    console.log('Created favicon.ico (multi-size: 16, 32, 48)');

    console.log('\nAll favicons generated successfully!');
    console.log('\nGoogle requires at least 48x48 pixels for search results.');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
