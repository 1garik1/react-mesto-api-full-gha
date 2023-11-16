import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from "./Card";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
console.log(currentUser)
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-change" type="button" title="Обновить аватар" onClick={props.onEditAvatar}>
          <img className="profile__photo" src={currentUser.avatar} alt={currentUser.name} />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__button" type="button" title="Редактировать профиль" onClick={props.onEditProfile} />
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" title="Добавить новую фотографию" onClick={props.onAddPlace} />
      </section>

      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;