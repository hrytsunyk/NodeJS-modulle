const express = require('express');
const fsService = require('./fs.service');

const app = express();
const PORT = 5200;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/users', async (req, res) => {
    const users = await fsService.reader();
    res.status(200).json(users)
})

//
app.get('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const users = await fsService.reader();
    const user = users.find(user => user.id === +userId)

    if (!user) {
        res.status(422).json({
            message: `user not found with id ${userId}`
        })
    }



    res.send(user)
})

app.post('/users', async (req, res) => {
    const users = await fsService.reader();
    const {name, age, gender} = req.body;

    if (!name || name.length < 2) {
        res.status(400).json({
            message: 'wrong name'
        })
    }
    if (!age || !Number.isInteger(age) || Number.isNaN(age)) {
        res.status(400).json({
            message: 'wrong age'
        })
    }
    if (!gender || gender !== 'male' && gender !== 'female') {
        res.status(400).json({
            message: 'wrong gender'
        })
    }

    const newUser = {id: users[users.length - 1]?.id + 1 || 1, name, age, gender}

    users.push(newUser);

    await fsService.writer(users)

    res.status(201).json({
        message: 'user created'
    })
})


app.put('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const {name, age, gender} = req.body;

    if (name && name.length < 2) {
        res.status(400).json({
            message: 'wrong name'
        })
    }
    if (age && !Number.isInteger(age) || Number.isNaN(age)) {
        res.status(400).json({
            message: 'wrong age'
        })
    }
    if (gender && (gender !== 'male' && gender !== 'female')) {
        res.status(400).json({
            message: 'wrong gender'
        })
    }

    const users = await fsService.reader();
    const index = users.findIndex(user => user.id === +userId);

    users[index] = {...users[index], ...req.body};

    await fsService.writer(users)

    res.status(201).json({
        message: 'user updated',
        data: users[index]
    })

})

app.delete('/users/:userId', async (req, res) => {
    const users = await fsService.reader();
    const {userId} = req.params;


    const index = users.findIndex(user => user.id === +userId);

    if (!users[index]) {
        res.status(422).json({
            message: `user not found with id ${userId}`
        })
    }

    users.splice(index, 1)


    await fsService.writer(users);
    res.sendStatus(204);

})


app.listen(PORT, () => {
    console.log(`Server runs on PORT ${PORT} 🌝️`)
})

