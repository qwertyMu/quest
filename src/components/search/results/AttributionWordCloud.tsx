import React, { useEffect, useState, useCallback } from "react";
import { TagCloud } from "react-tagcloud";

import { Box, Tooltip, Typography } from "@mui/material";

type Tag = {
  value: string;
  count: number;
};

type Attribution = {
  name: string;
};

type PropsType = {
  data: any;
};

export default function AttributionWordCloud(props: PropsType) {
  const [tags, setTags] = useState<Tag[]>([]);

  const processTags = useCallback((data: any) => {
    // Read the raw data into a format that the word cloud can be drawn from
    let temp: Tag[] = [];
    let known: Record<string, any> = {};

    data.forEach((element: Attribution) => {
      // Count up how many instances of each name there are
      if (element.name in known) known[element.name] = known[element.name] + 1;
      else {
        known[element.name] = 1;
      }
    });

    for (let key in known) {
      // Turn the counts into an array of objects
      temp.push({ value: key, count: known[key] });
    }
    setTags(temp);
  }, []);

  useEffect(() => {
    // reprocess the data as it changes
    if (props.data) processTags(props.data);
  }, [props.data, processTags]);

  const customRenderer = (tag: any, size: number, color: string) => {
    return (
      <Tooltip title="Insert meaningful data" placement="right">
        <Typography sx={{ color: color, fontSize: size, cursor: "pointer" }}>
          {tag.value}
        </Typography>
      </Tooltip>
    );
  };

  return (
    <Box
      sx={{ padding: "2em", border: "2px solid darkgrey", borderRadius: "8px" }}
    >
      <TagCloud
        tags={tags}
        shuffle={false}
        minSize={12}
        maxSize={42}
        renderer={customRenderer}
      />
    </Box>
  );
}
