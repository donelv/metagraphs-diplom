import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ForceGraph3D } from 'react-force-graph'
import { NodeObject } from 'force-graph'
import { ForceGraph3DGenericInstance } from '3d-force-graph'
import Graph from './ParallelLineGraph'
import InfoPanel from './InfoPanel/InfoPanel'
import * as THREE from 'three'
import { forceSimulation, forceX, forceY, forceZ } from 'd3-force-3d'
let dataExample = {
  nodes: [
    { id: 'n1', group: 1 },
    { id: 'n1::n2', group: 1 },
    { id: 'n1::n3', group: 1 },
    { id: 'n4', group: 2 },
    { id: 'n4::n5', group: 2 },
    { id: 'n4::n6', group: 2 },
    { id: 'n4::n7', group: 2 },
    { id: 'n4::n8', group: 2 },
  ],
  links: [
    { source: 'n1::n2', target: 'n1' },
    { source: 'n1', target: 'n1::n3' },
    { source: 'n4::n5', target: 'n4::n6' },
    { source: 'n4::n6', target: 'n4' },
    { source: 'n4', target: 'n4::n7' },
    { source: 'n4::n7', target: 'n4::n8' },
  ],
}
function App() {
  let [selectedNode, setSelectedNode] = useState({
    id: 1,
    group: 1,
  })
  let [isInfoPanelOpened, setIsInfoPanelOpened] = useState(false)
  let [nodes, setNodes] = useState([
    { id: 'n1', group: 1 },
    { id: 'n1::n2', group: 1 },
    { id: 'n1::n3', group: 1 },
    { id: 'n4', group: 2 },
    { id: 'n4::n5', group: 2 },
    { id: 'n4::n6', group: 2 },
    { id: 'n4::n7', group: 2 },
    { id: 'n4::n8', group: 2 },
  ])
  const links = [
    { source: 'n1::n2', target: 'n1' },
    { source: 'n1', target: 'n1::n3' },
    { source: 'n4::n5', target: 'n4::n6' },
    { source: 'n4::n6', target: 'n4' },
    { source: 'n4', target: 'n4::n7' },
    { source: 'n4::n7', target: 'n4::n8' },
  ]
  const fgRef = useRef()
  function customLinkStrength(link) {
    // console.log(link)

    if (link.source.group !== link.target.group) {
      return 100
    } else {
      return -100
    }
  }
  function customLinkWidth(link) {
    if (link.source.group === link.target.group) return 3
    return 1
  }
  function forceNestedToParents() {
    // let nodes = []

    function force(alpha) {
      nodes?.forEach((vertex) => {
        // console.log(vertex)
        // vertex.x += 10

        const [, parentId] = String(vertex.id)?.match(/(.*)::.*/) || []
        const parent = nodes.find((v) => v.id === parentId)
        // console.log(parent)
        if (vertex.id === 'n4::n6') {
          // vertex.fx += 0.1
          // vertex.y += 0.1
          // console.log(vertex)
        }
        if (vertex.id === 'n4::n7') {
          vertex.fx = parent.x + 10
          // const k = alpha * 0.7
          // vertex.x = 10
          // vertex.fx += vertex.x
          // vertex.y += (parent.y - vertex.y) * k
        }
        // if (!!parent) console.log(parent.x)
        if (vertex.id === 'n4::n6') {
          // const k = alpha * 2.7
          // vertex.x = 10
          // console.log(parent.x)
          vertex.fx = parent.x - 10
          // vertex.y += (parent.y - vertex.y) * k
        }
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
    const fg = fgRef.current
    // fg.d3Force('center', forceNestedToParents())
    // fg.d3Force('link').distance((link) => {
    //   return customLinkStrength(link)
    // })
  }, [])
  return (
    <>
      <InfoPanel
        selectedNode={selectedNode}
        setIsInfoPanelOpened={setIsInfoPanelOpened}
        isInfoPanelOpened={isInfoPanelOpened}
      >
        <button onClick={() => {}}>Click</button>
      </InfoPanel>
      <ForceGraph3D
        ref={fgRef}
        graphData={{ nodes, links }}
        nodeAutoColorBy="group"
        linkWidth={customLinkWidth}
        numDimensions={2}
        dagMode="lr"
        dagLevelDistance={100}
        backgroundColor="#000000"
        // linkLength={150}
        // damping={0.5}
        onNodeClick={(node) => {
          console.log(node)
          // node.fx = node.fx + 20
          setSelectedNode(node)
          setIsInfoPanelOpened(true)
        }}
        onLinkClick={(link) => {
          console.log(link)
        }}
        nodeThreeObject={(vertex) => {
          const geometry = new THREE.SphereGeometry(50, 32, 16)
          const material = new THREE.MeshBasicMaterial({
            color: 'white',
            opacity: 0.1,
            transparent: true,
            wireframe: true,
          })
          const sphere = new THREE.Mesh(geometry, material)
          // console.log(vertex)
          if (vertex.id === 'n4') return sphere
          return false
        }}
        // d3Force="center"
      />
    </>
  )
}

export default App
