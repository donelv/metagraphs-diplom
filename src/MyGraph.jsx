import React, { useRef, useEffect, useState } from 'react'
import { ForceGraph3D } from 'react-force-graph'
import { forceSimulation, forceLink } from 'd3-force-3d'

const MyGraph = () => {
  const graphRef = useRef(null)

  let [nodes, setNodes] = useState([
    { id: 'node1', x: 0, y: 0, z: 0 },
    { id: 'node2', x: 10, y: 0, z: 0 },
    { id: 'node3', x: 0, y: 10, z: 0 },
    { id: 'node4', x: 0, y: 10, z: 0 },
  ])
  const links = [
    { source: 'node1', target: 'node2' },
    { source: 'node2', target: 'node3' },
    { source: 'node3', target: 'node1' },
    { source: 'node3', target: 'node4' },
    { source: 'node2', target: 'node4' },
  ]
  function forceNestedToParents() {
    // let nodes = []

    function force(alpha) {
      nodes?.forEach((vertex) => {
        vertex.x += 0.1
        vertex.y += 0.1
        // const [, parentId] = String(vertex.id)?.match(/(.*)::.*/) || []
        // const parent = nodes.find((v) => v.id === parentId)

        // if (parent) {
        //   const k = alpha * 0.7

        //   vertex.x += (parent.x - vertex.x) * k
        //   vertex.y += (parent.y - vertex.y) * k
        //   vertex.z += (parent.z - vertex.z) * k
        // }
      })
    }

    function initialize() {}

    force.initialize = function (_nodes) {
      nodes = _nodes
      initialize()
    }

    return force
  }
  useEffect(() => {
    // const simulation = forceSimulation(nodes)
    //   .force(
    //     'link',
    //     forceLink(links)
    //       .id((d) => d.id)
    //       .distance((info) => {
    //         console.log(info)
    //         // if (info.source.id === 'node1') return 1000
    //         return 100
    //       })
    //   )
    //   .alphaDecay(0.05)
    //   .alpha(0.5)
    //   .on('tick', () => {
    //     // graphRef.current.d3Force('link').distance(-110)
    //     // graphRef.current.d3Force('center').x(0).y(0).z(0)
    //   })
    // // simulation.tick(100)
    graphRef.current.d3Force('center', forceNestedToParents())
    // return () => {
    //   // simulation.stop()
    // }
  }, [])

  const handleResetPositions = () => {
    const resetNodes = nodes.map((node) => ({
      ...node,
      x: node.fx || node.x,
      y: node.fy || node.y,
      z: node.fz || node.z,
    }))
    setNodes(resetNodes)
  }

  return (
    <>
      <button onClick={handleResetPositions}>Reset Positions</button>
      <ForceGraph3D ref={graphRef} graphData={{ nodes, links }} d3Force={[]} />
    </>
  )
}

export default MyGraph
