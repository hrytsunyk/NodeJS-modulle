const express = require('express');
const fsService = require('./fs.service');

const app = express();
const PORT = 5200;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/users', async (req, res) => {

})

// //
// app.get('/users/:userId', async (req, res) => {
//
// })
//
// app.post('/users', async (req, res) => {
//
// })
//
//
// app.put('/users/:userId', async (req, res) => {
//
//
// })
//
// app.delete('/users/:userId', async (req, res) => {
//
// })


app.listen(PORT, () => {
    console.log(`Server runs on PORT ${PORT} 🌝️`)
})

