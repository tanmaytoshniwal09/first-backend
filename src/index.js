import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.get("/twitter", (req, res) => {
//   res.send("dfasdf");
// });
app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    { id: 1, joke: "joke1", punchline: "punchline1" },
    { id: 2, joke: "joke2", punchline: "punchline2" },
    { id: 3, joke: "joke3", punchline: "punchline3" },
    { id: 4, joke: "joke4", punchline: "punchline4" },
    { id: 5, joke: "joke5", punchline: "punchline5" },
    { id: 6, joke: "joke6", punchline: "punchline6" },
  ];
  res.send(jokes);
});

app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("Tanmay");
