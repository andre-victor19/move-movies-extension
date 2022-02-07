import React from "react";
import { Box, Typography, CircularProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography color="primary" variant="h6">
        Buscando filmes...
      </Typography>
      <CircularProgress color="primary" />
    </Box>
  );
}
