import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TodayIcon from "@mui/icons-material/Today";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { Typography } from "@mui/material";
export default function IconList() {
  const icons = [
    <HomeIcon />,
    <TodayIcon />,
    <MenuBookIcon />,
    <SchoolIcon />,
    <TrendingUpIcon />,
    <AnnouncementIcon />,
  ];
  return (
    <Box
      style={{
        background: "#78aa1",
        height: "100vh",
        width: "200px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{
          color: "white",
          paddingTop: "5vh",
          paddingBottom: "2vh",
          height: "6vh",
          alignSelf: "center",
        }}
      >
        coligo
      </Typography>
      <List
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          height: "60vh",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {[
          "Dashboard",
          "Schedule",
          "Courses",
          "Greadebook",
          "Performance",
          "Announcement",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              width: "95%",
              "&:hover": {
                backgroundColor: "white",
                "& .MuiListItemIcon-root": {
                  color: "#78aaa1",
                },
                "& .MuiListItemText-root": {
                  color: "#78aaa1",
                },
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "#fff" }}>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
