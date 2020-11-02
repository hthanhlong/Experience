import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Title = (props) => {
  const { title, bgcolor, top, left } = props;
  const classes = useStyles();
  return (
    <Typography className={classes.text} style={{ top: top, left: left }}>
      <Box style={{ backgroundColor: `${bgcolor}` }} p={1}>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  text: {
    position: "absolute",
    color: "white",
  },
}));
export default Title;
