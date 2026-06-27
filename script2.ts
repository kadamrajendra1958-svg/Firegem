import * as fs from 'fs';
import * as path from 'path';

let content = fs.readFileSync('app/page.tsx', 'utf8');
content = content.replace(/#25D366/g, '#FFFFFF');
content = content.replace(/#128C7E/g, '#FFFFFF');
content = content.replace(/#34D399/g, '#FFFFFF');
content = content.replace(/#72d8c8/g, '#FFFFFF');
content = content.replace(/#56edb1/g, '#FFFFFF');

fs.writeFileSync('app/page.tsx', content);
