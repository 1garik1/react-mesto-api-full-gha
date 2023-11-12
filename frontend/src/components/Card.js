import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardDeleteButtonClassName = (
    `elements__delete-btn ${isOwn ? 'element__delete-btn_visible' : ''}`
  );

  const cardLikeButtonClassName = (
    `elements__button ${isLiked ? 'elements__button_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="elements__element">
      <button type="button" className={cardDeleteButtonClassName} title='удалить' onClick={handleDeleteClick} />
      <img src={props.link} alt={props.name} title="Посмотреть в полном размере" className="elements__image" onClick={handleClick} />
      <div className="elements__figcaption">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__likes-info">
          <button className={cardLikeButtonClassName} type="button" title='нравится' onClick={handleLikeClick} />
          <span className="elements__counter-likes">{props.likes}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;