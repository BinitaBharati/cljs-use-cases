goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35435){
var map__35436 = p__35435;
var map__35436__$1 = (((((!((map__35436 == null))))?(((((map__35436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35436):map__35436);
var m = map__35436__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35436__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35439_35655 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35440_35656 = null;
var count__35441_35657 = (0);
var i__35442_35658 = (0);
while(true){
if((i__35442_35658 < count__35441_35657)){
var f_35659 = chunk__35440_35656.cljs$core$IIndexed$_nth$arity$2(null,i__35442_35658);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35659], 0));


var G__35660 = seq__35439_35655;
var G__35661 = chunk__35440_35656;
var G__35662 = count__35441_35657;
var G__35663 = (i__35442_35658 + (1));
seq__35439_35655 = G__35660;
chunk__35440_35656 = G__35661;
count__35441_35657 = G__35662;
i__35442_35658 = G__35663;
continue;
} else {
var temp__5735__auto___35664 = cljs.core.seq(seq__35439_35655);
if(temp__5735__auto___35664){
var seq__35439_35665__$1 = temp__5735__auto___35664;
if(cljs.core.chunked_seq_QMARK_(seq__35439_35665__$1)){
var c__4609__auto___35666 = cljs.core.chunk_first(seq__35439_35665__$1);
var G__35667 = cljs.core.chunk_rest(seq__35439_35665__$1);
var G__35668 = c__4609__auto___35666;
var G__35669 = cljs.core.count(c__4609__auto___35666);
var G__35670 = (0);
seq__35439_35655 = G__35667;
chunk__35440_35656 = G__35668;
count__35441_35657 = G__35669;
i__35442_35658 = G__35670;
continue;
} else {
var f_35671 = cljs.core.first(seq__35439_35665__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35671], 0));


var G__35672 = cljs.core.next(seq__35439_35665__$1);
var G__35673 = null;
var G__35674 = (0);
var G__35675 = (0);
seq__35439_35655 = G__35672;
chunk__35440_35656 = G__35673;
count__35441_35657 = G__35674;
i__35442_35658 = G__35675;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35676 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35676], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35676)))?cljs.core.second(arglists_35676):arglists_35676)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35449_35677 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35450_35678 = null;
var count__35451_35679 = (0);
var i__35452_35680 = (0);
while(true){
if((i__35452_35680 < count__35451_35679)){
var vec__35480_35681 = chunk__35450_35678.cljs$core$IIndexed$_nth$arity$2(null,i__35452_35680);
var name_35682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35480_35681,(0),null);
var map__35483_35683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35480_35681,(1),null);
var map__35483_35684__$1 = (((((!((map__35483_35683 == null))))?(((((map__35483_35683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35483_35683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35483_35683):map__35483_35683);
var doc_35685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483_35684__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483_35684__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35682], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35686], 0));

if(cljs.core.truth_(doc_35685)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35685], 0));
} else {
}


var G__35687 = seq__35449_35677;
var G__35688 = chunk__35450_35678;
var G__35689 = count__35451_35679;
var G__35690 = (i__35452_35680 + (1));
seq__35449_35677 = G__35687;
chunk__35450_35678 = G__35688;
count__35451_35679 = G__35689;
i__35452_35680 = G__35690;
continue;
} else {
var temp__5735__auto___35691 = cljs.core.seq(seq__35449_35677);
if(temp__5735__auto___35691){
var seq__35449_35692__$1 = temp__5735__auto___35691;
if(cljs.core.chunked_seq_QMARK_(seq__35449_35692__$1)){
var c__4609__auto___35693 = cljs.core.chunk_first(seq__35449_35692__$1);
var G__35694 = cljs.core.chunk_rest(seq__35449_35692__$1);
var G__35695 = c__4609__auto___35693;
var G__35696 = cljs.core.count(c__4609__auto___35693);
var G__35697 = (0);
seq__35449_35677 = G__35694;
chunk__35450_35678 = G__35695;
count__35451_35679 = G__35696;
i__35452_35680 = G__35697;
continue;
} else {
var vec__35534_35698 = cljs.core.first(seq__35449_35692__$1);
var name_35699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35534_35698,(0),null);
var map__35537_35700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35534_35698,(1),null);
var map__35537_35701__$1 = (((((!((map__35537_35700 == null))))?(((((map__35537_35700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35537_35700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35537_35700):map__35537_35700);
var doc_35702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35537_35701__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35537_35701__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35699], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35703], 0));

if(cljs.core.truth_(doc_35702)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35702], 0));
} else {
}


var G__35704 = cljs.core.next(seq__35449_35692__$1);
var G__35705 = null;
var G__35706 = (0);
var G__35707 = (0);
seq__35449_35677 = G__35704;
chunk__35450_35678 = G__35705;
count__35451_35679 = G__35706;
i__35452_35680 = G__35707;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35542 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35547 = null;
var count__35548 = (0);
var i__35549 = (0);
while(true){
if((i__35549 < count__35548)){
var role = chunk__35547.cljs$core$IIndexed$_nth$arity$2(null,i__35549);
var temp__5735__auto___35709__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35709__$1)){
var spec_35710 = temp__5735__auto___35709__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35710)], 0));
} else {
}


