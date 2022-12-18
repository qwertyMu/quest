import React, { useState, cloneElement } from "react";

import { Popper, Box, Typography, Tooltip } from "@mui/material";
import { Zoom, ClickAwayListener } from "@mui/material";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CloudIcon from "@mui/icons-material/Cloud";
import QuizIcon from "@mui/icons-material/Quiz";

type PropTypes = {
  value: string;
  setValue: (val: string) => void;
};

export default function AttributionDisplaySelect(props: PropTypes) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { value, setValue } = props;

  const getTooltipText = () => {
    if (value === "wordcloud") return "Attributions wordcloud view";
    if (value === "cardlist")
      return "Individual attributions displayed as cards";
    return "No data view set";
  };
  const getCurrentSelectionIcon = () => {
    if (value === "wordcloud") return <CloudIcon />;
    if (value === "cardlist") return <SmartphoneIcon />;
    else return <QuizIcon />;
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChange = (newVal: string) => {
    setValue(newVal);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip title={getTooltipText()} placement="right" enterDelay={1500}>
        {cloneElement(getCurrentSelectionIcon(), {
          sx: { color: "white", cursor: "pointer" },
          onClick: handleClick,
        })}
      </Tooltip>

      <Popper
        id="attribution-display-select"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <Zoom in={true}>
            <Box
              sx={{
                marginLeft: "-4px",
                marginTop: "-2em",
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                background: "darkgrey",
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleChange("wordcloud")}
              >
                <CloudIcon sx={{ cursor: "pointer" }} />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                  }}
                >
                  Word cloud
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleChange("cardlist")}
              >
                <SmartphoneIcon sx={{ cursor: "pointer" }} />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                  }}
                >
                  Group by source
                </Typography>
              </Box>
            </Box>
          </Zoom>
        </ClickAwayListener>
      </Popper>
    </React.Fragment>
  );
}
