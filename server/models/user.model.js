import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: [2, "name is too short"],
    required: true,
  },
  email: {
    type: String,
    minLength: [8, "email is too short"],
    unique: [true, "email is already exist"],
    required: true,
  },
  password: {
    type: String,
    minLength: [6, "password is too short"],
    required: true,
  },
  age: {
    type: Number,
    min: 6,
    max: 21,
    required: true,
  },
  confirmedEmail: {
    type: Boolean,
    default: false,
  },
});
export const userModel = mongoose.model("user", userSchema);
