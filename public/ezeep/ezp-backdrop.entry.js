import { r as registerInstance, c as createEvent, h, a as getElement, H as Host } from './index-f673b6e7.js';

const ezpBackdropCss = ":host{-webkit-animation:var(--ezp-backdrop-animation-name, host-in) var(--ezp-duration-3) forwards var(--ezp-easing-out-quart);animation:var(--ezp-backdrop-animation-name, host-in) var(--ezp-duration-3) forwards var(--ezp-easing-out-quart);background:var(--ezp-core-backdrop);border-radius:var(--ezp-backdrop-border-radius, 6px);display:block;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:4}:host(.hide){--ezp-backdrop-animation-name:host-out}@-webkit-keyframes host-in{0%{opacity:0}100%{opacity:1}}@keyframes host-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes host-out{0%{opacity:1}100%{opacity:0}}@keyframes host-out{0%{opacity:1}100%{opacity:0}}";

let EzpBackdrop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backdropHideStart = createEvent(this, "backdropHideStart", 7);
    this.backdropHideEnd = createEvent(this, "backdropHideEnd", 7);
    this.visible = true;
  }
  handleClick() {
    this.visible = false;
    this.backdropHideStart.emit();
  }
  listenAnimationEnd() {
    if (!this.visible) {
      this.backdropHideEnd.emit();
    }
  }
  render() {
    return h(Host, { class: { hide: !this.visible }, onClick: () => this.handleClick() });
  }
  get component() { return getElement(this); }
};
EzpBackdrop.style = ezpBackdropCss;

export { EzpBackdrop as ezp_backdrop };
