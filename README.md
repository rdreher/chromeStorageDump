---
platforms: NodeJS 
author: rdreher 
language: JavaScript 
---

# chromeStorageDump
NodeJS Script

## About this application
Google Chrome uses levelDB to store data from both Local and Session storage in the file system. This small program reads the contents of those databases and prints it. Alternatively, you can provide a search key.

## Dependencies
Run `npm install levelup leveldown` to install the dependencies.

## Usage
`node chromeStorageDump.js [Options] /path/to/storage`
