!function(){function e(e,n){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(s)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{WjKW:function(t,a,c){"use strict";c.r(a),c.d(a,"OperationsModule",(function(){return $e}));var l=c("iInd"),f=c("IbW5"),b=c("XDzf"),p=c("J6cT"),d=c("uuU0"),g=c("QH++"),h=c("8Y7J"),m=c("3qho"),v=c("SVse"),y=c("I0FJ"),S=c("CNMR");function I(e,t){if(1&e&&(h.Qb(0,"page-content",2),h.Qb(1,"alert",3),h.Qb(2,"div",4),h.Dc(3),h.Pb(),h.Pb(),h.Pb()),2&e){var n=h.Zb();h.gc("heading",n.data.title)("mobileHeading",n.i18n.operation.mobileTitle.result),h.xb(1),h.gc("type",n.alertType),h.xb(2),h.Ec(n.data.notification)}}var O,x=((O=function(e){o(a,e);var t=s(a);function a(e,r){var i;return n(this,a),(i=t.call(this,e)).operationsService=r,i.alertType="success",i}return r(a,[{key:"ngOnInit",value:function(){var e=this,t=this.route.snapshot;i(u(a.prototype),"ngOnInit",this).call(this),this.addSub(this.operationsService.runCustomOperationCallback({id:t.params.id,token:t.params.token,body:{method:"GET",parameters:t.queryParams}}).subscribe((function(t){t.notificationLevel===b.K.WARNING?e.alertType="warning":t.notificationLevel===b.K.ERROR&&(e.alertType="danger"),e.data=t})))}},{key:"resolveMenu",value:function(){return this.login.user?g.b.DASHBOARD:g.b.HOME}}]),a}(d.a)).\u0275fac=function(e){return new(e||O)(h.Kb(h.r),h.Kb(p.a))},O.\u0275cmp=h.Eb({type:O,selectors:[["operation-callback"]],features:[h.ub],decls:3,vars:4,consts:[[3,"ready"],["last","",3,"heading","mobileHeading",4,"ngIf"],["last","",3,"heading","mobileHeading"],[3,"type"],[1,"break-nl"]],template:function(e,t){1&e&&(h.Qb(0,"page-layout",0),h.ac(1,"async"),h.Bc(2,I,4,4,"page-content",1),h.Pb()),2&e&&(h.gc("ready",h.bc(1,2,t.data$)),h.xb(2),h.gc("ngIf",t.data))},directives:[m.a,v.t,y.a,S.a],pipes:[v.b],encapsulation:2,changeDetection:0}),O),R=function(e){return e.User="user",e.Ad="ad",e.Record="record",e.Transfer="transfer",e.Standalone="standalone",e}({}),w=c("OoS4"),P=c("mwYl"),T=c("Ewue"),k=c("tAww"),F=c("rCAV"),A=c("ObUu"),C=c("Ky6R"),H=c("2Vo4"),B=c("SxV6"),D=c("vkgz"),Z=c("UXR7"),E=c("OTwK"),$=c("Zilp"),Q=c("IbGL"),M=c("Ae/X"),L=c("iM3x"),N=c("JFlR"),j=c("s7LF"),q=c("Y+zs"),U=c("bBjs"),_=c("ZJXG"),K=c("HZ9B"),X=c("cyUc");function V(e,t){1&e&&h.Mb(0)}function G(e,t){1&e&&h.Mb(0)}function J(e,t){if(1&e){var n=h.Rb();h.Qb(0,"actions",11),h.Qb(1,"action-button",12),h.Xb("action",(function(){return h.sc(n),h.Zb(3).run()})),h.ac(2,"async"),h.Pb(),h.Pb()}if(2&e){var a=h.Zb(3);h.xb(1),h.gc("disabled",h.bc(2,2,a.requesting$))("label",a.data.customSubmitLabel||a.i18n.general.submit)}}function z(e,t){if(1&e&&h.Lb(0,"label-value",17),2&e){var n=t.$implicit,a=h.Zb().$implicit;h.gc("label",n.header)("value",a[n.property])}}function Y(e,t){if(1&e&&(h.Qb(0,"mobile-result"),h.Bc(1,z,1,2,"label-value",16),h.ac(2,"async"),h.Pb()),2&e){var n,a=h.Zb(4);h.xb(1),h.gc("ngForOf",null==(n=h.bc(2,1,a.result$))?null:n.columns)}}var W=function(e,t){return{textAlign:e,width:t}};function ee(e,t){if(1&e&&(h.Qb(0,"th",21),h.Dc(1),h.Pb()),2&e){var n=t.$implicit;h.gc("ngStyle",h.kc(2,W,n.align,n.width)),h.xb(1),h.Fc(" ",n.header," ")}}var te=function(e){return{textAlign:e}};function ne(e,t){if(1&e&&(h.Lb(0,"td",24),h.ac(1,"trust")),2&e){var n=t.$implicit,a=h.Zb().$implicit;h.gc("ngStyle",h.jc(4,te,n.align))("innerHTML",h.bc(1,2,a[n.property]),h.tc)}}function ae(e,t){if(1&e){var n=h.Rb();h.Qb(0,"tr",22),h.Xb("click",(function(){h.sc(n);var e=t.$implicit;return h.Zb(5).rowClick(e)})),h.Bc(1,ne,2,6,"td",23),h.ac(2,"async"),h.Pb()}if(2&e){var a,r=h.Zb(5);h.xb(1),h.gc("ngForOf",null==(a=h.bc(2,1,r.result$))?null:a.columns)}}var re=function(e){return{"cursor-pointer":e}};function ie(e,t){if(1&e&&(h.Qb(0,"table",18),h.Qb(1,"thead"),h.Bc(2,ee,2,5,"th",19),h.ac(3,"async"),h.Pb(),h.Qb(4,"tbody"),h.Bc(5,ae,3,3,"tr",20),h.ac(6,"async"),h.Pb(),h.Pb()),2&e){var n,a,r=h.Zb(4);h.gc("ngClass",h.jc(7,re,r.data.rowAction)),h.xb(2),h.gc("ngForOf",null==(n=h.bc(3,3,r.result$))?null:n.columns),h.xb(3),h.gc("ngForOf",null==(a=h.bc(6,5,r.result$))?null:a.rows)}}function oe(e,t){if(1&e){var n=h.Rb();h.Qb(0,"results-layout",13),h.Xb("update",(function(e){return h.sc(n),h.Zb(3).updatePage(e)})),h.Bc(1,Y,3,3,"mobile-result",14),h.Bc(2,ie,7,9,"table",15),h.Pb()}if(2&e){var a=h.Zb(3);h.gc("results",a.pageResults)("onClick",a.onClick)}}function ce(e,t){if(1&e&&(h.Ob(0),h.Qb(1,"page-content",7),h.ac(2,"async"),h.Bc(3,G,1,0,"ng-container",8),h.Bc(4,J,3,4,"actions",9),h.Pb(),h.Bc(5,oe,3,2,"results-layout",10),h.ac(6,"async"),h.Nb()),2&e){var n=h.Zb(2),a=h.qc(8);h.xb(1),h.gc("mode",n.hasSearchFields?"filters":"emptyFilters")("heading",n.data.name)("mobileHeading",n.data.label)("headingActions",h.bc(2,7,n.headingActions$)),h.xb(2),h.gc("ngTemplateOutlet",a),h.xb(1),h.gc("ngIf",!n.runDirectly),h.xb(1),h.gc("ngIf",h.bc(6,9,n.pageResults$))}}function se(e,t){if(1&e&&h.Bc(0,ce,7,11,"ng-container",6),2&e){var n=h.Zb(),a=h.qc(6);h.gc("ngIf",n.isSearch)("ngIfElse",a)}}function le(e,t){if(1&e&&(h.Qb(0,"alert",31),h.Lb(1,"div",32),h.ac(2,"trust"),h.Pb()),2&e){var n=h.Zb(3);h.xb(1),h.gc("innerHTML",h.bc(2,1,n.data.informationText),h.tc)}}function ue(e,t){1&e&&h.Mb(0)}function fe(e,t){if(1&e){var n=h.Rb();h.Qb(0,"actions"),h.Qb(1,"action-button",12),h.Xb("action",(function(){return h.sc(n),h.Zb(3).run()})),h.ac(2,"async"),h.Pb(),h.Pb()}if(2&e){var a=h.Zb(3);h.xb(1),h.gc("disabled",h.bc(2,2,a.requesting$))("label",a.data.customSubmitLabel||a.i18n.general.submit)}}function be(e,t){if(1&e&&(h.Qb(0,"div",33),h.Dc(1),h.Pb()),2&e){var n=h.Zb(3);h.xb(1),h.Fc(" ",n.i18n.operation.redirecting," ")}}function pe(e,t){if(1&e&&(h.Qb(0,"page-content",27),h.Bc(1,le,3,3,"alert",28),h.Bc(2,ue,1,0,"ng-container",8),h.Bc(3,fe,3,4,"actions",29),h.ac(4,"async"),h.Bc(5,be,2,1,"div",30),h.ac(6,"async"),h.Pb()),2&e){var n=h.Zb(2),a=h.qc(8);h.gc("heading",n.data.name)("mobileHeading",n.data.label),h.xb(1),h.gc("ngIf",n.data.informationText),h.xb(1),h.gc("ngTemplateOutlet",a),h.xb(1),h.gc("ngIf",!1===h.bc(4,6,n.redirecting$)),h.xb(2),h.gc("ngIf",h.bc(6,8,n.redirecting$))}}function de(e,t){1&e&&h.Mb(0)}function ge(e,t){if(1&e&&(h.Ob(0),h.Bc(1,de,1,0,"ng-container",8),h.Nb()),2&e){h.Zb(3);var n=h.qc(10);h.xb(1),h.gc("ngTemplateOutlet",n)}}function he(e,t){if(1&e&&(h.Lb(0,"div",32),h.ac(1,"trust")),2&e){var n=h.Zb(3);h.gc("innerHTML",h.bc(1,1,n.result.content),h.tc)}}function me(e,t){if(1&e&&(h.Qb(0,"div",37),h.Dc(1),h.Pb()),2&e){var n=h.Zb(3);h.xb(1),h.Fc(" ",n.result.content,"")}}function ve(e,t){if(1&e){var n=h.Rb();h.Qb(0,"actions"),h.Qb(1,"action-button",12),h.Xb("action",(function(){return h.sc(n),h.Zb(3).reload()})),h.ac(2,"async"),h.Pb(),h.Pb()}if(2&e){var a=h.Zb(3);h.xb(1),h.gc("disabled",h.bc(2,2,a.requesting$))("label",a.i18n.general.close)}}function ye(e,t){if(1&e&&(h.Qb(0,"page-content",34),h.ac(1,"async"),h.Bc(2,ge,2,1,"ng-container",29),h.Bc(3,he,2,3,"div",35),h.Bc(4,me,2,1,"div",36),h.Bc(5,ve,3,4,"actions",29),h.Pb()),2&e){var n=h.Zb(2);h.gc("heading",n.result.title||n.data.name)("mobileHeading",n.i18n.operation.mobileTitle.result)("headingActions",h.bc(1,7,n.headingActions$)),h.xb(2),h.gc("ngIf",n.runDirectly),h.xb(1),h.gc("ngIf","richText"===n.result.resultType),h.xb(1),h.gc("ngIf","plainText"===n.result.resultType),h.xb(1),h.gc("ngIf",!n.runDirectly)}}function Se(e,t){if(1&e&&(h.Bc(0,pe,7,10,"page-content",25),h.ac(1,"async"),h.Bc(2,ye,6,9,"page-content",26),h.ac(3,"async")),2&e){var n=h.Zb();h.gc("ngIf",n.data&&!n.runDirectly&&null===h.bc(1,2,n.result$)),h.xb(2),h.gc("ngIf",n.isContent&&h.bc(3,4,n.result$))}}function Ie(e,t){1&e&&h.Mb(0)}function Oe(e,t){if(1&e&&(h.Ob(0),h.Lb(1,"custom-field-input",41),h.Nb()),2&e){var n=t.$implicit,a=t.first,r=h.Zb(2);h.xb(1),h.gc("field",n)("formControlName",n.internalName)("focused",!r.isSearch&&a)("labelPosition",r.isSearch?"left":"auto")}}function xe(e,t){if(1&e&&h.Lb(0,"file-field",42),2&e){var n=h.Zb(2);h.gc("label",n.i18n.operation.fileUpload)("formControl",n.fileControl)}}function Re(e,t){if(1&e&&(h.Qb(0,"form",38),h.Bc(1,Ie,1,0,"ng-container",8),h.Bc(2,Oe,2,4,"ng-container",39),h.Bc(3,xe,1,2,"file-field",40),h.Pb()),2&e){var n=h.Zb(),a=h.qc(10);h.gc("formGroup",n.form),h.xb(1),h.gc("ngTemplateOutlet",a),h.xb(1),h.gc("ngForOf",n.formFields),h.xb(1),h.gc("ngIf",n.data.hasFileUpload)}}function we(e,t){if(1&e&&(h.Qb(0,"label-value",45),h.Qb(1,"chip",46),h.Dc(2),h.Pb(),h.Pb()),2&e){var n=h.Zb(2);h.gc("label",n.i18n.general.user),h.xb(1),h.gc("image",n.data.user.image)("closeable",!1),h.xb(1),h.Fc(" ",n.data.user.display," ")}}function Pe(e,t){if(1&e&&(h.Qb(0,"label-value",45),h.Qb(1,"chip",46),h.Dc(2),h.Pb(),h.Pb()),2&e){var n=h.Zb(2);h.gc("label",n.i18n.operation.ad),h.xb(1),h.gc("image",n.data.ad.image)("closeable",!0),h.xb(1),h.Fc(" ",n.data.ad.name," ")}}function Te(e,t){if(1&e&&(h.Qb(0,"label-value",47),h.Qb(1,"chip"),h.Dc(2),h.Pb(),h.Pb()),2&e){var n=h.Zb(2);h.gc("label",n.i18n.operation.transfer),h.xb(2),h.Fc(" ",n.data.transfer.display," ")}}function ke(e,t){1&e&&h.Lb(0,"hr")}function Fe(e,t){if(1&e&&(h.Bc(0,we,3,4,"label-value",43),h.Bc(1,Pe,3,4,"label-value",43),h.Bc(2,Te,3,2,"label-value",44),h.Bc(3,ke,1,0,"hr",29)),2&e){var n=h.Zb();h.gc("ngIf",n.data.user&&n.data.user.id!==n.login.user.id),h.xb(1),h.gc("ngIf",n.data.ad),h.xb(1),h.gc("ngIf",n.data.transfer),h.xb(1),h.gc("ngIf",n.data.user&&n.data.user.id!==n.login.user.id||n.data.ad||n.data.transfer)}}var Ae,Ce,He,Be=((Ae=function(t){o(c,t);var a=s(c);function c(e,t,r,i,o){var s;return n(this,c),(s=a.call(this,e)).fieldsHelper=t,s.operationHelper=r,s.nextRequestState=i,s.operationsService=o,s.result$=new H.a(null),s.pageResults$=new H.a(null),s.redirecting$=new H.a(!1),s}return r(c,[{key:"ngOnInit",value:function(){var e=this;i(u(c.prototype),"ngOnInit",this).call(this);var t=this.route.snapshot;if(this.runScope=t.data.runScope,this.userParam=t.params.user,!this.runScope)throw new Error("No runScope on "+t.url);var n,a={operation:t.params.operation};switch(this.createDeviceConfirmation=function(){return{type:b.s.RUN_OPERATION,operation:e.data.id}},this.runScope){case R.User:this.scopeId=a.owner=t.params.user||this.login.user.id,n=this.operationsService.getOwnerOperationDataForRun(a);break;case R.Ad:this.scopeId=a.ad=t.params.ad,n=this.operationsService.getAdOperationDataForRun(a);break;case R.Record:this.scopeId=a.id=t.params.record,n=this.operationsService.getRecordOperationDataForRun(a);break;case R.Transfer:this.scopeId=a.key=t.params.transfer,n=this.operationsService.getTransferOperationDataForRun(a);break;default:n=this.operationsService.getOperationDataForRun(a)}this.nextRequestState.queryParams=t.queryParams,this.leaveNotification=this.nextRequestState.leaveNotification,this.addSub(n.subscribe((function(t){e.data=t})))}},{key:"onDataInitialized",value:function(t){var n=this;this.runScope===R.User&&(this.self=this.authHelper.isSelf(t.user)),this.isSearch=t.resultType===b.M.RESULT_PAGE,this.isContent=[b.M.PLAIN_TEXT,b.M.RICH_TEXT].includes(t.resultType);var a=t.formParameters||[];if(this.form=this.fieldsHelper.customValuesFormGroup(a),this.fileControl=this.formBuilder.control(null),this.runDirectly=this.operationHelper.canRunDirectly(t,!1),this.hasSearchFields=a.length>0||t.hasFileUpload,a.length>0){var r=this.route.snapshot.queryParamMap;this.formFields=[];var i,o=e(a);try{for(o.s();!(i=o.n()).done;){var c=i.value,s=r.get(c.internalName);if(Object(A.h)(s))this.formFields.push(c);else{var l={};l[c.internalName]=s,this.form.patchValue(l,{emitEvent:!1})}}}catch(u){o.e(u)}finally{o.f()}}this.isSearch&&(this.stateManager.manage(this.form),this.pageData={page:0,pageSize:this.uiLayout.searchPageSize}),this.operationHelper.register(t.rowOperation),this.runDirectly&&(this.nextRequestState.leaveNotification=this.leaveNotification,this.isSearch&&this.addSub(this.form.valueChanges.subscribe((function(){return n.run(t)}))),this.run(t))}},{key:"run",value:function(e){var t=this;(e||(e=this.data))&&(Object(A.F)(this.form),this.form.valid&&(!Object(A.h)(e.confirmationText)||e.confirmationPasswordInput?this.notification.confirm({title:e.name,message:e.confirmationText,createDeviceConfirmation:this.createDeviceConfirmation,passwordInput:e.confirmationPasswordInput,callback:function(n){return t.doRun(e,n.confirmationPassword)}}):this.doRun(e,null)))}},{key:"updatePage",value:function(e){this.pageData=e,this.run()}},{key:"doRun",value:function(e,t,n){var a=this,r=this.operationHelper.runRequest(e,{scopeId:this.scopeId,confirmationPassword:t,formParameters:this.form.value,pageData:this.pageData,upload:this.fileControl.value,exportFormat:n});this.nextRequestState.queryParams=this.route.snapshot.queryParams,this.addSub(r.pipe(Object(B.a)(),Object(D.a)((function(e){return e}),(function(){return a.redirecting$.next(!1)}))).subscribe((function(e){return a.afterRun(e)}))),this.redirecting$.next(e.resultType===b.M.EXTERNAL_REDIRECT)}},{key:"afterRun",value:function(t){var n=this;if(!this.operationHelper.handleResult(t)){var a=t.body;this.result$.next(a);var r=[];this.data.allowPrint&&this.isContent?r.push(this.exportHelper.printAction()):Object(A.h)(this.data.exportFormats)||this.exportHelper.headingActions(this.data.exportFormats,(function(e){return n.operationHelper.runRequest(n.data,{scopeId:n.scopeId,formParameters:n.form.value,pageData:n.pageData,upload:n.fileControl.value,exportFormat:e})})).forEach((function(e){return r.push(e)}));var i,o=e(a.actions||[]);try{var c=function(){var e=i.value,t=e.action;t&&(n.operationHelper.register(t),r.push(new k.c(n.operationHelper.icon(t),t.label,(function(){n.operationHelper.run(t,null,e.parameters)}))))};for(o.s();!(i=o.n()).done;)c()}catch(l){o.e(l)}finally{o.f()}if(1===r.length&&(r[0].maybeRoot=!0),this.headingActions=r,this.isSearch){var s=new C.a(a.rows);C.a.fillHeaders(s,t),this.pageResults$.next(s)}}}},{key:"rowClick",value:function(e){var t=this.data,n=t.rowAction,a={};switch((t.rowParameters||[]).forEach((function(t){return a[t]=e[t]})),n){case b.N.OPERATION:this.router.navigate(["operations","action",F.a.internalNameOrId(t.rowOperation)],{queryParams:a});break;case b.N.URL:for(var r=t.rowUrl,i=0,o=Object.keys(a);i<o.length;i++){var c=o[i],s=a[c];s&&(r+=r.includes("?")?"&":"?",r+=encodeURIComponent(c)+"="+encodeURIComponent(s))}window.open(r);break;case b.N.LOCATION:var l=F.a.urlForLocation(t.rowLocation,a.id);l&&this.router.navigateByUrl(l)}}},{key:"resolveMenu",value:function(e){if(e.scope===b.O.SYSTEM||e.scope===b.O.USER&&this.self)return new g.a(this.menu.menuForOwnerOperation(e),{operation:e});switch(this.runScope){case R.User:return this.menu.userMenu(e.user,g.b.MY_PROFILE);case R.Ad:return this.menu.userMenu(e.user,g.b.SEARCH_ADS);case R.Record:return this.authHelper.isSelf(e.user)?this.menu.menuForRecordType(e.user,e.recordType):this.menu.userMenu(e.user,g.b.SEARCH_USERS);case R.Transfer:return this.menu.transferMenu(e.transfer);case R.Standalone:return null}}},{key:"result",get:function(){return this.result$.value}},{key:"pageResults",get:function(){return this.pageResults$.value}},{key:"onClick",get:function(){var e=this;return function(t){return e.rowClick(t)}}}]),c}(d.a)).\u0275fac=function(e){return new(e||Ae)(h.Kb(h.r),h.Kb(w.a),h.Kb(T.a),h.Kb(P.a),h.Kb(p.a))},Ae.\u0275cmp=h.Eb({type:Ae,selectors:[["run-operation"]],features:[h.ub],decls:11,vars:5,consts:[[3,"ready"],[4,"ngIf","ngIfThen"],["content",""],["regular",""],["theForm",""],["operationContext",""],[4,"ngIf","ngIfElse"],[3,"mode","heading","mobileHeading","headingActions"],[4,"ngTemplateOutlet"],["class","mb-3 mt-0",4,"ngIf"],["resultType","list",3,"results","onClick","update",4,"ngIf"],[1,"mb-3","mt-0"],[3,"disabled","label","action"],["resultType","list",3,"results","onClick","update"],[4,"mobileResult"],["class","table table-hover",3,"ngClass",4,"resultTable"],["labelPosition","sideForced","valueFormat","html",3,"label","value",4,"ngFor","ngForOf"],["labelPosition","sideForced","valueFormat","html",3,"label","value"],[1,"table","table-hover",3,"ngClass"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],[3,"ngStyle"],[3,"click"],[3,"ngStyle","innerHTML",4,"ngFor","ngForOf"],[3,"ngStyle","innerHTML"],["last","",3,"heading","mobileHeading",4,"ngIf"],["last","",3,"heading","mobileHeading","headingActions",4,"ngIf"],["last","",3,"heading","mobileHeading"],["type","info",4,"ngIf"],[4,"ngIf"],["class","mt-3 text-right",4,"ngIf"],["type","info"],[3,"innerHTML"],[1,"mt-3","text-right"],["last","",3,"heading","mobileHeading","headingActions"],[3,"innerHTML",4,"ngIf"],["class","break-nl",4,"ngIf"],[1,"break-nl"],[3,"formGroup"],[4,"ngFor","ngForOf"],[3,"label","formControl",4,"ngIf"],[3,"field","formControlName","focused","labelPosition"],[3,"label","formControl"],["kind","field",3,"label",4,"ngIf"],["kind","fieldView",3,"label",4,"ngIf"],["kind","field",3,"label"],[3,"image","closeable"],["kind","fieldView",3,"label"]],template:function(e,t){if(1&e&&(h.Qb(0,"page-layout",0),h.ac(1,"async"),h.Bc(2,V,1,0,"ng-container",1),h.Pb(),h.Bc(3,se,1,2,"ng-template",null,2,h.Cc),h.Bc(5,Se,4,6,"ng-template",null,3,h.Cc),h.Bc(7,Re,4,4,"ng-template",null,4,h.Cc),h.Bc(9,Fe,4,4,"ng-template",null,5,h.Cc)),2&e){var n=h.qc(4);h.gc("ready",h.bc(1,3,t.data$)),h.xb(2),h.gc("ngIf",t.data)("ngIfThen",n)}},directives:[m.a,v.t,y.a,v.A,Z.a,E.a,$.a,Q.a,M.a,L.a,v.s,N.a,v.q,v.w,S.a,j.I,j.w,j.n,q.a,j.v,j.l,U.a,_.a,j.k,K.a],pipes:[v.b,X.a],encapsulation:2,changeDetection:0}),Ae),De=[{path:"",children:[{path:"system/:operation",component:Be,canActivate:[f.a],data:{runScope:R.Standalone}},{path:"self/:operation",component:Be,canActivate:[f.a],data:{runScope:R.User}},{path:"action/:operation",component:Be,canActivate:[f.a],data:{runScope:R.Standalone}},{path:"user/:user/:operation",component:Be,canActivate:[f.a],data:{runScope:R.User}},{path:"marketplace/:ad/:operation",component:Be,canActivate:[f.a],data:{runScope:R.Ad}},{path:"record/:record/:operation",component:Be,canActivate:[f.a],data:{runScope:R.Record}},{path:"transfer/:transfer/:operation",component:Be,canActivate:[f.a],data:{runScope:R.Transfer}},{path:"callback/:id/:token",component:x}]}],Ze=((Ce=function e(){n(this,e)}).\u0275mod=h.Ib({type:Ce}),Ce.\u0275inj=h.Hb({factory:function(e){return new(e||Ce)},imports:[[l.i.forChild(De)],l.i]}),Ce),Ee=c("Se2V"),$e=((He=function e(){n(this,e)}).\u0275mod=h.Ib({type:He}),He.\u0275inj=h.Hb({factory:function(e){return new(e||He)},imports:[[Ze,Ee.a]]}),He)}}])}();