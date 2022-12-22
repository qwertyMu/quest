import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu, Avatar, Grid } from "@mui/material";
import { Tooltip, MenuItem, Tabs, Tab } from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";

import useInterfaceStore from "../../datastore/interfaceStore";

const settings = ["Settings", "Feedback"];

export default function NavigationBar() {
  const setAnimDirection = useInterfaceStore((s) => s.setAnimDirection);
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("");
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    setTab(location.pathname);
  }, [location]);

  const handleTabChange = (_: any, newPath: any) => {
    let tabs = ["/", "/network", "/watchlist", "/upload"];

    if (tabs.indexOf(location.pathname) < tabs.indexOf(newPath))
      setAnimDirection("left");
    else setAnimDirection("right");

    navigate(newPath);
  };

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
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
              <Tab value="/watchlist" label="Watchlist" />
              <Tab value="/upload" label="Upload Data" />
            </Tabs>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ justifyContent: "flex-end", display: "flex", gap: "4px" }}
          >
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
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
