const yargs = require('yargs');
const { addUserLanguage, viewUserLanguages, removeUserLanguage } = require('./userActions');

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