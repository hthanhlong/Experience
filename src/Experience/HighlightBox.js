import React from "react";
import PropTypes from "prop-types";

import { Typography, Box } from "@material-ui/core";

export default function Highlight(props) {
  const {
    title,
    bgcolor,
    align,
    top,
    right,
    bottom,
    left,
    variant,
  } = props;
  return (
    <Box
      style={{
        borderRadius: `${top}% ${right}% ${bottom}% ${left}%`,
        backgroundColor: `${bgcolor}`,
      }}
      p={1}
    >
      <Typography
        variant={variant}
        align={align}
      >
        {title}
      </Typography>
    </Box>
  );
}

Highlight.propTypes = {
  title: PropTypes.string,
  bgcolor: PropTypes.string,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  align: PropTypes.string,
  variant: PropTypes.string,
};

Highlight.defaultProps = {
  title: "",
  align: "center",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
