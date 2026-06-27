import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            content = content.replace(/rgba\(37,211,102,/g, 'rgba(255,255,255,');
            content = content.replace(/rgba\(37,\s*211,\s*102,/g, 'rgba(255, 255, 255,');
            content = content.replace(/rgba\(18,140,126,/g, 'rgba(255,255,255,');
            content = content.replace(/rgba\(114,216,200,/g, 'rgba(255,255,255,');
            content = content.replace(/rgba\(86,237,177,/g, 'rgba(255,255,255,');
            content = content.replace(/rgba\(255,82,82,/g, 'rgba(255,255,255,');
            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}
walkDir('./app');
