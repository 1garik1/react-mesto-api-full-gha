import React from "react";
function ImagePopup(props) {
  return (
    <div className={`popup popup_type_modal" ${props.card ? 'popup_active' : ''}`} onClick={props.onCloseClick}>
      <div className="popup__container popup__zoom-container">
        <img className="popup__picture" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} />
        <h2 className="popup__picture-title">{props.card ? props.card.name : ''}</h2>
        <button className="popup__close" type="button" title="Закрыть" onClick={props.onClose} />
      </div>
    </div>
  )
}

export default ImagePopup;