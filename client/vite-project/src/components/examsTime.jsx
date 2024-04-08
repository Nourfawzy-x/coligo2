import { Button } from "@mui/material";
import img from "../assets/Exams-bro.png";
function Exams() {
  return (
    <>
      <div
        style={{
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "3px",
          display: "flex",
          paddingLeft: "20px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div style={{ width: "70%" }}>
          <h2
            style={{
              backgroundImage: "linear-gradient(to right, #78aaa1, white)",
              width: "200px",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            EXAMS TIME
          </h2>
          <p style={{ color: "black", opacity: "0.8" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum saepe
            explicabo error repellat quidem eveniet, soluta consequuntur a,
          </p>
          <p style={{ color: "black", opacity: "0.4" }}>
            Lorem ipsum, dolore numquam quasi, autem eum rerum fugit ea
            accusantium impedit.
          </p>
          <Button
            variant="outlined"
            type="submit"
            style={{
              borderRadius: "5px",
              marginBottom: "5px",
              backgroundColor: "#78aaa1",
              color: "white",
              paddingInline: "30px",
            }}
          >
            View exams tips
          </Button>
        </div>
        <div style={{ width: "30%" }}>
          <img
            style={{ width: "70%", display: { md: "none", lg: "flex" } }}
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
export default Exams;
