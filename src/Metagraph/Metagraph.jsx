import { useEffect, useRef, useState } from "react";
import "../App.css";
import { ForceGraph3D } from "react-force-graph";
import InfoPanel from "../InfoPanel/InfoPanel";
import * as THREE from "three";
import SpriteText from "three-spritetext";
import { useWindowSize } from "@react-hook/window-size";
import { graphData } from "../metagraph";

const SPHERE_RADIUS_COEFF = 160;

const getColorForDepartment = (dep) => {
  switch (dep) {
    case "ФН-4":
      return "#a6cee3";
    case "ФН-12":
      return "#eb5b5b";

    case "Л-1":
      return "#b2df8a";
    case "Л-2":
      return "#33a02c";

    case "ФВ":
      return "#fb9a99";

    case "РК-1":
      return "#e31a1c";

    case "СГН-1":
      return "#fdbf6f";
    case "СГН-2":
      return "#ff7f00";
    case "СГН-3":
      return "#33a02c";
    case "СГН-4":
      return "#cab2d6";

    case "ЮР":
      return "#6a3d9a";

    case "ИУ-1":
      return "#eb5b5b";
    case "ИУ-4":
      return "#ffff99";
    case "ИУ-5":
      return "#30a09e";

    case "ИБМ-3":
      return "#b2d7d7";
    case "ИБМ-6":
      return "#cab2d6";

    case "Э-9":
      return "#cccc66";
    default:
      return "#C1B4AE";
  }
};

