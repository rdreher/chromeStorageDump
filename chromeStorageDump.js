var levelup = require('levelup')
var leveldown = require('leveldown')

if (process.argv.length < 3) {
  console.log("Usage: node chromeStorageDump.js [Options] /path/to/database");
  console.log("Options:");
  console.log("\t -k <key>: Provides a key to search for\n");
  return;
}

if (process.argv[2] === "-k") {
  if (process.argv[3]) {
    var searchKey = process.argv[3];
    if (process.argv[4]) {
      var db_path = process.argv[4];
    } else {
      console.log("ERROR: Please, provide the database path");
      return;
    }
  } else {
    console.log("ERROR: Please, provide a search key")
    return;
  }
} else {
  var db_path = process.argv[2];
}

var db = levelup(leveldown(db_path))

db.createKeyStream().on('data', function (data) {
  db.get(data, function (err, value) {
    if (searchKey) {
      if (data.indexOf(searchKey) >= 0 ) {
        console.log("=====================");
        console.log("key = " + data + "\n");
        console.log("value = " + value);
        console.log("=====================\n");
      }
    } else {
      console.log("=====================");
      console.log("key = " + data + "\n");
      console.log("value = " + value);
      console.log("=====================\n");
    }
  })
})
