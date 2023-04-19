import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-f673b6e7.js';
import { a as authStore } from './auth-31e2cb09.js';
import { u as userStore } from './user-d0b374e2.js';
import { i as i18next } from './i18next-4e962c40.js';

const ezpSelectCss = ":host{--ezp-select-duration:var(--ezp-duration-3);display:block;height:var(--ezp-select-toggle-height);position:relative;-webkit-transition:var(--ezp-select-transition, z-index 0s var(--ezp-select-duration));transition:var(--ezp-select-transition, z-index 0s var(--ezp-select-duration));z-index:var(--ezp-select-zIndex, 3)}:host(:first-child){--ezp-select-wrap-borderRadius:3px 3px 0 0}:host(:last-child){--ezp-select-wrap-borderRadius:0 0 3px 3px}:host(:first-child:last-child){--ezp-select-wrap-borderRadius:3px}:host(:not(:last-child):not(.is-expanded)){--ezp-select-wrap-boxShadowPositionBottom:0 0 0 0}:host(.toggle-horizontal){--ezp-select-label-alignSelf:start;--ezp-select-toggle-gridTemplateAreas:\"label value accessory\";--ezp-select-toggle-gridTemplateColumns:1fr repeat(2, auto);--ezp-select-toggle-height:30px;--ezp-select-toggle-gridTemplateRows:auto;--ezp-select-value-alignSelf:end}:host(.toggle-horizontal.has-icon){--ezp-select-toggle-gridTemplateAreas:\"icon label value accessory\";--ezp-select-toggle-gridTemplateColumns:auto 1fr repeat(2, auto)}:host(.toggle-vertical){--ezp-select-label-alignSelf:center;--ezp-select-toggle-gridTemplateAreas:\"label accessory\" \"value accessory\";--ezp-select-toggle-gridTemplateColumns:1fr auto;--ezp-select-toggle-height:48px;--ezp-select-toggle-gridTemplateRows:repeat(2, auto);--ezp-select-value-alignSelf:center}:host(.toggle-vertical.has-icon){--ezp-select-toggle-gridTemplateAreas:\"icon label accessory\" \"icon value accessory\";--ezp-select-toggle-gridTemplateColumns:auto 1fr auto}:host(.option-horizontal){--ezp-select-details-gridTemplateColumns:repeat(2, 1fr);--ezp-select-details-gridTemplateRows:auto;--ezp-select-option-height:30px}:host(.option-vertical){--ezp-select-details-gridTemplateColumns:1fr;--ezp-select-details-gridTemplateRows:repeat(2, auto);--ezp-select-option-height:48px}:host(.is-expanded){--ezp-select-accessory-color:var(--ezp-theme-solid);--ezp-select-transition:z-index 0s 0s;--ezp-select-zIndex:9999;--ezp-select-icon-color:var(--ezp-theme-solid);--ezp-select-label-color:var(--ezp-theme-solid);--ezp-select-wrap-borderRadius:3px}:host(.disabled){--ezp-select-accessory-color:var(--ezp-core-foreground-tertiary);--ezp-select-icon-color:var(--ezp-core-foreground-tertiary);--ezp-select-label-color:var(--ezp-core-foreground-tertiary);--ezp-select-toggle-background-hover:transparent;--ezp-select-toggle-cursor:default;--value-color:var(--ezp-core-foreground-tertiary)}#wrap{background:var(--ezp-core-surface-tertiary);border-radius:var(--ezp-select-wrap-borderRadius, 0);-webkit-box-shadow:var(--ezp-select-wrap-boxShadowPositionTop, 0 -1px 0 0) var(--ezp-core-outline), var(--ezp-select-wrap-boxShadowPositionRight, 1px 0 0 0) var(--ezp-core-outline), var(--ezp-select-wrap-boxShadowPositionBottom, 0 1px 0 0) var(--ezp-core-outline), var(--ezp-select-wrap-boxShadowPositionLeft, -1px 0 0 0) var(--ezp-core-outline);box-shadow:var(--ezp-select-wrap-boxShadowPositionTop, 0 -1px 0 0) var(--ezp-core-outline), var(--ezp-select-wrap-boxShadowPositionRight, 1px 0 0 0) var(--ezp-core-outline), var(--ezp-select-wrap-boxShadowPositionBottom, 0 1px 0 0) var(--ezp-core-outline), var(--ezp-select-wrap-boxShadowPositionLeft, -1px 0 0 0) var(--ezp-core-outline);-webkit-transform:translateY(var(--ezp-select-wrap-translateY, 0));transform:translateY(var(--ezp-select-wrap-translateY, 0));-webkit-transition:border-radius var(--ezp-select-duration) var(--ezp-easing-out-quart), -webkit-transform var(--ezp-select-duration) var(--ezp-easing-out-quart), -webkit-box-shadow var(--ezp-select-duration) var(--ezp-easing-out-quart);transition:border-radius var(--ezp-select-duration) var(--ezp-easing-out-quart), -webkit-transform var(--ezp-select-duration) var(--ezp-easing-out-quart), -webkit-box-shadow var(--ezp-select-duration) var(--ezp-easing-out-quart);transition:transform var(--ezp-select-duration) var(--ezp-easing-out-quart), border-radius var(--ezp-select-duration) var(--ezp-easing-out-quart), box-shadow var(--ezp-select-duration) var(--ezp-easing-out-quart);transition:transform var(--ezp-select-duration) var(--ezp-easing-out-quart), border-radius var(--ezp-select-duration) var(--ezp-easing-out-quart), box-shadow var(--ezp-select-duration) var(--ezp-easing-out-quart), -webkit-transform var(--ezp-select-duration) var(--ezp-easing-out-quart), -webkit-box-shadow var(--ezp-select-duration) var(--ezp-easing-out-quart)}#toggle{background:var(--ezp-select-toggle-background, transparent);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:var(--ezp-select-toggle-cursor, pointer);display:grid;gap:var(--ezp-spacing-2) var(--ezp-spacing-3);grid-template-areas:var(--ezp-select-toggle-gridTemplateAreas, none);grid-template-columns:var(--ezp-select-toggle-gridTemplateColumns, none);grid-template-rows:var(--ezp-select-toggle-gridTemplateRows, auto);height:var(--ezp-select-toggle-height, auto);padding:var(--ezp-spacing-3)}#toggle:hover{--ezp-select-toggle-background:var(\n    --ezp-select-toggle-background-hover,\n    var(--ezp-core-shade-primary)\n  )}#icon{align-self:center;color:var(--ezp-select-icon-color, var(--ezp-core-foreground-secondary));grid-area:icon;margin:calc(var(--ezp-spacing-2) * -1) 0}#label{align-self:var(--ezp-select-label-alignSelf, auto);color:var(--ezp-select-label-color, var(--ezp-core-foreground-secondary));grid-area:label}#value{align-self:var(--ezp-select-value-alignSelf, auto);color:var(--value-color, var(--ezp-core-foreground-primary));grid-area:value}#accessory{align-self:center;color:var(--ezp-select-accessory-color, var(--ezp-core-foreground-secondary));grid-area:accessory;margin:calc(var(--ezp-spacing-2) * -1) 0}#list{-webkit-box-shadow:inset 0 1px 0 0 var(--ezp-core-outline);box-shadow:inset 0 1px 0 0 var(--ezp-core-outline);height:var(--ezp-select-list-height, 0);overflow:auto;-webkit-transition:height var(--ezp-select-duration) var(--ezp-easing-out-quart);transition:height var(--ezp-select-duration) var(--ezp-easing-out-quart)}.option{background:var(--ezp-select-option-background);-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:grid;gap:var(--ezp-spacing-3);grid-template:auto/auto 1fr;height:var(--ezp-select-option-height, auto);padding:0 0 0 var(--ezp-spacing-3)}.option:not(:last-child){--ezp-select-details-boxShadow:inset 0 -1px 0 0 var(--ezp-core-outline)}.option:hover{--ezp-select-option-background:var(--ezp-core-shade-primary)}.option:active{--ezp-select-option-background:var(--ezp-core-shade-secondary)}.option.is-selected{--ezp-select-indicator-opacity:1;--ezp-select-indicator-transform:translateX(0);--ezp-select-indicator-transition:opacity var(--ezp-select-duration)\n      var(--ezp-easing-out-quart),\n    transform var(--ezp-select-duration) var(--ezp-easing-out-quart), visibility 0s 0s;--ezp-select-indicator-visibility:visible}.indicator{-ms-flex-item-align:center;align-self:center;color:var(--ezp-theme-solid);margin:calc(var(--ezp-spacing-2) * -1) 0;opacity:var(--ezp-select-indicator-opacity, 0);-webkit-transform:var(--ezp-select-indicator-transform, translateX(var(--ezp-spacing-3)));transform:var(--ezp-select-indicator-transform, translateX(var(--ezp-spacing-3)));-webkit-transition:var(--ezp-select-indicator-transition, opacity var(--ezp-select-duration) var(--ezp-easing-out-quart), transform var(--ezp-select-duration) var(--ezp-easing-out-quart), visibility 0s var(--ezp-select-duration));transition:var(--ezp-select-indicator-transition, opacity var(--ezp-select-duration) var(--ezp-easing-out-quart), transform var(--ezp-select-duration) var(--ezp-easing-out-quart), visibility 0s var(--ezp-select-duration));visibility:var(--ezp-select-indicator-visibility, hidden)}.details{-webkit-box-shadow:var(--ezp-select-details-boxShadow);box-shadow:var(--ezp-select-details-boxShadow);display:grid;gap:var(--ezp-spacing-2);grid-template-columns:var(--ezp-select-details-gridTemplateColumns, 1fr);grid-template-rows:var(--ezp-select-details-gridTemplateRows, auto);padding:var(--ezp-spacing-3) var(--ezp-spacing-3) var(--ezp-spacing-3) 0}.title{-ms-flex-item-align:start;align-self:start;color:var(--ezp-core-foreground-primary)}.meta{-ms-flex-item-align:end;align-self:end;color:var(--ezp-core-foreground-secondary)}";

let EzpSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectToggle = createEvent(this, "selectToggle", 7);
    this.selectSelection = createEvent(this, "selectSelection", 7);
    this.backdrop = document.createElement('ezp-backdrop');
    this.containerHeight = 0;
    this.expandCover = false;
    this.expandRise = false;
    this.listHeight = 0;
    this.spacing = 6;
    this.toggleHeight = 0;
    this.wrapDiff = 0;
    this.wrapHeight = 0;
    this.wrapTop = 0;
    this.duration = 0;
    /** Description... */
    this.label = 'Label';
    /** Description... */
    this.placeholder = 'Placeholder';
    /** Description... */
    this.toggleFlow = 'horizontal';
    /** Description... */
    this.disabled = false;
    /**
     *
     * States
     *
     */
    /** Description... */
    this.expanded = false;
    /** Description... */
    this.selected = { id: false, title: '', meta: '' };
    /**
     *
     * Private methods
     *
     */
    this.toggle = () => {
      this.containerHeight = this.container.clientHeight - this.spacing * 2;
      this.listHeight = this.list.scrollHeight;
      this.wrapTop = this.component.offsetTop;
      this.wrapHeight = this.toggleHeight + this.listHeight;
      this.expandCover = this.wrapHeight > this.containerHeight;
      this.expandRise = this.wrapHeight > this.containerHeight - this.wrapTop;
      this.wrapDiff = this.containerHeight - this.wrapHeight - this.wrapTop;
      this.expanded = !this.expanded;
      this.selectToggle.emit(this.expanded);
    };
    this.select = (id) => {
      const delay = this.selected.id === id ? 0 : this.duration * 1000;
      this.selected = this.options.find((option) => option.id === id);
      this.selectSelection.emit(this.selected);
      window.setTimeout(() => {
        this.toggle();
      }, delay);
    };
    this.preSelect = () => {
      this.selected = this.options.find((option) => typeof this.preSelected === 'number'
        ? option.id === this.preSelected
        : typeof this.preSelected === 'string'
          ? option.title === this.preSelected
          : null);
    };
  }
  /**
   *
   * Watchers
   *
   */
  watchExpanded() {
    if (this.expandCover) {
      this.component.style.setProperty('--ezp-select-list-height', this.expanded ? `${this.containerHeight - this.toggleHeight}px` : '0px');
      this.component.style.setProperty('--ezp-select-wrap-translateY', this.expanded ? `${this.wrapTop * -1 + this.spacing}px` : '0px');
    }
    else if (this.expandRise) {
      this.component.style.setProperty('--ezp-select-list-height', this.expanded ? `${this.listHeight}px` : '0px');
      this.component.style.setProperty('--ezp-select-wrap-translateY', this.expanded ? `${this.wrapDiff + this.spacing}px` : '0px');
    }
    else {
      this.component.style.setProperty('--ezp-select-list-height', this.expanded ? `${this.listHeight}px` : '0px');
    }
    if (this.expanded) {
      this.backdrop.visible = true;
      this.container.appendChild(this.backdrop);
    }
    else {
      this.backdrop.visible = false;
    }
  }
  /**
   *
   * Lifecycle methods
   *
   */
  componentWillLoad() {
    this.container = this.component.closest('[data-backdrop-surface]');
    this.backdrop.addEventListener('backdropHideStart', () => {
      this.expanded = false;
    });
    this.backdrop.addEventListener('backdropHideEnd', () => {
      this.container.removeChild(this.backdrop);
    });
    if (this.preSelected !== undefined && this.preSelected !== '' && this.preSelected !== null) {
      this.preSelect();
    }
  }
  componentDidLoad() {
    const styles = getComputedStyle(this.component);
    this.toggleHeight = parseInt(styles.getPropertyValue('--ezp-select-toggle-height'));
    this.duration = parseFloat(styles.getPropertyValue('--ezp-select-duration'));
  }
  componentWillUpdate() {
    if (this.selected.id === false &&
      this.preSelected !== undefined &&
      this.preSelected !== '' &&
      this.preSelected !== null) {
      this.preSelect();
    }
  }
  /**
   *
   * Render method
   *
   */
  render() {
    const hostClasses = [
      this.expanded ? 'is-expanded' : '',
      this.icon ? 'has-icon' : '',
      `toggle-${this.toggleFlow}`,
      this.optionFlow ? `option-${this.optionFlow}` : '',
      this.disabled ? 'disabled' : '',
    ];
    const labelLevel = this.toggleFlow === 'horizontal' ? 'secondary' : 'tertiary';
    return (h(Host, { class: hostClasses.join(' ') }, h("div", { id: "wrap" }, h("div", { id: "toggle", onClick: () => !this.disabled && this.toggle() }, this.icon ? h("ezp-icon", { id: "icon", name: this.icon }) : null, h("ezp-label", { id: "label", noWrap: true, level: labelLevel, text: this.label }), h("ezp-label", { id: "value", ellipsis: true, text: this.selected.title !== '' ? this.selected.title : this.placeholder }), h("ezp-icon", { id: "accessory", name: "expand" })), h("div", { id: "list", ref: (element) => (this.list = element) }, this.options.map((option) => {
      if (option.title !== '') {
        return (h("div", { class: `option ${option.id === this.selected.id ? 'is-selected' : ''} ${option.meta !== '' ? 'has-meta' : ''} `, onClick: () => this.select(option.id) }, h("ezp-icon", { name: "checkmark", class: "indicator" }), h("div", { class: "details" }, h("ezp-label", { class: "title", ellipsis: true, text: option.title }), option.meta !== '' ? (h("ezp-label", { level: "tertiary", class: "meta", text: option.meta, ellipsis: true })) : null)));
      }
    })))));
  }
  get component() { return getElement(this); }
  static get watchers() { return {
    "expanded": ["watchExpanded"]
  }; }
};
EzpSelect.style = ezpSelectCss;

