const fs = require('fs');

fs.writeFile('firstFile.txt', "Hello FS", (err) => {
    if (err) {
        return callback(err)
    }
    else {
        console.log("File Created!")
    }
})
fs.readFile('firstFile.txt', "utf8", (err, data) => {
    if (err) {
        throw err;
    }
    else {
        console.log(data)
    }
})
fs.rename('firstFile.txt', 'new.txt', (err, data) => {
    if (err) {
        throw err
    }
    else {
        console.log("Renamed")
    }
})
fs.unlinkSync('new.txt', (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("Deleted Successfully")
    }
})