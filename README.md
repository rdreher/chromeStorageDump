---
platforms: NodeJS 
author: rdreher 
language: JavaScript 
---

# chromeStorageDump
NodeJS Script

## About this application
Google Chrome uses levelDB to store HTML5 Web Storage data in the file system. This small program reads the contents of a levelDB database and prints it. Alternatively, you can provide a search key.

## Dependencies
Run `npm install levelup leveldown` to install the dependencies.

## Usage
`node chromeStorageDump.js [Options] /path/to/database`

### On Windows:
`node chromeStorageDump.js -k token "C:\Users\<username>\AppData\Local\Google\Chrome\User Data\Default\Local Storage\leveldb"`

### On OSX:
`node chromeStorageDump.js -k token "/Users/<username>/Library/Application Support/Google/Chrome/Default/Local Storage/leveldb"`
