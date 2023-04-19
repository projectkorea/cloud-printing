import { c as createStore, a as authStore } from './auth-31e2cb09.js';

class EzpUserService {
  getUserInfo() {
    return fetch(`https://${authStore.state.authApiHostUrl}/v1/users/me`, {
      headers: {
        Authorization: 'Bearer ' + authStore.state.accessToken,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then((response) => {
      return response.json();
    });
  }
}
const userStore = createStore({
  user: null,
  theme: '',
  appearance: '',
});

export { EzpUserService as E, userStore as u };
