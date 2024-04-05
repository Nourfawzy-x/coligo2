import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/studentDashboard")
    .then(() => {
      console.log("database is connected....");
    })
    .catch(() => {
      console.log("database not connected....");
    });
};
