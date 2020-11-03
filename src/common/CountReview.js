import React from "react";

import { Typography, Box } from "@material-ui/core";

const CountReview = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(40,167,69,0.7)",
        height: "100%",
        textAlign: "center",
        borderTopRightRadius: "14px",
        borderTopLeftRadius: "14px",
        borderBottomRightRadius: "14px",
      }}
    >
      <Typography 
      style={{
        lineHeight: "48px",
        minWidth: "48px",
      }}>
        8.9
      </Typography>
    </Box>
  );
};

export default CountReview;
