import PermanentDrawer from "../../components/sideBar.jsx";
import Exams from "../../components/examsTime.jsx";
import Announcements from "../../components/announcements.jsx";
import BasicCard from "../../components/quiz.jsx";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/navBar.jsx";

function DashBoard() {
  return (
    <>
      <Grid
        style={{ display: "flex", gap: "30px", backgroundColor: "#F5F5F5" }}
      >
        <Grid item>
          <PermanentDrawer />
        </Grid>
        <Grid item xs={8} sm={8} md={7} lg={9}>
          <Grid item>
            <Navbar />
            <Exams />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Announcements />
            </Grid>
            <Grid item xs={12} md={5}>
              <BasicCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default DashBoard;
