import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import ForceGraph3D from '3d-force-graph'

// interface Node {
//   id: string;
//   x: number;
//   y: number;
//   z: number;
// }

// interface Link {
//   source: string;
//   target: string;
// }

const nodes = [
  { id: 'A', x: 0, y: 0, z: 0 },
  { id: 'B', x: 1, y: 1, z: 1 },
  { id: 'C', x: 2, y: 2, z: 2 },
  { id: 'D', x: 3, y: 3, z: 3 },
  { id: 'E', x: 4, y: 4, z: 4 },
  { id: 'F', x: 5, y: 5, z: 5 },
]

const links = [
  { source: 'A', target: 'B' },
  { source: 'B', target: 'C' },
  { source: 'C', target: 'D' },
]

const Graph = () => {
  let graphRef = useRef(null)

  useEffect(() => {
    if (graphRef.current) {
      graphRef.current.nodeAutoColorBy('id').graphData({ nodes, links })
    }
  }, [])

  return (
    // <div style={{ height: '600px' }}>
    <ForceGraph3D ref={graphRef} />
    // </div>
  )
}

export default Graph
