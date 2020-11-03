import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const TitleReview = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.styleBox}>
      <Typography className={classes.styleTypography}>
        {props.titleReviewUp}
      </Typography>
      <Typography >{props.titleReviewDown}</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  styleBox: {
    marginRight: "1rem",
  },
  styleTypography: {
    marginRight: "1rem",
    fontSize: "17.5px",
    fontWeight: "500",
    paddingLeft: "1rem",
  },
}));

export default TitleReview;