const ezpStepperCss = ":host{-ms-flex-align:center;align-items:center;background:var(--ezp-core-surface-tertiary);border-radius:3px;-webkit-box-shadow:var(--ezp-stepper-boxShadowPosition, 0 0 0 1px) var(--ezp-core-outline);box-shadow:var(--ezp-stepper-boxShadowPosition, 0 0 0 1px) var(--ezp-core-outline);display:grid;gap:var(--ezp-spacing-3);grid-template:var(--ezp-stepper-gridTemplate, auto/auto 1fr auto);padding:0 var(--ezp-spacing-2) 0 var(--ezp-spacing-3);position:relative;z-index:0}:host(.focused){--ezp-stepper-icon-color:var(--ezp-theme-solid);--ezp-stepper-label-color:var(--ezp-theme-solid)}:host(.has-icon){--ezp-stepper-gridTemplate:auto / repeat(2, auto) 1fr auto}#toggle{background:var(--ezp-stepper-toggle-background, transparent);border-radius:3px;cursor:pointer;height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@media (hover: hover){#toggle:hover{--ezp-stepper-toggle-background:var(--ezp-core-shade-primary)}}#icon{color:var(--ezp-stepper-icon-color, var(--ezp-core-foreground-secondary));pointer-events:none}#label{color:var(--ezp-stepper-label-color, var(--ezp-core-foreground-secondary));pointer-events:none}#input{-moz-appearance:textfield;-webkit-appearance:none;appearance:none;background:transparent;border:0;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--ezp-core-foreground-primary);cursor:inherit;font-family:inherit;-webkit-font-feature-settings:\"tnum\";font-feature-settings:\"tnum\";font-size:14px;-webkit-font-smoothing:antialiased;height:30px;letter-spacing:-0.0062235443em;margin:0;outline:none;padding:0;pointer-events:none;text-align:right;width:100%}#input::-webkit-outer-spin-button,#input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.buttons{display:-ms-flexbox;display:flex}.button{-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--ezp-stepper-button-background, transparent);border:0;border-radius:50%;-webkit-box-shadow:none;box-shadow:none;color:var(--ezp-stepper-button-color, var(--ezp-theme-solid));cursor:var(--ezp-stepper-button-cursor, pointer);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:0;outline:none;padding:var(--ezp-spacing-1)}@media (hover: hover){.button:not(:disabled):hover{--ezp-stepper-button-background:var(--ezp-core-shade-primary)}.button:not(:disabled):active{--ezp-stepper-button-background:var(--ezp-core-shade-secondary)}}.button:disabled{--ezp-stepper-button-color:var(--ezp-core-foreground-tertiary);--ezp-stepper-button-cursor:default}";

let EzpStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.stepperChanged = createEvent(this, "stepperChanged", 7);
    /** Description... */
    this.label = 'Label';
    /** Description... */
    this.min = 1;
    /**
     *
     * States
     *
     */
    /** Description... */
    this.canDecrease = true;
    /** Description... */
    this.canIncrease = true;
    /** Description... */
    this.focused = false;
    /** Description... */
    this.value = 1;
    /**
     *
     * Private methods
     *
     */
    this.handleDecrease = () => {
      this.value--;
    };
    this.handleIncrease = () => {
      this.value++;
    };
    this.handleInput = () => {
      this.value = this.input.value !== '' ? parseInt(this.input.value) : this.min;
    };
    this.setFocus = () => {
      this.input.focus();
    };
    this.handleBlur = () => {
      this.focused = false;
    };
    this.handleFocus = () => {
      this.focused = true;
    };
  }
  /**
   *
   * Watchers
   *
   */
  watchValue() {
    this.canIncrease = this.max !== undefined ? this.value < this.max : true;
    this.canDecrease = this.min !== undefined ? this.value > this.min : true;
    this.stepperChanged.emit(this.value);
  }
  /**
   *
   * Lifecycle methods
   *
   */
  componentWillLoad() {
    this.watchValue();
  }
  /**
   *
   * Render method
   *
   */
  render() {
    return (h(Host, { class: `${this.focused ? 'focused' : ''} ${this.icon ? 'has-icon' : ''}` }, h("div", { id: "toggle", onClick: this.setFocus }), this.icon ? h("ezp-icon", { id: "icon", name: this.icon }) : null, h("ezp-label", { id: "label", noWrap: true, text: this.label }), h("input", { id: "input", type: "number", ref: (input) => (this.input = input), min: this.min.toString(), max: this.max.toString(), value: this.value.toString(), onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur }), h("div", { class: "buttons" }, h("button", { class: "button", disabled: !this.canDecrease, onClick: this.handleDecrease }, h("ezp-icon", { name: "minus" })), h("button", { class: "button", disabled: !this.canIncrease, onClick: this.handleIncrease }, h("ezp-icon", { name: "plus" })))));
  }
  static get watchers() { return {
    "value": ["watchValue"]
  }; }
};
EzpStepper.style = ezpStepperCss;

