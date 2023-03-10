import express from "express";

const app = express();
const PORT = 5200;
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/welcome", (req, res) => {
  res.send("WELCOME!!!🌝🌝🌝");
  res.end();
});

const users = [
  {
    name: "Vasya",
    age: 25,
    gender: "male",
  },
  {
    name: "Petya",
    age: 15,
    gender: "male",
  },
  {
    name: "Masha",
    age: 35,
    gender: "female",
  },
  {
    name: "Aton",
    age: 5,
    gender: "male",
  },
  {
    name: "Ira",
    age: 20,
    gender: "female",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;

  const user = users[+userId - 1];

  res.send(user);
});

app.post("/users", (req, res) => {
  const body = req.body;
  users.push(body);

  res.status(201).json({
    message: "user created",
  });
});

app.put("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const updatedUser = req.body;

  users[+userId - 1] = updatedUser;

  res.status(200).json({
    message: "user updated",
    data: users[+userId - 1],
  });
});

   const { userId } = req.params;

  users.splice(+userId - 1, 1);

  res.status(200).json({
    message: "User deleted!",
  });
});

app.listen(PORT, () => {
  console.log(`Server runs on PORT ${PORT} 🌝️`);
});
