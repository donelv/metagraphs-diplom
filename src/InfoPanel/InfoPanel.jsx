import { useState } from "react";
import "./InfoPanel.css";
const InfoPanel = (props) => {
  return (
    <div className={`infoPanel ${props.isInfoPanelOpened && "open"}`}>
      <button
        className={"infoPanel__closeButton"}
        onClick={() => {
          props.setIsInfoPanelOpened(false);
        }}
      >
        <div className="close"></div>
      </button>
      <div className="infoPanel__mainInfo">
        {!!props.selectedNode.name && (
          <p>
            <b>Наименование:</b>
            <br /> {props.selectedNode.name}
          </p>
        )}
        {!!props.selectedNode.department &&
          props.selectedNode.type === "disc" && (
            <p>
              <b>Кафедра:</b>
              <br /> {props.selectedNode.department}
            </p>
          )}
        {!!props.selectedNode.hours && (
          <p>
            <b>Кол-во часов:</b> {props.selectedNode.hours}
          </p>
        )}
        {!!props.selectedNode.ze && (
          <p>
            <b>ЗЕ:</b> {props.selectedNode.ze}
          </p>
        )}
        {!!props.selectedNode.form && (
          <p>
            <b>Форма сдачи:</b> {props.selectedNode.form}
          </p>
        )}
        {!!props.selectedNode.zcht_amount && (
          <p>
            <b>Кол-во зачетов:</b> {props.selectedNode.zcht_amount}
          </p>
        )}
        {!!props.selectedNode.exs_amount && (
          <p>
            <b>Кол-во экзаменов:</b> {props.selectedNode.exs_amount}
          </p>
        )}
        {props.children}
      </div>
    </div>
  );
};
export default InfoPanel;
