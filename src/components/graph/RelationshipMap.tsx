import React, { useState, useEffect, useCallback, useRef } from "react";

import { Box } from "@mui/material";
import ForceGraph2D, { GraphData } from "react-force-graph-2d";

import useRelationshipStore from "../../datastore/relationshipStore";

export default function RelationshipMap() {
  const graphRef: any = useRef();
  const [entities] = useRelationshipStore((s) => s.entities);
  const [data, setData] = useState<GraphData>();

  const genRandomTree = useCallback((N = 80, reverse = false) => {
    return {
      nodes: [...Array(N).keys()].map((i) => ({
        id: i,
        value: 3,
        text: "pew", // poc - can add an arbirtray object to the node
      })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          [reverse ? "target" : "source"]: id,
          [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
        })),
    };
  }, []);

  const getNode = (node: any, ctx: any, globalScale: number) => {
    node.val = 10;
    const label = globalScale > 2 ? node.name : "";
    const fontSize = node.isClusterNode
      ? 14 * (node.val / 1500)
      : 14 / (globalScale * 1.2);
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white"; //text colour
    ctx.fillText(label, node.x, node.y);
  };

  const getLinkColor = () => {
    return "#0000FF";
  };

  useEffect(() => {
    setData(genRandomTree());
  }, [genRandomTree]);

  useEffect(() => {
    if (graphRef.current) {
      graphRef.current.zoomToFit(1000, 20);
    }
  }, []);

  return (
    <Box sx={{ overflow: "hidden", height: "calc(100vh - 112px)" }}>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
        nodeCanvasObjectMode={() => "after"}
        nodeCanvasObject={getNode}
        nodeAutoColorBy={"id"}
        linkColor={getLinkColor}
        linkWidth={3}
        linkDirectionalParticles="value"
      />
    </Box>
  );
}
