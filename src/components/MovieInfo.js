import React from "react"

const MovieInfo = ( {number, film} ) => {
  const {name, info} = film; 
  return(
  <div className="film">
    <div className="film__Content">
      <strong className="film__Name">{number}. {name}</strong>
      <div className="film__Info">{info}</div>
    </div>
    <div className="film__Btns">
      <button className="sendBtn" type="button">Удалить</button>
      <button className="sendBtn" type="button">Изменить</button>
    </div>
  </div>
  )
};

export default MovieInfo