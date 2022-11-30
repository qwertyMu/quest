import React from "react";

import { Global } from "@emotion/react";
import { styled, useTheme } from "@mui/material/styles";

import { grey } from "@mui/material/colors";
import { Typography, SwipeableDrawer, Grid } from "@mui/material";
import { Box, CssBaseline } from "@mui/material";

import useInterfaceStore from "../datastore/interfaceStore.tsx";
import TabbedIntelligenceList from "./tabbedIntelligencelist";

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

export default function IntelDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = useInterfaceStore((s) => [
    s.drawerOpen,
    s.setDrawerOpen,
  ]);
  const { window } = props;
  const drawerBleeding = 42;

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            margin: "0 4px",
            right: 0,
            left: 0,
          }}
        >
          <Grid container sx={{ width: "100%", alignItems: "center" }}>
            <Grid item xs={4}>
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                Watchlist
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  margin: "auto",
                  width: "30px",
                  height: "6px",
                  backgroundColor:
                    theme.palette.mode === "light" ? grey[300] : grey[900],
                  borderRadius: "3px",
                }}
              />
            </Grid>
            <Grid item xs={4} />
          </Grid>

          <Box></Box>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <TabbedIntelligenceList />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
