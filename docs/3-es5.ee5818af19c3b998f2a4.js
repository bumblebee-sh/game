(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Mo3u:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),r=t("K9Ia"),a=t("ny24"),o=t("06nz"),i=function(){function n(n,l){this.elRef=n,this.render=l,this.errorClass="showError",this.timerTick=500}return Object.defineProperty(n.prototype,"errorState",{set:function(n){n&&this.setError()},enumerable:!0,configurable:!0}),n.prototype.setError=function(){var n=this;this.tick&&(this.render.removeClass(this.elRef.nativeElement,this.errorClass),clearTimeout(this.tick),this.tick=null),this.render.addClass(this.elRef.nativeElement,this.errorClass),this.tick=setTimeout(function(){n.render.removeClass(n.elRef.nativeElement,n.errorClass),n.errorState=null},this.timerTick)},n}(),s=t("mrSG"),u=function(){function n(n){this.store=n,this.destroy$=new r.a}return n.prototype.ngOnInit=function(){var n=this;this.store.select("PlayerStore").pipe(Object(a.a)(this.destroy$)).subscribe(function(l){n.items=s.g([l.player],l.computers).sort(function(n,l){return n.playingTime>l.playingTime?1:n.playingTime<l.playingTime?-1:0})})},n}(),c=t("VHTt"),b=function(){function n(n,l,t){this.renderer=n,this.store=l,this.dialog=t,this.showLoader=!0,this.actionBtns=[{action:c.d.Decrease,buttonText:"Decrease",error:null},{action:c.d.Skip,buttonText:"Without changes",error:null},{action:c.d.Increase,buttonText:"Increase",error:null}],this.destroy$=new r.a}return n.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.complete()},n.prototype.ngOnInit=function(){var n=this;this.store.select("PlayerStore").pipe(Object(a.a)(this.destroy$)).subscribe(function(l){n.setPlayer(l.player),n.computerPlayers=l.computers})},n.prototype.action=function(n){this.player.action(n)},n.prototype.setPlayer=function(n){var l=this;this.player=n,this.player.onWin(function(n){l.dialog.open(u)}),this.player.onSuccess(function(n,l){console.log("percent",l)}),this.player.onErr(function(n){l.actionBtns.find(function(l){return l.action===n}).error=Date.now()})},n.prototype.startGame=function(){var n=this;this.computerPlayers.forEach(function(l){l.init(),l.onWin(function(){n.store.dispatch(new o.b({player:n.player,computers:n.computerPlayers}))})}),this.showLoader=!1},n}(),m=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),p=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),d=function(){function n(){this.readeState=new e.m,this.startTime=3}return n.prototype.ngOnInit=function(){},n.prototype.startGame=function(){var n=this;this.timer=setInterval(function(){n.startTime--,n.startTime||(clearInterval(n.timer),n.readeState.emit(!0))},1e3)},n}(),g=function(){function n(n){this.store=n,this.destroy$=new r.a}return n.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.complete()},n.prototype.ngOnInit=function(){var n=this;this.store.select("PlayerStore").pipe(Object(a.a)(this.destroy$)).subscribe(function(l){n.players=s.g([l.player],l.computers)})},n}(),f=function(){return function(){}}(),y=t("pMnS"),_=t("bujt"),h=t("UodH"),v=t("lLAP"),x=t("wFw1"),k=t("Ip0R"),z=e.pb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:rgba(255,255,255,.9);position:fixed;left:0;top:0;z-index:1}.ready[_ngcontent-%COMP%]{text-align:center}.ready__text[_ngcontent-%COMP%]{font-size:1.875rem;margin-bottom:20px}.ready__counter[_ngcontent-%COMP%]{font-size:9.375rem}.ready[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 40px;font-size:1.25rem}"]],data:{}});function O(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,1,"div",[["class","ready__counter"]],null,null,null,null,null)),(n()(),e.Fb(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.startTime)})}function P(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,5,"div",[["class","ready__info"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"p",[["class","ready__text"]],null,null,null,null,null)),(n()(),e.Fb(-1,null,["Are you ready?"])),(n()(),e.rb(3,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.startGame()&&e),e},_.b,_.a)),e.qb(4,180224,null,0,h.b,[e.k,v.b,[2,x.a]],{color:[0,"color"]},null),(n()(),e.Fb(-1,0,["Go"]))],function(n,l){n(l,4,0,"accent")},function(n,l){n(l,3,0,e.Bb(l,4).disabled||null,"NoopAnimations"===e.Bb(l,4)._animationMode)})}function M(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,4,"section",[["class","ready"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,O)),e.qb(2,16384,null,0,k.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,P)),e.qb(4,16384,null,0,k.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.timer),n(l,4,0,!t.timer)},null)}var w=t("Z+uX"),C=t("Fzqc"),q=t("Wf4p"),G=t("ZYjt"),S=e.pb({encapsulation:2,styles:[".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-background{display:none}}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}"],data:{}});function F(n){return e.Gb(2,[e.Db(671088640,1,{_primaryValueBar:0}),(n()(),e.rb(1,0,null,null,4,":svg:svg",[["class","mat-progress-bar-background mat-progress-bar-element"],["focusable","false"],["height","4"],["width","100%"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(n()(),e.rb(3,0,null,null,1,":svg:pattern",[["height","4"],["patternUnits","userSpaceOnUse"],["width","8"],["x","4"],["y","0"]],[[8,"id",0]],null,null,null,null)),(n()(),e.rb(4,0,null,null,0,":svg:circle",[["cx","2"],["cy","2"],["r","2"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,0,":svg:rect",[["height","100%"],["width","100%"]],[[1,"fill",0]],null,null,null,null)),(n()(),e.rb(6,0,null,null,2,"div",[["class","mat-progress-bar-buffer mat-progress-bar-element"]],null,null,null,null,null)),e.Cb(512,null,k.x,k.y,[e.k,e.t,e.E]),e.qb(8,278528,null,0,k.m,[k.x],{ngStyle:[0,"ngStyle"]},null),(n()(),e.rb(9,0,[[1,0],["primaryValueBar",1]],null,2,"div",[["class","mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null)),e.Cb(512,null,k.x,k.y,[e.k,e.t,e.E]),e.qb(11,278528,null,0,k.m,[k.x],{ngStyle:[0,"ngStyle"]},null),(n()(),e.rb(12,0,null,null,0,"div",[["class","mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null))],function(n,l){var t=l.component;n(l,8,0,t._bufferTransform()),n(l,11,0,t._primaryTransform())},function(n,l){var t=l.component;n(l,3,0,t.progressbarId),n(l,5,0,t._rectangleFillValue)})}var I=e.pb({encapsulation:0,styles:[[".score[_ngcontent-%COMP%]{padding:10px 20px;border-radius:5px;border:1px solid #a8a8a8}.score__row[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.score[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{display:flex;align-items:center}.score[_ngcontent-%COMP%]   .player__progress[_ngcontent-%COMP%]{flex:auto}.score[_ngcontent-%COMP%]   .player__name[_ngcontent-%COMP%]{width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:10px}"]],data:{}});function T(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,5,"div",[["class","score__row player"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"div",[["class","player__name"]],null,null,null,null,null)),(n()(),e.Fb(2,null,[" "," "])),(n()(),e.rb(3,0,null,null,2,"div",[["class","player__progress"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["mode","determinate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"_mat-animation-noopable",null]],null,null,F,S)),e.qb(5,4374528,null,0,w.b,[e.k,e.z,[2,x.a],[2,w.a]],{value:[0,"value"],mode:[1,"mode"]},null)],function(n,l){n(l,5,0,l.context.$implicit.progress,"determinate")},function(n,l){n(l,2,0,l.context.$implicit.name),n(l,4,0,"indeterminate"===e.Bb(l,5).mode||"query"===e.Bb(l,5).mode?null:e.Bb(l,5).value,e.Bb(l,5).mode,e.Bb(l,5)._isNoopAnimation)})}function j(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,2,"div",[["class","score"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,T)),e.qb(2,278528,null,0,k.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.items)},null)}var B=t("yGQT"),X=e.pb({encapsulation:0,styles:[[""]],data:{}});function $(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,1,"app-score-table",[],null,null,null,j,I)),e.qb(1,114688,null,0,m,[],{items:[0,"items"]},null)],function(n,l){n(l,1,0,l.component.players)},null)}var E=t("o3x0"),A=e.pb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;align-items:center;height:100%}.game[_ngcontent-%COMP%]{width:100%}.game__counter[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:20px 0}.game[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{width:300px;height:300px;display:flex;border-radius:50%;background:#c2f0ff;text-align:center;justify-content:center;align-items:center;font-size:6.25rem;margin-bottom:50px}.game__actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:grid;grid-template:1fr/1fr 1fr 1fr}.game__actions[_ngcontent-%COMP%]   .action__btn[_ngcontent-%COMP%]{padding:0 10px}.game__actions[_ngcontent-%COMP%]   .action__btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 30px;width:100%;display:block;font-size:1.25rem}.game__actions[_ngcontent-%COMP%]   .action__btn[_ngcontent-%COMP%]   button.showError[_ngcontent-%COMP%]{background:#ffd2d2}.score_table[_ngcontent-%COMP%]{position:fixed;top:20px;right:20px;max-width:400px;width:100%}"]],data:{}});function D(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,1,"app-ready-check",[],null,[[null,"readeState"]],function(n,l,t){var e=!0;return"readeState"===l&&(e=!1!==n.component.startGame()&&e),e},M,z)),e.qb(1,114688,null,0,d,[],null,{readeState:"readeState"})],function(n,l){n(l,1,0)},null)}function N(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,1,"div",[["class","counter"]],null,null,null,null,null)),(n()(),e.Fb(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.player.number)})}function R(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,4,"div",[["class","action__btn"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,3,"button",[["mat-raised-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.action(n.context.$implicit.action)&&e),e},_.b,_.a)),e.qb(2,180224,null,0,h.b,[e.k,v.b,[2,x.a]],null,null),e.qb(3,16384,[[1,4]],0,i,[e.k,e.E],{errorState:[0,"errorState"]},null),(n()(),e.Fb(4,0,["",""]))],function(n,l){n(l,3,0,l.context.$implicit.error)},function(n,l){n(l,1,0,e.Bb(l,2).disabled||null,"NoopAnimations"===e.Bb(l,2)._animationMode),n(l,4,0,l.context.$implicit.buttonText)})}function L(n){return e.Gb(0,[e.Db(671088640,1,{directives:1}),(n()(),e.gb(16777216,null,null,1,null,D)),e.qb(2,16384,null,0,k.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(3,0,null,null,7,"div",[["class","game"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,2,"div",[["class","game__counter"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,N)),e.qb(6,16384,null,0,k.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(7,0,null,null,3,"div",[["class","game__actions"]],null,null,null,null,null)),(n()(),e.rb(8,0,null,null,2,"div",[["class","action"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,R)),e.qb(10,278528,null,0,k.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(11,0,null,null,1,"app-score-table-container",[["class","score_table"]],null,null,null,$,X)),e.qb(12,245760,null,0,g,[B.l],null,null)],function(n,l){var t=l.component;n(l,2,0,t.showLoader),n(l,6,0,!t.showLoader),n(l,10,0,t.actionBtns),n(l,12,0)},null)}function W(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,1,"app-game-field",[],null,null,null,L,A)),e.qb(1,245760,null,0,b,[e.E,B.l,E.d],null,null)],function(n,l){n(l,1,0)},null)}var Y=e.nb("app-game-field",b,W,{},{},[]),Z=t("t68o"),V=e.pb({encapsulation:0,styles:[[".places__actions[_ngcontent-%COMP%]{padding-top:20px;display:flex;flex:1}.places__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 10px}.places__row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.places__row[_ngcontent-%COMP%]:nth-child(-n+3){font-weight:700;color:#2196f3}.places__row[_ngcontent-%COMP%]:nth-child(-n+3)   .name[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:1.25rem}.places__row[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:.875rem}.places__text[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;font-size:1.5625rem;color:#9c27b0}"]],data:{}});function H(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,6,"div",[["class","places__row"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,3,"span",[["class","name"]],null,null,null,null,null)),(n()(),e.Fb(2,null,[" "," - "])),(n()(),e.rb(3,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e.Fb(4,null,[""," "," "])),(n()(),e.rb(5,0,null,null,1,"span",[["class","time"]],null,null,null,null,null)),(n()(),e.Fb(6,null,[" ( "," ) "]))],null,function(n,l){n(l,2,0,l.context.index+1),n(l,4,0,l.context.$implicit.name,l.context.$implicit.isHuman?" <":""),n(l,6,0,l.context.$implicit.playingTime||"playing...")})}function U(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,14,"div",[["class","places"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"div",[["class","places__text"]],null,null,null,null,null)),(n()(),e.Fb(-1,null,[" Rang table "])),(n()(),e.gb(16777216,null,null,1,null,H)),e.qb(4,278528,null,0,k.i,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(5,0,null,null,9,"div",[["class","places__actions"]],null,null,null,null,null)),(n()(),e.rb(6,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,_.b,_.a)),e.qb(7,180224,null,0,h.b,[e.k,v.b,[2,x.a]],{color:[0,"color"]},null),(n()(),e.Fb(-1,0,["Restart"])),(n()(),e.rb(9,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,_.b,_.a)),e.qb(10,180224,null,0,h.b,[e.k,v.b,[2,x.a]],{color:[0,"color"]},null),(n()(),e.Fb(-1,0,["New Match"])),(n()(),e.rb(12,0,null,null,2,"button",[["mat-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,_.b,_.a)),e.qb(13,180224,null,0,h.b,[e.k,v.b,[2,x.a]],null,null),(n()(),e.Fb(-1,0,["History"]))],function(n,l){n(l,4,0,l.component.items),n(l,7,0,"primary"),n(l,10,0,"primary")},function(n,l){n(l,6,0,e.Bb(l,7).disabled||null,"NoopAnimations"===e.Bb(l,7)._animationMode),n(l,9,0,e.Bb(l,10).disabled||null,"NoopAnimations"===e.Bb(l,10)._animationMode),n(l,12,0,e.Bb(l,13).disabled||null,"NoopAnimations"===e.Bb(l,13)._animationMode)})}var J=e.pb({encapsulation:0,styles:[[""]],data:{}});function K(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,1,"app-result",[],null,null,null,U,V)),e.qb(1,114688,null,0,p,[],{items:[0,"items"]},null)],function(n,l){n(l,1,0,l.component.items)},null)}function Q(n){return e.Gb(0,[(n()(),e.rb(0,0,null,null,1,"app-result-container",[],null,null,null,K,J)),e.qb(1,114688,null,0,u,[B.l],null,null)],function(n,l){n(l,1,0)},null)}var nn=e.nb("app-result-container",u,Q,{},{},[]),ln=t("eDkP"),tn=t("M2Lx"),en=t("uGex"),rn=t("gIcY"),an=t("ZYCi"),on=function(){return function(){}}(),sn=t("dWZg"),un=t("4c35"),cn=t("qAlS"),bn=t("/VYK"),mn=t("seP3"),pn=t("b716"),dn=t("bSW0"),gn=t("ADsi");t.d(l,"GameModuleNgFactory",function(){return fn});var fn=e.ob(f,[],function(n){return e.yb([e.zb(512,e.j,e.bb,[[8,[y.a,Y,Z.a,nn]],[3,e.j],e.x]),e.zb(4608,k.l,k.k,[e.u,[2,k.A]]),e.zb(4608,ln.c,ln.c,[ln.i,ln.e,e.j,ln.h,ln.f,e.q,e.z,k.c,C.b,[2,k.f]]),e.zb(5120,ln.j,ln.k,[ln.c]),e.zb(5120,E.b,E.c,[ln.c]),e.zb(135680,E.d,E.d,[ln.c,e.q,[2,k.f],[2,E.a],E.b,[3,E.d],ln.e]),e.zb(4608,tn.c,tn.c,[]),e.zb(4608,q.b,q.b,[]),e.zb(5120,en.a,en.b,[ln.c]),e.zb(4608,rn.d,rn.d,[]),e.zb(4608,rn.o,rn.o,[]),e.zb(1073742336,k.b,k.b,[]),e.zb(1073742336,an.l,an.l,[[2,an.q],[2,an.k]]),e.zb(1073742336,on,on,[]),e.zb(1073742336,C.a,C.a,[]),e.zb(1073742336,q.j,q.j,[[2,q.c],[2,G.f]]),e.zb(1073742336,sn.b,sn.b,[]),e.zb(1073742336,q.s,q.s,[]),e.zb(1073742336,h.c,h.c,[]),e.zb(1073742336,un.f,un.f,[]),e.zb(1073742336,cn.b,cn.b,[]),e.zb(1073742336,ln.g,ln.g,[]),e.zb(1073742336,E.g,E.g,[]),e.zb(1073742336,bn.c,bn.c,[]),e.zb(1073742336,tn.d,tn.d,[]),e.zb(1073742336,mn.d,mn.d,[]),e.zb(1073742336,pn.b,pn.b,[]),e.zb(1073742336,q.q,q.q,[]),e.zb(1073742336,q.o,q.o,[]),e.zb(1073742336,en.d,en.d,[]),e.zb(1073742336,w.c,w.c,[]),e.zb(1073742336,dn.a,dn.a,[]),e.zb(1073742336,rn.n,rn.n,[]),e.zb(1073742336,rn.l,rn.l,[]),e.zb(1073742336,gn.a,gn.a,[]),e.zb(1073742336,f,f,[]),e.zb(1024,an.i,function(){return[[{path:"",component:b}]]},[])])})}}]);