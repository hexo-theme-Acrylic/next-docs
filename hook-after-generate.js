const fs = require('fs');

const indexFile = './dist/index.html';

fs.access(indexFile, () => {
    fs.readFile(indexFile, 'utf8', (err, data) => {
        data = data.replace('(false,"",true)', '(true,"",true)');

        fs.writeFile(indexFile, data, () => {});
    });
});