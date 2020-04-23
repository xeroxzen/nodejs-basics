var fs = require('fs');

// This is the synchronous method
// var readMe = fs.readFileSync('readMe.txt', 'utf-8');
// // console.log(readMe);
// var writeMe = fs.writeFileSync('writeMe.txt', readMe)

//Let's try the asynchronous method
// The advantage about async is that it does not block the code as the sync method does
// Non blocking code
fs.readFile('readMe.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  }
  else {
    fs.writeFile('writeMe.txt', data);
  }
});

// console.log('Testing...');
// fs.writeFile('writeMe.txt', readMe)
