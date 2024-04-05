import { userModel } from "../../../models/user.model.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { name, email, password, age, role } = req.body;

  let user = await userModel.findOne({ email });
  if (user) return res.json({ message: "email is already exist" });

  const hash = bcrypt.hashSync(password, 8);
  userModel.insertMany({ name, email, password: hash, age, role });
  res.json({ message: "signup successfully" });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.json({ message: "incorrect password or email" });
  }
  user.password = undefined;
  var token = Jwt.sign({ user }, "nourfawzy");

  res.json({ message: "login successfully", token });
};
