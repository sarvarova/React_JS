export const serverLogIn = async (email, password) => {
    return fetch(
      `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json())
     .then(data => data.success);
  };

  export const serverCard = async (number, name, expiry, cvc, token) => {
    return fetch(
      `https://loft-taxi.glitch.me/card`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: {
              number: number,
              name: name,
              expiry: expiry,
              cvc: cvc,
              token: token
          }
      }
    ).then(res => res.json())
     .then(data => data.success);
};
  