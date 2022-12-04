import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Box, Slide } from "@mui/material";

import RelationshipMap from "../graph/RelationshipMap";
import GenericSearch from "../search/GenericSearch";

export default function NavigationContainer() {
  const location = useLocation();
  const [component, setComponent] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/network") setComponent("network");
    else setComponent("search");
  }, [location.pathname, setComponent]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
