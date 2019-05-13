import { BASE_URL } from "../config";

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include',
      // to include the cookie when doing fetch, use
      // the "credentials" option with "include" for cross-origin
      // requests or with "same-origin" for same-origin
      // requests.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(res => res.json());
  },
};
