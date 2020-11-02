import React from "react";
import { Typography, Box } from "@material-ui/core";

const Title = (props) => {
  const { title, bgcolor, fontSize, ml } = props;
  return (
    <Box style={{ backgroundColor: `${bgcolor}` }} p={1} mb={1} ml={ml}>
      <Typography variant="h6" style={{ fontSize: `${fontSize}` }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
