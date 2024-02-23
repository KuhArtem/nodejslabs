const yargs = require('yargs');
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

yargs.command({
    command: 'add',
    describe: 'Додати мову до списку мов Кухновця Артема',
    builder: {
        language: {
            describe: 'Мова',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addUserLanguage(argv.language);
    }
}).command({
    command: 'view',
    describe: 'Переглянути всі мови Кухновця Артема',
    handler() {
        viewUserLanguages();
    }
}).command({
    command: 'remove',
    describe: 'Видалити мову зі списку мов Кухновця Артема',
    builder: {
        language: {
            describe: 'Мова',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeUserLanguage(argv.language);
    }
});

yargs.parse();