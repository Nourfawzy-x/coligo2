import { userModel } from "../../../models/user.model.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { name, email, password, age, role } = req.body;

    // Check if a user with the provided email already exists
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email is already in use" });
    }
    const hash = bcrypt.hashSync(password, 8);
    await userModel.create({ name, email, password: hash, age, role });

    // Send success response
    res.json({ message: "Signup successful" });
  } catch (error) {
    // Handle any errors that occur during signup process
    console.error("Error occurred during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = Jwt.sign({ user }, "nourfawzy");
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error occurred during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
