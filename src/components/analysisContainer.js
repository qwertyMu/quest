import * as React from "react";

import { Container, CssBaseline } from "@mui/material";

import AnalysisGrid from "./analysisGrids";
import ResponsiveAppBar from "../components_v2/navigationBar";
import RelationshipMap from "../components/RelationshipMap.tsx";

export default function AnalysisContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ paddingTop: "8px" }}>
        <ResponsiveAppBar />
        <AnalysisGrid />
        <RelationshipMap />
      </Container>
    </React.Fragment>
  );
}
