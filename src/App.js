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

function App() {
  const bigTitle = {
    title: "@ #Tiêu đề bài trải nghiệm",
    bgcolor: "rgba(255,0,0,0.4)",
  };

  const classes = useStyles();
  return (
    <Box component="div">
      <header>This is la HEADER</header>
      <Box component="main" px={6}>
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
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    color: "white",
                    height: "400px",
                  }}
                >
                  <Title title={bigTitle.title} bgcolor={bigTitle.bgcolor} />
                  <Title
                    title={bigTitle.title}
                    bgcolor={bigTitle.bgcolor}
                    ml={2}
                    fontSize="12px"
                  />
                  <Title
                    title={bigTitle.title}
                    bgcolor={bigTitle.bgcolor}
                    ml={2}
                  />
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
