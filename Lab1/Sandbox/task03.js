const os = require('os');
const userName = os.userInfo().username;

console.log(`Привіт, ${userName}!`);