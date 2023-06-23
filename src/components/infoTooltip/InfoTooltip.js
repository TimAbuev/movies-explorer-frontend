import React from "react";
import './InfoTooltip.css'

function InfoTooltip(props) {
  return (
    <div className={`infoTooltip ${props.isOpen ? 'infoTooltip_opened' : ''}`}>
      <p className="infoTooltip__text">{props.text}</p>
    </div>
  );
}
export default InfoTooltip;