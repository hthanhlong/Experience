import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

const ListImagesIcon = (props) => {
  const classes = useStyles();

  return (
    <Avatar alt="a" className={classes.icon}>
      <DriveEtaIcon fontSize="small" color="inherit" />
    </Avatar>
  );
};

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "30px",
    height: "30px",
    margin: theme.spacing(0.2),
    backgroundColor: "rgba(255,255,255,0.7)",
    "&:hover": {
      cursor: "pointer",
      transform: "scale3d(1.12, 1.12, 1)",
    },
  },
}));

export default ListImagesIcon;
