import{r as e,c as i,h as t,H as a}from"./p-2fd75363.js";import{i as o}from"./p-bb067c01.js";let s=class{constructor(t){e(this,t),this.dialogClose=i(this,"dialogClose",7),this.dialogAction=i(this,"dialogAction",7),this.action=o.t("button_actions.close"),this.iconSize="large",this.iconFramed=!0,this.handleClose=()=>{this.dialogClose.emit(this.instance)},this.handleAction=()=>{this.dialogAction.emit(this.instance)}}componentWillLoad(){}render(){return t(a,null,t("div",{id:"box"},t("div",{id:"header"},t("ezp-icon-button",{level:"tertiary",icon:"close",type:"button",onClick:this.handleClose})),t("div",{id:"body"},this.iconName&&t("ezp-icon",{name:this.iconName,size:this.iconSize,framed:this.iconFramed}),t("div",{id:"text"},t("ezp-label",{text:this.heading,weight:"heavy"}),t("ezp-label",{text:this.description}))),t("div",{id:"footer"},t("ezp-text-button",{type:"button",level:"primary",onClick:this.handleAction,label:this.action}))))}};s.style=":host{--ezp-icon-fill:var(--ezp-theme-solid);-ms-flex-line-pack:center;align-content:center;background:var(--ezp-core-backdrop);display:grid;grid-template:auto/minmax(auto, 280px);height:100%;-ms-flex-pack:center;justify-content:center;left:0;position:fixed;top:0;width:100%}#box{background:var(--ezp-core-surface-tertiary);border-radius:6px;-webkit-box-shadow:var(--ezp-dialog-box-boxShadow, 0 0 0 1px var(--ezp-black-10));box-shadow:var(--ezp-dialog-box-boxShadow, 0 0 0 1px var(--ezp-black-10))}#header{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding:var(--ezp-spacing-2) var(--ezp-spacing-3)}#body{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--ezp-spacing-5);padding:0 var(--ezp-spacing-5);text-align:center}#text{color:var(--ezp-core-foreground-primary);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--ezp-spacing-4)}#footer{display:grid;grid-template:auto/minmax(144px, auto);-ms-flex-pack:center;justify-content:center;padding:var(--ezp-spacing-5)}";export{s as ezp_dialog}