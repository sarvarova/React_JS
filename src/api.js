export const serverLogin = async (payload) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => res.json())
    .catch((error) => console.error(error));
};

export const serverRegistration = async (payload) => {
  return fetch(`https://loft-taxi.glitch.me/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => res.json())
    .catch((error) => console.error(error));
};

export const serverProfile = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch(`https://loft-taxi.glitch.me/card`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      cardNumber,
      expiryDate,
      cardName,
      cvc,
      token,
    }),
  }).then((res) => res.json())
    .catch((error) => console.error(error));
};

export const loadServerProfile = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`)
  .then((res) => res.json())
  .catch((error) => console.error(error));
};

export const serverAddresses = () => {
  return fetch(`https://loft-taxi.glitch.me/addressList`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

export const serverRoute = async (address1, address2) => {
  return fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`)
  .then(res => res.json())
  .catch((error) => console.error(error));
};