function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_active` : " "}`} onClick={props.onCloseClick}>
      <div className="popup__container">
        <button className="popup__close" type="button" title="Закрыть" onClick={props.onClose} />
        <div className="popup__text">
          <form className="form" name={props.form} onSubmit={props.onSubmit}>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button className="popup__savebutton" type="submit" title="Сохранить">{props.buttonText}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopupWithForm;