import { useState } from 'react'
import './InfoPanel.css'
const InfoPanel = (props) => {
  return (
    <div className={`infoPanel ${props.isInfoPanelOpened && 'open'}`}>
      <button
        className={'infoPanel__closeButton'}
        onClick={() => {
          props.setIsInfoPanelOpened(false)
        }}
      >
        <div className="close"></div>
      </button>
      <div className="infoPanel__mainInfo">
        <p>
          <b>Дисциплина:</b>
          <br /> Начертательная геометрия
        </p>
        <p>
          <b>Направление подготовки:</b> {props.selectedNode.id}
        </p>
        <p>
          Кафедра: <br />
          РК4
        </p>
        {props.children}
      </div>
    </div>
  )
}
export default InfoPanel
