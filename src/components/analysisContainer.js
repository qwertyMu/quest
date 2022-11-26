import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container, CssBaseline } from "@mui/material";

import AnalysisGrid from "./analysisGrids";
import ResponsiveAppBar from "../components_v2/navigationBar";
import RelationshipMap from "../components/RelationshipMap.tsx";

export default function AnalysisContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ paddingTop: "8px" }}>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/network" element={<RelationshipMap />} />
            <Route path="/" element={<AnalysisGrid />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}
