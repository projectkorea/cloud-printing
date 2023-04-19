import { p as promiseResolve, b as bootstrapLazy } from './index-f673b6e7.js';
import { g as globalScripts } from './app-globals-28960cbc.js';

/*
 Stencil Client Patch Esm v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  globalScripts();
  return bootstrapLazy([["ezp-icon_2",[[1,"ezp-icon",{"name":[1],"size":[1],"framed":[4]}],[1,"ezp-label",{"ellipsis":[4],"level":[1],"noWrap":[4,"no-wrap"],"text":[1],"weight":[1]}]]],["ezp-printer-selection",[[1,"ezp-printer-selection",{"clientID":[1,"client-i-d"],"redirectURI":[1,"redirect-u-r-i"],"filename":[1025],"fileurl":[1],"filetype":[1025],"fileid":[1025],"file":[16],"hidemenu":[4],"hideheader":[4],"seamless":[4],"loading":[32],"printProcessing":[32],"uploading":[32],"preparingUpload":[32],"printSuccess":[32],"printFailed":[32],"notSupported":[32],"noPrinters":[32],"userMenuOpen":[32],"printStopped":[32],"userName":[32],"printers":[32],"selectedPrinter":[32],"printerConfig":[32],"selectedPrinterConfig":[32],"selectedProperties":[32]},[[0,"selectSelection","listenSelectSelection"],[0,"stepperChanged","listenStepperChanged"],[0,"userMenuClosure","listenUserMenuClosure"],[0,"logoutEmitter","listenLogout"],[0,"statusCancel","listenStatusCancel"],[0,"statusClose","listenStatusClose"],[0,"statusRetry","listenStatusRetry"]]]]],["ezp-auth",[[1,"ezp-auth",{"clientID":[1025,"client-i-d"],"redirectURI":[1025,"redirect-u-r-i"],"hidelogin":[4],"trigger":[1],"code":[1],"auth":[32],"authURI":[32],"accessToken":[32]},[[0,"dialogAction","listenDialogAction"],[0,"dialogClose","listenDialogClose"],[0,"statusCancel","listenStatusCancel"]]]]],["ezp-upload",[[1,"ezp-upload",{"filename":[32],"dragging":[32]},[[1,"dragenter","handleDragEnter"],[0,"dragover","handleDragOver"],[1,"dragleave","handleDragLeave"],[0,"drop","handleDrop"],[4,"printCancel","listenPrintCancel"]]]]],["ezp-printing",[[1,"ezp-printing"]]],["ezp-icon-button_2",[[1,"ezp-icon-button",{"blank":[4],"disabled":[4],"href":[1],"icon":[1],"level":[1],"type":[1]}],[1,"ezp-text-button",{"blank":[4],"disabled":[4],"href":[1],"level":[1],"label":[1],"type":[1],"small":[4]}]]],["ezp-dialog",[[1,"ezp-dialog",{"heading":[1],"description":[1],"action":[1],"iconName":[1,"icon-name"],"iconSize":[1,"icon-size"],"iconFramed":[4,"icon-framed"],"instance":[1]}]]],["ezp-status",[[1,"ezp-status",{"description":[1],"processing":[4],"instance":[1],"icon":[1],"cancel":[8],"close":[8],"retry":[8]}]]],["ezp-backdrop",[[1,"ezp-backdrop",{"visible":[1028]},[[0,"animationend","listenAnimationEnd"]]]]],["ezp-select_3",[[1,"ezp-user-menu",{"name":[1],"open":[1028]}],[1,"ezp-select",{"icon":[1],"label":[1],"optionFlow":[1,"option-flow"],"options":[16],"placeholder":[1],"preSelected":[8,"pre-selected"],"toggleFlow":[1,"toggle-flow"],"disabled":[4],"expanded":[32],"selected":[32]}],[1,"ezp-stepper",{"icon":[1],"label":[1],"max":[2],"min":[2],"canDecrease":[32],"canIncrease":[32],"focused":[32],"value":[32]}]]]], options);
  });
};

export { defineCustomElements };
