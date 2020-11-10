const url = `http://localhost:3000/api`;

export async function registerUser(userInfo) {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  };
  try {
    const fetchResponse = await fetch(`${url}/user`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
}

export async function loginUser(userInfo) {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  };
  try {
    const fetchResponse = await fetch(`${url}/user/login`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
}