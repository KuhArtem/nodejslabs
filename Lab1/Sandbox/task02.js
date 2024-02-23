const fs = require('fs');
const filePath = './file.txt';

fs.appendFile(filePath, 'Новий рядок\n', (err) => {
    if (err) throw err;
    console.log('Рядок додано до файлу!');
});