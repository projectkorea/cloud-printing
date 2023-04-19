import { r as registerInstance, d as getAssetPath, h, H as Host } from './index-f673b6e7.js';

const ezpIconCss = ":host{-ms-flex-line-pack:center;align-content:center;background:var(--ezp-icon-background, transparent);border-radius:var(--ezp-icon-borderRadius, 0);display:grid;grid-template:var(--ezp-icon-gridTemplate)/var(--ezp-icon-gridTemplate);height:var(--ezp-icon-height, var(--ezp-icon-size));-ms-flex-pack:center;justify-content:center;padding:var(--ezp-icon-padding, 0);width:var(--ezp-icon-width, var(--ezp-icon-size))}:host(.framed){--ezp-icon-background:var(--ezp-core-shade-primary);--ezp-icon-borderRadius:50%;--ezp-icon-padding:var(--ezp-icon-frame)}:host(.normal){--ezp-icon-size:18px;--ezp-icon-gridTemplate:24px;--ezp-icon-frame:var(--ezp-spacing-3)}:host(.large){--ezp-icon-size:36px;--ezp-icon-gridTemplate:48px;--ezp-icon-frame:var(--ezp-spacing-4)}:host(.huge){--ezp-icon-size:54px;--ezp-icon-gridTemplate:72px;--ezp-icon-frame:var(--ezp-spacing-5)}svg{display:block;fill:var(--ezp-icon-fill, currentColor);height:100%;width:100%}";

let EzpIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Description... */
    this.size = 'normal';
    /** Description... */
    this.framed = false;
  }
  /**
   *
   * Lifecycle methods
   *
   */
  async componentWillLoad() {
    await fetch(getAssetPath(`./assets/glyph-${this.name}.svg`))
      .then((response) => response.text())
      .then((result) => {
      this.glyph = result;
    })
      .catch((error) => console.log(error));
  }
  /**
   *
   * Render method
   *
   */
  render() {
    return (h(Host, { class: `${this.size} ${this.framed ? 'framed' : ''}` }, h("div", { id: "glyph", innerHTML: this.glyph })));
  }
  static get assetsDirs() { return ["assets"]; }
};
EzpIcon.style = ezpIconCss;

const ezpLabelCss = ":host{display:block;min-width:var(--ezp-label-minWidth, auto);padding-bottom:1px;padding-top:1px}:host::before,:host::after{content:\"\";display:block;height:0}:host::before{margin-top:calc((var(--ezp-label-offset) + 1px) * -1)}:host::after{margin-bottom:calc((var(--ezp-label-offset) + 1px) * -1)}:host(.no-wrap){--ezp-label-whiteSpace:nowrap}:host(.ellipsis){--ezp-label-minWidth:0;--ezp-label-overflow:hidden;--ezp-label-textOverflow:ellipsis;--ezp-label-whiteSpace:nowrap;--ezp-label-width:100%}:host(.primary){--ezp-label-fontSize:17px;--ezp-label-lineHeight:24px;--ezp-label-letterSpacing:-0.0127756105em;--ezp-label-offset:6px}:host(.secondary){--ezp-label-fontSize:14px;--ezp-label-lineHeight:20px;--ezp-label-letterSpacing:-0.0062235443em;--ezp-label-offset:5px}:host(.tertiary){--ezp-label-fontSize:12px;--ezp-label-lineHeight:18px;--ezp-label-letterSpacing:0.0004907745em;--ezp-label-offset:5px}:host(.soft){--ezp-label-fontWeight:400}:host(.strong){--ezp-label-fontWeight:500}:host(.heavy){--ezp-label-fontWeight:600}#text{font-size:var(--ezp-label-fontSize);font-weight:var(--ezp-label-fontWeight);letter-spacing:var(--ezp-label-letterSpacing);line-height:var(--ezp-label-lineHeight);overflow:var(--ezp-label-overflow, visible);text-overflow:var(--ezp-label-textOverflow, clip);white-space:var(--ezp-label-whiteSpace, normal);width:var(--ezp-label-width, auto)}";

let EzpLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     *
     * Properties
     *
     */
    /** Description... */
    this.ellipsis = false;
    /** Description... */
    this.level = 'secondary';
    /** Description... */
    this.noWrap = false;
    /** Description... */
    this.text = 'Label';
    /** Description... */
    this.weight = 'soft';
  }
  /**
   *
   * Render method
   *
   */
  render() {
    return (h(Host, { class: `${this.level} ${this.weight} ${this.ellipsis ? 'ellipsis' : ''} ${this.noWrap ? 'no-wrap' : ''}` }, h("div", { id: "text" }, this.text)));
  }
};
EzpLabel.style = ezpLabelCss;

export { EzpIcon as ezp_icon, EzpLabel as ezp_label };
