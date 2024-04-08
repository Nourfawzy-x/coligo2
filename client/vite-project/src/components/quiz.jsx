import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function BasicCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        marginTop: "7px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
        borderRadius: "3px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
        }}
      >
        <div style={{ paddingLeft: "10px" }}>
          <Typography
            style={{ paddingBottom: "0", marginBottom: "0", fontSize: "25px" }}
          >
            What`s due
          </Typography>
          <Typography style={{ opacity: "0.7", paddingTop: "0" }}>
            Lorem ipsum dolor
          </Typography>
        </div>
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            fontSize: "20px",
            color: "#78aaa1",
          }}
        >
          All
        </button>
      </div>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Unit 2 Quiz
        </Typography>
        <Typography color="text.secondary">courses</Typography>
        <Typography color="text.secondary">adjective</Typography>
        <Typography color="text.secondary">adjective</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{
            border: "1px solid #67aaa1",
            borderRadius: "10px",
            color: "#78aaa1",
            width: "100%",
          }}
        >
          Start Quiz
        </Button>
      </CardActions>
    </Card>
  );
}
