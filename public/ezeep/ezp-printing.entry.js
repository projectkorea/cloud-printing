import { r as registerInstance, h, H as Host } from './index-f673b6e7.js';

const ezpPrintingCss = ":host{display:block}";

let EzpPrinting = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
EzpPrinting.style = ezpPrintingCss;

export { EzpPrinting as ezp_printing };
