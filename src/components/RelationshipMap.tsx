import React, { useState, useEffect, useCallback } from "react";

import ForceGraph2D, { GraphData } from "react-force-graph-2d";

import useRelationshipStore from "../datastore/relationshipStore.tsx";

export default function RelationshipMap() {
  const [entities] = useRelationshipStore((s) => s.entities);
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

  const getNode = (node, ctx, globalScale) => {
    node.val = 10;
    const label = node.name;
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

  return (
    <ForceGraph2D
      graphData={data}
      nodeCanvasObjectMode={() => "after"}
      nodeCanvasObject={getNode}
      linkColor={getLinkColor}
      linkWidth={3}
      linkDirectionalParticles="value"
    />
  );
}
