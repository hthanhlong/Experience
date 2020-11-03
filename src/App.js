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
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background1 from "./assets/images/tour-1.jpg";
import Title from "./common/Title";
import ListImagesIcon from "./common/ListImagesIcon";
import Highlight from "./Experience/HighlightBox";
import TitleReview from "./common/TitleReview";
import CountReview from "./common/CountReview";

function App() {
  const bigTitle = {
    title: "@ #Tiêu đề bài trải nghiệm",
    bgcolor: "rgba(22,105,134,0.7)",
  };

  const titleTour = {
    title: "#Chủ đề Tour",
    bgcolor: "rgba(40,167,69,0.7)",
  };

  const titleHotel = {
    title: "@ tên Hotel/Shop",
    bgcolor: "rgba(0,0,0,0.7)",
  };

  const titleBestSeller = {
    title: "Bán chạy nhất/ Siêu tiết kiệm",
    bgcolor: "rgba(220,53,69,0.7)",
  };

  const HighlightDT = {
    label: "-50%",
  };

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
                  <Box style={{ backgroundColor: "red" }}>
                    <Title
                      title={bigTitle.title}
                      bgcolor={bigTitle.bgcolor}
                      fontSize="1.2rem"
                    />
                    <Box style={{ marginLeft: "0.8rem", width: "auto" }}>
                      <Title
                        title={titleTour.title}
                        bgcolor={titleTour.bgcolor}
                      />
                      <Title
                        title={titleHotel.title}
                        bgcolor={titleHotel.bgcolor}
                      />
                      <Title
                        title={titleBestSeller.title}
                        bgcolor={titleBestSeller.bgcolor}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography>Tra gop ne</Typography>
                    <Avatar
                      style={{
                        fontSize: "0.9rem",
                        backgroundColor: "rgba(255,0,0,0.6)",
                      }}
                    >
                      {HighlightDT.label}
                    </Avatar>
                  </Box>
                </Box>
                {/* Box ListImgIcon */}
                <Box
                  display="flex"
                  flexWrap="wrap"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    maxWidth: "40%",
                  }}
                >
                  {/* Value */}
                  {[
                    {
                      id: 0,
                      urlImg:
                        "https://test-html.hahalolo.com/assets/img/icon/transportation.png",
                    },
                    {
                      id: 1,
                      urlImg:
                        "https://test-html.hahalolo.com/assets/img/icon/transportation.png",
                    },
                    {
                      id: 2,
                      urlImg:
                        "https://test-html.hahalolo.com/assets/img/icon/transportation.png",
                    },
                    {
                      id: 3,
                      urlImg:
                        "https://test-html.hahalolo.com/assets/img/icon/transportation.png",
                    },
                    {
                      id: 4,
                      urlImg:
                        "https://test-html.hahalolo.com/assets/img/icon/transportation.png",
                    },
                    {
                      id: 5,
                      urlImg:
                        "https://test-html.hahalolo.com/assets/img/icon/transportation.png",
                    },
                    {
                      id: 6,
                      urlImg:
                        "https://test-html.hahalolo.com/assets/img/icon/transportation.png",
                    },
                    {
                      id: 7,
                      urlImg:
                        "https://test-html.hahalolo.com/assets/img/icon/transportation.png",
                    },
                  ].map((i) => (
                    <div>
                      <ListImagesIcon key={i.id} {...i} />
                    </div>
                  ))}
                </Box>

                {/* Box Review */}
                <Box
                  display="flex"
                  flexWrap="wrap"
                  style={{
                    position: "absolute",
                    top: "53%",
                    right: 10,
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  <Box>
                    <TitleReview
                      titleReviewUp="Xuất sắc"
                      titleReviewDown="69 đánh giá"
                    />
                  </Box>
                  <Box>
                    <CountReview countReview="8.9" />
                  </Box>
                </Box>
                <CardContent className={classes.content}>
                  <Link style={{ textAlign: "left" }}>
                    <Typography style={{ fontWeight: 700 }}>
                      [Khuyến mãi 30%] Chỉ 179.000 đ cho Oriflame Nước Hoa Chính
                      Hãng Thụy Sỹ
                    </Typography>
                  </Link>
                  <div style={{ margin: "1rem 0" }}>
                    <span style={{ display: "flex", textAlign: "left" }}>
                      <Typography>Sẽ bắt đầu sau 6 giờ nữa.</Typography>
                      <Typography style={{ margin: "0 0.2rem" }}>
                        {" "}
                        -{" "}
                      </Typography>
                      <Typography>Vẫn còn 2 phòng</Typography>
                    </span>
                    <span style={{ display: "flex" }}>
                      <Typography>Bắt đầu: 22/05/2020</Typography>
                      <Typography style={{ margin: "0 0.2rem" }}>
                        {" "}
                        -{" "}
                      </Typography>
                      <Typography>Kết thúc: 28/05/2020 </Typography>
                    </span>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <Button variant="contained" color="primary">
                      Tìm hiểu thêm
                    </Button>
                  </div>
                </CardContent>
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
}));

export default App;
