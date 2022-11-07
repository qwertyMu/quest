import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AnalysisGrid from './analysisGrids';
import ResponsiveAppBar from '../components_v2/navigationBar';

export default function AnalysisContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" style={{paddingTop: "8px"}}>
        <ResponsiveAppBar />
        <AnalysisGrid />
      </Container>
    </React.Fragment>
  );
}
