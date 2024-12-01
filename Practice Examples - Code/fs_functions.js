const fs = require("fs")

/*
Methods:

readFile
readFileSync
writeFile
writeFileSync
appendFile
appendFileSync
unlink
unlinkSync
existsSync
mkdir
rmdir
*/

// Asynchronous file read


fs.readFile("./testfile.txt", 'utf-8', (err, content) => {
    if(err) {
        console.log("Unable to read the file. Error: ", err)
    }
    else{
        console.log("Contents: \n", content)
    }
})

// Synchronous file read
const data = fs.readFileSync("testfile.txt", 'utf-8')
console.log("Contents: ", data)




// Asynchronous file write

let content = "\nNew content\n"
fs.writeFile("testfile.txt", content, (err, data) => {
    if(!err) {
        console.log("Write successful")
    }
    else{
        console.log("Asynchronous file write failed. Error: ", err)
    }
})


// Synchronous file write
let syncWriteContent = "\nNew sync write content\n"
fs.writeFileSync("testfile.txt", syncWriteContent)

fs.readFile("./testfile.txt", 'utf-8', (err, content) => {
    if(err) {
        console.log("Unable to read the file. Error: ", err)
    }
    else{
        console.log("Contents: \n", content)
    }
})

let appendCoontent = "\nAppend Content\n"

fs.appendFile("testfile.txt", appendCoontent, (err) => {
    if(!err) {
        console.log("Appended contents")
    }
    else{
        console.log("Append failed")
    }
})

fs.mkdir("./createdFolder", { recursive: true}, (err) => {
    if(!err) {
        console.log("Created folder")
    }
    else{
        console.log("Folder creation failed")
    }
})
