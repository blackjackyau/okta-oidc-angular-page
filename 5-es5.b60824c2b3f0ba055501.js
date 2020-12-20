function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{XuDu:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminsModule",(function(){return Z}));var i=n("ofXK"),c=n("tyNb"),s=n("kt0X"),r=n("sfyx"),a=n("jwFk"),o=n("fXoL"),u=n("0MNC"),l=n("/t3+"),b=n("bTqV"),m=n("NFeN"),p=n("STbY"),h=n("XhcP"),f=n("MutI");function d(e,t){if(1&e&&(o.Sb(0),o.Ac(1),o.Rb()),2&e){var n=t.ngIf;o.Cb(1),o.Bc(n.userName)}}function g(e,t){if(1&e&&(o.Ub(0,"a",12),o.Ub(1,"mat-icon",13),o.Ac(2),o.Tb(),o.Ub(3,"span",14),o.Ac(4),o.Tb(),o.Tb()),2&e){var n=t.$implicit;o.mc("routerLink",n.link),o.Cb(2),o.Bc(n.icon),o.Cb(2),o.Bc(n.label)}}var v,y=((v=function(){function e(t,n,i,c){_classCallCheck(this,e),this.router=t,this.store=n,this.changeDetectorRef=i,this.media=c,this.sideMenus=[{label:"Manage Users",link:"users",icon:"person"},{label:"Key Management",link:"key-mgmt",icon:"vpn_key"}]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.mobileQuery=this.media.matchMedia("(max-width: 600px)"),this.mobileQueryListener=function(){e.changeDetectorRef.detectChanges()},this.mobileQuery.addListener(this.mobileQueryListener),this.store.dispatch(new a.a),this.store.dispatch(new a.b),this.currentUser$=this.store.pipe(Object(s.p)(r.a))}},{key:"logout",value:function(){this.router.navigate(["logout"])}},{key:"renew",value:function(){}},{key:"OnDestroy",value:function(){this.mobileQuery.removeListener(this.mobileQueryListener)}}]),e}()).\u0275fac=function(e){return new(e||v)(o.Ob(c.a),o.Ob(s.h),o.Ob(o.h),o.Ob(u.c))},v.\u0275cmp=o.Ib({type:v,selectors:[["app-admins"]],decls:24,vars:9,consts:[["color","accent",1,"mat-elevation-z8"],["mat-icon-button","",3,"click"],[1,"main-header-text"],["mat-button","",3,"matMenuTriggerFor"],[4,"ngIf"],["yPosition","below"],["appMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"main-container"],["fixedTopGap","56",3,"opened","disableClose","mode","fixedInViewport"],["sidenav",""],["mat-list-item","",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLink"],["color","primary","aria-hidden","true","aria-label","menu.label"],[1,"menu-label"]],template:function(e,t){if(1&e){var n=o.Vb();o.Ub(0,"div"),o.Ub(1,"mat-toolbar",0),o.Ub(2,"button",1),o.cc("click",(function(){return o.tc(n),o.rc(19).toggle()})),o.Ub(3,"mat-icon"),o.Ac(4,"menu"),o.Tb(),o.Tb(),o.Ub(5,"div",2),o.Ub(6,"div"),o.Ac(7,"Admin Portal"),o.Tb(),o.Tb(),o.Ub(8,"button",3),o.Ub(9,"mat-icon"),o.Ac(10,"person"),o.Tb(),o.zc(11,d,2,1,"ng-container",4),o.hc(12,"async"),o.Tb(),o.Tb(),o.Ub(13,"mat-menu",5,6),o.Ub(15,"button",7),o.cc("click",(function(){return t.logout()})),o.Ac(16,"Logout"),o.Tb(),o.Tb(),o.Ub(17,"mat-sidenav-container",8),o.Ub(18,"mat-sidenav",9,10),o.Ub(20,"mat-nav-list"),o.zc(21,g,5,3,"a",11),o.Tb(),o.Tb(),o.Ub(22,"mat-sidenav-content"),o.Pb(23,"router-outlet"),o.Tb(),o.Tb(),o.Tb()}if(2&e){var i=o.rc(14);o.Cb(8),o.lc("matMenuTriggerFor",i),o.Cb(3),o.lc("ngIf",o.ic(12,7,t.currentUser$)),o.Cb(7),o.mc("opened",!t.mobileQuery.matches),o.mc("disableClose",!t.mobileQuery.matches),o.lc("mode",t.mobileQuery.matches?"over":"side")("fixedInViewport",t.mobileQuery.matches),o.Cb(3),o.lc("ngForOf",t.sideMenus)}},directives:[l.a,b.b,m.a,p.c,i.l,p.d,p.a,h.b,h.a,f.c,i.k,h.c,c.d,f.a,c.b],pipes:[i.b],styles:[".main-header-text[_ngcontent-%COMP%]{flex:1 1 500px}.main-header-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:10px}.main-container[_ngcontent-%COMP%]{height:calc(100vh - 64px)}.mat-list-item[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}mat-toolbar[_ngcontent-%COMP%]{height:56px;font-size:18px}"]}),v),C=n("P6bf"),k=function(e){return e.LoadUsers="[Users] Load Users",e.LoadUsersSuccess="[Users] Load Users Success",e}({}),U=function e(t){_classCallCheck(this,e),this.payload=t,this.type=k.LoadUsers},O=function e(t){_classCallCheck(this,e),this.payload=t,this.type=k.LoadUsersSuccess},w=Object(s.n)("userMgmt"),T=Object(s.o)(w,(function(e){return e.users})),M=n("FKr1");function j(e,t){if(1&e){var n=o.Vb();o.Ub(0,"mat-list-item",1),o.cc("click",(function(){o.tc(n);var e=t.$implicit;return o.gc().onView(e)})),o.Ub(1,"h3",2),o.Ac(2),o.Tb(),o.Ub(3,"p",2),o.Ac(4),o.Tb(),o.Ub(5,"p",2),o.Ac(6),o.Tb(),o.Tb()}if(2&e){var i=t.$implicit;o.Cb(2),o.Cc(" ",i.id," "),o.Cb(2),o.Dc(" ",i.firstName," ",i.lastName," "),o.Cb(2),o.Cc(" ",i.userName," ")}}var _,L,x=((_=function(){function e(t){_classCallCheck(this,e),this.store=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.store.dispatch(new U),this.users$=this.store.pipe(Object(s.p)(T))}}]),e}()).\u0275fac=function(e){return new(e||_)(o.Ob(s.h))},_.\u0275cmp=o.Ib({type:_,selectors:[["app-user-mgmt"]],decls:3,vars:3,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],["matLine",""]],template:function(e,t){1&e&&(o.Ub(0,"mat-nav-list"),o.zc(1,j,7,4,"mat-list-item",0),o.hc(2,"async"),o.Tb()),2&e&&(o.Cb(1),o.lc("ngForOf",o.ic(2,1,t.users$)))},directives:[f.c,i.k,f.a,M.j],pipes:[i.b],styles:[""]}),_),A=n("nAXo"),P=[{path:"",component:y,canActivate:[C.a],children:[{path:"users",component:x},{path:"key-mgmt",component:A.a},{path:"",redirectTo:"users",pathMatch:"full"}]}],F=((L=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:L}),L.\u0275inj=o.Lb({factory:function(e){return new(e||L)},imports:[[c.c.forChild(P)],c.c]}),L),N={users:null};function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.LoadUsersSuccess:return Object.assign(Object.assign({},e),{users:t.payload});default:return e}}var I=n("snw9"),S=n("mrSG"),Q=n("eIep"),z=n("lJxs"),V=n("AytR"),X=n("5+tZ"),B=n("128B");function D(e,t,n){return 0===n?[t]:(e.push(t),e)}var K,Y,R,J=n("tk/3"),G=((Y=function(){function e(t,n){_classCallCheck(this,e),this.http=t,this.store=n,this.baseUrl="https://cors-anywhere.herokuapp.com/".concat(V.a.oktaUrl),this.ssws$=this.store.pipe(Object(s.p)(r.b))}return _createClass(e,[{key:"getUsers",value:function(){var e=this;return this.ssws$.pipe(Object(Q.a)((function(t){return e.http.get("".concat(e.baseUrl,"/api/v1/users"),{headers:{Authorization:"SSWS ".concat(t)}}).pipe(Object(X.a)((function(e){return e})),Object(z.a)((function(e){return{id:e.id,userName:e.profile.login,firstName:e.profile.firstName,lastName:e.profile.lastName}})),Object(B.a)(D,[]))})))}}]),e}()).\u0275fac=function(e){return new(e||Y)(o.Yb(J.a),o.Yb(s.h))},Y.\u0275prov=o.Kb({token:Y,factory:Y.\u0275fac,providedIn:"root"}),Y),q=((K=function e(t,n){var i=this;_classCallCheck(this,e),this.actions$=t,this.usersService=n,this.loadUsers$=this.actions$.pipe(Object(I.d)(k.LoadUsers),Object(Q.a)((function(){return i.usersService.getUsers().pipe(Object(z.a)((function(e){return new O(e)})))})))}).\u0275fac=function(e){return new(e||K)(o.Yb(I.a),o.Yb(G))},K.\u0275prov=o.Kb({token:K,factory:K.\u0275fac}),Object(S.b)([Object(I.b)(),Object(S.c)("design:type",Object)],K.prototype,"loadUsers$",void 0),K),E=n("B+Mi"),W=n("x0yz"),Z=((R=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:R}),R.\u0275inj=o.Lb({factory:function(e){return new(e||R)},imports:[[i.c,F,E.a,W.a,s.j.forFeature("userMgmt",$),I.c.forFeature([q])]]}),R)}}]);