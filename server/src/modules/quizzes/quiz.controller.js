import { quizModel } from "../../../models/quiz.model.js";

const createQuiz = async (req, res) => {
  try {
    const { task, course, topic, datetime } = req.body;
    await quizModel.create({ task, course, topic, datetime });
    res.json({ message: "Quiz created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating quiz", error: error.message });
  }
};
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await quizModel.find();
    res.json({ message: "Quizzes retrieved successfully", quizzes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving quizzes", error: error.message });
  }
};
const updateQuiz = async (req, res) => {
  const { task, course, topic, _id } = req.body;
  let quiz = await quizModel.findByIdAndUpdate(
    { _id },
    { task, course, topic },
    { new: true }
  );
  if (quiz) {
    res.json({ message: "update quizz successfully", quiz });
  } else {
    res.json({ message: "quiz not found" });
  }
};
const deleteQuiz = async (req, res) => {
  const { _id } = req.body;
  let quiz = await quizModel.findByIdAndDelete({ _id });
  if (quiz) {
    res.json({ message: "deleted quizz successfully", quiz });
  } else {
    res.json({ message: "quiz not found" });
  }
};
export { createQuiz, getAllQuizzes, updateQuiz, deleteQuiz };
