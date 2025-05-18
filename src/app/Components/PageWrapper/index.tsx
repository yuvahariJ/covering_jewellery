import { Box } from "@mui/material";
import React from "react";
import { toRem } from "../Utils";

const PageWrapper = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <Box
      sx={{
        width: "100%",
        margin: toRem(4),
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
