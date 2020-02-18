goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32095 = coll;
var G__32096 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32095,G__32096) : shadow.dom.lazy_native_coll_seq.call(null,G__32095,G__32096));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32102 = arguments.length;
switch (G__32102) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32104 = arguments.length;
switch (G__32104) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32110 = arguments.length;
switch (G__32110) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32113 = arguments.length;
switch (G__32113) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32118 = arguments.length;
switch (G__32118) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32122 = document;
var G__32123 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32122,G__32123);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32124 = shadow.dom.dom_node(parent);
var G__32125 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32124,G__32125);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32127 = shadow.dom.dom_node(el);
var G__32128 = cls;
return goog.dom.classlist.add(G__32127,G__32128);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32129 = shadow.dom.dom_node(el);
var G__32130 = cls;
return goog.dom.classlist.remove(G__32129,G__32130);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32132 = arguments.length;
switch (G__32132) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32133 = shadow.dom.dom_node(el);
var G__32134 = cls;
return goog.dom.classlist.toggle(G__32133,G__32134);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32137){if((e32137 instanceof Object)){
var e = e32137;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32137;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32144 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32145 = null;
var count__32146 = (0);
var i__32147 = (0);
while(true){
if((i__32147 < count__32146)){
var el = chunk__32145.cljs$core$IIndexed$_nth$arity$2(null,i__32147);
var handler_32696__$1 = ((function (seq__32144,chunk__32145,count__32146,i__32147,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32144,chunk__32145,count__32146,i__32147,el))
;
var G__32156_32703 = el;
var G__32157_32704 = cljs.core.name(ev);
var G__32158_32705 = handler_32696__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32156_32703,G__32157_32704,G__32158_32705) : shadow.dom.dom_listen.call(null,G__32156_32703,G__32157_32704,G__32158_32705));


var G__32707 = seq__32144;
var G__32708 = chunk__32145;
var G__32709 = count__32146;
var G__32710 = (i__32147 + (1));
seq__32144 = G__32707;
chunk__32145 = G__32708;
count__32146 = G__32709;
i__32147 = G__32710;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32144);
if(temp__5735__auto__){
var seq__32144__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32144__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32144__$1);
var G__32711 = cljs.core.chunk_rest(seq__32144__$1);
var G__32712 = c__4609__auto__;
var G__32713 = cljs.core.count(c__4609__auto__);
var G__32714 = (0);
seq__32144 = G__32711;
chunk__32145 = G__32712;
count__32146 = G__32713;
i__32147 = G__32714;
continue;
} else {
var el = cljs.core.first(seq__32144__$1);
var handler_32716__$1 = ((function (seq__32144,chunk__32145,count__32146,i__32147,el,seq__32144__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32144,chunk__32145,count__32146,i__32147,el,seq__32144__$1,temp__5735__auto__))
;
var G__32159_32718 = el;
var G__32160_32719 = cljs.core.name(ev);
var G__32161_32720 = handler_32716__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32159_32718,G__32160_32719,G__32161_32720) : shadow.dom.dom_listen.call(null,G__32159_32718,G__32160_32719,G__32161_32720));


var G__32721 = cljs.core.next(seq__32144__$1);
var G__32722 = null;
var G__32723 = (0);
var G__32724 = (0);
seq__32144 = G__32721;
chunk__32145 = G__32722;
count__32146 = G__32723;
i__32147 = G__32724;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32163 = arguments.length;
switch (G__32163) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32164 = shadow.dom.dom_node(el);
var G__32165 = cljs.core.name(ev);
var G__32166 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32164,G__32165,G__32166) : shadow.dom.dom_listen.call(null,G__32164,G__32165,G__32166));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32168 = shadow.dom.dom_node(el);
var G__32169 = cljs.core.name(ev);
var G__32170 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32168,G__32169,G__32170) : shadow.dom.dom_listen_remove.call(null,G__32168,G__32169,G__32170));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32171 = cljs.core.seq(events);
var chunk__32172 = null;
var count__32173 = (0);
var i__32174 = (0);
while(true){
if((i__32174 < count__32173)){
var vec__32182 = chunk__32172.cljs$core$IIndexed$_nth$arity$2(null,i__32174);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32182,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32737 = seq__32171;
var G__32738 = chunk__32172;
var G__32739 = count__32173;
var G__32740 = (i__32174 + (1));
seq__32171 = G__32737;
chunk__32172 = G__32738;
count__32173 = G__32739;
i__32174 = G__32740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32171);
if(temp__5735__auto__){
var seq__32171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32171__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32171__$1);
var G__32745 = cljs.core.chunk_rest(seq__32171__$1);
var G__32746 = c__4609__auto__;
var G__32747 = cljs.core.count(c__4609__auto__);
var G__32748 = (0);
seq__32171 = G__32745;
chunk__32172 = G__32746;
count__32173 = G__32747;
i__32174 = G__32748;
continue;
} else {
var vec__32186 = cljs.core.first(seq__32171__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32186,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32749 = cljs.core.next(seq__32171__$1);
var G__32750 = null;
var G__32751 = (0);
var G__32752 = (0);
seq__32171 = G__32749;
chunk__32172 = G__32750;
count__32173 = G__32751;
i__32174 = G__32752;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32189 = cljs.core.seq(styles);
var chunk__32190 = null;
var count__32191 = (0);
var i__32192 = (0);
while(true){
if((i__32192 < count__32191)){
var vec__32211 = chunk__32190.cljs$core$IIndexed$_nth$arity$2(null,i__32192);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32211,(1),null);
var G__32214_32755 = dom;
var G__32215_32756 = cljs.core.name(k);
var G__32216_32757 = (((v == null))?"":v);
goog.style.setStyle(G__32214_32755,G__32215_32756,G__32216_32757);


var G__32759 = seq__32189;
var G__32760 = chunk__32190;
var G__32761 = count__32191;
var G__32762 = (i__32192 + (1));
seq__32189 = G__32759;
chunk__32190 = G__32760;
count__32191 = G__32761;
i__32192 = G__32762;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32189);
if(temp__5735__auto__){
var seq__32189__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32189__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32189__$1);
var G__32765 = cljs.core.chunk_rest(seq__32189__$1);
var G__32766 = c__4609__auto__;
var G__32767 = cljs.core.count(c__4609__auto__);
var G__32768 = (0);
seq__32189 = G__32765;
chunk__32190 = G__32766;
count__32191 = G__32767;
i__32192 = G__32768;
continue;
} else {
var vec__32217 = cljs.core.first(seq__32189__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(1),null);
var G__32220_32775 = dom;
var G__32221_32776 = cljs.core.name(k);
var G__32222_32777 = (((v == null))?"":v);
goog.style.setStyle(G__32220_32775,G__32221_32776,G__32222_32777);


var G__32779 = cljs.core.next(seq__32189__$1);
var G__32780 = null;
var G__32781 = (0);
var G__32782 = (0);
seq__32189 = G__32779;
chunk__32190 = G__32780;
count__32191 = G__32781;
i__32192 = G__32782;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32225_32783 = key;
var G__32225_32784__$1 = (((G__32225_32783 instanceof cljs.core.Keyword))?G__32225_32783.fqn:null);
switch (G__32225_32784__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32792 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_32792,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_32792,"aria-");
}
})())){
el.setAttribute(ks_32792,value);
} else {
(el[ks_32792] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32232 = shadow.dom.dom_node(el);
var G__32233 = cls;
return goog.dom.classlist.contains(G__32232,G__32233);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32236){
var map__32237 = p__32236;
var map__32237__$1 = (((((!((map__32237 == null))))?(((((map__32237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32237):map__32237);
var props = map__32237__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32237__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32242 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32242,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32242,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32242,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32246 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32246,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32246;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32248 = arguments.length;
switch (G__32248) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32250){
var vec__32252 = p__32250;
var seq__32253 = cljs.core.seq(vec__32252);
var first__32254 = cljs.core.first(seq__32253);
var seq__32253__$1 = cljs.core.next(seq__32253);
var nn = first__32254;
var first__32254__$1 = cljs.core.first(seq__32253__$1);
var seq__32253__$2 = cljs.core.next(seq__32253__$1);
var np = first__32254__$1;
var nc = seq__32253__$2;
var node = vec__32252;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32256 = nn;
var G__32257 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32256,G__32257) : create_fn.call(null,G__32256,G__32257));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32258 = nn;
var G__32259 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32258,G__32259) : create_fn.call(null,G__32258,G__32259));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32260 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32260,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32260,(1),null);
var seq__32263_32805 = cljs.core.seq(node_children);
var chunk__32264_32806 = null;
var count__32265_32807 = (0);
var i__32266_32808 = (0);
while(true){
if((i__32266_32808 < count__32265_32807)){
var child_struct_32810 = chunk__32264_32806.cljs$core$IIndexed$_nth$arity$2(null,i__32266_32808);
var children_32811 = shadow.dom.dom_node(child_struct_32810);
if(cljs.core.seq_QMARK_(children_32811)){
var seq__32285_32812 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32811));
var chunk__32287_32813 = null;
var count__32288_32814 = (0);
var i__32289_32815 = (0);
while(true){
if((i__32289_32815 < count__32288_32814)){
var child_32816 = chunk__32287_32813.cljs$core$IIndexed$_nth$arity$2(null,i__32289_32815);
if(cljs.core.truth_(child_32816)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32816);


var G__32817 = seq__32285_32812;
var G__32818 = chunk__32287_32813;
var G__32819 = count__32288_32814;
var G__32820 = (i__32289_32815 + (1));
seq__32285_32812 = G__32817;
chunk__32287_32813 = G__32818;
count__32288_32814 = G__32819;
i__32289_32815 = G__32820;
continue;
} else {
var G__32821 = seq__32285_32812;
var G__32822 = chunk__32287_32813;
var G__32823 = count__32288_32814;
var G__32824 = (i__32289_32815 + (1));
seq__32285_32812 = G__32821;
chunk__32287_32813 = G__32822;
count__32288_32814 = G__32823;
i__32289_32815 = G__32824;
continue;
}
} else {
var temp__5735__auto___32825 = cljs.core.seq(seq__32285_32812);
if(temp__5735__auto___32825){
var seq__32285_32826__$1 = temp__5735__auto___32825;
if(cljs.core.chunked_seq_QMARK_(seq__32285_32826__$1)){
var c__4609__auto___32827 = cljs.core.chunk_first(seq__32285_32826__$1);
var G__32828 = cljs.core.chunk_rest(seq__32285_32826__$1);
var G__32829 = c__4609__auto___32827;
var G__32830 = cljs.core.count(c__4609__auto___32827);
var G__32831 = (0);
seq__32285_32812 = G__32828;
chunk__32287_32813 = G__32829;
count__32288_32814 = G__32830;
i__32289_32815 = G__32831;
continue;
} else {
var child_32832 = cljs.core.first(seq__32285_32826__$1);
if(cljs.core.truth_(child_32832)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32832);


var G__32837 = cljs.core.next(seq__32285_32826__$1);
var G__32838 = null;
var G__32839 = (0);
var G__32840 = (0);
seq__32285_32812 = G__32837;
chunk__32287_32813 = G__32838;
count__32288_32814 = G__32839;
i__32289_32815 = G__32840;
continue;
} else {
var G__32841 = cljs.core.next(seq__32285_32826__$1);
var G__32842 = null;
var G__32843 = (0);
var G__32844 = (0);
seq__32285_32812 = G__32841;
chunk__32287_32813 = G__32842;
count__32288_32814 = G__32843;
i__32289_32815 = G__32844;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32811);
}


var G__32845 = seq__32263_32805;
var G__32846 = chunk__32264_32806;
var G__32847 = count__32265_32807;
var G__32848 = (i__32266_32808 + (1));
seq__32263_32805 = G__32845;
chunk__32264_32806 = G__32846;
count__32265_32807 = G__32847;
i__32266_32808 = G__32848;
continue;
} else {
var temp__5735__auto___32849 = cljs.core.seq(seq__32263_32805);
if(temp__5735__auto___32849){
var seq__32263_32850__$1 = temp__5735__auto___32849;
if(cljs.core.chunked_seq_QMARK_(seq__32263_32850__$1)){
var c__4609__auto___32857 = cljs.core.chunk_first(seq__32263_32850__$1);
var G__32858 = cljs.core.chunk_rest(seq__32263_32850__$1);
var G__32859 = c__4609__auto___32857;
var G__32860 = cljs.core.count(c__4609__auto___32857);
var G__32861 = (0);
seq__32263_32805 = G__32858;
chunk__32264_32806 = G__32859;
count__32265_32807 = G__32860;
i__32266_32808 = G__32861;
continue;
} else {
var child_struct_32862 = cljs.core.first(seq__32263_32850__$1);
var children_32863 = shadow.dom.dom_node(child_struct_32862);
if(cljs.core.seq_QMARK_(children_32863)){
var seq__32293_32864 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32863));
var chunk__32295_32865 = null;
var count__32296_32866 = (0);
var i__32297_32867 = (0);
while(true){
if((i__32297_32867 < count__32296_32866)){
var child_32868 = chunk__32295_32865.cljs$core$IIndexed$_nth$arity$2(null,i__32297_32867);
if(cljs.core.truth_(child_32868)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32868);


var G__32869 = seq__32293_32864;
var G__32870 = chunk__32295_32865;
var G__32871 = count__32296_32866;
var G__32872 = (i__32297_32867 + (1));
seq__32293_32864 = G__32869;
chunk__32295_32865 = G__32870;
count__32296_32866 = G__32871;
i__32297_32867 = G__32872;
continue;
} else {
var G__32873 = seq__32293_32864;
var G__32874 = chunk__32295_32865;
var G__32875 = count__32296_32866;
var G__32876 = (i__32297_32867 + (1));
seq__32293_32864 = G__32873;
chunk__32295_32865 = G__32874;
count__32296_32866 = G__32875;
i__32297_32867 = G__32876;
continue;
}
} else {
var temp__5735__auto___32877__$1 = cljs.core.seq(seq__32293_32864);
if(temp__5735__auto___32877__$1){
var seq__32293_32878__$1 = temp__5735__auto___32877__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32293_32878__$1)){
var c__4609__auto___32879 = cljs.core.chunk_first(seq__32293_32878__$1);
var G__32880 = cljs.core.chunk_rest(seq__32293_32878__$1);
var G__32881 = c__4609__auto___32879;
var G__32882 = cljs.core.count(c__4609__auto___32879);
var G__32883 = (0);
seq__32293_32864 = G__32880;
chunk__32295_32865 = G__32881;
count__32296_32866 = G__32882;
i__32297_32867 = G__32883;
continue;
} else {
var child_32884 = cljs.core.first(seq__32293_32878__$1);
if(cljs.core.truth_(child_32884)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32884);


var G__32885 = cljs.core.next(seq__32293_32878__$1);
var G__32886 = null;
var G__32887 = (0);
var G__32888 = (0);
seq__32293_32864 = G__32885;
chunk__32295_32865 = G__32886;
count__32296_32866 = G__32887;
i__32297_32867 = G__32888;
continue;
} else {
var G__32889 = cljs.core.next(seq__32293_32878__$1);
var G__32890 = null;
var G__32891 = (0);
var G__32892 = (0);
seq__32293_32864 = G__32889;
chunk__32295_32865 = G__32890;
count__32296_32866 = G__32891;
i__32297_32867 = G__32892;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32863);
}


var G__32897 = cljs.core.next(seq__32263_32850__$1);
var G__32898 = null;
var G__32899 = (0);
var G__32900 = (0);
seq__32263_32805 = G__32897;
chunk__32264_32806 = G__32898;
count__32265_32807 = G__32899;
i__32266_32808 = G__32900;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32304 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32304);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32308 = cljs.core.seq(node);
var chunk__32309 = null;
var count__32310 = (0);
var i__32311 = (0);
while(true){
if((i__32311 < count__32310)){
var n = chunk__32309.cljs$core$IIndexed$_nth$arity$2(null,i__32311);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32903 = seq__32308;
var G__32904 = chunk__32309;
var G__32905 = count__32310;
var G__32906 = (i__32311 + (1));
seq__32308 = G__32903;
chunk__32309 = G__32904;
count__32310 = G__32905;
i__32311 = G__32906;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32308);
if(temp__5735__auto__){
var seq__32308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32308__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32308__$1);
var G__32907 = cljs.core.chunk_rest(seq__32308__$1);
var G__32908 = c__4609__auto__;
var G__32909 = cljs.core.count(c__4609__auto__);
var G__32910 = (0);
seq__32308 = G__32907;
chunk__32309 = G__32908;
count__32310 = G__32909;
i__32311 = G__32910;
continue;
} else {
var n = cljs.core.first(seq__32308__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32911 = cljs.core.next(seq__32308__$1);
var G__32912 = null;
var G__32913 = (0);
var G__32914 = (0);
seq__32308 = G__32911;
chunk__32309 = G__32912;
count__32310 = G__32913;
i__32311 = G__32914;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32313 = shadow.dom.dom_node(new$);
var G__32314 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32313,G__32314);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32316 = arguments.length;
switch (G__32316) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32321 = arguments.length;
switch (G__32321) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32332 = arguments.length;
switch (G__32332) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32918 = arguments.length;
var i__4790__auto___32919 = (0);
while(true){
if((i__4790__auto___32919 < len__4789__auto___32918)){
args__4795__auto__.push((arguments[i__4790__auto___32919]));

var G__32920 = (i__4790__auto___32919 + (1));
i__4790__auto___32919 = G__32920;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32339_32921 = cljs.core.seq(nodes);
var chunk__32340_32922 = null;
var count__32341_32923 = (0);
var i__32342_32924 = (0);
while(true){
if((i__32342_32924 < count__32341_32923)){
var node_32925 = chunk__32340_32922.cljs$core$IIndexed$_nth$arity$2(null,i__32342_32924);
fragment.appendChild(shadow.dom._to_dom(node_32925));


var G__32926 = seq__32339_32921;
var G__32927 = chunk__32340_32922;
var G__32928 = count__32341_32923;
var G__32929 = (i__32342_32924 + (1));
seq__32339_32921 = G__32926;
chunk__32340_32922 = G__32927;
count__32341_32923 = G__32928;
i__32342_32924 = G__32929;
continue;
} else {
var temp__5735__auto___32930 = cljs.core.seq(seq__32339_32921);
if(temp__5735__auto___32930){
var seq__32339_32931__$1 = temp__5735__auto___32930;
if(cljs.core.chunked_seq_QMARK_(seq__32339_32931__$1)){
var c__4609__auto___32932 = cljs.core.chunk_first(seq__32339_32931__$1);
var G__32933 = cljs.core.chunk_rest(seq__32339_32931__$1);
var G__32934 = c__4609__auto___32932;
var G__32935 = cljs.core.count(c__4609__auto___32932);
var G__32936 = (0);
seq__32339_32921 = G__32933;
chunk__32340_32922 = G__32934;
count__32341_32923 = G__32935;
i__32342_32924 = G__32936;
continue;
} else {
var node_32937 = cljs.core.first(seq__32339_32931__$1);
fragment.appendChild(shadow.dom._to_dom(node_32937));


var G__32938 = cljs.core.next(seq__32339_32931__$1);
var G__32939 = null;
var G__32940 = (0);
var G__32941 = (0);
seq__32339_32921 = G__32938;
chunk__32340_32922 = G__32939;
count__32341_32923 = G__32940;
i__32342_32924 = G__32941;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32336){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32336));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32343_32942 = cljs.core.seq(scripts);
var chunk__32344_32943 = null;
var count__32345_32944 = (0);
var i__32346_32945 = (0);
while(true){
if((i__32346_32945 < count__32345_32944)){
var vec__32354_32946 = chunk__32344_32943.cljs$core$IIndexed$_nth$arity$2(null,i__32346_32945);
var script_tag_32947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32354_32946,(0),null);
var script_body_32948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32354_32946,(1),null);
eval(script_body_32948);


var G__32949 = seq__32343_32942;
var G__32950 = chunk__32344_32943;
var G__32951 = count__32345_32944;
var G__32952 = (i__32346_32945 + (1));
seq__32343_32942 = G__32949;
chunk__32344_32943 = G__32950;
count__32345_32944 = G__32951;
i__32346_32945 = G__32952;
continue;
} else {
var temp__5735__auto___32953 = cljs.core.seq(seq__32343_32942);
if(temp__5735__auto___32953){
var seq__32343_32954__$1 = temp__5735__auto___32953;
if(cljs.core.chunked_seq_QMARK_(seq__32343_32954__$1)){
var c__4609__auto___32955 = cljs.core.chunk_first(seq__32343_32954__$1);
var G__32956 = cljs.core.chunk_rest(seq__32343_32954__$1);
var G__32957 = c__4609__auto___32955;
var G__32958 = cljs.core.count(c__4609__auto___32955);
var G__32959 = (0);
seq__32343_32942 = G__32956;
chunk__32344_32943 = G__32957;
count__32345_32944 = G__32958;
i__32346_32945 = G__32959;
continue;
} else {
var vec__32357_32960 = cljs.core.first(seq__32343_32954__$1);
var script_tag_32961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32357_32960,(0),null);
var script_body_32962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32357_32960,(1),null);
eval(script_body_32962);


var G__32963 = cljs.core.next(seq__32343_32954__$1);
var G__32964 = null;
var G__32965 = (0);
var G__32966 = (0);
seq__32343_32942 = G__32963;
chunk__32344_32943 = G__32964;
count__32345_32944 = G__32965;
i__32346_32945 = G__32966;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32360){
var vec__32361 = p__32360;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32361,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32361,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__32365 = shadow.dom.dom_node(el);
var G__32366 = cls;
return goog.dom.getAncestorByClass(G__32365,G__32366);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32370 = arguments.length;
switch (G__32370) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__32372 = shadow.dom.dom_node(el);
var G__32373 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32372,G__32373);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32374 = shadow.dom.dom_node(el);
var G__32375 = cljs.core.name(tag);
var G__32376 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32374,G__32375,G__32376);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32377 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32377);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32378 = shadow.dom.dom_node(dom);
var G__32379 = value;
return goog.dom.forms.setValue(G__32378,G__32379);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32386 = cljs.core.seq(style_keys);
var chunk__32387 = null;
var count__32388 = (0);
var i__32389 = (0);
while(true){
if((i__32389 < count__32388)){
var it = chunk__32387.cljs$core$IIndexed$_nth$arity$2(null,i__32389);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32974 = seq__32386;
var G__32975 = chunk__32387;
var G__32976 = count__32388;
var G__32977 = (i__32389 + (1));
seq__32386 = G__32974;
chunk__32387 = G__32975;
count__32388 = G__32976;
i__32389 = G__32977;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32386);
if(temp__5735__auto__){
var seq__32386__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32386__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32386__$1);
var G__32984 = cljs.core.chunk_rest(seq__32386__$1);
var G__32985 = c__4609__auto__;
var G__32986 = cljs.core.count(c__4609__auto__);
var G__32987 = (0);
seq__32386 = G__32984;
chunk__32387 = G__32985;
count__32388 = G__32986;
i__32389 = G__32987;
continue;
} else {
var it = cljs.core.first(seq__32386__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32988 = cljs.core.next(seq__32386__$1);
var G__32989 = null;
var G__32990 = (0);
var G__32991 = (0);
seq__32386 = G__32988;
chunk__32387 = G__32989;
count__32388 = G__32990;
i__32389 = G__32991;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32391,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32398 = k32391;
var G__32398__$1 = (((G__32398 instanceof cljs.core.Keyword))?G__32398.fqn:null);
switch (G__32398__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32391,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32402){
var vec__32403 = p__32402;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32403,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32403,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32390){
var self__ = this;
var G__32390__$1 = this;
return (new cljs.core.RecordIter((0),G__32390__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32407 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32407(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32392,other32393){
var self__ = this;
var this32392__$1 = this;
return (((!((other32393 == null)))) && ((this32392__$1.constructor === other32393.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32392__$1.x,other32393.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32392__$1.y,other32393.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32392__$1.__extmap,other32393.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32390){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32411 = cljs.core.keyword_identical_QMARK_;
var expr__32412 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32414 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32415 = expr__32412;
return (pred__32411.cljs$core$IFn$_invoke$arity$2 ? pred__32411.cljs$core$IFn$_invoke$arity$2(G__32414,G__32415) : pred__32411.call(null,G__32414,G__32415));
})())){
return (new shadow.dom.Coordinate(G__32390,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32416 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32417 = expr__32412;
return (pred__32411.cljs$core$IFn$_invoke$arity$2 ? pred__32411.cljs$core$IFn$_invoke$arity$2(G__32416,G__32417) : pred__32411.call(null,G__32416,G__32417));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32390,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32390),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32390){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32390,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32394){
var extmap__4478__auto__ = (function (){var G__32420 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32394,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32394)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32420);
} else {
return G__32420;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32394),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32394),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32423 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32423);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32430 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32430);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__32431 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__32431);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32433,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32442 = k32433;
var G__32442__$1 = (((G__32442 instanceof cljs.core.Keyword))?G__32442.fqn:null);
switch (G__32442__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32433,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32444){
var vec__32446 = p__32444;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32446,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32446,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32432){
var self__ = this;
var G__32432__$1 = this;
return (new cljs.core.RecordIter((0),G__32432__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32461 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32461(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32434,other32435){
var self__ = this;
var this32434__$1 = this;
return (((!((other32435 == null)))) && ((this32434__$1.constructor === other32435.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32434__$1.w,other32435.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32434__$1.h,other32435.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32434__$1.__extmap,other32435.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32432){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32462 = cljs.core.keyword_identical_QMARK_;
var expr__32463 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32465 = new cljs.core.Keyword(null,"w","w",354169001);
var G__32466 = expr__32463;
return (pred__32462.cljs$core$IFn$_invoke$arity$2 ? pred__32462.cljs$core$IFn$_invoke$arity$2(G__32465,G__32466) : pred__32462.call(null,G__32465,G__32466));
})())){
return (new shadow.dom.Size(G__32432,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32467 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__32468 = expr__32463;
return (pred__32462.cljs$core$IFn$_invoke$arity$2 ? pred__32462.cljs$core$IFn$_invoke$arity$2(G__32467,G__32468) : pred__32462.call(null,G__32467,G__32468));
})())){
return (new shadow.dom.Size(self__.w,G__32432,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32432),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32432){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32432,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32436){
var extmap__4478__auto__ = (function (){var G__32480 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32436,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32436)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32480);
} else {
return G__32480;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32436),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32436),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__32484 = shadow.dom.dom_node(el);
return goog.style.getSize(G__32484);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33019 = (i + (1));
var G__33020 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33019;
ret = G__33020;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32499){
var vec__32500 = p__32499;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32500,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32504 = arguments.length;
switch (G__32504) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32506_33024 = new_node;
var G__32507_33025 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__32506_33024,G__32507_33025);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32508_33026 = new_node;
var G__32509_33027 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__32508_33026,G__32509_33027);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33028 = ps;
var G__33029 = (i + (1));
el__$1 = G__33028;
i = G__33029;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__32517 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__32517);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__32522 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__32522);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__32523 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__32523);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32530 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32530,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32530,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32530,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32541_33033 = cljs.core.seq(props);
var chunk__32542_33034 = null;
var count__32543_33035 = (0);
var i__32544_33036 = (0);
while(true){
if((i__32544_33036 < count__32543_33035)){
var vec__32551_33037 = chunk__32542_33034.cljs$core$IIndexed$_nth$arity$2(null,i__32544_33036);
var k_33038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32551_33037,(0),null);
var v_33039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32551_33037,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33038);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33038),v_33039);


var G__33040 = seq__32541_33033;
var G__33041 = chunk__32542_33034;
var G__33042 = count__32543_33035;
var G__33043 = (i__32544_33036 + (1));
seq__32541_33033 = G__33040;
chunk__32542_33034 = G__33041;
count__32543_33035 = G__33042;
i__32544_33036 = G__33043;
continue;
} else {
var temp__5735__auto___33044 = cljs.core.seq(seq__32541_33033);
if(temp__5735__auto___33044){
var seq__32541_33045__$1 = temp__5735__auto___33044;
if(cljs.core.chunked_seq_QMARK_(seq__32541_33045__$1)){
var c__4609__auto___33046 = cljs.core.chunk_first(seq__32541_33045__$1);
var G__33047 = cljs.core.chunk_rest(seq__32541_33045__$1);
var G__33048 = c__4609__auto___33046;
var G__33049 = cljs.core.count(c__4609__auto___33046);
var G__33050 = (0);
seq__32541_33033 = G__33047;
chunk__32542_33034 = G__33048;
count__32543_33035 = G__33049;
i__32544_33036 = G__33050;
continue;
} else {
var vec__32559_33051 = cljs.core.first(seq__32541_33045__$1);
var k_33052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32559_33051,(0),null);
var v_33053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32559_33051,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33052);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33052),v_33053);


var G__33055 = cljs.core.next(seq__32541_33045__$1);
var G__33056 = null;
var G__33057 = (0);
var G__33058 = (0);
seq__32541_33033 = G__33055;
chunk__32542_33034 = G__33056;
count__32543_33035 = G__33057;
i__32544_33036 = G__33058;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32563 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32563,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32563,(1),null);
var seq__32569_33060 = cljs.core.seq(node_children);
var chunk__32571_33061 = null;
var count__32572_33062 = (0);
var i__32573_33063 = (0);
while(true){
if((i__32573_33063 < count__32572_33062)){
var child_struct_33065 = chunk__32571_33061.cljs$core$IIndexed$_nth$arity$2(null,i__32573_33063);
if((!((child_struct_33065 == null)))){
if(typeof child_struct_33065 === 'string'){
var text_33066 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33066),child_struct_33065].join(''));
} else {
var children_33067 = shadow.dom.svg_node(child_struct_33065);
if(cljs.core.seq_QMARK_(children_33067)){
var seq__32593_33068 = cljs.core.seq(children_33067);
var chunk__32595_33069 = null;
var count__32596_33070 = (0);
var i__32597_33071 = (0);
while(true){
if((i__32597_33071 < count__32596_33070)){
var child_33072 = chunk__32595_33069.cljs$core$IIndexed$_nth$arity$2(null,i__32597_33071);
if(cljs.core.truth_(child_33072)){
node.appendChild(child_33072);


var G__33073 = seq__32593_33068;
var G__33074 = chunk__32595_33069;
var G__33075 = count__32596_33070;
var G__33076 = (i__32597_33071 + (1));
seq__32593_33068 = G__33073;
chunk__32595_33069 = G__33074;
count__32596_33070 = G__33075;
i__32597_33071 = G__33076;
continue;
} else {
var G__33077 = seq__32593_33068;
var G__33078 = chunk__32595_33069;
var G__33079 = count__32596_33070;
var G__33080 = (i__32597_33071 + (1));
seq__32593_33068 = G__33077;
chunk__32595_33069 = G__33078;
count__32596_33070 = G__33079;
i__32597_33071 = G__33080;
continue;
}
} else {
var temp__5735__auto___33081 = cljs.core.seq(seq__32593_33068);
if(temp__5735__auto___33081){
var seq__32593_33082__$1 = temp__5735__auto___33081;
if(cljs.core.chunked_seq_QMARK_(seq__32593_33082__$1)){
var c__4609__auto___33083 = cljs.core.chunk_first(seq__32593_33082__$1);
var G__33084 = cljs.core.chunk_rest(seq__32593_33082__$1);
var G__33085 = c__4609__auto___33083;
var G__33086 = cljs.core.count(c__4609__auto___33083);
var G__33087 = (0);
seq__32593_33068 = G__33084;
chunk__32595_33069 = G__33085;
count__32596_33070 = G__33086;
i__32597_33071 = G__33087;
continue;
} else {
var child_33088 = cljs.core.first(seq__32593_33082__$1);
if(cljs.core.truth_(child_33088)){
node.appendChild(child_33088);


var G__33089 = cljs.core.next(seq__32593_33082__$1);
var G__33090 = null;
var G__33091 = (0);
var G__33092 = (0);
seq__32593_33068 = G__33089;
chunk__32595_33069 = G__33090;
count__32596_33070 = G__33091;
i__32597_33071 = G__33092;
continue;
} else {
var G__33093 = cljs.core.next(seq__32593_33082__$1);
var G__33094 = null;
var G__33095 = (0);
var G__33096 = (0);
seq__32593_33068 = G__33093;
chunk__32595_33069 = G__33094;
count__32596_33070 = G__33095;
i__32597_33071 = G__33096;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33067);
}
}


var G__33097 = seq__32569_33060;
var G__33098 = chunk__32571_33061;
var G__33099 = count__32572_33062;
var G__33100 = (i__32573_33063 + (1));
seq__32569_33060 = G__33097;
chunk__32571_33061 = G__33098;
count__32572_33062 = G__33099;
i__32573_33063 = G__33100;
continue;
} else {
var G__33101 = seq__32569_33060;
var G__33102 = chunk__32571_33061;
var G__33103 = count__32572_33062;
var G__33104 = (i__32573_33063 + (1));
seq__32569_33060 = G__33101;
chunk__32571_33061 = G__33102;
count__32572_33062 = G__33103;
i__32573_33063 = G__33104;
continue;
}
} else {
var temp__5735__auto___33106 = cljs.core.seq(seq__32569_33060);
if(temp__5735__auto___33106){
var seq__32569_33107__$1 = temp__5735__auto___33106;
if(cljs.core.chunked_seq_QMARK_(seq__32569_33107__$1)){
var c__4609__auto___33108 = cljs.core.chunk_first(seq__32569_33107__$1);
var G__33109 = cljs.core.chunk_rest(seq__32569_33107__$1);
var G__33110 = c__4609__auto___33108;
var G__33111 = cljs.core.count(c__4609__auto___33108);
var G__33112 = (0);
seq__32569_33060 = G__33109;
chunk__32571_33061 = G__33110;
count__32572_33062 = G__33111;
i__32573_33063 = G__33112;
continue;
} else {
var child_struct_33114 = cljs.core.first(seq__32569_33107__$1);
if((!((child_struct_33114 == null)))){
if(typeof child_struct_33114 === 'string'){
var text_33115 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33115),child_struct_33114].join(''));
} else {
var children_33116 = shadow.dom.svg_node(child_struct_33114);
if(cljs.core.seq_QMARK_(children_33116)){
var seq__32599_33117 = cljs.core.seq(children_33116);
var chunk__32601_33118 = null;
var count__32602_33119 = (0);
var i__32603_33120 = (0);
while(true){
if((i__32603_33120 < count__32602_33119)){
var child_33123 = chunk__32601_33118.cljs$core$IIndexed$_nth$arity$2(null,i__32603_33120);
if(cljs.core.truth_(child_33123)){
node.appendChild(child_33123);


var G__33125 = seq__32599_33117;
var G__33126 = chunk__32601_33118;
var G__33127 = count__32602_33119;
var G__33128 = (i__32603_33120 + (1));
seq__32599_33117 = G__33125;
chunk__32601_33118 = G__33126;
count__32602_33119 = G__33127;
i__32603_33120 = G__33128;
continue;
} else {
var G__33129 = seq__32599_33117;
var G__33130 = chunk__32601_33118;
var G__33131 = count__32602_33119;
var G__33132 = (i__32603_33120 + (1));
seq__32599_33117 = G__33129;
chunk__32601_33118 = G__33130;
count__32602_33119 = G__33131;
i__32603_33120 = G__33132;
continue;
}
} else {
var temp__5735__auto___33133__$1 = cljs.core.seq(seq__32599_33117);
if(temp__5735__auto___33133__$1){
var seq__32599_33134__$1 = temp__5735__auto___33133__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32599_33134__$1)){
var c__4609__auto___33135 = cljs.core.chunk_first(seq__32599_33134__$1);
var G__33136 = cljs.core.chunk_rest(seq__32599_33134__$1);
var G__33137 = c__4609__auto___33135;
var G__33138 = cljs.core.count(c__4609__auto___33135);
var G__33139 = (0);
seq__32599_33117 = G__33136;
chunk__32601_33118 = G__33137;
count__32602_33119 = G__33138;
i__32603_33120 = G__33139;
continue;
} else {
var child_33140 = cljs.core.first(seq__32599_33134__$1);
if(cljs.core.truth_(child_33140)){
node.appendChild(child_33140);


var G__33141 = cljs.core.next(seq__32599_33134__$1);
var G__33142 = null;
var G__33143 = (0);
var G__33144 = (0);
seq__32599_33117 = G__33141;
chunk__32601_33118 = G__33142;
count__32602_33119 = G__33143;
i__32603_33120 = G__33144;
continue;
} else {
var G__33145 = cljs.core.next(seq__32599_33134__$1);
var G__33146 = null;
var G__33147 = (0);
var G__33148 = (0);
seq__32599_33117 = G__33145;
chunk__32601_33118 = G__33146;
count__32602_33119 = G__33147;
i__32603_33120 = G__33148;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33116);
}
}


var G__33149 = cljs.core.next(seq__32569_33107__$1);
var G__33150 = null;
var G__33151 = (0);
var G__33152 = (0);
seq__32569_33060 = G__33149;
chunk__32571_33061 = G__33150;
count__32572_33062 = G__33151;
i__32573_33063 = G__33152;
continue;
} else {
var G__33153 = cljs.core.next(seq__32569_33107__$1);
var G__33154 = null;
var G__33155 = (0);
var G__33156 = (0);
seq__32569_33060 = G__33153;
chunk__32571_33061 = G__33154;
count__32572_33062 = G__33155;
i__32573_33063 = G__33156;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__32605_33157 = shadow.dom._to_svg;
var G__32606_33158 = "string";
var G__32607_33159 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__32605_33157,G__32606_33158,G__32607_33159);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__32608_33160 = shadow.dom._to_svg;
var G__32609_33161 = "null";
var G__32610_33162 = (function (_){
return null;
});
goog.object.set(G__32608_33160,G__32609_33161,G__32610_33162);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33164 = arguments.length;
var i__4790__auto___33165 = (0);
while(true){
if((i__4790__auto___33165 < len__4789__auto___33164)){
args__4795__auto__.push((arguments[i__4790__auto___33165]));

var G__33166 = (i__4790__auto___33165 + (1));
i__4790__auto___33165 = G__33166;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32611){
var G__32612 = cljs.core.first(seq32611);
var seq32611__$1 = cljs.core.next(seq32611);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32612,seq32611__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32620 = arguments.length;
switch (G__32620) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__32623_33171 = shadow.dom.dom_node(el);
var G__32624_33172 = cljs.core.name(event);
var G__32625_33173 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32623_33171,G__32624_33172,G__32625_33173) : shadow.dom.dom_listen.call(null,G__32623_33171,G__32624_33172,G__32625_33173));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__30571__auto___33174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_32630){
var state_val_32631 = (state_32630[(1)]);
if((state_val_32631 === (1))){
var state_32630__$1 = state_32630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32630__$1,(2),once_or_cleanup);
} else {
if((state_val_32631 === (2))){
var inst_32627 = (state_32630[(2)]);
var inst_32628 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32630__$1 = (function (){var statearr_32641 = state_32630;
(statearr_32641[(7)] = inst_32627);

return statearr_32641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32630__$1,inst_32628);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30507__auto__ = null;
var shadow$dom$state_machine__30507__auto____0 = (function (){
var statearr_32642 = [null,null,null,null,null,null,null,null];
(statearr_32642[(0)] = shadow$dom$state_machine__30507__auto__);

(statearr_32642[(1)] = (1));

return statearr_32642;
});
var shadow$dom$state_machine__30507__auto____1 = (function (state_32630){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_32630);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e32643){if((e32643 instanceof Object)){
var ex__30510__auto__ = e32643;
var statearr_32644_33177 = state_32630;
(statearr_32644_33177[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32643;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33179 = state_32630;
state_32630 = G__33179;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
shadow$dom$state_machine__30507__auto__ = function(state_32630){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30507__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30507__auto____1.call(this,state_32630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30507__auto____0;
shadow$dom$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30507__auto____1;
return shadow$dom$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_32653 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_32653[(6)] = c__30571__auto___33174);

return statearr_32653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
