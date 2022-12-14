import React from "react";

import { styled } from "@mui/material/styles";

import { grey } from "@mui/material/colors";
import { Box, CssBaseline } from "@mui/material";

import TabbedIntelligenceList from "../tabbedIntelligencelist";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

export default function IntelDrawer() {
  return (
    <StyledBox
      sx={{
        px: 2,
        pb: 2,
        height: "100%",
        overflow: "auto",
      }}
    >
      <CssBaseline />
      <TabbedIntelligenceList />
    </StyledBox>
  );
}
