import React from "react";
import './InfoTooltip.css'

function InfoTooltip(props) {
  return (
    <>
      <div className={`infoTooltip ${props.isOpen || props.isSuccessToolTipOpen ? 'infoTooltip_opened' : ''}`}>
        <p className={`${props.isSuccessToolTipOpen ? 'infoTooltip__text_green' : 'infoTooltip__text'} `}>{props.text}</p>
      </div>

    </>
  );
}
export default InfoTooltip;