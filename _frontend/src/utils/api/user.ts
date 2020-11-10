const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

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
    return fetchResponse.ok;
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
    return fetchResponse.ok;
  } catch (e) {
    return e;
  }
}