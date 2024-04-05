import express from "express";
import { dbConnection } from "./dataBases/dbConnection.js";
import userRouter from "./src/modules/users/user.router.js";
import quizRouter from "./src/modules/quizzes/quiz.router.js";
import cors from "cors";

const app = express();
const port = 3000;
dbConnection();
app.use(express.json());
app.use("/users", userRouter);
app.use("/quizzes", quizRouter);
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
