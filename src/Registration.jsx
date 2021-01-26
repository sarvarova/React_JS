import React from 'react'

export const Registration = ({ onMapRedirect }) => {
    return (
        <form>
          <h1>Регистрация</h1>
          <label htmlFor="name">Имя:</label>
          <input id="name" type="name" name="name" size="28" />
          <label htmlFor="lastname">Фамилия:</label>
          <input id="lastname" type="lastname" name="lastname" size="28" /><br></br>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" size="28" />
          <label htmlFor="password">Пароль:</label>
          <input id="password" type="password" name="password" size="28" /><br></br>
          <button onClick={onMapRedirect}>Войти</button>
        </form>
      );
}