export const serverLogIn = async (email, password) => {
    return fetch(
      `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json())
     .then(data => data.success);
  };

  export const serverCard = async (number, name, expiry, cvc) => {
    return fetch(
        `https://loft-taxi.glitch.me/card?token=AUTH_TOKEN`, {
            method: 'post',
            body: {
                number: number,
                name: name,
                expiry: expiry,
                cvc: cvc
            }
        }
      ).then(res => res.json())
       .then(data => data.success);
  }
  