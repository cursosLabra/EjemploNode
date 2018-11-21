const fs=require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

async function getStuff() {
    return await readFile('README.md');
}

// Can't use `await` outside of an async function so you need to chain
// with then()
getStuff().then(data => {
    console.log(data);
});
