!function(){function e(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==i.return||i.return()}finally{if(u)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{bnt4:function(t,i,s){"use strict";s.r(i),s.d(i,"PersonalModule",(function(){return Z}));var l=s("iInd"),f=s("IbW5"),b=s("wgiT"),h=s("tAww"),p=s("rCAV"),d=s("v4xg"),g=s("QH++"),v=s("cp0P"),y=s("SxV6"),m=s("zP0r"),T=s("8Y7J"),w=s("3qho"),k=s("I0FJ"),S=s("s7LF"),I=s("yHfF"),x=s("Zilp"),F=s("IbGL"),O=s("Ae/X"),R=s("iM3x"),C=s("978R"),P=s("SVse"),A=s("sifq"),$=s("H4pW"),E=s("/kmK");function L(e,t){if(1&e&&(T.Qb(0,"mobile-result",8),T.Qb(1,"div",9),T.Dc(2),T.Pb(),T.Qb(3,"div",10),T.Dc(4),T.ac(5,"dateTime"),T.Pb(),T.Pb()),2&e){var n=t.$implicit;T.gc("avatarImage",null==n.relatedUser?null:n.relatedUser.image),T.xb(1),T.gc("tooltip",n.message),T.xb(1),T.Ec(n.subject),T.xb(1),T.gc("tooltip",n.message),T.xb(1),T.Fc(" ",T.bc(5,5,n.date)," ")}}var j=function(e){return{"font-weight-bold":e}},Q=function(e,t){return{"pb-0":e,"border-0":t}};function U(e,t){if(1&e){var n=T.Rb();T.Ob(0),T.Qb(1,"tr",15),T.Xb("click",(function(){T.sc(n);var e=t.$implicit;return T.Zb(2).rowClick(e)})),T.Qb(2,"td",16),T.ac(3,"async"),T.ac(4,"async"),T.Lb(5,"avatar",17),T.Pb(),T.Qb(6,"td"),T.Dc(7),T.ac(8,"dateTime"),T.Pb(),T.Qb(9,"td"),T.Dc(10),T.Pb(),T.Qb(11,"td",13),T.Qb(12,"button",18),T.Xb("click",(function(e){T.sc(n);var i=t.$implicit;return T.Zb(2).remove(i),e.stopPropagation()})),T.Lb(13,"icon",19),T.Pb(),T.Pb(),T.Pb(),T.Nb()}if(2&e){var i=t.$implicit,r=T.Zb(2);T.xb(1),T.gc("ngClass",T.jc(13,j,!i.read)),T.xb(1),T.gc("ngClass",T.kc(15,Q,T.bc(3,7,r.layout.xxs$),T.bc(4,9,r.layout.xxs$))),T.xb(3),T.gc("image",null==i.relatedUser?null:i.relatedUser.image)("tooltip",null==i.relatedUser?null:i.relatedUser.display),T.xb(2),T.Ec(T.bc(8,11,i.date)),T.xb(3),T.Ec(i.message),T.xb(2),T.gc("tooltip",r.i18n.notification.actions.remove)}}function N(e,t){if(1&e&&(T.Qb(0,"table",11),T.Qb(1,"thead"),T.Lb(2,"th",12),T.Qb(3,"th"),T.Dc(4),T.Pb(),T.Qb(5,"th"),T.Dc(6),T.Pb(),T.Lb(7,"th",13),T.Pb(),T.Qb(8,"tbody"),T.Bc(9,U,14,18,"ng-container",14),T.ac(10,"async"),T.Pb(),T.Pb()),2&e){var n,i=T.Zb();T.xb(4),T.Ec(i.i18n.general.date),T.xb(2),T.Ec(i.i18n.notification.message),T.xb(3),T.gc("ngForOf",null==(n=T.bc(10,3,i.results$))?null:n.results)}}var _,M,V,D,H=((_=function(t){a(s,t);var i=u(s);function s(e,t){var r;return n(this,s),(r=i.call(this,e)).notificationsService=t,r}return r(s,[{key:"ngOnInit",value:function(){var e=this;o(c(s.prototype),"ngOnInit",this).call(this),this.data={},this.addSub(this.notificationsService.markAsViewed().pipe(Object(y.a)()).subscribe((function(){var t=e.notification.notificationsStatus$,n=Object.assign({},t.value);n.lastViewDate=e.dataForUiHolder.now().toISOString(),n.newNotifications=0,t.next(n),e.addSub(e.notification.notificationsStatus$.pipe(Object(m.a)(1)).subscribe((function(){return e.update()})))}))),this.addSub(this.results$.subscribe((function(t){var n=[],i=(t?t.results:null)||[];i.filter((function(e){return!e.read})).length>0&&n.push(new h.c("done_all",e.i18n.notification.actions.markAllRead,(function(){return e.markAllRead()}))),i.length>0&&n.push(new h.c("clear",e.i18n.notification.actions.removeAll,(function(){return e.removeAll()}))),e.headingActions=n})))}},{key:"rowClick",value:function(e){this.addSub(this.notificationsService.markNotificationsAsRead({ids:[e.id]}).subscribe());var t=this.path(e);t&&this.router.navigateByUrl(t)}},{key:"remove",value:function(e){var t=this;this.addSub(this.notificationsService.deleteNotification({id:e.id}).subscribe((function(){return t.update()})))}},{key:"path",value:function(e){return p.a.notificationPath(e)}},{key:"markAllRead",value:function(){var e=this;this.addSub(this.notificationsService.markNotificationsAsRead({ids:this.ids}).subscribe((function(){return e.update()})))}},{key:"removeAll",value:function(){var t,n=this,i=[],r=e(this.ids);try{for(r.s();!(t=r.n()).done;){var o=t.value;i.push(this.notificationsService.deleteNotification({id:o}))}}catch(a){r.e(a)}finally{r.f()}this.addSub(Object(v.a)(i).pipe(Object(y.a)()).subscribe((function(){return n.update()})))}},{key:"getFormControlNames",value:function(){return["onlyUnread"]}},{key:"toSearchParams",value:function(e){return e}},{key:"doSearch",value:function(e){return this.notificationsService.searchNotifications$Response(e)}},{key:"resolveMenu",value:function(){return g.b.NOTIFICATIONS}},{key:"ids",get:function(){return this.results&&this.results.results?this.results.results.map((function(e){return e.id})):[]}},{key:"onClick",get:function(){var e=this;return function(t){return e.rowClick(t)}}}]),s}(d.a)).\u0275fac=function(e){return new(e||_)(T.Kb(T.r),T.Kb(b.a))},_.\u0275cmp=T.Eb({type:_,selectors:[["search-notifications"]],features:[T.ub],decls:11,vars:12,consts:[["mode","filters",3,"heading","mobileHeading","headingActions"],[1,"filters-form","filters-form-separator",3,"formGroup"],[1,"row"],[1,"col-12","col-md-6"],["labelPosition","sideForced","formControlName","onlyUnread",3,"label"],["resultType","list",3,"results","onClick","rendering$","update"],["avatarIcon","notifications_none",3,"avatarImage",4,"mobileResult"],["class","table table-hover cursor-pointer",4,"resultTable"],["avatarIcon","notifications_none",3,"avatarImage"],[1,"cell-main",3,"tooltip"],[1,"cell-cell-date",3,"tooltip"],[1,"table","table-hover","cursor-pointer"],[1,"avatar"],[1,"actions"],[4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"avatar",3,"ngClass"],["icon","notifications_none",3,"image","tooltip"],[1,"btn","btn-icon",3,"tooltip","click"],["icon","clear"]],template:function(e,t){1&e&&(T.Qb(0,"page-layout"),T.Qb(1,"page-content",0),T.ac(2,"async"),T.Qb(3,"form",1),T.Qb(4,"div",2),T.Qb(5,"div",3),T.Lb(6,"boolean-field",4),T.Pb(),T.Pb(),T.Pb(),T.Pb(),T.Qb(7,"results-layout",5),T.Xb("update",(function(e){return t.update(e)})),T.ac(8,"async"),T.Bc(9,L,6,7,"mobile-result",6),T.Bc(10,N,11,5,"table",7),T.Pb(),T.Pb()),2&e&&(T.xb(1),T.gc("heading",t.i18n.notification.title)("mobileHeading",t.i18n.notification.mobileTitle)("headingActions",T.bc(2,8,t.headingActions$)),T.xb(2),T.gc("formGroup",t.form),T.xb(3),T.gc("label",t.i18n.notification.onlyUnread),T.xb(1),T.gc("results",T.bc(8,10,t.results$))("onClick",t.onClick)("rendering$",t.rendering$))},directives:[w.a,k.a,S.I,S.w,S.n,I.a,S.v,S.l,x.a,F.a,O.a,R.a,C.b,P.s,P.q,A.a,$.a],pipes:[P.b,E.a],encapsulation:2,changeDetection:0}),_),G=s("uuU0"),z=s("wR2l"),K=s("chz4"),q=[{path:"",children:[{path:"notifications",component:H,canActivate:[f.a],data:{menu:g.b.NOTIFICATIONS}},{path:"settings",component:(M=function(e){a(i,e);var t=u(i);function i(e){return n(this,i),t.call(this,e)}return r(i,[{key:"ngOnInit",value:function(){var e=this;o(c(i.prototype),"ngOnInit",this).call(this),this.darkThemeControl=new S.j(this.layout.darkTheme),this.addSub(this.darkThemeControl.valueChanges.subscribe((function(t){e.layout.darkTheme=t})))}},{key:"resolveMenu",value:function(){return g.b.SETTINGS}}]),i}(G.a),M.\u0275fac=function(e){return new(e||M)(T.Kb(T.r))},M.\u0275cmp=T.Eb({type:M,selectors:[["manage-settings"]],features:[T.ub],decls:5,vars:8,consts:[["last","",3,"heading","mobileHeading"],[3,"label","formControl"],[3,"value","text"]],template:function(e,t){1&e&&(T.Qb(0,"page-layout"),T.Qb(1,"page-content",0),T.Qb(2,"radio-group-field",1),T.Lb(3,"field-option",2),T.Lb(4,"field-option",2),T.Pb(),T.Pb(),T.Pb()),2&e&&(T.xb(1),T.gc("heading",t.i18n.setting.title)("mobileHeading",t.i18n.setting.mobileTitle),T.xb(1),T.gc("label",t.i18n.setting.theme)("formControl",t.darkThemeControl),T.xb(1),T.gc("value",!1)("text",t.i18n.setting.themeLight),T.xb(1),T.gc("value",!0)("text",t.i18n.setting.themeDark))},directives:[w.a,k.a,z.a,S.v,S.k,K.a],encapsulation:2,changeDetection:0}),M),canActivate:[f.a],data:{menu:g.b.SETTINGS}}]}],B=((V=function e(){n(this,e)}).\u0275mod=T.Ib({type:V}),V.\u0275inj=T.Hb({factory:function(e){return new(e||V)},imports:[[l.i.forChild(q)],l.i]}),V),J=s("Se2V"),Z=((D=function e(){n(this,e)}).\u0275mod=T.Ib({type:D}),D.\u0275inj=T.Hb({factory:function(e){return new(e||D)},imports:[[B,J.a]]}),D)},v4xg:function(t,i,s){"use strict";s.d(i,"a",(function(){return w}));var l=s("s7LF"),f=s("mwYl"),b=s("tAww"),h=s("rCAV"),p=s("uuU0"),d=s("Ky6R"),g=s("TFmz"),v=s("Muja"),y=s("2Vo4"),m=s("Kj3r"),T=s("8Y7J"),w=function(){var t=function(t){a(s,t);var i=u(s);function s(t){var r;n(this,s),(r=i.call(this,t)).ResultType=g.a,r.resultType$=new y.a(null),r.resultTypeControl=new l.j(null),r.results$=new y.a(null),r.allowedResultTypes$=new y.a([g.a.LIST]),r.rendering$=new y.a(!1),r.moreFilters$=new y.a(!1),r.ignoreNextUpdate=!1,r.nextRequestState=t.get(f.a);var o={page:0};o.resultType=r.getInitialResultType();var a,u=e(r.getFormControlNames()||[]);try{for(u.s();!(a=u.n()).done;){o[a.value]=null}}catch(c){u.e(c)}finally{u.f()}return r.form=r.formBuilder.group(o),r}return r(s,[{key:"getInitialFormValue",value:function(e){return e.query||{}}},{key:"onDataInitialized",value:function(e){var t=this;this.form.patchValue(this.getInitialFormValue(e)),this.stateManager.manage(this.form),this.stateManager.manage(this.resultTypeControl,"resultType"),this.stateManager.manageValue(this.moreFilters$,"moreFilters"),this.previousValue=this.form.value,this.previousResultType=this.resultType,this.resultType$.next(this.previousResultType),this.addSub(this.resultTypeControl.valueChanges.subscribe((function(e){var n=t.previousResultType;t.previousResultType=e,t.resultType$.next(e),t.shouldUpdateOnResultTypeChange(e,n)&&t.update(),null!=n&&n===e||(t.rendering=!0,t.stateManager.set("resultType",e),t.onResultTypeChanged(e,n))}))),setTimeout((function(){t.addSub(t.form.valueChanges.pipe(Object(m.a)(h.a.DEBOUNCE_TIME)).subscribe((function(e){t.shouldUpdateOnChange(e)&&t.update(),t.previousValue=e})),!0),t.previousResultType!==g.a.CATEGORIES&&t.update()}),1)}},{key:"shouldUpdateOnResultTypeChange",value:function(e,t){return e!==g.a.CATEGORIES&&([g.a.LIST,g.a.TILES].includes(t)!==[g.a.LIST,g.a.TILES].includes(e)||t===g.a.MAP!=(e===g.a.MAP))}},{key:"shouldUpdateOnChange",value:function(e){return!Object(v.a)(this.previousValue,e)}},{key:"ngOnInit",value:function(){o(c(s.prototype),"ngOnInit",this).call(this),this.resultType=this.getInitialResultType()}},{key:"showMoreFiltersLabel",value:function(){return this.i18n.general.showMoreFilters}},{key:"showLessFiltersLabel",value:function(){return this.i18n.general.showLessFilters}},{key:"showMoreFiltersIcon",value:function(){return"filter_list"}},{key:"showLessFiltersIcon",value:function(){return"filter_list"}},{key:"onResultTypeChanged",value:function(e,t){}},{key:"getInitialResultType",value:function(){return g.a.LIST}},{key:"update",value:function(e){var t=this;if(!this.ignoreNextUpdate){e&&(this.form.patchValue(e,{emitEvent:!1}),this.stateManager.set("form",this.form.value)),this.rendering=!0,this.results=null,this.nextRequestState.leaveNotification=!0;var n=this.form.value;n.pageSize=this.uiLayout.searchPageSize,this.addSub(this.doSearch(this.toSearchParams(n)).subscribe((function(e){t.resultType===g.a.CATEGORIES&&(t.resultType=t.allowedResultTypes.find((function(e){return e!==g.a.CATEGORIES}))),t.results=d.a.from(e)})))}}},{key:"resetPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.form.patchValue({page:0},{emitEvent:e})}},{key:"doIgnoringUpdate",value:function(e){this.ignoreNextUpdate=!0;try{e()}finally{this.ignoreNextUpdate=!1}}},{key:"results",get:function(){return this.results$.value},set:function(e){this.results$.next(e)}},{key:"rendering",get:function(){return this.rendering$.value},set:function(e){this.rendering$.next(e)}},{key:"allowedResultTypes",get:function(){return this.allowedResultTypes$.value},set:function(e){this.allowedResultTypes$.next(e)}},{key:"moreFilters",get:function(){return this.moreFilters$.value},set:function(e){this.moreFilters$.next(e)}},{key:"pageData",get:function(){var e=this.form.value;return{page:e.page,pageSize:e.pageSize}},set:function(e){this.form.patchValue(e)}},{key:"resultType",get:function(){return this.resultTypeControl.value},set:function(e){null==e&&(e=this.getInitialResultType()),this.resultTypeControl.setValue(e)}},{key:"moreFiltersAction",get:function(){var e=this;return this._moreFiltersAction||(this._moreFiltersAction=new b.c(this.showMoreFiltersIcon(),this.showMoreFiltersLabel(),(function(){e.moreFilters=!e.moreFilters,e._moreFiltersAction.icon=e.moreFilters?e.showLessFiltersIcon():e.showMoreFiltersIcon(),e._moreFiltersAction.label=e.moreFilters?e.showLessFiltersLabel():e.showMoreFiltersLabel()}),!0),this._moreFiltersAction.breakpoint="gt-xxs",this._moreFiltersAction.maybeRoot=!0),this._moreFiltersAction}}]),s}(p.a);return t.\u0275fac=function(e){return new(e||t)(T.Kb(T.r))},t.\u0275dir=T.Fb({type:t,features:[T.ub]}),t}()}}])}();