import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Box, Slide } from "@mui/material";

import useInterfaceStore from "../../datastore/interfaceStore";
import RelationshipMap from "../graph/RelationshipMap";
import GenericSearch from "../search/GenericSearch";
import Watchlist from "../watchlist/SimpleWatchlist";
import FileUpload from "../upload/FileUpload";

export default function NavigationContainer() {
  const animDirection = useInterfaceStore((s) => s.animDirection);
  const location = useLocation();
  const [component, setComponent] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/upload") setComponent("upload");
    else if (location.pathname === "/network") setComponent("network");
    else if (location.pathname === "/watchlist") setComponent("watchlist");
    else setComponent("search");
  }, [location.pathname, setComponent]);

  const getOutDirection = () => {
    if (animDirection === "left") return "right";
    else return "left";
  };

  const getInDirection = () => {
    return animDirection;
  };

  const getAnimDirection = (x: string) => {
    if (x === component) return getInDirection();
    return getOutDirection();
  };

  return (
    <React.Fragment>
      <Slide
        direction={getAnimDirection("upload")}
        in={component === "upload"}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <FileUpload />
        </Box>
      </Slide>
      <Slide
        direction={getAnimDirection("search")}
        in={component === "search"}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <GenericSearch />
        </Box>
      </Slide>
      <Slide
        direction={getAnimDirection("network")}
        in={component === "network"}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <RelationshipMap />
        </Box>
      </Slide>
      <Slide
        direction={getAnimDirection("watchlist")}
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
