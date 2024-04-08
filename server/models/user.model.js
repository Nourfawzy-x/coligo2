import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Full name should be at least 3 characters long"],
      maxlength: [25, "Full name should not exceed 25 characters"],
    },
    email: {
      type: String,
      unique: [true, "Email is already exist"],
      required: [true, "Email is required"],
      message: (props) => `${props.value} is not a valid email format!`,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password should be at least 6 characters long"],
      message: (props) => `${props.value} is not a valid password!`,
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [6, "Age must be more than 6 years"],
      max: [21, "Age must be less than 21 years"],
    },
    role: {
      type: String,
      enum: ["admin", "student"],
      default: "student",
    },
    confirmedEmail: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("user", userSchema);
