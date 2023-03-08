const express = require('express');
const fsService = require('./fs.service');

const app = express();
const PORT = 5200;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/users', async (req, res) => {
const users = await fsService.reader();
res.json(users)
})

// //
// app.get('/users/:userId', async (req, res) => {
//
// })
//
app.post('/users', async (req, res) => {
    const users = await fsService.reader();
    const user = req.body;
    console.log(user)
    await fsService.writer(user)

    res.json({
        message: 'User created!'
    })

})
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

