import { g as getRenderingRef, f as forceUpdate } from './index-f673b6e7.js';
import './i18next-4e962c40.js';

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = ({ on }) => {
    const elmsToUpdate = new Map();
    if (typeof getRenderingRef === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', () => {
            elmsToUpdate.clear();
        });
        on('get', (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        });
    }
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => subscriptions.forEach((subscription) => {
        if (subscription.set) {
            on('set', subscription.set);
        }
        if (subscription.get) {
            on('get', subscription.get);
        }
        if (subscription.reset) {
            on('reset', subscription.reset);
        }
    });
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    stencilSubscription(map);
    return map;
};

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}
const poll = async ({ fn, validate, interval, maxAttempts }) => {
  let attempts = 0;
  const executePoll = async (resolve, reject) => {
    const result = await fn();
    attempts++;
    if (validate(result)) {
      return resolve(result);
    }
    else if (maxAttempts && attempts === maxAttempts) {
      return reject(new Error('Exceeded max attempts.'));
    }
    else {
      setTimeout(executePoll, interval, resolve, reject);
    }
  };
  return new Promise(executePoll);
};
const removeEmptyStrings = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== '') {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

class EzpAuthorizationService {
  constructor(redirectURI, clientID) {
    this.urlParams = new URLSearchParams();
    this.isAuthorized = false;
    this.redirectURI = redirectURI;
    this.clientID = clientID;
    this.oauthUrl = authStore.state.authApiHostUrl;
    this.authURI = new URL(`https://${this.oauthUrl}/oauth/authorize/`);
    this.accessTokenURL = `https://${this.oauthUrl}/oauth/access_token/`;
  }
  generateCodeVerifier() {
    if (authStore.state.codeVerifier !== '') {
      this.codeVerifier = authStore.state.codeVerifier;
    }
    else {
      const arr = new Uint8Array(128);
      const randomValueArray = crypto.getRandomValues(arr);
      const codeVerifier = btoa(randomValueArray.toString()).substr(0, 128);
      this.codeVerifier = codeVerifier;
      authStore.state.codeVerifier = this.codeVerifier;
    }
  }
  async generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const codeData = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', codeData);
    const base64Digest = btoa(String.fromCharCode.apply(null, new Uint8Array(digest)));
    this.codeChallenge = base64Digest.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }
  buildAuthURI() {
    this.urlParams.append('response_type', 'code');
    this.urlParams.append('client_id', this.clientID);
    this.urlParams.append('redirect_uri', this.redirectURI);
    this.urlParams.append('code_challenge', this.codeChallenge);
    this.urlParams.append('code_challenge_method', 'S256');
    this.authURI.search = this.urlParams.toString();
    authStore.state.authUri = this.authURI.toString();
  }
  getAccessToken() {
    return fetch(this.accessTokenURL, {
      credentials: 'include',
      headers: {
        Authorization: 'Basic ' + btoa(this.clientID + ':'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: encodeFormData({
        grant_type: 'authorization_code',
        scope: 'printing',
        code: authStore.state.code,
        redirect_uri: this.redirectURI,
        // code_verifier: authStore.state.codeVerifier,
      }),
    })
      .then((response) => {
      return response.json(); // parse response
    })
      .then((data) => {
      // actual object
      if (data.access_token) {
        authStore.state.isAuthorized = true;
        this.isAuthorized = authStore.state.isAuthorized;
        localStorage.setItem('isAuthorized', this.isAuthorized.toString());
        this.accessToken = data.access_token;
        localStorage.setItem('access_token', this.accessToken);
        authStore.state.accessToken = this.accessToken;
        this.refreshToken = data.refresh_token;
        localStorage.setItem('refreshToken', this.refreshToken);
        authStore.state.refreshToken = this.refreshToken;
      }
    });
  }
  refreshTokens() {
    fetch(this.accessTokenURL, {
      credentials: 'include',
      headers: {
        Authorization: 'Basic ' + btoa(this.clientID + ':'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: encodeFormData({
        grant_type: 'refresh_token',
        scope: 'printing',
        refresh_token: authStore.state.refreshToken,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
      if (data.access_token) {
        this.accessToken = data.access_token;
        localStorage.setItem('access_token', this.accessToken);
        authStore.state.accessToken = this.accessToken;
        this.refreshToken = data.refresh_token;
        localStorage.setItem('refreshToken', this.refreshToken);
        authStore.state.refreshToken = this.refreshToken;
        authStore.state.isAuthorized = true;
      }
    });
  }
  revokeRefreshToken() {
    if (authStore.state.refreshToken)
      fetch(`https://${this.oauthUrl}/oauth/revoke/`, {
        credentials: 'include',
        headers: {
          Authorization: 'Basic ' + btoa(this.clientID + ':'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        body: encodeFormData({
          token: authStore.state.refreshToken,
        }),
      }).catch((error) => {
        console.log(error);
      });
  }
}
const authStore = createStore({
  code: '',
  codeVerifier: '',
  accessToken: '',
  refreshToken: '',
  isAuthorized: false,
  devApi: false,
  authApiHostUrl: '',
  redirectUri: '',
  authUri: '',
});

export { EzpAuthorizationService as E, authStore as a, createStore as c, poll as p, removeEmptyStrings as r };
