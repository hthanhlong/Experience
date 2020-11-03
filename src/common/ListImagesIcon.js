import React from "react";
import {
  Box,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const ListImagesIcon = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.styleBox}>
      <Avatar alt="" src={props.urlImg} className={classes.large} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(4.2),
    height: theme.spacing(4.2),
  },
  styleBox: {
    '&:hover': {
      background: "rgba(255,255,255,0.9)",
      cursor: 'pointer',
      transform: "scale3d(1.12, 1.12, 1)",
    },
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: "100%",
    marginRight: "3px",
  },
}));

export default ListImagesIcon;
