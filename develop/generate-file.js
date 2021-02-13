const fs = require('fs');

// writes file to html
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err=> {
            // if there's an error reject
            if (err) {
                erject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// exports
module.exports = writeFile;