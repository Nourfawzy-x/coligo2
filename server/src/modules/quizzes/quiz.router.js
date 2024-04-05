import express from "express";
import * as quizController from "./quiz.controller.js";
import { auth } from "../../middleWare/auth.js";

const quizRouter = express.Router();
quizRouter.post("/", auth, quizController.createQuiz);
quizRouter.get("/", auth, quizController.getAllQuizzes);
quizRouter.put("/", quizController.updateQuiz);
quizRouter.delete("/", auth, quizController.deleteQuiz);
export default quizRouter;
