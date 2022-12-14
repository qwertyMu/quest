import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Box, Slide } from "@mui/material";

import RelationshipMap from "../graph/RelationshipMap";
import GenericSearch from "../search/GenericSearch";
import Watchlist from "../watchlist/Watchlist";

export default function NavigationContainer() {
  const location = useLocation();
  const [component, setComponent] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/upload") setComponent("upload");
    else if (location.pathname === "/network") setComponent("network");
    else if (location.pathname === "/watchlist") setComponent("watchlist");
    else setComponent("search");
  }, [location.pathname, setComponent]);

  return (
    <React.Fragment>
      <Slide
        direction="right"
        in={component === "upload"}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <GenericSearch />
        </Box>
      </Slide>
      <Slide
        direction="right"
        in={component === "search"}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <GenericSearch />
        </Box>
      </Slide>
      <Slide
        direction="left"
        in={component === "network"}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <RelationshipMap />
        </Box>
      </Slide>

      <Slide
        direction="left"
        in={component === "watchlist"}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <Watchlist />
        </Box>
      </Slide>
    </React.Fragment>
  );
}
