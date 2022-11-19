import React, {useState} from "react"

import ForceGraph2D, {GraphData} from "react-force-graph-2d"

export default function RelationshipMap(props) {
	const [data, setData] = useState<GraphData>()

  return <ForceGraph2D graphData={data}
		nodeAutoColorBy="group"
    linkDirectionalParticles="value"
	/>
}
