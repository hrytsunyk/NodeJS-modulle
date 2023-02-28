const fs = require('fs');
const path = require('path');

// MADE DIRECTORY_____________________________________________________________________

// fs.mkdir(path.join('mainFolder','folder1'), (err)=>{
// if (err) throw new Error()
// });
//
// fs.mkdir(path.join('mainFolder','folder2'), (err)=>{
// if (err) throw new Error()
// });

// fs.mkdir(path.join('mainFolder','folder3'), (err)=>{
//     if (err) throw new Error()
// });
//
// fs.mkdir(path.join('mainFolder','folder4'), (err)=>{
//     if (err) throw new Error()
// });
//
// fs.mkdir(path.join('mainFolder','folder5'), (err)=>{
//     if (err) throw new Error()
// });
//
//


// MADE  FILES INSIDE SUBDIRECTORY________________________________________________________________

// fs.writeFile(path.join('mainFolder','folder1','file.txt'), 'Hello Okten', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('mainFolder','folder2','file.txt'), 'Hello Okten', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('mainFolder','folder3','file.txt'), 'Hello Okten', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('mainFolder','folder4','file.txt'), 'Hello Okten', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('mainFolder','folder5','file.txt'), 'Hello Okten', (err)=>{
//     if (err) throw new Error()
// })


// MADE mainDIRECTORIE FILES________________________________________________________________

// fs.writeFile(path.join('mainFolder','file1.txt'), 'Hello Okten mainFolder', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('mainFolder','file2.txt'), 'Hello Okten mainFolder', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('mainFolder','file3.txt'), 'Hello Okten mainFolder', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('mainFolder','file4.txt'), 'Hello Okten mainFolder', (err)=>{
//     if (err) throw new Error()
// })
//
// fs.writeFile(path.join('mainFolder','file5.txt'), 'Hello Okten mainFolder', (err)=>{
//     if (err) throw new Error()
// })


// GET FILE TYPES________________________________________________________________

// fs.readdir(path.join('mainFolder'), {withFileTypes: true}, (err, data) => {
//     if (err) throw new Error()
//     data.forEach(value => {
//         console.log(value.isFile())
//     })
// })

// MADE GITIGNORE FILE_________________________________________________________________

// fs.writeFile(path.join(__dirname,'.gitignore'), '.idea', err => {
//     if (err) throw new Error()
// })

// fs.appendFile(path.join(__dirname, '.gitignore'), '\nNodeJS-modulle.iml', err => {
//     if (err) throw new Error()
// })