const ezpUserMenuCss = ":host{background:var(--ezp-core-surface-tertiary);border-radius:6px;-webkit-box-shadow:var(--ezp-userMenu-boxShadow, 0 0 0 1px var(--ezp-black-10));box-shadow:var(--ezp-userMenu-boxShadow, 0 0 0 1px var(--ezp-black-10));display:block;opacity:var(--ezp-userMenu-opacity, 0);position:absolute;right:0;top:0;-webkit-transform:scale(var(--ezp-userMenu-scale, 0.94, 0.94));transform:scale(var(--ezp-userMenu-scale, 0.94, 0.94));-webkit-transform-origin:right top;transform-origin:right top;-webkit-transition:var(--ezp-userMenu-transition, opacity var(--ezp-duration-3) var(--ezp-easing-out-quart), transform var(--ezp-duration-3) var(--ezp-easing-out-quart), visibility 0s var(--ezp-duration-3));transition:var(--ezp-userMenu-transition, opacity var(--ezp-duration-3) var(--ezp-easing-out-quart), transform var(--ezp-duration-3) var(--ezp-easing-out-quart), visibility 0s var(--ezp-duration-3));visibility:var(--ezp-userMenu-visibility, hidden);z-index:5}:host(.is-open){--ezp-userMenu-opacity:1;--ezp-userMenu-scale:1, 1;--ezp-userMenu-transition:opacity var(--ezp-duration-3) var(--ezp-easing-out-quart),\n    transform var(--ezp-duration-3) var(--ezp-easing-out-quart), visibility 0s 0s;--ezp-userMenu-visibility:visible}@media (prefers-color-scheme: dark){:host{--ezp-userMenu-separator-position:inset 0 0 0 var(--hairline-width-positive)}}#header{-ms-flex-align:center;align-items:center;-webkit-box-shadow:var(--ezp-userMenu-header-boxShadowPosition, 0 1px 0 0) var(--ezp-core-outline);box-shadow:var(--ezp-userMenu-header-boxShadowPosition, 0 1px 0 0) var(--ezp-core-outline);-webkit-box-shadow:0;box-shadow:0;display:grid;grid-template:auto/1fr auto;padding:var(--ezp-spacing-4) var(--ezp-spacing-3) var(--ezp-spacing-4) var(--ezp-spacing-4)}#name{color:var(--ezp-core-foreground-primary)}#close{margin:calc(var(--ezp-spacing-3) * -1) 0}#links{-webkit-box-shadow:var(--ezp-userMenu-links-boxShadowPosition, 0 1px 0 0) var(--ezp-core-outline);box-shadow:var(--ezp-userMenu-links-boxShadowPosition, 0 1px 0 0) var(--ezp-core-outline);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:var(--ezp-spacing-2)}.link{-ms-flex-align:center;align-items:center;background:var(--ezp-userMenu-link-background, transparent);border-radius:3px;color:var(--ezp-core-foreground-primary);cursor:pointer;display:grid;gap:var(--ezp-spacing-3);grid-template:auto/auto 1fr;padding:var(--ezp-spacing-3);text-decoration:none}.link:hover{--ezp-userMenu-link-background:var(--ezp-core-shade-primary)}.link__icon{color:var(--ezp-theme-solid);margin:calc(var(--ezp-spacing-2) * -1) 0}.caption{color:var(--ezp-core-foreground-primary)}#theme{-webkit-box-shadow:var(--ezp-userMenu-theme-boxShadowPosition, 0 1px 0 0) var(--ezp-core-outline);box-shadow:var(--ezp-userMenu-theme-boxShadowPosition, 0 1px 0 0) var(--ezp-core-outline);display:grid;gap:var(--ezp-spacing-3);grid-template:repeat(2, auto)/1fr;padding:var(--ezp-spacing-4) var(--ezp-spacing-4) var(--ezp-spacing-3)}#swatches{display:-ms-flexbox;display:flex;margin:0 calc(var(--ezp-spacing-2) * -1)}.swatch{-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--ezp-userMenu-swatch-background, transparent);border:0;border-radius:50%;color:var(--ezp-userMenu-swatch-color);cursor:var(--ezp-userMenu-swatch-cursor, pointer);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:0;opacity:var(--ezp-userMenu-swatch-opacity, 1);outline:none;padding:var(--ezp-spacing-2)}@media (hover: hover){.swatch:not(.selected):hover{--ezp-userMenu-swatch-background:var(--ezp-userMenu-swatch-theme-translucent)}.swatch:not(.selected):active{--ezp-userMenu-swatch-opacity:0.74}}.swatch.selected{--ezp-userMenu-dot-boxShadowSize:10px;--ezp-userMenu-swatch-background:var(--ezp-userMenu-swatch-theme-translucent);--ezp-userMenu-swatch-cursor:normal}.swatch.selected>.dot{-webkit-animation:dot-bounce var(--ezp-duration-2) ease-in-out;animation:dot-bounce var(--ezp-duration-2) ease-in-out}.swatch--blue{--ezp-userMenu-swatch-theme-solid:var(--ezp-accent-blue-solid);--ezp-userMenu-swatch-theme-translucent:var(--ezp-accent-blue-translucent)}.swatch--cyan{--ezp-userMenu-swatch-theme-solid:var(--ezp-accent-cyan-solid);--ezp-userMenu-swatch-theme-translucent:var(--ezp-accent-cyan-translucent)}.swatch--green{--ezp-userMenu-swatch-theme-solid:var(--ezp-accent-green-solid);--ezp-userMenu-swatch-theme-translucent:var(--ezp-accent-green-translucent)}.swatch--teal{--ezp-userMenu-swatch-theme-solid:var(--ezp-accent-teal-solid);--ezp-userMenu-swatch-theme-translucent:var(--ezp-accent-teal-translucent)}.swatch--orange{--ezp-userMenu-swatch-theme-solid:var(--ezp-accent-orange-solid);--ezp-userMenu-swatch-theme-translucent:var(--ezp-accent-orange-translucent)}.swatch--pink{--ezp-userMenu-swatch-theme-solid:var(--ezp-accent-pink-solid);--ezp-userMenu-swatch-theme-translucent:var(--ezp-accent-pink-translucent)}.swatch--red{--ezp-userMenu-swatch-theme-solid:var(--ezp-accent-red-solid);--ezp-userMenu-swatch-theme-translucent:var(--ezp-accent-red-translucent)}.swatch--violet{--ezp-userMenu-swatch-theme-solid:var(--ezp-accent-violet-solid);--ezp-userMenu-swatch-theme-translucent:var(--ezp-accent-violet-translucent)}.dot{background:var(--ezp-userMenu-dot-background, transparent);border-radius:50%;-webkit-box-shadow:inset 0 0 0 var(--ezp-userMenu-dot-boxShadowSize, 4px) var(--ezp-userMenu-swatch-theme-solid);box-shadow:inset 0 0 0 var(--ezp-userMenu-dot-boxShadowSize, 4px) var(--ezp-userMenu-swatch-theme-solid);height:18px;-webkit-transition:-webkit-box-shadow var(--ezp-duration-2);transition:-webkit-box-shadow var(--ezp-duration-2);transition:box-shadow var(--ezp-duration-2);transition:box-shadow var(--ezp-duration-2), -webkit-box-shadow var(--ezp-duration-2);width:18px}#appearance{display:grid;gap:var(--ezp-spacing-3);grid-template:repeat(2, auto)/1fr;padding:var(--ezp-spacing-4) var(--ezp-spacing-4) var(--ezp-spacing-3)}#tabs{display:grid;grid-template:auto/repeat(3, 1fr);margin:0 calc(var(--ezp-spacing-2) * -1)}.tab{--ezp-icon-height:8px;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--ezp-userMenu-tab-background, transparent);border:0;border-radius:14px;color:var(--ezp-userMenu-tab-color, var(--ezp-core-foreground-secondary));cursor:var(--ezp-userMenu-tab-cursor, pointer);display:-ms-flexbox;display:flex;gap:var(--ezp-spacing-2);-ms-flex-pack:center;justify-content:center;margin:0;outline:none;padding:var(--ezp-spacing-3) var(--ezp-spacing-3) var(--ezp-spacing-3) var(--ezp-spacing-2)}@media (hover: hover){.tab:not(.selected):hover{--ezp-userMenu-tab-background:var(--ezp-core-shade-primary)}.tab:not(.selected):active{--ezp-userMenu-tab-background:var(--ezp-core-shade-secondary)}}.tab.selected{--ezp-userMenu-tab-background:var(--ezp-theme-translucent);--ezp-userMenu-tab-color:var(--ezp-theme-solid);--ezp-userMenu-tab-cursor:normal}@-webkit-keyframes dot-bounce{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}50%{-webkit-transform:scale(0.84, 0.84);transform:scale(0.84, 0.84)}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes dot-bounce{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}50%{-webkit-transform:scale(0.84, 0.84);transform:scale(0.84, 0.84)}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}";

let EzpUserMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.userMenuClosure = createEvent(this, "userMenuClosure", 7);
    this.logoutEmitter = createEvent(this, "logoutEmitter", 7);
    this.backdrop = document.createElement('ezp-backdrop');
    this.links = [
      {
        title: i18next.t('user_menu.account'),
        icon: 'account',
        href: 'https://app.ezeep.com',
      },
      {
        title: i18next.t('user_menu.help'),
        icon: 'help',
        href: 'https://support.ezeep.com',
      },
    ];
    this.themes = ['pink', 'red', 'orange', 'green', 'teal', 'cyan', 'blue', 'violet'];
    this.appearances = [
      { title: i18next.t('user_menu.system'), name: 'system' },
      { title: i18next.t('user_menu.light'), name: 'light' },
      { title: i18next.t('user_menu.dark'), name: 'dark' },
    ];
    this.name = 'John Doe';
    this.open = false;
    this.handleClose = () => {
      this.userMenuClosure.emit();
    };
    this.logOut = () => {
      localStorage.removeItem('properties');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('access_token');
      localStorage.removeItem('printer');
      localStorage.removeItem('isAuthorized');
      authStore.state.isAuthorized = false;
      this.logoutEmitter.emit();
    };
    this.handleTheme = (theme) => {
      userStore.state.theme = theme;
    };
    this.handleAppearance = (appearance) => {
      userStore.state.appearance = appearance;
    };
  }
  /**
   *
   * Privatre methods
   *
   */
  /**
   *
   * Watchers
   *
   */
  watchOpen() {
    if (this.open) {
      this.backdrop.visible = true;
      this.container.appendChild(this.backdrop);
    }
    else {
      this.backdrop.visible = false;
      this.userMenuClosure.emit();
    }
  }
  /**
   *
   * Render method
   *
   */
  componentWillLoad() {
    this.container = this.component.closest('[data-backdrop-surface]');
    this.backdrop.addEventListener('backdropHideStart', () => {
      this.open = false;
    });
    this.backdrop.addEventListener('backdropHideEnd', () => {
      this.container.removeChild(this.backdrop);
    });
  }
  /**
   *
   * Render method
   *
   */
  render() {
    return (h(Host, { class: this.open ? 'is-open' : '' }, h("div", { id: "header" }, h("ezp-label", { ellipsis: true, id: "name", weight: "heavy", text: this.name }), h("ezp-icon-button", { id: "close", level: "tertiary", icon: "close", onClick: this.handleClose })), h("div", { id: "links" }, this.links.map((link) => (h("a", { class: "link", href: link.href, target: "_blank", rel: "noopener noreferrer" }, h("ezp-icon", { class: "link__icon", name: link.icon }), h("ezp-label", { text: link.title })))), h("a", { class: "link", onClick: this.logOut }, h("ezp-icon", { class: "link__icon", name: "logout" }), h("ezp-label", { text: i18next.t('user_menu.logout') }))), h("div", { id: "theme" }, h("ezp-label", { class: "caption", text: `${i18next.t('user_menu.theme')}:`, weight: "heavy" }), h("div", { id: "swatches" }, this.themes.map((theme) => (h("button", { class: `swatch swatch--${theme} ${theme === userStore.state.theme ? 'selected' : ''}`, onClick: () => this.handleTheme(theme) }, h("span", { class: "dot" })))))), h("div", { id: "appearance" }, h("ezp-label", { class: "caption", text: `${i18next.t('user_menu.appearance')}:`, weight: "heavy" }), h("div", { id: "tabs" }, this.appearances.map((appearance) => (h("button", { class: `tab ${appearance.name === userStore.state.appearance ? 'selected' : ''}`, onClick: () => this.handleAppearance(appearance.name) }, h("ezp-icon", { name: appearance.name }), h("ezp-label", { text: appearance.title, level: "tertiary", weight: "strong" }))))))));
  }
  get component() { return getElement(this); }
  static get watchers() { return {
    "open": ["watchOpen"]
  }; }
};
EzpUserMenu.style = ezpUserMenuCss;

export { EzpSelect as ezp_select, EzpStepper as ezp_stepper, EzpUserMenu as ezp_user_menu };
