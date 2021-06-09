const fs = require('fs')

// reading file
fs.readFile('./blog1.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
})

console.log('reading blog 1');

// directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);

    }
    console.log('folder deleted');
  })
}

// deleting files and dirs
if (fs.existsSync('./blog1_w.txt')) {
  fs.unlink('./blog1_w.txt', (err) => {
    if (err) console.log(err);
    console.log('file deleted');
  })
} else {
  // writing file
  fs.writeFile('./blog1_w.txt', 'Hello, respectable citisens', function(err, data) {
    console.log('file was written')
  })

  console.log('writing blog 1 w');
}
