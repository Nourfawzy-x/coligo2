import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import img from "../assets/Exams-bro";

export default function Announcements() {
  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "white",
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
            <h3 style={{ paddingBottom: "0", marginBottom: "0" }}>
              {" "}
              Announcements
            </h3>
            <p style={{ opacity: "0.7", paddingTop: "0" }}>Lorem ipsum dolor</p>
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
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ width: 48, height: 48 }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  //backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ListItemText
              style={{ width: "30%" }}
              primary="mrs nour fawzy"
              secondary="Jan 9, 2014"
            />
            <ListItemText
              style={{ width: "70%" }}
              primary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias neque blanditiis, error vel laborum amet sint eos. Consequatur labore nulla vero maxime nesciunt voluptatum eius odit mollitia consequuntur quos"
            />
          </div>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ width: 48, height: 48 }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  //   backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ListItemText
              style={{ width: "30%" }}
              primary="mrs nour fawzy"
              secondary="Jan 9, 2014"
            />
            <ListItemText
              style={{ width: "70%" }}
              primary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias neque blanditiis, error vel laborum amet sint eos. Consequatur labore nulla vero maxime nesciunt voluptatum eius odit mollitia consequuntur quos"
            />
          </div>
        </ListItem>
      </List>
    </>
  );
}
