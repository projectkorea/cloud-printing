import { r as registerInstance, c as createEvent, h, H as Host } from './index-f673b6e7.js';
import { i as i18next } from './i18next-4e962c40.js';

const ezpDialogCss = ":host{--ezp-icon-fill:var(--ezp-theme-solid);-ms-flex-line-pack:center;align-content:center;background:var(--ezp-core-backdrop);display:grid;grid-template:auto/minmax(auto, 280px);height:100%;-ms-flex-pack:center;justify-content:center;left:0;position:fixed;top:0;width:100%}#box{background:var(--ezp-core-surface-tertiary);border-radius:6px;-webkit-box-shadow:var(--ezp-dialog-box-boxShadow, 0 0 0 1px var(--ezp-black-10));box-shadow:var(--ezp-dialog-box-boxShadow, 0 0 0 1px var(--ezp-black-10))}#header{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding:var(--ezp-spacing-2) var(--ezp-spacing-3)}#body{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--ezp-spacing-5);padding:0 var(--ezp-spacing-5);text-align:center}#text{color:var(--ezp-core-foreground-primary);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--ezp-spacing-4)}#footer{display:grid;grid-template:auto/minmax(144px, auto);-ms-flex-pack:center;justify-content:center;padding:var(--ezp-spacing-5)}";

let EzpDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dialogClose = createEvent(this, "dialogClose", 7);
    this.dialogAction = createEvent(this, "dialogAction", 7);
    this.action = i18next.t('button_actions.close');
    this.iconSize = 'large';
    this.iconFramed = true;
    /**
     *
     * Private methods
     *
     */
    this.handleClose = () => {
      this.dialogClose.emit(this.instance);
    };
    this.handleAction = () => {
      this.dialogAction.emit(this.instance);
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
    return (h(Host, null, h("div", { id: "box" }, h("div", { id: "header" }, h("ezp-icon-button", { level: "tertiary", icon: "close", type: "button", onClick: this.handleClose })), h("div", { id: "body" }, this.iconName && (h("ezp-icon", { name: this.iconName, size: this.iconSize, framed: this.iconFramed })), h("div", { id: "text" }, h("ezp-label", { text: this.heading, weight: "heavy" }), h("ezp-label", { text: this.description }))), h("div", { id: "footer" }, h("ezp-text-button", { type: "button", level: "primary", onClick: this.handleAction, label: this.action })))));
  }
};
EzpDialog.style = ezpDialogCss;

export { EzpDialog as ezp_dialog };
