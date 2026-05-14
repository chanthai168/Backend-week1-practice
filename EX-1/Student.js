

import fs from 'fs/promises';
const filePath = "./hello.txt";

async function main(){
    try{
        // Write to a file (synchronously)
        fs.writeFile(filePath, "Hello, Node.js beginner!");

        // Read the file (synchronously)
        const content = fs.readFile(filePath, "utf8");
        console.log("File content:", content);
    }
    catch(error){
        console.log(error);
    }
}
main();

