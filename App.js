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

    console.log(users)

    const newUser = {id: users[users.length - 1]?.id + 1 || 1, name, age, gender};

    users.push(newUser);

    await fsService.writer(users);


    res.json({
        message: 'User created!'
    })

})


app.put('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fsService.reader();
    const updatedUser = req.body;

    users[userId - 1] = updatedUser;

    await fsService.writer(users)

    res.json({
        message: 'user updated'
    })
})
//
app.delete('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fsService.reader();
    const user = users.find(user=> user.id ===userId? user.splice(user,1):[]);


    await fsService.writer(users)

    res.json({
        message: 'user deleted'
    })
})


app.listen(PORT, () => {
    console.log(`Server runs on PORT ${PORT} 🌝️`)
})

