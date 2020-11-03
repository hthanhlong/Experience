import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const Title = (props) => {
  const { title, bgcolor, fontSize } = props;

  const classes = useStyles(bgcolor);

  return (
    <Box
      className={classes.titlebox}
      style={{ backgroundColor: `${bgcolor}` }}
      mb={1}
    >
      <Typography
        variant="h6"
        style={{ fontSize: `${fontSize}` }}
        noWrap
        align="left"
        fullWidth
      >
        {title}
      </Typography>
    </Box>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  bgcolor: PropTypes.string,
  fontSize: PropTypes.string,
  ml: PropTypes.number,
};

Title.defaultProps = {
  title: "hello world",
  fontSize: "0.9rem",
  width: "fit-content",
};

const useStyles = makeStyles((theme, bgcolor) => ({
  titlebox: {
    width: "fit-content",
    borderRadius: theme.spacing(0.7),
    padding: theme.spacing(0.3, 1),
  },
}));

export default Title;
