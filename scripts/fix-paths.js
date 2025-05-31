const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');

// Function to process HTML files
function processHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix all asset paths (including _next directory)
      content = content.replace(/(src|href)="\/(_next|fonts|images)/g, '$1="/website/$2');
      
      // Fix any remaining absolute paths that don't start with http or //
      content = content.replace(/(src|href)="\/(?!\/|http)/g, '$1="/website/');
      
      fs.writeFileSync(filePath, content);
    }
  });
}

// Process all HTML files in the docs directory
processHtmlFiles(docsDir);
console.log('Asset paths have been updated for GitHub Pages'); 