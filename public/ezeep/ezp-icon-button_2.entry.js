import { r as registerInstance, h, H as Host } from './index-f673b6e7.js';

const ezpIconButtonCss = ":host{display:block}:host(.primary){--ezp-iconButton-background-disabled:var(--ezp-core-shade-primary);--ezp-iconButton-background-init:var(--ezp-theme-solid);--ezp-iconButton-color-disabled:var(--ezp-core-foreground-tertiary);--ezp-iconButton-color-init:var(--ezp-white-100);--ezp-iconButton-opacity-active:0.74;--ezp-iconButton-opacity-hover:0.84}:host(.secondary){--ezp-iconButton-background-active:var(--ezp-core-shade-tertiary);--ezp-iconButton-background-disabled:var(--ezp-core-shade-primary);--ezp-iconButton-background-hover:var(--ezp-core-shade-secondary);--ezp-iconButton-background-init:var(--ezp-core-shade-primary);--ezp-iconButton-color-disabled:var(--ezp-core-foreground-tertiary);--ezp-iconButton-color-init:var(--ezp-theme-solid)}:host(.tertiary){--ezp-iconButton-background-active:var(--ezp-core-shade-secondary);--ezp-iconButton-background-hover:var(--ezp-core-shade-primary);--ezp-iconButton-background-init:transparent;--ezp-iconButton-color-disabled:var(--ezp-core-foreground-tertiary);--ezp-iconButton-color-init:var(--ezp-theme-solid)}:host(.quaternary){--ezp-iconButton-background-init:transparent;--ezp-iconButton-color-disabled:var(--ezp-core-foreground-tertiary);--ezp-iconButton-color-init:var(--ezp-theme-solid);--ezp-iconButton-opacity-active:0.58;--ezp-iconButton-opacity-hover:0.74}#button{-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--ezp-iconButton-background, var(--ezp-iconButton-background-init));border:0;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;color:var(--ezp-iconButton-color, var(--ezp-iconButton-color-init));cursor:var(--ezp-iconButton-cursor, pointer);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:0;opacity:var(--ezp-iconButton-opacity, 1);outline:none;padding:var(--ezp-spacing-2)}@media (hover: hover){#button:not(:disabled):hover{--ezp-iconButton-background:var(\n      --ezp-iconButton-background-hover,\n      var(--ezp-iconButton-background-init)\n    );--ezp-iconButton-opacity:var(--ezp-iconButton-opacity-hover, 1)}#button:not(:disabled):active{--ezp-iconButton-background:var(\n      --ezp-iconButton-background-active,\n      var(--ezp-iconButton-background-init)\n    );--ezp-iconButton-opacity:var(--ezp-iconButton-opacity-active, 1)}}#button:disabled{--ezp-iconButton-background:var(\n    --ezp-iconButton-background-disabled,\n    var(--ezp-iconButton-background-init)\n  );--ezp-iconButton-color:var(--ezp-iconButton-color-disabled);--ezp-iconButton-cursor:default}";

let EzpIconButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     *
     * Properties
     *
     */
    /** Description... */
    this.blank = false;
    /** Description... */
    this.disabled = false;
    /** Description... */
    this.level = 'primary';
  }
  /**
   *
   * Render method
   *
   */
  render() {
    const TagType = this.type !== undefined ? 'button' : 'a';
    const attributes = this.type !== undefined
      ? {
        type: this.type,
        disabled: this.disabled,
      }
      : {
        href: this.href,
        target: this.blank ? '_blank' : '_self',
      };
    return (h(Host, { class: `${this.level}` }, h(TagType, Object.assign({ id: "button" }, attributes), h("ezp-icon", { name: this.icon }))));
  }
};
EzpIconButton.style = ezpIconButtonCss;

const ezpTextButtonCss = ":host{display:-ms-flexbox;display:flex}:host(.primary){--ezp-textButton-background-disabled:var(--ezp-core-shade-primary);--ezp-textButton-background-init:var(--ezp-theme-solid);--ezp-textButton-color-disabled:var(--ezp-core-foreground-tertiary);--ezp-textButton-color-init:var(--ezp-white-100);--ezp-textButton-opacity-active:0.74;--ezp-textButton-opacity-hover:0.84}:host(.secondary){--ezp-textButton-background-active:var(--ezp-core-shade-tertiary);--ezp-textButton-background-disabled:var(--ezp-core-shade-primary);--ezp-textButton-background-hover:var(--ezp-core-shade-secondary);--ezp-textButton-background-init:var(--ezp-core-shade-primary);--ezp-textButton-color-disabled:var(--ezp-core-foreground-tertiary);--ezp-textButton-color-init:var(--ezp-theme-solid)}:host(.tertiary){--ezp-textButton-background-active:var(--ezp-core-shade-secondary);--ezp-textButton-background-disabled:transparent;--ezp-textButton-background-hover:var(--ezp-core-shade-primary);--ezp-textButton-background-init:transparent;--ezp-textButton-color-disabled:var(--ezp-core-foreground-tertiary);--ezp-textButton-color-init:var(--ezp-theme-solid)}#button{-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--ezp-textButton-background, var(--ezp-textButton-background-init));border:0;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;color:var(--ezp-textButton-color, var(--ezp-textButton-color-init));cursor:var(--ezp-textButton-cursor, pointer);display:-ms-flexbox;display:flex;font-family:inherit;-ms-flex-pack:center;justify-content:center;margin:0;opacity:var(--ezp-textButton-opacity, 1);outline:none;padding:var(--ezp-spacing-3);white-space:nowrap;width:100%}@media (hover: hover){#button:not(:disabled):hover{--ezp-textButton-background:var(\n      --ezp-textButton-background-hover,\n      var(--ezp-textButton-background-init)\n    );--ezp-textButton-opacity:var(--ezp-textButton-opacity-hover, 1)}#button:not(:disabled):active{--ezp-textButton-background:var(\n      --ezp-textButton-background-active,\n      var(--ezp-textButton-background-init)\n    );--ezp-textButton-opacity:var(--ezp-textButton-opacity-active, 1)}}#button:disabled{--ezp-textButton-background:var(--ezp-textButton-background-disabled);--ezp-textButton-color:var(--ezp-textButton-color-disabled);--ezp-textButton-cursor:default}#label{pointer-events:none}";

let EzpTextButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     *
     * Properties
     *
     */
    /** Description... */
    this.blank = false;
    /** Description... */
    this.disabled = false;
    /** Description... */
    this.level = 'primary';
    /** Description... */
    this.small = false;
  }
  /**
   *
   * Render method
   *
   */
  render() {
    const TagType = this.type !== undefined ? 'button' : 'a';
    const attributes = this.type !== undefined
      ? {
        type: this.type,
        disabled: this.disabled,
      }
      : {
        href: this.href,
        target: this.blank ? '_blank' : '_self',
      };
    return (h(Host, { class: `${this.level}` }, h(TagType, Object.assign({ id: "button" }, attributes), h("ezp-label", { id: "label", weight: "heavy", text: this.label, level: this.small ? 'tertiary' : 'secondary' }))));
  }
};
EzpTextButton.style = ezpTextButtonCss;

export { EzpIconButton as ezp_icon_button, EzpTextButton as ezp_text_button };
