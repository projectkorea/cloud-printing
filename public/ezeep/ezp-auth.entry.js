import { r as registerInstance, c as createEvent, h, H as Host } from './index-f673b6e7.js';
import { a as authStore, E as EzpAuthorizationService } from './auth-31e2cb09.js';
import { i as i18next } from './i18next-4e962c40.js';

const ezpAuthCss = ":host{--ezp-theme-solid:var(--ezp-accent-cyan-solid);--ezp-theme-translucent:var(--ezp-accent-cyan-translucent);display:block}";

let EzpAuth = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.authCancel = createEvent(this, "authCancel", 7);
    this.authSuccess = createEvent(this, "authSuccess", 7);
    this.oauthPopupWindow = null;
    this.previousUrl = null;
  }
  listenDialogAction() {
    this.openSignInWindow(this.auth.authURI.toString(), 'ezeep Login');
  }
  listenDialogClose() {
    this.authCancel.emit();
  }
  listenStatusCancel() {
    this.authCancel.emit();
  }
  openSignInWindow(url, name) {
    if (authStore.state.isAuthorized) {
      this.authCancel.emit();
      this.authSuccess.emit();
      return;
    }
    // remove any existing event listeners
    window.removeEventListener('message', this.receiveMessage);
    // window features
    const windowFeatures = 'toolbar=no, menubar=no, width=600, height=7000, top=100, left=100';
    if (this.oauthPopupWindow === null || this.oauthPopupWindow.closed) {
      /* if the pointer to the window object in memory does not exist
      or if such pointer exists but the window was closed */
      this.oauthPopupWindow = window.open(url, name, windowFeatures);
    }
    else if (this.previousUrl !== this.auth.authURI.toString()) {
      /* if the resource to load is different,
      then we load it in the already opened secondary window and then
      we bring such window back on top/in front of its parent window. */
      this.oauthPopupWindow = window.open(url, name, windowFeatures);
      if (!this.oauthPopupWindow ||
        this.oauthPopupWindow.closed ||
        typeof this.oauthPopupWindow.closed == 'undefined') {
        alert('popup blocked');
      }
      this.oauthPopupWindow.focus();
    }
    else {
      /* else the window reference must exist and the window
     is not closed; therefore, we can bring it back on top of any other
     window with the focus() method. There would be no need to re-create
     the window or to reload the referenced resource. */
      this.oauthPopupWindow.focus();
    }
    // add the listener for receiving a message from the popup
    window.addEventListener('message', (event) => this.receiveMessage(event), false);
    this.previousUrl = this.auth.authURI;
  }
  receiveMessage(event) {
    authStore.state.code = event.data;
    this.auth.getAccessToken().then(() => {
      this.authCancel.emit();
      this.authSuccess.emit();
    });
  }
  async componentWillLoad() {
    this.auth = new EzpAuthorizationService(this.redirectURI, this.clientID);
    if (this.code) {
      authStore.state.code = this.code;
      await this.auth.getAccessToken();
      this.authCancel.emit();
      this.authSuccess.emit();
    }
    if (authStore.state.isAuthorized === false) {
      this.auth.generateCodeVerifier();
      await this.auth.generateCodeChallenge(authStore.state.codeVerifier);
      this.auth.buildAuthURI();
    }
    if (this.hidelogin && this.trigger === 'button') {
      this.openSignInWindow(this.auth.authURI.toString(), 'ezeep Login');
    }
  }
  render() {
    return (h(Host, null, this.hidelogin && this.trigger === 'button' ? (h("ezp-status", { description: i18next.t('login_dialog.action'), processing: true, cancel: true })) : this.hidelogin && this.trigger === 'file' ? (h("ezp-text-button", { type: "button", level: "primary", onClick: () => this.openSignInWindow(this.auth.authURI.toString(), 'ezeep Login'), label: i18next.t('button_actions.select_printer') })) : (h("ezp-dialog", { heading: i18next.t('login_dialog.heading'), description: i18next.t('login_dialog.description'), action: i18next.t('login_dialog.action'), iconName: "logo", iconSize: "huge", iconFramed: false, instance: "login" }))));
  }
};
EzpAuth.style = ezpAuthCss;

export { EzpAuth as ezp_auth };
