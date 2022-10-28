import { Box } from "@mui/material";
import React from "react";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

const index = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh" border="1px solid grey" borderRadius="4px">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default index;
