const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('Petición recibida para:', req.url);

    // Modificación: Apuntar a la carpeta public en lugar de la raíz
    let filePath = './public' + req.url;
    
    // Modificación: Si la ruta es la raíz, servir index.html desde public
    if (filePath == './public/') {
        filePath = './public/index.html'; 
    }

    const extname = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end('Error 404: No encontrado');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});