function Metagraph() {
  const [width, height] = useWindowSize(); //необходимо для корректного отображения при ресайзе окна
  let [selectedNode, setSelectedNode] = useState({ id: 1, group: 1 }); //выбранная вершина
  let [isInfoPanelOpened, setIsInfoPanelOpened] = useState(false); //открыта ли информационная панель
  let [data, setData] = useState({ nodes: [], links: [] }); //данные о графе

  const fgRef = useRef(); //ref на граф
  function customLinkDistance(link) {
    if (link.source.course !== link.target.course) {
      return 4000;
    } else {
      return -15000;
    }
  }

  function forceNestedToParents() {
    let nodes = [];
    function force(alpha) {
      data.nodes?.forEach((parent) => {
        if (!!parent?.nestedNodes) {
          let nestedNodesList = getNestedNodes(parent.nestedNodes);
          let radius = parent.__threeObj.children[0].geometry.parameters.radius;
          nestedNodesList.forEach((child) => {
            const coeff =
              nestedNodesList.findIndex((node) => node.id === child.id) + 1;
            child.fx =
              parent.x -
              radius +
              ((radius * 2) / (nestedNodesList.length + 1)) * coeff;
            if (child.fx === parent.x) {
              // устранение коллизии, вызывает неплавные движения графа
              child.fx = parent.x - 80;
            }
          });
        }
      });
    }
    force.radius = 100;
    function initialize() {}

    force.initialize = function (_nodes) {
      nodes = _nodes;
      initialize();
    };

    return force;
  }
  function getNestedNodes(nodes) {
    let nestedNodesList = [];
    data.nodes?.forEach((node) => {
      if (nodes.includes(node.id)) nestedNodesList.push(node);
    });
    return nestedNodesList;
  }
  function forceCoursesLine() {
    let nodes = [];
    let width = 10000;
    function force(alpha) {
      data.nodes?.forEach((node) => {
        if (node.type === "course") {
          if (node.id === "c1_st") {
            node.fx = -width;
            node.fy = 6000;
          } else if (node.id === "c1_end") {
            node.fx = width;
            node.fy = 6000;
          } else if (node.id === "c2_st") {
            node.fx = -width;
            node.fy = 2000;
          } else if (node.id === "c2_end") {
            node.fx = width;
            node.fy = 2000;
          } else if (node.id === "c3_st") {
            node.fx = -width;
            node.fy = -2000;
          } else if (node.id === "c3_end") {
            node.fx = width;
            node.fy = -2000;
          } else if (node.id === "c4_st") {
            node.fx = -width;
            node.fy = -6000;
          } else if (node.id === "c4_end") {
            node.fx = width;
            node.fy = -6000;
          }
        }
      });
    }
    force.radius = 100;
    function initialize() {}

    force.initialize = function (_nodes) {
      nodes = _nodes;
      initialize();
    };

    return force;
  }
  //обработчик нажатия по canvas
  function handleCanvasClick(event) {
    const canvas = fgRef.current.renderer().domElement;
    const { clientX, clientY } = event;

    //перевод client координат в canvas координаты
    const canvasRect = canvas.getBoundingClientRect();
    const x = clientX - canvasRect.left;
    const y = clientY - canvasRect.top;

    // Нахождение ближайшей вершины к клику
    let findedNode = null;
    let nodeRadius = 0;
    let minDistanceToNode = 10000;
    data.nodes.forEach((node) => {
      const nodePos = fgRef.current.graph2ScreenCoords(node.x, node.y);
      // Нахождение расстояния от клика до вершины
      const distance = Math.sqrt((x - nodePos.x) ** 2 + (y - nodePos.y) ** 2);
      if (minDistanceToNode > distance) {
        minDistanceToNode = distance;
        // console.log(node);
        nodeRadius = !!node?.__threeObj?.children[0]?.geometry?.parameters
          ?.radius
          ? node.__threeObj.children[0].geometry.parameters.radius
          : 0;
        findedNode = node;
      }
    });

    //если расстояние до вершины меньше определенного значения - устанавливаем данную вершину как выбранную
    if (minDistanceToNode < nodeRadius) {
      setSelectedNode(findedNode);
      setIsInfoPanelOpened(true);
    }
  }

  useEffect(() => {
    Promise.all([
      document.fonts.load("12px MontserratAlternates-Light"), //загрузка шрифтов
      document.fonts.load("12px MontserratAlternates-Medium"),
    ]).then(() => {
      setData(graphData); //установка данных для графа
    });

    //руссификация навигационной подсказки внизу
    let navInfo = document.querySelector(".scene-nav-info");
    if (navInfo)
      navInfo.innerHTML =
        "ЛКМ: вращение, Колесо мыши: приближение, ПКМ: смещение";
  }, []);
  useEffect(() => {
    const fg = fgRef.current;
    fg.d3Force("center", forceNestedToParents());
    fg.d3Force("link").distance((link) => {
      return customLinkDistance(link);
    });
    fg.d3Force("lines", forceCoursesLine());
    fg.d3Force("link").distance((link) => {
      return customLinkDistance(link);
    });
    fg.cameraPosition({ x: 0, y: 0, z: 20000 }, { x: 0, y: 0, z: 0 }, 2000);
  }, [data]);

  return (
    <>
      <InfoPanel
        selectedNode={selectedNode}
        setIsInfoPanelOpened={setIsInfoPanelOpened}
        isInfoPanelOpened={isInfoPanelOpened}
      ></InfoPanel>
      <button
        className={"btn"}
        style={{
          position: "absolute",
          left: "10px",
          bottom: "20px",
          zIndex: 100,
        }}
        onClick={() => {
          let controls = fgRef.current.controls();
          fgRef.current.cameraPosition({ x: 0, y: 0, z: 20000 }, null, 2000);
          controls.reset();
        }}
      >
        Сброс положения камеры
      </button>
      <ForceGraph3D
        ref={fgRef}
        width={width}
        height={height}
        backgroundColor="#000000"
        enableNodeDrag={false}
        linkOpacity={0.7}
        linkWidth={20}
        graphData={data}
        nodeLabel={null}
        numDimensions={2}
        dagMode="lr"
        dagLevelDistance={SPHERE_RADIUS_COEFF * 2}
        onNodeClick={(node, event) => {
          setSelectedNode(node);
          setIsInfoPanelOpened(true);
          handleCanvasClick(event);
        }}
        nodeThreeObject={(vertex) => {
          let nestedNodesList = [];
          if (!!vertex?.nestedNodes) {
            nestedNodesList = getNestedNodes(vertex.nestedNodes);
          }

          let geometry, material, sprite;
          let countLines = 0;
          let convertedText = vertex.name
            ? `${vertex.name
                .split(" ")
                .map((word, index) => {
                  if (word.length <= 3) {
                    return `${word} `;
                  }
                  countLines++;
                  return `${word}\n`;
                })
                .join("")
                .trim()}`
            : undefined;
          sprite = new SpriteText(convertedText);

          if (!!nestedNodesList.length) {
            geometry = new THREE.SphereGeometry(
              nestedNodesList.length * SPHERE_RADIUS_COEFF,
              nestedNodesList.length * 3,
              nestedNodesList.length * 3
            );
            material = new THREE.MeshBasicMaterial({
              color: "white",
              opacity: 0.07,
              transparent: true,
              wireframe: true,
            });
            sprite.textHeight = 70;
            sprite.position.set(
              0,
              -nestedNodesList.length * SPHERE_RADIUS_COEFF - 60,
              0
            );
          } else if (vertex.type === "course") {
            sprite.textHeight = 90;
          } else {
            let radius = 30;
            if (vertex.hours) {
              radius = vertex.hours;
            }

            geometry = new THREE.SphereGeometry(radius, 8, 8);
            material = new THREE.MeshBasicMaterial({
              color: getColorForDepartment(vertex.department),
              opacity: 0.75,
            });
            sprite.position.set(0, -radius - countLines * 18, 0);
            sprite.textHeight = 30;
          }

          const sphere = new THREE.Mesh(geometry, material);
          const group = new THREE.Group();
          sprite.color = "black";
          sprite.fontFace = "MontserratAlternates-Medium";
          sprite.backgroundColor = "white";
          group.add(sphere);
          group.add(sprite);
          return group;
        }}
      />
    </>
  );
}

export default Metagraph;
