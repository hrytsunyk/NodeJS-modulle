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
    const {age, name, gender} = req.body;

    const newUser = {id: users[users.length - 1]?.id + 1 || 1, name, age, gender};

    users.push(newUser);

    await fsService.reader(users);


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

