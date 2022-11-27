import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container, CssBaseline } from "@mui/material";

import AnalysisGrid from "./analysisGrids";
import NavigationBar from "./NavigationBar";
import RelationshipMap from "../components/RelationshipMap.tsx";

export default function AnalysisContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{ paddingTop: "8px" }}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/network" element={<RelationshipMap />} />
            <Route path="/" element={<AnalysisGrid />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}
