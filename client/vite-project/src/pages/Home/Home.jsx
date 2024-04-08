import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/login">
          <Button variant="contained" disableElevation style={{ margin: 20 }}>
            login
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="contained" disableElevation style={{ margin: 20 }}>
            signup
          </Button>
        </Link>
      </div>
    </>
  );
}