var G__35711 = seq__35542;
var G__35712 = chunk__35547;
var G__35713 = count__35548;
var G__35714 = (i__35549 + (1));
seq__35542 = G__35711;
chunk__35547 = G__35712;
count__35548 = G__35713;
i__35549 = G__35714;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35542);
if(temp__5735__auto____$1){
var seq__35542__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35542__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35542__$1);
var G__35715 = cljs.core.chunk_rest(seq__35542__$1);
var G__35716 = c__4609__auto__;
var G__35717 = cljs.core.count(c__4609__auto__);
var G__35718 = (0);
seq__35542 = G__35715;
chunk__35547 = G__35716;
count__35548 = G__35717;
i__35549 = G__35718;
continue;
} else {
var role = cljs.core.first(seq__35542__$1);
var temp__5735__auto___35719__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35719__$2)){
var spec_35720 = temp__5735__auto___35719__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35720)], 0));
} else {
}


var G__35721 = cljs.core.next(seq__35542__$1);
var G__35722 = null;
var G__35723 = (0);
var G__35724 = (0);
seq__35542 = G__35721;
chunk__35547 = G__35722;
count__35548 = G__35723;
i__35549 = G__35724;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35725 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35726 = cljs.core.ex_cause(t);
via = G__35725;
t = G__35726;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35579 = datafied_throwable;
var map__35579__$1 = (((((!((map__35579 == null))))?(((((map__35579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35579):map__35579);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35579__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35579__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35579__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35580 = cljs.core.last(via);
var map__35580__$1 = (((((!((map__35580 == null))))?(((((map__35580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35580):map__35580);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35580__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35580__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35580__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35581 = data;
var map__35581__$1 = (((((!((map__35581 == null))))?(((((map__35581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35581):map__35581);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35581__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35581__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35581__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35582 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35582__$1 = (((((!((map__35582 == null))))?(((((map__35582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35582):map__35582);
var top_data = map__35582__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35587 = phase;
var G__35587__$1 = (((G__35587 instanceof cljs.core.Keyword))?G__35587.fqn:null);
switch (G__35587__$1) {
case "read-source":
var map__35588 = data;
var map__35588__$1 = (((((!((map__35588 == null))))?(((((map__35588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35588):map__35588);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35588__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35588__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35590 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35590__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35590,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35590);
var G__35590__$2 = (cljs.core.truth_((function (){var fexpr__35591 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35591.cljs$core$IFn$_invoke$arity$1 ? fexpr__35591.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35591.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35590__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35590__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35590__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35590__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35593 = top_data;
var G__35593__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35593,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35593);
var G__35593__$2 = (cljs.core.truth_((function (){var fexpr__35594 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35594.cljs$core$IFn$_invoke$arity$1 ? fexpr__35594.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35594.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35593__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35593__$1);
var G__35593__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35593__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35593__$2);
var G__35593__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35593__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35593__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35593__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35593__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35595 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(3),null);
var G__35598 = top_data;
var G__35598__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35598,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35598);
var G__35598__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35598__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35598__$1);
var G__35598__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35598__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35598__$2);
var G__35598__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35598__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35598__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35598__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35598__$4;
}

break;
case "execution":
var vec__35599 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35576_SHARP_){
var or__4185__auto__ = (p1__35576_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__35603 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35603.cljs$core$IFn$_invoke$arity$1 ? fexpr__35603.cljs$core$IFn$_invoke$arity$1(p1__35576_SHARP_) : fexpr__35603.call(null,p1__35576_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__35604 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35604__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35604,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35604);
var G__35604__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35604__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35604__$1);
var G__35604__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35604__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35604__$2);
var G__35604__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35604__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35604__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35604__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35604__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35587__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35607){
var map__35608 = p__35607;
var map__35608__$1 = (((((!((map__35608 == null))))?(((((map__35608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35608):map__35608);
var triage_data = map__35608__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35608__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35610 = phase;
var G__35610__$1 = (((G__35610 instanceof cljs.core.Keyword))?G__35610.fqn:null);
switch (G__35610__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35611 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35612 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35613 = loc;
var G__35614 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35615_35731 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35616_35732 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35617_35733 = true;
var _STAR_print_fn_STAR__temp_val__35618_35734 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35617_35733);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35618_35734);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35605_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35605_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35616_35732);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35615_35731);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35611,G__35612,G__35613,G__35614) : format.call(null,G__35611,G__35612,G__35613,G__35614));

break;
case "macroexpansion":
var G__35623 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35624 = cause_type;
var G__35625 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35626 = loc;
var G__35627 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35623,G__35624,G__35625,G__35626,G__35627) : format.call(null,G__35623,G__35624,G__35625,G__35626,G__35627));

break;
case "compile-syntax-check":
var G__35628 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35629 = cause_type;
var G__35630 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35631 = loc;
var G__35632 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35628,G__35629,G__35630,G__35631,G__35632) : format.call(null,G__35628,G__35629,G__35630,G__35631,G__35632));

break;
case "compilation":
var G__35633 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35634 = cause_type;
var G__35635 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35636 = loc;
var G__35637 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35633,G__35634,G__35635,G__35636,G__35637) : format.call(null,G__35633,G__35634,G__35635,G__35636,G__35637));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35638 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35639 = symbol;
var G__35640 = loc;
var G__35641 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35642_35739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35643_35740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35644_35741 = true;
var _STAR_print_fn_STAR__temp_val__35645_35742 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35644_35741);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35645_35742);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35606_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35606_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35643_35740);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35642_35739);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35638,G__35639,G__35640,G__35641) : format.call(null,G__35638,G__35639,G__35640,G__35641));
} else {
var G__35650 = "Execution error%s at %s(%s).\n%s\n";
var G__35651 = cause_type;
var G__35652 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35653 = loc;
var G__35654 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35650,G__35651,G__35652,G__35653,G__35654) : format.call(null,G__35650,G__35651,G__35652,G__35653,G__35654));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35610__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
