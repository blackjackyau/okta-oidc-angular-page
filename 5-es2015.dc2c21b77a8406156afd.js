(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{XuDu:function(e,t,s){"use strict";s.r(t),s.d(t,"AdminsModule",(function(){return H}));var r={};s.r(r),s.d(r,"LoadUsers",(function(){return j})),s.d(r,"LoadUsersSuccess",(function(){return v})),s.d(r,"LoadUsersError",(function(){return M})),s.d(r,"LoadUsersNoOp",(function(){return T}));var n=s("ofXK"),i=s("tyNb"),c=s("kt0X"),o=s("4ald"),a=s("/VzD"),b=s("fXoL"),u=s("0MNC"),l=s("/t3+"),m=s("bTqV"),p=s("NFeN"),d=s("STbY"),h=s("XhcP"),g=s("MutI");function f(e,t){if(1&e&&(b.Sb(0),b.Ac(1),b.Rb()),2&e){const e=t.ngIf;b.Cb(1),b.Bc(e.userName)}}function O(e,t){if(1&e&&(b.Ub(0,"a",12),b.Ub(1,"mat-icon",13),b.Ac(2),b.Tb(),b.Ub(3,"span",14),b.Ac(4),b.Tb(),b.Tb()),2&e){const e=t.$implicit;b.mc("routerLink",e.link),b.Cb(2),b.Bc(e.icon),b.Cb(2),b.Bc(e.label)}}let U=(()=>{class e{constructor(e,t,s,r){this.router=e,this.store=t,this.changeDetectorRef=s,this.media=r,this.sideMenus=[{label:"Manage Users",link:"users",icon:"person"},{label:"Manage Users 2",link:"users2",icon:"person"},{label:"Key Management",link:"key-mgmt",icon:"vpn_key"}]}ngOnInit(){this.mobileQuery=this.media.matchMedia("(max-width: 600px)"),this.mobileQueryListener=()=>{this.changeDetectorRef.detectChanges()},this.mobileQuery.addListener(this.mobileQueryListener),this.store.dispatch(a.a.loadSession()),this.currentUser$=this.store.pipe(Object(c.t)(o.d))}logout(){this.store.dispatch(a.a.logoutSession())}renew(){}OnDestroy(){this.mobileQuery.removeListener(this.mobileQueryListener)}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(i.a),b.Ob(c.h),b.Ob(b.h),b.Ob(u.c))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-admins"]],decls:24,vars:9,consts:[["color","accent",1,"mat-elevation-z8"],["mat-icon-button","",3,"click"],[1,"main-header-text"],["mat-button","",3,"matMenuTriggerFor"],[4,"ngIf"],["yPosition","below"],["appMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"main-container"],["fixedTopGap","56",3,"opened","disableClose","mode","fixedInViewport"],["sidenav",""],["mat-list-item","",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLink"],["color","primary","aria-hidden","true","aria-label","menu.label"],[1,"menu-label"]],template:function(e,t){if(1&e){const e=b.Vb();b.Ub(0,"div"),b.Ub(1,"mat-toolbar",0),b.Ub(2,"button",1),b.cc("click",(function(){return b.tc(e),b.rc(19).toggle()})),b.Ub(3,"mat-icon"),b.Ac(4,"menu"),b.Tb(),b.Tb(),b.Ub(5,"div",2),b.Ub(6,"div"),b.Ac(7,"Admin Portal"),b.Tb(),b.Tb(),b.Ub(8,"button",3),b.Ub(9,"mat-icon"),b.Ac(10,"person"),b.Tb(),b.zc(11,f,2,1,"ng-container",4),b.hc(12,"async"),b.Tb(),b.Tb(),b.Ub(13,"mat-menu",5,6),b.Ub(15,"button",7),b.cc("click",(function(){return t.logout()})),b.Ac(16,"Logout"),b.Tb(),b.Tb(),b.Ub(17,"mat-sidenav-container",8),b.Ub(18,"mat-sidenav",9,10),b.Ub(20,"mat-nav-list"),b.zc(21,O,5,3,"a",11),b.Tb(),b.Tb(),b.Ub(22,"mat-sidenav-content"),b.Pb(23,"router-outlet"),b.Tb(),b.Tb(),b.Tb()}if(2&e){const e=b.rc(14);b.Cb(8),b.lc("matMenuTriggerFor",e),b.Cb(3),b.lc("ngIf",b.ic(12,7,t.currentUser$)),b.Cb(7),b.mc("opened",!t.mobileQuery.matches),b.mc("disableClose",!t.mobileQuery.matches),b.lc("mode",t.mobileQuery.matches?"over":"side")("fixedInViewport",t.mobileQuery.matches),b.Cb(3),b.lc("ngForOf",t.sideMenus)}},directives:[l.a,m.b,p.a,d.c,n.l,d.d,d.a,h.b,h.a,g.c,n.k,h.c,i.d,g.a,i.b],pipes:[n.b],styles:[".main-header-text[_ngcontent-%COMP%]{flex:1 1 500px}.main-header-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:10px}.main-container[_ngcontent-%COMP%]{height:calc(100vh - 64px)}.mat-list-item[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}mat-toolbar[_ngcontent-%COMP%]{height:56px;font-size:18px}"]}),e})();var L=s("P6bf");const j=Object(c.n)("[UserMgmt] Load Users"),v=Object(c.n)("[UserMgmt/API] Load Users Success",Object(c.s)()),M=Object(c.n)("[UserMgmt/API] Load Users Error",Object(c.s)()),T=Object(c.n)("[UserMgmt/API] Load Users No Operation"),y=Object(c.o)("userMgmt"),I=Object(c.q)(y,e=>e.users),A=Object(c.q)(y,e=>e.status),C=Object(c.p)({users:[],status:"INIT"},Object(c.r)(r.LoadUsers,e=>"LOADING"===e.status||"STILL_LOADING"===e.status?Object.assign(Object.assign({},e),{status:"STILL_LOADING"}):"LOADED"!==e.status?Object.assign(Object.assign({},e),{status:"LOADING"}):Object.assign({},e)),Object(c.r)(r.LoadUsersSuccess,(e,{users:t})=>({users:t,status:"LOADED"})),Object(c.r)(r.LoadUsersError,(e,{errorMsg:t})=>Object.assign(Object.assign({},e),{status:{errorMsg:t}})));var k=s("bv9b"),N=s("FKr1");function w(e,t){1&e&&b.Pb(0,"mat-progress-bar",3)}function x(e,t){if(1&e){const e=b.Vb();b.Ub(0,"mat-list-item",4),b.cc("click",(function(){b.tc(e);const s=t.$implicit;return b.gc().onView(s)})),b.Ub(1,"h3",5),b.Ac(2),b.Tb(),b.Ub(3,"p",5),b.Ac(4),b.Tb(),b.Ub(5,"p",5),b.Ac(6),b.Tb(),b.Tb()}if(2&e){const e=t.$implicit;b.Cb(2),b.Cc(" ",e.id," "),b.Cb(2),b.Dc(" ",e.firstName," ",e.lastName," "),b.Cb(2),b.Cc(" ",e.userName," ")}}function D(e,t){if(1&e&&(b.Ub(0,"p"),b.Ac(1),b.Tb()),2&e){const e=b.gc();b.Cb(1),b.Cc(" Error loading users, reason: ",e.errorMsg," ")}}let S=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.store.dispatch(r.LoadUsers()),this.users$=this.store.pipe(Object(c.t)(I)),this.store.pipe(Object(c.t)(A)).subscribe(e=>{"LOADING"===e||"STILL_LOADING"===e?this.loading=!0:(this.loading=!1,this.errorMsg=function(e){return void 0!==e.errorMsg?e.errorMsg:null}(e))})}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(c.h))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-user-mgmt"]],decls:5,vars:5,consts:[["mode","indeterminate",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["mode","indeterminate"],[3,"click"],["matLine",""]],template:function(e,t){1&e&&(b.Ub(0,"mat-nav-list"),b.zc(1,w,1,0,"mat-progress-bar",0),b.zc(2,x,7,4,"mat-list-item",1),b.hc(3,"async"),b.zc(4,D,2,1,"p",2),b.Tb()),2&e&&(b.Cb(1),b.lc("ngIf",t.loading),b.Cb(1),b.lc("ngForOf",b.ic(3,3,t.users$)),b.Cb(2),b.lc("ngIf",t.errorMsg))},directives:[g.c,n.l,n.k,k.a,g.a,N.j],pipes:[n.b],styles:[""]}),e})();var P=s("nAXo");const $=[{path:"",component:U,canActivate:[L.a],children:[{path:"users",component:S},{path:"users2",component:S},{path:"key-mgmt",component:P.a},{path:"",redirectTo:"users",pathMatch:"full"}]}];let F=(()=>{class e{}return e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({factory:function(t){return new(t||e)},imports:[[i.c.forChild($)],i.c]}),e})();var _=s("snw9"),z=s("eIep"),Q=s("5+tZ"),E=s("lJxs"),G=s("128B");function V(e,t,s){return 0===s?[t]:(e.push(t),e)}var Y=s("RrW5"),X=s("tk/3");let B=(()=>{class e{constructor(e,t,s){this.http=e,this.store=t,this.profileService=s;const r=this.profileService.getActiveProfile();this.baseUrl=`https://cors-anywhere.herokuapp.com/${r.oktaUrl}`,this.ssws$=this.store.pipe(Object(c.t)(o.e))}getUsers(){return this.ssws$.pipe(Object(z.a)(e=>this.http.get(`${this.baseUrl}/api/v1/users`,{headers:{Authorization:`SSWS ${e}`}}).pipe(Object(Q.a)(e=>e),Object(E.a)(e=>({id:e.id,userName:e.profile.login,firstName:e.profile.firstName,lastName:e.profile.lastName})),Object(G.a)(V,[]))))}}return e.\u0275fac=function(t){return new(t||e)(b.Yb(X.a),b.Yb(c.h),b.Yb(Y.a))},e.\u0275prov=b.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var K=s("zp1y"),R=s("JIr8"),J=s("LRne");let q=(()=>{class e{constructor(e,t,s){this.actions$=e,this.store=t,this.usersService=s,this.loadUsers$=Object(_.d)(()=>this.actions$.pipe(Object(_.e)(r.LoadUsers),Object(K.a)(this.store.select(A)),Object(Q.a)(([e,t])=>"LOADED"===t||"STILL_LOADING"===t?Object(J.a)(r.LoadUsersNoOp()):this.usersService.getUsers().pipe(Object(E.a)(e=>r.LoadUsersSuccess({users:e})),Object(R.a)(e=>(console.error(e),Object(J.a)(r.LoadUsersError({errorMsg:e.statusText}))))))))}}return e.\u0275fac=function(t){return new(t||e)(b.Yb(_.a),b.Yb(c.h),b.Yb(B))},e.\u0275prov=b.Kb({token:e,factory:e.\u0275fac}),e})();var W=s("B+Mi"),Z=s("x0yz");let H=(()=>{class e{}return e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({factory:function(t){return new(t||e)},imports:[[n.c,F,W.a,Z.a,c.j.forFeature("userMgmt",C),_.b.forFeature([q])]]}),e})()}}]);