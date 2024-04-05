import mongoose from "mongoose";

const quizSchema = mongoose.Schema(
  {
    task: String,
    course: String,
    topic: String,
    datetime: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
export const quizModel = mongoose.model("quiz", quizSchema);
