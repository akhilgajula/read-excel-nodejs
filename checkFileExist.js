const fs = require('fs');

const check = (fileName, callback) => {
    fs.access(fileName, (error) => {
        if(!error) {
            console.log('check File Exists');
            callback(true)
        } else {
             console.log('File Doesnt exist');
             callback(false);
        }
    })
}

module.exports = check;
// test
// check('User.xlsx');