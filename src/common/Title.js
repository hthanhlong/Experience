import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Title = (props) => {
  const { title, bgcolor } = props;
  const classes = useStyles();
  return (
    <Typography className={classes.text}>
      <Box style={{ backgroundColor: `${bgcolor}` }} p={1}>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  text: {
    position: "absolute",
    top: 10,
    left: 20,
    color: "white",
  },
}));
export default Title;
