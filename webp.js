// scripts/convert-to-webp.js
const sharp = require("sharp");
const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "../");
const supportedExtensions = ["jpg", "jpeg", "png", "gif"];

(async () => {
    const files = await fg(`${inputDir}/**/*.{${supportedExtensions.join(",")}}`);

    console.log(`Found ${files.length} files to convert...`);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const baseName = file.slice(0, -ext.length);
        const outputFile = `${baseName}.webp`;

        // Skip if WebP already exists
        if (fs.existsSync(outputFile)) continue;

        try {
            await sharp(file, { animated: ext === ".gif" }) // <- this enables animated gif support
                .webp({ quality: 90 }) // visually lossless
                .toFile(outputFile);

            console.log(`✅ Converted: ${file} → ${outputFile}`);
        } catch (err) {
            console.error(`❌ Failed: ${file}`);
            console.error(err);
        }
    }
})();