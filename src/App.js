import React from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  CardMedia,
  Card,
  CardContent,
  Link,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background1 from "./assets/images/tour-1.jpg";
import Title from "./common/Title";
import ListImagesIcon from "./common/ListImagesIcon";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function App() {
  const bigTitle = {
    title: "@ #Tiêu đề bài trải nghiệm",
    bgcolor: "rgba(22,105,134,0.7)",
  };

  const supTitle = [
    {
      title: "#Chủ đề Tour",
      bgcolor: "rgba(40,167,69,0.7)",
    },
    {
      title: "@ tên Hotel/Shop",
      bgcolor: "rgba(0,0,0,0.7)",
    },
    {
      title: "Bán chạy nhất/ Siêu tiết kiệm",
      bgcolor: "rgba(220,53,69,0.7)",
    },
  ];

  const classes = useStyles();
  return (
    <Box component="div">
      <header>This is la HEADER</header>
      <Box component="main" style={{ padding: "1rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={false} md={12} lg={3}>
            <Paper className={classes.paper}>Column one</Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Paper className={classes.paper}>
              <Card style={{ position: "relative" }}>
                <CardMedia
                  className={classes.image}
                  component="img"
                  src={background1}
                  alt="tour-1"
                />
                <Box
                  component="div"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    color: "white",

                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Title
                      title={bigTitle.title}
                      bgcolor={bigTitle.bgcolor}
                      fontSize="1.2rem"
                    />
                    <Box style={{ marginLeft: "0.8rem", width: "auto" }}>
                      {supTitle &&
                        supTitle.map((item, index) => (
                          <Title
                            title={item.title}
                            bgcolor={item.bgcolor}
                            key={index}
                          />
                        ))}
                    </Box>
                  </Box>
                  <Box>
                    <Box className={classes.Tragop}>
                      <Typography variant="body2">Trả góp</Typography>
                      <div className={classes.arrowRight}>
                        <div>
                          <FiberManualRecordIcon className={classes.icon} />
                        </div>
                      </div>
                    </Box>

                    <Typography>50% ne</Typography>
                  </Box>
                </Box>
                {/* Box ListImgIcon */}
                <Box
                  display="flex"
                  flexWrap="wrap"
                  style={{
                    position: "absolute",
                    top: 250,
                    left: 10,
                    maxWidth: 260,
                  }}
                >
                  <ListImagesIcon urlImg="https://test-html.hahalolo.com/assets/img/icon/transportation.png" />
                  <ListImagesIcon urlImg="https://test-html.hahalolo.com/assets/img/icon/transportation.png" />
                  <ListImagesIcon urlImg="https://test-html.hahalolo.com/assets/img/icon/transportation.png" />
                  <ListImagesIcon urlImg="https://test-html.hahalolo.com/assets/img/icon/transportation.png" />
                  <ListImagesIcon urlImg="https://test-html.hahalolo.com/assets/img/icon/transportation.png" />
                  <ListImagesIcon urlImg="https://test-html.hahalolo.com/assets/img/icon/transportation.png" />
                  <ListImagesIcon urlImg="https://test-html.hahalolo.com/assets/img/icon/transportation.png" />
                  <ListImagesIcon urlImg="https://test-html.hahalolo.com/assets/img/icon/transportation.png" />
                </Box>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={false} md={12} lg={3}>
            <Paper className={classes.paper}>Column three</Paper>
          </Grid>
        </Grid>
      </Box>
      <footer>This is Footer</footer>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "500px",
    width: "100%",
    margin: "2rem 0",
    textAlign: "center",
  },
  content: {
    backgroundColor: "#CEE0E6",
  },
  image: {
    height: "360px",
  },

  Tragop: {
    position: "relative",
    borderRadius: "0.1rem",
    backgroundColor: "#E5782E",
    padding: theme.spacing(0.21, 0.3, 0.21, 1),
    marginRight: theme.spacing(2),
  },
  arrowRight: {
    position: "absolute",
    right: -15,
    top: -0.5,
    width: 0,
    height: 0,
    borderTop: "0.75rem solid transparent",
    borderBottom: "0.75rem solid transparent",
    borderLeft: "1rem solid #E5782E",
    borderRadius: "0.1rem",
  },
  icon: {
    position: "absolute",
    fontSize: "0.5rem",
    top: -4,
    right: 8,
  },
}));

export default App;
