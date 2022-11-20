import React, { useState, useEffect, useCallback } from "react";

import ForceGraph2D, { GraphData } from "react-force-graph-2d";

export default function RelationshipMap() {
  const [data, setData] = useState<GraphData>();

  const genRandomTree = useCallback((N = 80, reverse = false) => {
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i, value: 3 })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          [reverse ? "target" : "source"]: id,
          [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
        })),
    };
  }, []);

  const getNodeColor = () => {
    return "#FFFFFF";
  };
  const getLinkColor = () => {
    return "#0000FF";
  };
  const getNodeSize = () => {
    return 3;
  };

  useEffect(() => {
    setData(genRandomTree());
  }, [genRandomTree]);

  return (
    <ForceGraph2D
      graphData={data}
      nodeVal={getNodeSize}
      nodeColor={getNodeColor}
      linkColor={getLinkColor}
      linkWidth={3}
      linkDirectionalParticles="value"
    />
  );
}
