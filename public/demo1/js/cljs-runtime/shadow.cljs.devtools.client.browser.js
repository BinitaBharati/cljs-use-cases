goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34490 = arguments.length;
var i__4790__auto___34491 = (0);
while(true){
if((i__4790__auto___34491 < len__4789__auto___34490)){
args__4795__auto__.push((arguments[i__4790__auto___34491]));

var G__34492 = (i__4790__auto___34491 + (1));
i__4790__auto___34491 = G__34492;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34321){
var G__34322 = cljs.core.first(seq34321);
var seq34321__$1 = cljs.core.next(seq34321);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34322,seq34321__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34324){
var map__34325 = p__34324;
var map__34325__$1 = (((((!((map__34325 == null))))?(((((map__34325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34325):map__34325);
var src = map__34325__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34325__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34325__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34328 = cljs.core.seq(sources);
var chunk__34329 = null;
var count__34330 = (0);
var i__34331 = (0);
while(true){
if((i__34331 < count__34330)){
var map__34338 = chunk__34329.cljs$core$IIndexed$_nth$arity$2(null,i__34331);
var map__34338__$1 = (((((!((map__34338 == null))))?(((((map__34338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34338):map__34338);
var src = map__34338__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34338__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34338__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34338__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34338__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34340){var e_34495 = e34340;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34495);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34495.message)].join('')));
}

var G__34496 = seq__34328;
var G__34497 = chunk__34329;
var G__34498 = count__34330;
var G__34499 = (i__34331 + (1));
seq__34328 = G__34496;
chunk__34329 = G__34497;
count__34330 = G__34498;
i__34331 = G__34499;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34328);
if(temp__5735__auto__){
var seq__34328__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34328__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34328__$1);
var G__34500 = cljs.core.chunk_rest(seq__34328__$1);
var G__34501 = c__4609__auto__;
var G__34502 = cljs.core.count(c__4609__auto__);
var G__34503 = (0);
seq__34328 = G__34500;
chunk__34329 = G__34501;
count__34330 = G__34502;
i__34331 = G__34503;
continue;
} else {
var map__34341 = cljs.core.first(seq__34328__$1);
var map__34341__$1 = (((((!((map__34341 == null))))?(((((map__34341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34341):map__34341);
var src = map__34341__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34341__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34341__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34341__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34341__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34343){var e_34504 = e34343;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34504);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34504.message)].join('')));
}

var G__34505 = cljs.core.next(seq__34328__$1);
var G__34506 = null;
var G__34507 = (0);
var G__34508 = (0);
seq__34328 = G__34505;
chunk__34329 = G__34506;
count__34330 = G__34507;
i__34331 = G__34508;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34344 = cljs.core.seq(js_requires);
var chunk__34345 = null;
var count__34346 = (0);
var i__34347 = (0);
while(true){
if((i__34347 < count__34346)){
var js_ns = chunk__34345.cljs$core$IIndexed$_nth$arity$2(null,i__34347);
var require_str_34512 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34512);


var G__34513 = seq__34344;
var G__34514 = chunk__34345;
var G__34515 = count__34346;
var G__34516 = (i__34347 + (1));
seq__34344 = G__34513;
chunk__34345 = G__34514;
count__34346 = G__34515;
i__34347 = G__34516;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34344);
if(temp__5735__auto__){
var seq__34344__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34344__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34344__$1);
var G__34517 = cljs.core.chunk_rest(seq__34344__$1);
var G__34518 = c__4609__auto__;
var G__34519 = cljs.core.count(c__4609__auto__);
var G__34520 = (0);
seq__34344 = G__34517;
chunk__34345 = G__34518;
count__34346 = G__34519;
i__34347 = G__34520;
continue;
} else {
var js_ns = cljs.core.first(seq__34344__$1);
var require_str_34521 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34521);


var G__34522 = cljs.core.next(seq__34344__$1);
var G__34523 = null;
var G__34524 = (0);
var G__34525 = (0);
seq__34344 = G__34522;
chunk__34345 = G__34523;
count__34346 = G__34524;
i__34347 = G__34525;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34348 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34348) : callback.call(null,G__34348));
} else {
var G__34349 = shadow.cljs.devtools.client.env.files_url();
var G__34350 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34351 = "POST";
var G__34352 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34353 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34349,G__34350,G__34351,G__34352,G__34353);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34355){
var map__34356 = p__34355;
var map__34356__$1 = (((((!((map__34356 == null))))?(((((map__34356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34356):map__34356);
var msg = map__34356__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34356__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34356__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34358 = info;
var map__34358__$1 = (((((!((map__34358 == null))))?(((((map__34358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34358):map__34358);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34358__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34358__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34360(s__34361){
return (new cljs.core.LazySeq(null,(function (){
var s__34361__$1 = s__34361;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34361__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34366 = cljs.core.first(xs__6292__auto__);
var map__34366__$1 = (((((!((map__34366 == null))))?(((((map__34366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34366):map__34366);
var src = map__34366__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34366__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34366__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34361__$1,map__34366,map__34366__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34358,map__34358__$1,sources,compiled,map__34356,map__34356__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34360_$_iter__34362(s__34363){
return (new cljs.core.LazySeq(null,((function (s__34361__$1,map__34366,map__34366__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34358,map__34358__$1,sources,compiled,map__34356,map__34356__$1,msg,info,reload_info){
return (function (){
var s__34363__$1 = s__34363;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34363__$1);
if(temp__5735__auto____$1){
var s__34363__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34363__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34363__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34365 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34364 = (0);
while(true){
if((i__34364 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34364);
cljs.core.chunk_append(b__34365,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34529 = (i__34364 + (1));
i__34364 = G__34529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34365),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34360_$_iter__34362(cljs.core.chunk_rest(s__34363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34365),null);
}
} else {
var warning = cljs.core.first(s__34363__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34360_$_iter__34362(cljs.core.rest(s__34363__$2)));
}
} else {
return null;
}
break;
}
});})(s__34361__$1,map__34366,map__34366__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34358,map__34358__$1,sources,compiled,map__34356,map__34356__$1,msg,info,reload_info))
,null,null));
});})(s__34361__$1,map__34366,map__34366__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34358,map__34358__$1,sources,compiled,map__34356,map__34356__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34360(cljs.core.rest(s__34361__$1)));
} else {
var G__34530 = cljs.core.rest(s__34361__$1);
s__34361__$1 = G__34530;
continue;
}
} else {
var G__34531 = cljs.core.rest(s__34361__$1);
s__34361__$1 = G__34531;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__34368_34532 = cljs.core.seq(warnings);
var chunk__34369_34533 = null;
var count__34370_34534 = (0);
var i__34371_34535 = (0);
while(true){
if((i__34371_34535 < count__34370_34534)){
var map__34376_34536 = chunk__34369_34533.cljs$core$IIndexed$_nth$arity$2(null,i__34371_34535);
var map__34376_34537__$1 = (((((!((map__34376_34536 == null))))?(((((map__34376_34536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34376_34536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34376_34536):map__34376_34536);
var w_34538 = map__34376_34537__$1;
var msg_34539__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34376_34537__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34376_34537__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34376_34537__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34376_34537__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34542)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34540),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34541),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34539__$1)].join(''));


var G__34544 = seq__34368_34532;
var G__34545 = chunk__34369_34533;
var G__34546 = count__34370_34534;
var G__34547 = (i__34371_34535 + (1));
seq__34368_34532 = G__34544;
chunk__34369_34533 = G__34545;
count__34370_34534 = G__34546;
i__34371_34535 = G__34547;
continue;
} else {
var temp__5735__auto___34548 = cljs.core.seq(seq__34368_34532);
if(temp__5735__auto___34548){
var seq__34368_34549__$1 = temp__5735__auto___34548;
if(cljs.core.chunked_seq_QMARK_(seq__34368_34549__$1)){
var c__4609__auto___34550 = cljs.core.chunk_first(seq__34368_34549__$1);
var G__34551 = cljs.core.chunk_rest(seq__34368_34549__$1);
var G__34552 = c__4609__auto___34550;
var G__34553 = cljs.core.count(c__4609__auto___34550);
var G__34554 = (0);
seq__34368_34532 = G__34551;
chunk__34369_34533 = G__34552;
count__34370_34534 = G__34553;
i__34371_34535 = G__34554;
continue;
} else {
var map__34378_34555 = cljs.core.first(seq__34368_34549__$1);
var map__34378_34556__$1 = (((((!((map__34378_34555 == null))))?(((((map__34378_34555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34378_34555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34378_34555):map__34378_34555);
var w_34557 = map__34378_34556__$1;
var msg_34558__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34378_34556__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34378_34556__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34378_34556__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34378_34556__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34561)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34559),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34560),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34558__$1)].join(''));


var G__34562 = cljs.core.next(seq__34368_34549__$1);
var G__34563 = null;
var G__34564 = (0);
var G__34565 = (0);
seq__34368_34532 = G__34562;
chunk__34369_34533 = G__34563;
count__34370_34534 = G__34564;
i__34371_34535 = G__34565;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34380){
var map__34381 = p__34380;
var map__34381__$1 = (((((!((map__34381 == null))))?(((((map__34381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34381):map__34381);
var src = map__34381__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34383){
var map__34384 = p__34383;
var map__34384__$1 = (((((!((map__34384 == null))))?(((((map__34384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34384):map__34384);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34384__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34386){
var map__34387 = p__34386;
var map__34387__$1 = (((((!((map__34387 == null))))?(((((map__34387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34387):map__34387);
var rc = map__34387__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34354_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34354_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34389){
var map__34390 = p__34389;
var map__34390__$1 = (((((!((map__34390 == null))))?(((((map__34390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34390):map__34390);
var msg = map__34390__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34392 = cljs.core.seq(updates);
var chunk__34394 = null;
var count__34395 = (0);
var i__34396 = (0);
while(true){
if((i__34396 < count__34395)){
var path = chunk__34394.cljs$core$IIndexed$_nth$arity$2(null,i__34396);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34422_34570 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34425_34571 = null;
var count__34426_34572 = (0);
var i__34427_34573 = (0);
while(true){
if((i__34427_34573 < count__34426_34572)){
var node_34574 = chunk__34425_34571.cljs$core$IIndexed$_nth$arity$2(null,i__34427_34573);
var path_match_34575 = shadow.cljs.devtools.client.browser.match_paths(node_34574.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34575)){
var new_link_34576 = (function (){var G__34432 = node_34574.cloneNode(true);
G__34432.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34575),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34432;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34575], 0));

goog.dom.insertSiblingAfter(new_link_34576,node_34574);

goog.dom.removeNode(node_34574);


var G__34577 = seq__34422_34570;
var G__34578 = chunk__34425_34571;
var G__34579 = count__34426_34572;
var G__34580 = (i__34427_34573 + (1));
seq__34422_34570 = G__34577;
chunk__34425_34571 = G__34578;
count__34426_34572 = G__34579;
i__34427_34573 = G__34580;
continue;
} else {
var G__34581 = seq__34422_34570;
var G__34582 = chunk__34425_34571;
var G__34583 = count__34426_34572;
var G__34584 = (i__34427_34573 + (1));
seq__34422_34570 = G__34581;
chunk__34425_34571 = G__34582;
count__34426_34572 = G__34583;
i__34427_34573 = G__34584;
continue;
}
} else {
var temp__5735__auto___34585 = cljs.core.seq(seq__34422_34570);
if(temp__5735__auto___34585){
var seq__34422_34586__$1 = temp__5735__auto___34585;
if(cljs.core.chunked_seq_QMARK_(seq__34422_34586__$1)){
var c__4609__auto___34587 = cljs.core.chunk_first(seq__34422_34586__$1);
var G__34588 = cljs.core.chunk_rest(seq__34422_34586__$1);
var G__34589 = c__4609__auto___34587;
var G__34590 = cljs.core.count(c__4609__auto___34587);
var G__34591 = (0);
seq__34422_34570 = G__34588;
chunk__34425_34571 = G__34589;
count__34426_34572 = G__34590;
i__34427_34573 = G__34591;
continue;
} else {
var node_34592 = cljs.core.first(seq__34422_34586__$1);
var path_match_34593 = shadow.cljs.devtools.client.browser.match_paths(node_34592.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34593)){
var new_link_34594 = (function (){var G__34433 = node_34592.cloneNode(true);
G__34433.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34593),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34433;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34593], 0));

goog.dom.insertSiblingAfter(new_link_34594,node_34592);

goog.dom.removeNode(node_34592);


var G__34595 = cljs.core.next(seq__34422_34586__$1);
var G__34596 = null;
var G__34597 = (0);
var G__34598 = (0);
seq__34422_34570 = G__34595;
chunk__34425_34571 = G__34596;
count__34426_34572 = G__34597;
i__34427_34573 = G__34598;
continue;
} else {
var G__34599 = cljs.core.next(seq__34422_34586__$1);
var G__34600 = null;
var G__34601 = (0);
var G__34602 = (0);
seq__34422_34570 = G__34599;
chunk__34425_34571 = G__34600;
count__34426_34572 = G__34601;
i__34427_34573 = G__34602;
continue;
}
}
} else {
}
}
break;
}


var G__34603 = seq__34392;
var G__34604 = chunk__34394;
var G__34605 = count__34395;
var G__34606 = (i__34396 + (1));
seq__34392 = G__34603;
chunk__34394 = G__34604;
count__34395 = G__34605;
i__34396 = G__34606;
continue;
} else {
var G__34607 = seq__34392;
var G__34608 = chunk__34394;
var G__34609 = count__34395;
var G__34610 = (i__34396 + (1));
seq__34392 = G__34607;
chunk__34394 = G__34608;
count__34395 = G__34609;
i__34396 = G__34610;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34392);
if(temp__5735__auto__){
var seq__34392__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34392__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34392__$1);
var G__34611 = cljs.core.chunk_rest(seq__34392__$1);
var G__34612 = c__4609__auto__;
var G__34613 = cljs.core.count(c__4609__auto__);
var G__34614 = (0);
seq__34392 = G__34611;
chunk__34394 = G__34612;
count__34395 = G__34613;
i__34396 = G__34614;
continue;
} else {
var path = cljs.core.first(seq__34392__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34434_34615 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34437_34616 = null;
var count__34438_34617 = (0);
var i__34439_34618 = (0);
while(true){
if((i__34439_34618 < count__34438_34617)){
var node_34619 = chunk__34437_34616.cljs$core$IIndexed$_nth$arity$2(null,i__34439_34618);
var path_match_34620 = shadow.cljs.devtools.client.browser.match_paths(node_34619.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34620)){
var new_link_34621 = (function (){var G__34451 = node_34619.cloneNode(true);
G__34451.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34620),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34451;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34620], 0));

goog.dom.insertSiblingAfter(new_link_34621,node_34619);

goog.dom.removeNode(node_34619);


var G__34623 = seq__34434_34615;
var G__34624 = chunk__34437_34616;
var G__34625 = count__34438_34617;
var G__34626 = (i__34439_34618 + (1));
seq__34434_34615 = G__34623;
chunk__34437_34616 = G__34624;
count__34438_34617 = G__34625;
i__34439_34618 = G__34626;
continue;
} else {
var G__34627 = seq__34434_34615;
var G__34628 = chunk__34437_34616;
var G__34629 = count__34438_34617;
var G__34630 = (i__34439_34618 + (1));
seq__34434_34615 = G__34627;
chunk__34437_34616 = G__34628;
count__34438_34617 = G__34629;
i__34439_34618 = G__34630;
continue;
}
} else {
var temp__5735__auto___34631__$1 = cljs.core.seq(seq__34434_34615);
if(temp__5735__auto___34631__$1){
var seq__34434_34632__$1 = temp__5735__auto___34631__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34434_34632__$1)){
var c__4609__auto___34633 = cljs.core.chunk_first(seq__34434_34632__$1);
var G__34634 = cljs.core.chunk_rest(seq__34434_34632__$1);
var G__34635 = c__4609__auto___34633;
var G__34636 = cljs.core.count(c__4609__auto___34633);
var G__34637 = (0);
seq__34434_34615 = G__34634;
chunk__34437_34616 = G__34635;
count__34438_34617 = G__34636;
i__34439_34618 = G__34637;
continue;
} else {
var node_34638 = cljs.core.first(seq__34434_34632__$1);
var path_match_34639 = shadow.cljs.devtools.client.browser.match_paths(node_34638.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34639)){
var new_link_34640 = (function (){var G__34452 = node_34638.cloneNode(true);
G__34452.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34639),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34452;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34639], 0));

goog.dom.insertSiblingAfter(new_link_34640,node_34638);

goog.dom.removeNode(node_34638);


var G__34641 = cljs.core.next(seq__34434_34632__$1);
var G__34642 = null;
var G__34643 = (0);
var G__34644 = (0);
seq__34434_34615 = G__34641;
chunk__34437_34616 = G__34642;
count__34438_34617 = G__34643;
i__34439_34618 = G__34644;
continue;
} else {
var G__34645 = cljs.core.next(seq__34434_34632__$1);
var G__34646 = null;
var G__34647 = (0);
var G__34648 = (0);
seq__34434_34615 = G__34645;
chunk__34437_34616 = G__34646;
count__34438_34617 = G__34647;
i__34439_34618 = G__34648;
continue;
}
}
} else {
}
}
break;
}


var G__34649 = cljs.core.next(seq__34392__$1);
var G__34650 = null;
var G__34651 = (0);
var G__34652 = (0);
seq__34392 = G__34649;
chunk__34394 = G__34650;
count__34395 = G__34651;
i__34396 = G__34652;
continue;
} else {
var G__34653 = cljs.core.next(seq__34392__$1);
var G__34654 = null;
var G__34655 = (0);
var G__34656 = (0);
seq__34392 = G__34653;
chunk__34394 = G__34654;
count__34395 = G__34655;
i__34396 = G__34656;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34461){
var map__34462 = p__34461;
var map__34462__$1 = (((((!((map__34462 == null))))?(((((map__34462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34462):map__34462);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34462__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34462__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34464,done){
var map__34465 = p__34464;
var map__34465__$1 = (((((!((map__34465 == null))))?(((((map__34465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34465):map__34465);
var msg = map__34465__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34467){
var map__34468 = p__34467;
var map__34468__$1 = (((((!((map__34468 == null))))?(((((map__34468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34468):map__34468);
var src = map__34468__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34468__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34470){var e = e34470;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34471,done){
var map__34472 = p__34471;
var map__34472__$1 = (((((!((map__34472 == null))))?(((((map__34472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34472):map__34472);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34474){
var map__34475 = p__34474;
var map__34475__$1 = (((((!((map__34475 == null))))?(((((map__34475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34475):map__34475);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34475__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34475__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34477,done){
var map__34478 = p__34477;
var map__34478__$1 = (((((!((map__34478 == null))))?(((((map__34478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34478):map__34478);
var msg = map__34478__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34478__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34480_34662 = type;
var G__34480_34663__$1 = (((G__34480_34662 instanceof cljs.core.Keyword))?G__34480_34662.fqn:null);
switch (G__34480_34663__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__34481 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__34482 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__34483 = "POST";
var G__34484 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__34485 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34481,G__34482,G__34483,G__34484,G__34485);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__34487 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__34486 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34486.cljs$core$IFn$_invoke$arity$1 ? fexpr__34486.cljs$core$IFn$_invoke$arity$1(G__34487) : fexpr__34486.call(null,G__34487));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e34488){var e = e34488;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___34669 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___34669)){
var s_34670 = temp__5735__auto___34669;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_34670.onclose = (function (e){
return null;
}));

s_34670.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
