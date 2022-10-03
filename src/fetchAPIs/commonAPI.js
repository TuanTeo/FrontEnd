import * as constants from "../constants";
import localStorage from "../localStorage";
export default function addDataApi(method, path, data) {
  let objFetch = {};
  const token = localStorage.getToken().token.trim();
  const headers = {
    Authorization: `Bearer ${token}`,
    withCredentials: true, // should be there
    // credentials: "include", // should be there
  };
  if (method === constants.HTTP_READ || method === constants.HTTP_DELETE) {
    objFetch = {
      method,
      headers: {
        ...headers,
      },
    };
  } else {
    objFetch = {
      method,
      headers: {
        ...constants.HTTP_HEADER_JSON,
        ...headers,
      },
      body: JSON.stringify(data),
    };
  }
  return new Promise((resolve, reject) => {
    const url = constants.DOMAIN + path;
    fetch(url, objFetch)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}
