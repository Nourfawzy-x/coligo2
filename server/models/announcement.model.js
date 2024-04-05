import mongoose from "mongoose";

const announcementSchema = mongoose.Schema(
  {
    teacher: String,
    course: String,
    announcement: String,
    createdBy: {
      type: mongoose.type.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);
export const announcementModel = mongoose.model(
  "announcement",
  announcementSchema
);
