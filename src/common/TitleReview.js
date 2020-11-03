import React from "react";

import { Typography, Box } from "@material-ui/core";

const TitleReview = () => {
  return (
    <Box 
    style={{
      marginRight: "1rem",
    }}
    >
      <Typography 
      style={{
        marginRight: "1rem",
        fontSize: "17.5px",
        fontWeight: "500",
        paddingLeft: "1rem",
      }}>
        Xuất sắc
      </Typography>
      <Typography >69 đánh giá</Typography>
    </Box>
  );
};

export default TitleReview;
