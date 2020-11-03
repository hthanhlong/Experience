import React from "react";
import PropTypes from "prop-types";

import { Typography, Box } from "@material-ui/core";

const Title = (props) => {
  const { title, bgcolor, fontSize } = props;
  return (
    <Box
      style={{
        backgroundColor: `${bgcolor}`,
        width: "fit-content",
        borderRadius: "0.3rem",
        padding: "0.1rem 0.5rem",
      }}
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
  fontSize: "0.8rem",
  width: "fit-content",
};

export default Title;
