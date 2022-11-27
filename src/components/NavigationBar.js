import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react-v1";

import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu, Avatar, Grid } from "@mui/material";
import { Tooltip, MenuItem, Tabs, Tab } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

import useInterfaceStore from "../datastore/interfaceStore.tsx";

const settings = ["Settings", "Feedback", <AmplifySignOut />];

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useInterfaceStore((s) => [
    s.drawerOpen,
    s.setDrawerOpen,
  ]);

  useEffect(() => {
    setTab(location.pathname);
  }, [location]);

  const handleTabChange = (_, newPath) => {
    navigate(newPath);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        width: "calc(100vw - 16px)",
        margin: "4px 8px 0 8px",
        padding: "0 16px",
        borderRadius: "8px",
        backgroundImage: "linear-gradient(#ec483e, #f05c54)",
      }}
    >
      <Toolbar sx={{ height: "64px" }} disableGutters>
        <Grid
          container
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
        >
          <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Quest
            </Typography>
          </Grid>
          <Grid item xs={8} sx={{ justifyContent: "center", display: "flex" }}>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              sx={{ my: 2, color: "white", display: "flex" }}
            >
              <Tab value="/" label="Search" />
              <Tab value="/network" label="Relationship Map" />
            </Tabs>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ justifyContent: "flex-end", display: "flex", gap: "4px" }}
          >
            <Tooltip title="Open watchlist">
              <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                {(drawerOpen && <KeyboardArrowDownIcon />) || (
                  <KeyboardArrowUpIcon />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Tabs
              value={tab}
              onChange={handleTabChange}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Tab label="Search" value="/" />
            </Tabs>
          </Menu>
        </Box>

        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Glitch
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default withAuthenticator(NavigationBar, true);
