import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CountReview = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.styleBox}>
      <Typography className={classes.styleTypography}>
        {props.countReview}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  styleBox: {
    backgroundColor: "rgba(40,167,69,0.7)",
    height: "100%",
    textAlign: "center",
    borderRadius: '14px 14px 14px 0'
  },
  styleTypography: {
    lineHeight: "48px",
    minWidth: "48px",
  },
}));

export default CountReview;
