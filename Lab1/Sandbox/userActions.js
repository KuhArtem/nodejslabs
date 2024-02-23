const fs = require('fs');
const userFilePath = './user.json';

function addUserLanguage(language) {
    const user = JSON.parse(fs.readFileSync(userFilePath));
    user.languages.push(language);
    fs.writeFileSync(userFilePath, JSON.stringify(user, null, 2));
    console.log(`Мова ${language} додана до списку мов Кухновця Артема.`);
}

function viewUserLanguages() {
    const user = JSON.parse(fs.readFileSync(userFilePath));
    console.log(`${user.name} володіє наступними мовами: ${user.languages.join(', ')}`);
}

function removeUserLanguage(language) {
    const user = JSON.parse(fs.readFileSync(userFilePath));
    user.languages = user.languages.filter(lang => lang !== language);
    fs.writeFileSync(userFilePath, JSON.stringify(user, null, 2));
    console.log(`Мова ${language} видалена зі списку мов Кухновця Артема.`);
}

module.exports = { addUserLanguage, viewUserLanguages, removeUserLanguage };