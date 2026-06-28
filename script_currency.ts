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
            
            // Replace $ with ₹ when followed by numbers or K, M, k, m
            content = content.replace(/\$([0-9.,]+[kKmM]?)/g, '₹$1');
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated currency in ' + fullPath);
            }
        }
    }
}
walkDir('./app');
