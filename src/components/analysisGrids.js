import * as React from "react";
import { styled } from "@mui/material/styles";

import { Box, Paper, Grid, Button } from "@mui/material";

import Crud from "./userGeneratedContact/CrudContactDraft";
import Search from "../components_v2/search";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#2c3341",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  textAlign: "center",
  color: "white",
  borderRadius: "12px",
}));

function toggleContactDiv() {
  toggle(document.querySelectorAll(".target"));
}

function toggle(elements, specifiedDisplay) {
  var element, index;

  elements = elements.length ? elements : [elements];
  for (index = 0; index < elements.length; index++) {
    element = elements[index];

    if (isElementHidden(element)) {
      element.style.display = "";

      // If the element is still hidden after removing the inline display
      if (isElementHidden(element)) {
        element.style.display = specifiedDisplay || "block";
      }
    } else {
      element.style.display = "none";
    }
  }
  function isElementHidden(element) {
    return (
      window.getComputedStyle(element, null).getPropertyValue("display") ===
      "none"
    );
  }
}

export default function AnalysisGrid() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          justifyContent="space-between"
        >
          <Grid item ls={12} md={12} sm={12} xs={12}>
            <Item>
              {/* <SearchComponent /> */}
              <Search />
            </Item>
          </Grid>
          <Grid item ls={12} md={12} sm={12} xs={12} sx={{ display: "none" }}>
            {/* ^^^sx added for ease */}
            <br />
            <Button
              id="toggle-button"
              variant="outlined"
              sx={{
                float: "right",
                backgroundColor: "#f05c54",
                color: "white",
                border: "none",
              }}
              onClick={toggleContactDiv}
            >
              Add known contact info
            </Button>
            <Item className="target" id="crudContainer">
              <Crud />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
