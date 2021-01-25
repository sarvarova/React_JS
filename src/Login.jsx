import React from 'react'

export const Login = ({ onMapRedirect }) => {
    return (
        <form>
          <h1>Войти</h1>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" size="28" /><br></br>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" size="28" /><br></br>
          <button onClick={onMapRedirect}>Войти</button>
        </form>
      );
}