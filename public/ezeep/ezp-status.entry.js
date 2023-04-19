import { r as registerInstance, c as createEvent, h, H as Host } from './index-f673b6e7.js';
import { i as i18next } from './i18next-4e962c40.js';

const ezpStatusCss = ":host{-ms-flex-align:center;align-items:center;background:var(--ezp-core-backdrop);border-radius:var(--ezp-status-border-radius, 6px);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;left:0;padding:var(--ezp-spacing-6);position:absolute;top:0;width:100%;z-index:9999}@media (prefers-color-scheme: dark){:host{--box-separator-position:inset 0 0 0 var(--hairline-width-positive)}}#box{--ezp-icon-fill:var(--ezp-theme-solid);-ms-flex-align:center;align-items:center;background:var(--ezp-core-surface-tertiary);border-radius:3px;-webkit-box-shadow:var(--ezp-status-box-boxShadow, 0 0 0 1px var(--ezp-black-10));box-shadow:var(--ezp-status-box-boxShadow, 0 0 0 1px var(--ezp-black-10));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--ezp-spacing-4);padding:var(--ezp-spacing-4) var(--ezp-spacing-5)}#indicator{-webkit-animation:rotate var(--ezp-duration-6) linear infinite;animation:rotate var(--ezp-duration-6) linear infinite;display:block;height:42px;-webkit-transform:rotate(0);transform:rotate(0);width:42px}#track{fill:none;stroke:var(--ezp-core-outline);stroke-width:4px}#value{-webkit-animation:offset var(--ezp-duration-6) linear alternate infinite;animation:offset var(--ezp-duration-6) linear alternate infinite;fill:none;stroke:var(--ezp-theme-solid);stroke-dasharray:110;stroke-dashoffset:110;stroke-linecap:round;stroke-width:4px}#description{color:var(--ezp-core-foreground-primary)}#footer{display:-ms-flexbox;display:flex;gap:var(--ezp-spacing-2)}@-webkit-keyframes offset{100%{stroke-dashoffset:55}}@keyframes offset{100%{stroke-dashoffset:55}}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

let EzpStatus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.statusCancel = createEvent(this, "statusCancel", 7);
    this.statusClose = createEvent(this, "statusClose", 7);
    this.statusRetry = createEvent(this, "statusRetry", 7);
    /**
     *
     * Properties
     *
     */
    this.description = 'Description';
    this.processing = false;
    /**
     *
     * Private methods
     *
     */
    this.handleCancel = () => {
      this.statusCancel.emit(this.instance);
    };
    this.handleClose = () => {
      this.statusClose.emit(this.instance);
    };
    this.handleRetry = () => {
      this.statusRetry.emit(this.instance);
    };
  }
  /**
   *
   * Lifecycle methods
   *
   */
  componentWillLoad() { }
  /**
   *
   * Render method
   *
   */
  render() {
    return (h(Host, null, h("div", { id: "box" }, this.processing ? (h("svg", { id: "indicator", viewBox: "0 0 42 42", xmlns: "http://www.w3.org/2000/svg" }, h("circle", { id: "track", cx: "21", cy: "21", r: "18" }), h("circle", { id: "value", cx: "21", cy: "21", r: "18" }))) : this.icon ? (h("ezp-icon", { name: this.icon, framed: true })) : null, h("ezp-label", { id: "description", level: "tertiary", weight: "strong", text: this.description }), (this.cancel || this.close || this.retry) && (h("div", { id: "footer" }, this.cancel && (h("ezp-text-button", { level: "secondary", small: true, onClick: this.handleCancel, label: typeof this.cancel === 'string'
        ? this.cancel
        : i18next.t('button_actions.cancel') })), this.close && (h("ezp-text-button", { level: this.retry ? 'secondary' : 'primary', small: true, onClick: this.handleClose, label: typeof this.close === 'string' ? this.close : i18next.t('button_actions.close') })), this.retry && (h("ezp-text-button", { level: "primary", small: true, onClick: this.handleRetry, label: typeof this.retry === 'string' ? this.retry : i18next.t('button_actions.retry') })))))));
  }
};
EzpStatus.style = ezpStatusCss;

export { EzpStatus as ezp_status };
