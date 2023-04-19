import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-f673b6e7.js';
import { i as i18next } from './i18next-4e962c40.js';

const ezpUploadCss = ":host{-ms-flex-line-pack:center;align-content:center;background:var(--ezp-upload-background, transparent);border:1px dashed var(--ezp-upload-border-color, var(--ezp-core-foreground-tertiary));border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--ezp-core-foreground-primary);display:grid;grid-template:auto/minmax(auto, 280px);height:var(--ezp-upload-height, auto);-ms-flex-pack:center;justify-content:center;padding:var(--ezp-spacing-3);position:relative;-webkit-transition:background-color var(--ezp-duration-3) var(--ezp-easing-out-quart), border-color var(--ezp-duration-3) var(--ezp-easing-out-quart);transition:background-color var(--ezp-duration-3) var(--ezp-easing-out-quart), border-color var(--ezp-duration-3) var(--ezp-easing-out-quart);width:var(--ezp-upload-width, auto)}:host(.dragging){--ezp-upload-background:var(--ezp-theme-translucent);--ezp-upload-border-color:var(--ezp-theme-translucent);--ezp-upload-header-blur:16px;--ezp-upload-header-opacity:0.42}#header{--ezp-icon-fill:var(--ezp-theme-solid);-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-webkit-filter:blur(var(--ezp-upload-header-blur, 0));filter:blur(var(--ezp-upload-header-blur, 0));-ms-flex-direction:column;flex-direction:column;gap:var(--ezp-spacing-5);opacity:var(--ezp-upload-header-opacity, 1);text-align:center;-webkit-transition:opacity var(--ezp-duration-3) var(--ezp-easing-out-quart), -webkit-filter var(--ezp-duration-3) var(--ezp-easing-out-quart);transition:opacity var(--ezp-duration-3) var(--ezp-easing-out-quart), -webkit-filter var(--ezp-duration-3) var(--ezp-easing-out-quart);transition:filter var(--ezp-duration-3) var(--ezp-easing-out-quart), opacity var(--ezp-duration-3) var(--ezp-easing-out-quart);transition:filter var(--ezp-duration-3) var(--ezp-easing-out-quart), opacity var(--ezp-duration-3) var(--ezp-easing-out-quart), -webkit-filter var(--ezp-duration-3) var(--ezp-easing-out-quart)}#meta{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:var(--ezp-spacing-3) 3px;-ms-flex-pack:center;justify-content:center}#select{color:var(--ezp-theme-solid);cursor:pointer;opacity:var(--ezp-upload-select-opacity, 1);text-decoration:underline;white-space:nowrap}@media (hover: hover){#select:hover{--ezp-upload-select-opacity:0.58}}#input{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:0;opacity:0;pointer-events:none;position:absolute;width:0}";

let EzpUpload = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.uploadFile = createEvent(this, "uploadFile", 7);
    /**
     *
     * States
     *
     */
    this.filename = '';
    this.dragging = false;
    /**
     *
     * Private methods
     *
     */
    this.handleInput = () => {
      this.filename = this.input.files[0].name;
      this.uploadFile.emit(this.input.files);
    };
  }
  /**
   *
   * Listeners
   *
   */
  handleDragEnter() {
    this.dragging = true;
  }
  handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }
  handleDragLeave() {
    this.dragging = false;
  }
  handleDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    this.dragging = false;
    this.filename = event.dataTransfer.files[0].name;
    this.uploadFile.emit(event.dataTransfer.files);
  }
  listenPrintCancel() {
    this.form.reset();
    this.filename = '';
  }
  /**
   *
   * Render method
   *
   */
  render() {
    return (h(Host, { class: { dragging: this.dragging } }, h("form", { id: "form", ref: (form) => (this.form = form) }, h("div", { id: "header" }, h("ezp-icon", { name: "drag-drop", size: "huge", framed: true }), h("ezp-label", { weight: "strong", text: i18next.t('upload.description') }), h("div", { id: "meta" }, h("ezp-label", { level: "tertiary", text: i18next.t('upload.meta_leading') }), h("label", { htmlFor: "input", id: "select" }, h("ezp-label", { level: "tertiary", weight: "strong", text: i18next.t('upload.meta_select') })), h("input", { type: "file", name: "input", id: "input", ref: (input) => (this.input = input), onInput: this.handleInput }), h("ezp-label", { level: "tertiary", text: i18next.t('upload.meta_trailing') })), this.filename != '' && (h(Fragment, null, h("ezp-label", { level: "secondary", text: i18next.t('upload.selected_file') }), h("ezp-label", { level: "tertiary", text: this.filename })))))));
  }
};
EzpUpload.style = ezpUploadCss;

export { EzpUpload as ezp_upload };
