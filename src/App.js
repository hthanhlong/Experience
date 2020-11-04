import React from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  CardMedia,
  Card,
  Avatar,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import background1 from "./assets/images/tour-1.jpg";
import Title from "./common/Title";
import ListImagesIcon from "./common/ListImagesIcon";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CountReview from "./common/CountReview";
import TitleReview from "./common/TitleReview";
import Hidden from "@material-ui/core/Hidden";

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

  const iconList = [
    {
      id: 0,
      urlImg:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline.png",
    },
    {
      id: 1,
      urlImg:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline.png",
    },
    {
      id: 2,
      urlImg:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline.png",
    },
    {
      id: 3,
      urlImg:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline.png",
    },
    {
      id: 4,
      urlImg:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline.png",
    },
    {
      id: 5,
      urlImg:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline.png",
    },
    {
      id: 6,
      urlImg:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline.png",
    },
    {
      id: 7,
      urlImg:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline.png",
    },
  ];

  const HighlightDT = {
    label: "-50%",
  };

  const classes = useStyles();

  return (
    <Box component="div">
      <CssBaseline />
      <header>This is la HEADER</header>
      <Grid
        container
        spacing={2}
        component="main"
        className={classes.supContainer}
      >
        <Hidden xsDown>
          <Grid item md={12} lg={3}>
            <Paper className={classes.paper}>Column one</Paper>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={12} lg={6}>
          <Paper className={classes.paper}>
            <Card style={{ position: "relative" }}>
              <CardMedia
                className={classes.image}
                component="img"
                src={background1}
                alt="tour-1"
              />
              <Box component="div" className={classes.boxContainer}>
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
                  <Avatar
                    style={{
                      fontSize: "0.9rem",
                      backgroundColor: "rgba(255,0,0,0.6)",
                      marginTop: "0.2rem",
                      marginLeft: "auto",
                    }}
                  >
                    {HighlightDT.label}
                  </Avatar>
                </Box>
              </Box>
              <Box component="div" className={classes.boxContainer2}>
                {/* box listIcon*/}
                <Box display="flex" flexWrap="wrap" width="40%">
                  {iconList &&
                    iconList.map((i) => (
                      <div>
                        <ListImagesIcon key={i.id} {...i} />
                      </div>
                    ))}
                </Box>
                {/* box review*/}
                <Box display="flex" height="100%" mt="auto">
                  <TitleReview
                    titleReviewUp="Xuất sắc"
                    titleReviewDown="69 đánh giá"
                  />
                  <CountReview countReview="8.9" />
                </Box>
              </Box>
            </Card>
            <Typography>Day la content</Typography>
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={false} md={12} lg={3}>
            <Paper className={classes.paper}>Column three</Paper>
          </Grid>
        </Hidden>
      </Grid>
      <footer>This is Footer</footer>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  supContainer: {
    padding: "0 3rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
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

  boxContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  boxContainer2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default App;
