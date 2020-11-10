import { toast } from 'react-toastify';
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
    if (!fetchResponse.ok) return false
    const user = await fetchResponse.json()
    return user;
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
    if (!fetchResponse.ok) return false
    const user = await fetchResponse.json()
    return user;
  } catch (e) {
    return e;
  }
}

export async function getUser() {
  try {
    const fetchResponse = await fetch(`${url}/user`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin'
    });
    if (!fetchResponse.ok) return false
    const user = await fetchResponse.json()
    return user;
  } catch (e) {
    return e;
  }
}

export async function editUser(userInfo) {
  try {
    const fetchResponse = await fetch(`${url}/user/edit`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify(userInfo),  
    });
    if (!fetchResponse.ok) toast.error("Couldn't update user info");
    return fetchResponse.ok;
  } catch (e) {
    return e;
  }
}