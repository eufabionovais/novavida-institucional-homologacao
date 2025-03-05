import fs from 'fs';
import path from 'path';

// Define the directory where your built files are located
const distDir = path.join(process.cwd(), 'dist');

// Function to process a single HTML file
function fixHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace only the initial slash for assets paths in HTML files
  content = content.replace(/href="\/assets/g, 'href="assets');
  
  // Save the modified content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
}

// Function to process a single CSS file
function fixCssFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Adjust URLs in CSS files to use relative paths
  content = content.replace(/url\("\/assets/g, 'url("../assets');
  content = content.replace(/url\(\/assets/g, 'url(../assets');
  
  // Save the modified content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
}

// Recursively go through all files in the dist directory
function fixAllFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixAllFiles(filePath); // Recurse into subdirectories
    } else if (filePath.endsWith('.html')) {
      fixHtmlFile(filePath); // Fix each HTML file
    } else if (filePath.endsWith('.css')) {
      fixCssFile(filePath); // Fix each CSS file
    }
  });
}

// Start the process
fixAllFiles(distDir);
