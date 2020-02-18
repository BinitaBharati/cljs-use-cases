goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30632 = arguments.length;
switch (G__30632) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30633 = (function (f,blockable,meta30634){
this.f = f;
this.blockable = blockable;
this.meta30634 = meta30634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30635,meta30634__$1){
var self__ = this;
var _30635__$1 = this;
return (new cljs.core.async.t_cljs$core$async30633(self__.f,self__.blockable,meta30634__$1));
}));

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30635){
var self__ = this;
var _30635__$1 = this;
return self__.meta30634;
}));

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30634","meta30634",1711376689,null)], null);
}));

(cljs.core.async.t_cljs$core$async30633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30633");

(cljs.core.async.t_cljs$core$async30633.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30633.
 */
cljs.core.async.__GT_t_cljs$core$async30633 = (function cljs$core$async$__GT_t_cljs$core$async30633(f__$1,blockable__$1,meta30634){
return (new cljs.core.async.t_cljs$core$async30633(f__$1,blockable__$1,meta30634));
});

}

return (new cljs.core.async.t_cljs$core$async30633(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30640 = arguments.length;
switch (G__30640) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30642 = arguments.length;
switch (G__30642) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30644 = arguments.length;
switch (G__30644) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32093 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32093) : fn1.call(null,val_32093));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32093) : fn1.call(null,val_32093));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30646 = arguments.length;
switch (G__30646) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32097 = n;
var x_32098 = (0);
while(true){
if((x_32098 < n__4666__auto___32097)){
(a[x_32098] = x_32098);

var G__32099 = (x_32098 + (1));
x_32098 = G__32099;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30647 = (function (flag,meta30648){
this.flag = flag;
this.meta30648 = meta30648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30649,meta30648__$1){
var self__ = this;
var _30649__$1 = this;
return (new cljs.core.async.t_cljs$core$async30647(self__.flag,meta30648__$1));
}));

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30649){
var self__ = this;
var _30649__$1 = this;
return self__.meta30648;
}));

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30648","meta30648",-1425907540,null)], null);
}));

(cljs.core.async.t_cljs$core$async30647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30647");

(cljs.core.async.t_cljs$core$async30647.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30647.
 */
cljs.core.async.__GT_t_cljs$core$async30647 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30647(flag__$1,meta30648){
return (new cljs.core.async.t_cljs$core$async30647(flag__$1,meta30648));
});

}

return (new cljs.core.async.t_cljs$core$async30647(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30650 = (function (flag,cb,meta30651){
this.flag = flag;
this.cb = cb;
this.meta30651 = meta30651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30652,meta30651__$1){
var self__ = this;
var _30652__$1 = this;
return (new cljs.core.async.t_cljs$core$async30650(self__.flag,self__.cb,meta30651__$1));
}));

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30652){
var self__ = this;
var _30652__$1 = this;
return self__.meta30651;
}));

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30651","meta30651",493600023,null)], null);
}));

(cljs.core.async.t_cljs$core$async30650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30650");

(cljs.core.async.t_cljs$core$async30650.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30650.
 */
cljs.core.async.__GT_t_cljs$core$async30650 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30650(flag__$1,cb__$1,meta30651){
return (new cljs.core.async.t_cljs$core$async30650(flag__$1,cb__$1,meta30651));
});

}

return (new cljs.core.async.t_cljs$core$async30650(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30653_SHARP_){
var G__30655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30653_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30655) : fret.call(null,G__30655));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30654_SHARP_){
var G__30656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30654_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30656) : fret.call(null,G__30656));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32105 = (i + (1));
i = G__32105;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32106 = arguments.length;
var i__4790__auto___32107 = (0);
while(true){
if((i__4790__auto___32107 < len__4789__auto___32106)){
args__4795__auto__.push((arguments[i__4790__auto___32107]));

var G__32108 = (i__4790__auto___32107 + (1));
i__4790__auto___32107 = G__32108;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30659){
var map__30660 = p__30659;
var map__30660__$1 = (((((!((map__30660 == null))))?(((((map__30660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30660):map__30660);
var opts = map__30660__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30657){
var G__30658 = cljs.core.first(seq30657);
var seq30657__$1 = cljs.core.next(seq30657);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30658,seq30657__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30663 = arguments.length;
switch (G__30663) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30571__auto___32114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_30687){
var state_val_30688 = (state_30687[(1)]);
if((state_val_30688 === (7))){
var inst_30683 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30689_32115 = state_30687__$1;
(statearr_30689_32115[(2)] = inst_30683);

(statearr_30689_32115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (1))){
var state_30687__$1 = state_30687;
var statearr_30690_32116 = state_30687__$1;
(statearr_30690_32116[(2)] = null);

(statearr_30690_32116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (4))){
var inst_30666 = (state_30687[(7)]);
var inst_30666__$1 = (state_30687[(2)]);
var inst_30667 = (inst_30666__$1 == null);
var state_30687__$1 = (function (){var statearr_30691 = state_30687;
(statearr_30691[(7)] = inst_30666__$1);

return statearr_30691;
})();
if(cljs.core.truth_(inst_30667)){
var statearr_30692_32119 = state_30687__$1;
(statearr_30692_32119[(1)] = (5));

} else {
var statearr_30693_32120 = state_30687__$1;
(statearr_30693_32120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (13))){
var state_30687__$1 = state_30687;
var statearr_30694_32121 = state_30687__$1;
(statearr_30694_32121[(2)] = null);

(statearr_30694_32121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (6))){
var inst_30666 = (state_30687[(7)]);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30687__$1,(11),to,inst_30666);
} else {
if((state_val_30688 === (3))){
var inst_30685 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30687__$1,inst_30685);
} else {
if((state_val_30688 === (12))){
var state_30687__$1 = state_30687;
var statearr_30695_32126 = state_30687__$1;
(statearr_30695_32126[(2)] = null);

(statearr_30695_32126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (2))){
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30687__$1,(4),from);
} else {
if((state_val_30688 === (11))){
var inst_30676 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
if(cljs.core.truth_(inst_30676)){
var statearr_30696_32135 = state_30687__$1;
(statearr_30696_32135[(1)] = (12));

} else {
var statearr_30697_32136 = state_30687__$1;
(statearr_30697_32136[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (9))){
var state_30687__$1 = state_30687;
var statearr_30698_32138 = state_30687__$1;
(statearr_30698_32138[(2)] = null);

(statearr_30698_32138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (5))){
var state_30687__$1 = state_30687;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30699_32139 = state_30687__$1;
(statearr_30699_32139[(1)] = (8));

} else {
var statearr_30700_32140 = state_30687__$1;
(statearr_30700_32140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (14))){
var inst_30681 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30701_32141 = state_30687__$1;
(statearr_30701_32141[(2)] = inst_30681);

(statearr_30701_32141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (10))){
var inst_30673 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30702_32142 = state_30687__$1;
(statearr_30702_32142[(2)] = inst_30673);

(statearr_30702_32142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (8))){
var inst_30670 = cljs.core.async.close_BANG_(to);
var state_30687__$1 = state_30687;
var statearr_30703_32143 = state_30687__$1;
(statearr_30703_32143[(2)] = inst_30670);

(statearr_30703_32143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_30704 = [null,null,null,null,null,null,null,null];
(statearr_30704[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_30704[(1)] = (1));

return statearr_30704;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_30687){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30687);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30705){if((e30705 instanceof Object)){
var ex__30510__auto__ = e30705;
var statearr_30706_32154 = state_30687;
(statearr_30706_32154[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32155 = state_30687;
state_30687 = G__32155;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_30687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_30687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_30707 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30707[(6)] = c__30571__auto___32114);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30708){
var vec__30709 = p__30708;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30709,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30709,(1),null);
var job = vec__30709;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30571__auto___32167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_30716){
var state_val_30717 = (state_30716[(1)]);
if((state_val_30717 === (1))){
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30716__$1,(2),res,v);
} else {
if((state_val_30717 === (2))){
var inst_30713 = (state_30716[(2)]);
var inst_30714 = cljs.core.async.close_BANG_(res);
var state_30716__$1 = (function (){var statearr_30718 = state_30716;
(statearr_30718[(7)] = inst_30713);

return statearr_30718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30716__$1,inst_30714);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0 = (function (){
var statearr_30719 = [null,null,null,null,null,null,null,null];
(statearr_30719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__);

(statearr_30719[(1)] = (1));

return statearr_30719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1 = (function (state_30716){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30716);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30720){if((e30720 instanceof Object)){
var ex__30510__auto__ = e30720;
var statearr_30721_32178 = state_30716;
(statearr_30721_32178[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32185 = state_30716;
state_30716 = G__32185;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = function(state_30716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1.call(this,state_30716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_30722 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30722[(6)] = c__30571__auto___32167);

return statearr_30722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30723){
var vec__30724 = p__30723;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30724,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30724,(1),null);
var job = vec__30724;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32193 = n;
var __32194 = (0);
while(true){
if((__32194 < n__4666__auto___32193)){
var G__30727_32198 = type;
var G__30727_32199__$1 = (((G__30727_32198 instanceof cljs.core.Keyword))?G__30727_32198.fqn:null);
switch (G__30727_32199__$1) {
case "compute":
var c__30571__auto___32204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32194,c__30571__auto___32204,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async){
return (function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = ((function (__32194,c__30571__auto___32204,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async){
return (function (state_30740){
var state_val_30741 = (state_30740[(1)]);
if((state_val_30741 === (1))){
var state_30740__$1 = state_30740;
var statearr_30742_32223 = state_30740__$1;
(statearr_30742_32223[(2)] = null);

(statearr_30742_32223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (2))){
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30740__$1,(4),jobs);
} else {
if((state_val_30741 === (3))){
var inst_30738 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30740__$1,inst_30738);
} else {
if((state_val_30741 === (4))){
var inst_30730 = (state_30740[(2)]);
var inst_30731 = process(inst_30730);
var state_30740__$1 = state_30740;
if(cljs.core.truth_(inst_30731)){
var statearr_30743_32224 = state_30740__$1;
(statearr_30743_32224[(1)] = (5));

} else {
var statearr_30744_32226 = state_30740__$1;
(statearr_30744_32226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (5))){
var state_30740__$1 = state_30740;
var statearr_30745_32227 = state_30740__$1;
(statearr_30745_32227[(2)] = null);

(statearr_30745_32227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (6))){
var state_30740__$1 = state_30740;
var statearr_30746_32228 = state_30740__$1;
(statearr_30746_32228[(2)] = null);

(statearr_30746_32228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (7))){
var inst_30736 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30747_32229 = state_30740__$1;
(statearr_30747_32229[(2)] = inst_30736);

(statearr_30747_32229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32194,c__30571__auto___32204,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async))
;
return ((function (__32194,switch__30506__auto__,c__30571__auto___32204,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0 = (function (){
var statearr_30748 = [null,null,null,null,null,null,null];
(statearr_30748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__);

(statearr_30748[(1)] = (1));

return statearr_30748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1 = (function (state_30740){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30740);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30749){if((e30749 instanceof Object)){
var ex__30510__auto__ = e30749;
var statearr_30750_32230 = state_30740;
(statearr_30750_32230[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32231 = state_30740;
state_30740 = G__32231;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = function(state_30740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1.call(this,state_30740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__;
})()
;})(__32194,switch__30506__auto__,c__30571__auto___32204,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async))
})();
var state__30573__auto__ = (function (){var statearr_30751 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30751[(6)] = c__30571__auto___32204);

return statearr_30751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
});})(__32194,c__30571__auto___32204,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async))
);


break;
case "async":
var c__30571__auto___32234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32194,c__30571__auto___32234,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async){
return (function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = ((function (__32194,c__30571__auto___32234,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async){
return (function (state_30764){
var state_val_30765 = (state_30764[(1)]);
if((state_val_30765 === (1))){
var state_30764__$1 = state_30764;
var statearr_30766_32235 = state_30764__$1;
(statearr_30766_32235[(2)] = null);

(statearr_30766_32235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (2))){
var state_30764__$1 = state_30764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30764__$1,(4),jobs);
} else {
if((state_val_30765 === (3))){
var inst_30762 = (state_30764[(2)]);
var state_30764__$1 = state_30764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30764__$1,inst_30762);
} else {
if((state_val_30765 === (4))){
var inst_30754 = (state_30764[(2)]);
var inst_30755 = async(inst_30754);
var state_30764__$1 = state_30764;
if(cljs.core.truth_(inst_30755)){
var statearr_30767_32239 = state_30764__$1;
(statearr_30767_32239[(1)] = (5));

} else {
var statearr_30768_32240 = state_30764__$1;
(statearr_30768_32240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (5))){
var state_30764__$1 = state_30764;
var statearr_30769_32241 = state_30764__$1;
(statearr_30769_32241[(2)] = null);

(statearr_30769_32241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (6))){
var state_30764__$1 = state_30764;
var statearr_30770_32245 = state_30764__$1;
(statearr_30770_32245[(2)] = null);

(statearr_30770_32245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (7))){
var inst_30760 = (state_30764[(2)]);
var state_30764__$1 = state_30764;
var statearr_30771_32249 = state_30764__$1;
(statearr_30771_32249[(2)] = inst_30760);

(statearr_30771_32249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32194,c__30571__auto___32234,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async))
;
return ((function (__32194,switch__30506__auto__,c__30571__auto___32234,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0 = (function (){
var statearr_30772 = [null,null,null,null,null,null,null];
(statearr_30772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__);

(statearr_30772[(1)] = (1));

return statearr_30772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1 = (function (state_30764){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30764);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30773){if((e30773 instanceof Object)){
var ex__30510__auto__ = e30773;
var statearr_30774_32251 = state_30764;
(statearr_30774_32251[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32255 = state_30764;
state_30764 = G__32255;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = function(state_30764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1.call(this,state_30764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__;
})()
;})(__32194,switch__30506__auto__,c__30571__auto___32234,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async))
})();
var state__30573__auto__ = (function (){var statearr_30775 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30775[(6)] = c__30571__auto___32234);

return statearr_30775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
});})(__32194,c__30571__auto___32234,G__30727_32198,G__30727_32199__$1,n__4666__auto___32193,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30727_32199__$1)].join('')));

}

var G__32273 = (__32194 + (1));
__32194 = G__32273;
continue;
} else {
}
break;
}

var c__30571__auto___32274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_30797){
var state_val_30798 = (state_30797[(1)]);
if((state_val_30798 === (7))){
var inst_30793 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30799_32275 = state_30797__$1;
(statearr_30799_32275[(2)] = inst_30793);

(statearr_30799_32275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (1))){
var state_30797__$1 = state_30797;
var statearr_30800_32276 = state_30797__$1;
(statearr_30800_32276[(2)] = null);

(statearr_30800_32276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (4))){
var inst_30778 = (state_30797[(7)]);
var inst_30778__$1 = (state_30797[(2)]);
var inst_30779 = (inst_30778__$1 == null);
var state_30797__$1 = (function (){var statearr_30801 = state_30797;
(statearr_30801[(7)] = inst_30778__$1);

return statearr_30801;
})();
if(cljs.core.truth_(inst_30779)){
var statearr_30802_32277 = state_30797__$1;
(statearr_30802_32277[(1)] = (5));

} else {
var statearr_30803_32278 = state_30797__$1;
(statearr_30803_32278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (6))){
var inst_30778 = (state_30797[(7)]);
var inst_30783 = (state_30797[(8)]);
var inst_30783__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30785 = [inst_30778,inst_30783__$1];
var inst_30786 = (new cljs.core.PersistentVector(null,2,(5),inst_30784,inst_30785,null));
var state_30797__$1 = (function (){var statearr_30804 = state_30797;
(statearr_30804[(8)] = inst_30783__$1);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30797__$1,(8),jobs,inst_30786);
} else {
if((state_val_30798 === (3))){
var inst_30795 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30797__$1,inst_30795);
} else {
if((state_val_30798 === (2))){
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30797__$1,(4),from);
} else {
if((state_val_30798 === (9))){
var inst_30790 = (state_30797[(2)]);
var state_30797__$1 = (function (){var statearr_30805 = state_30797;
(statearr_30805[(9)] = inst_30790);

return statearr_30805;
})();
var statearr_30806_32291 = state_30797__$1;
(statearr_30806_32291[(2)] = null);

(statearr_30806_32291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (5))){
var inst_30781 = cljs.core.async.close_BANG_(jobs);
var state_30797__$1 = state_30797;
var statearr_30807_32292 = state_30797__$1;
(statearr_30807_32292[(2)] = inst_30781);

(statearr_30807_32292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (8))){
var inst_30783 = (state_30797[(8)]);
var inst_30788 = (state_30797[(2)]);
var state_30797__$1 = (function (){var statearr_30808 = state_30797;
(statearr_30808[(10)] = inst_30788);

return statearr_30808;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30797__$1,(9),results,inst_30783);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0 = (function (){
var statearr_30809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__);

(statearr_30809[(1)] = (1));

return statearr_30809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1 = (function (state_30797){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30797);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30810){if((e30810 instanceof Object)){
var ex__30510__auto__ = e30810;
var statearr_30811_32299 = state_30797;
(statearr_30811_32299[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32300 = state_30797;
state_30797 = G__32300;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = function(state_30797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1.call(this,state_30797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_30812 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30812[(6)] = c__30571__auto___32274);

return statearr_30812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


var c__30571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_30850){
var state_val_30851 = (state_30850[(1)]);
if((state_val_30851 === (7))){
var inst_30846 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
var statearr_30852_32301 = state_30850__$1;
(statearr_30852_32301[(2)] = inst_30846);

(statearr_30852_32301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (20))){
var state_30850__$1 = state_30850;
var statearr_30853_32302 = state_30850__$1;
(statearr_30853_32302[(2)] = null);

(statearr_30853_32302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (1))){
var state_30850__$1 = state_30850;
var statearr_30854_32303 = state_30850__$1;
(statearr_30854_32303[(2)] = null);

(statearr_30854_32303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (4))){
var inst_30815 = (state_30850[(7)]);
var inst_30815__$1 = (state_30850[(2)]);
var inst_30816 = (inst_30815__$1 == null);
var state_30850__$1 = (function (){var statearr_30855 = state_30850;
(statearr_30855[(7)] = inst_30815__$1);

return statearr_30855;
})();
if(cljs.core.truth_(inst_30816)){
var statearr_30856_32306 = state_30850__$1;
(statearr_30856_32306[(1)] = (5));

} else {
var statearr_30857_32307 = state_30850__$1;
(statearr_30857_32307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (15))){
var inst_30828 = (state_30850[(8)]);
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30850__$1,(18),to,inst_30828);
} else {
if((state_val_30851 === (21))){
var inst_30841 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
var statearr_30858_32312 = state_30850__$1;
(statearr_30858_32312[(2)] = inst_30841);

(statearr_30858_32312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (13))){
var inst_30843 = (state_30850[(2)]);
var state_30850__$1 = (function (){var statearr_30859 = state_30850;
(statearr_30859[(9)] = inst_30843);

return statearr_30859;
})();
var statearr_30860_32317 = state_30850__$1;
(statearr_30860_32317[(2)] = null);

(statearr_30860_32317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (6))){
var inst_30815 = (state_30850[(7)]);
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30850__$1,(11),inst_30815);
} else {
if((state_val_30851 === (17))){
var inst_30836 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
if(cljs.core.truth_(inst_30836)){
var statearr_30861_32318 = state_30850__$1;
(statearr_30861_32318[(1)] = (19));

} else {
var statearr_30862_32319 = state_30850__$1;
(statearr_30862_32319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (3))){
var inst_30848 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30850__$1,inst_30848);
} else {
if((state_val_30851 === (12))){
var inst_30825 = (state_30850[(10)]);
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30850__$1,(14),inst_30825);
} else {
if((state_val_30851 === (2))){
var state_30850__$1 = state_30850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30850__$1,(4),results);
} else {
if((state_val_30851 === (19))){
var state_30850__$1 = state_30850;
var statearr_30863_32322 = state_30850__$1;
(statearr_30863_32322[(2)] = null);

(statearr_30863_32322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (11))){
var inst_30825 = (state_30850[(2)]);
var state_30850__$1 = (function (){var statearr_30864 = state_30850;
(statearr_30864[(10)] = inst_30825);

return statearr_30864;
})();
var statearr_30865_32323 = state_30850__$1;
(statearr_30865_32323[(2)] = null);

(statearr_30865_32323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (9))){
var state_30850__$1 = state_30850;
var statearr_30866_32324 = state_30850__$1;
(statearr_30866_32324[(2)] = null);

(statearr_30866_32324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (5))){
var state_30850__$1 = state_30850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30867_32325 = state_30850__$1;
(statearr_30867_32325[(1)] = (8));

} else {
var statearr_30868_32326 = state_30850__$1;
(statearr_30868_32326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (14))){
var inst_30828 = (state_30850[(8)]);
var inst_30828__$1 = (state_30850[(2)]);
var inst_30829 = (inst_30828__$1 == null);
var inst_30830 = cljs.core.not(inst_30829);
var state_30850__$1 = (function (){var statearr_30869 = state_30850;
(statearr_30869[(8)] = inst_30828__$1);

return statearr_30869;
})();
if(inst_30830){
var statearr_30870_32327 = state_30850__$1;
(statearr_30870_32327[(1)] = (15));

} else {
var statearr_30871_32328 = state_30850__$1;
(statearr_30871_32328[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (16))){
var state_30850__$1 = state_30850;
var statearr_30872_32329 = state_30850__$1;
(statearr_30872_32329[(2)] = false);

(statearr_30872_32329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (10))){
var inst_30822 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
var statearr_30873_32331 = state_30850__$1;
(statearr_30873_32331[(2)] = inst_30822);

(statearr_30873_32331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (18))){
var inst_30833 = (state_30850[(2)]);
var state_30850__$1 = state_30850;
var statearr_30874_32333 = state_30850__$1;
(statearr_30874_32333[(2)] = inst_30833);

(statearr_30874_32333[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30851 === (8))){
var inst_30819 = cljs.core.async.close_BANG_(to);
var state_30850__$1 = state_30850;
var statearr_30875_32334 = state_30850__$1;
(statearr_30875_32334[(2)] = inst_30819);

(statearr_30875_32334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0 = (function (){
var statearr_30876 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__);

(statearr_30876[(1)] = (1));

return statearr_30876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1 = (function (state_30850){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30850);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30877){if((e30877 instanceof Object)){
var ex__30510__auto__ = e30877;
var statearr_30878_32335 = state_30850;
(statearr_30878_32335[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32337 = state_30850;
state_30850 = G__32337;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__ = function(state_30850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1.call(this,state_30850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_30879 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30879[(6)] = c__30571__auto__);

return statearr_30879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));

return c__30571__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30881 = arguments.length;
switch (G__30881) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30883 = arguments.length;
switch (G__30883) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30885 = arguments.length;
switch (G__30885) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30571__auto___32367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_30911){
var state_val_30912 = (state_30911[(1)]);
if((state_val_30912 === (7))){
var inst_30907 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30913_32369 = state_30911__$1;
(statearr_30913_32369[(2)] = inst_30907);

(statearr_30913_32369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (1))){
var state_30911__$1 = state_30911;
var statearr_30914_32371 = state_30911__$1;
(statearr_30914_32371[(2)] = null);

(statearr_30914_32371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (4))){
var inst_30888 = (state_30911[(7)]);
var inst_30888__$1 = (state_30911[(2)]);
var inst_30889 = (inst_30888__$1 == null);
var state_30911__$1 = (function (){var statearr_30915 = state_30911;
(statearr_30915[(7)] = inst_30888__$1);

return statearr_30915;
})();
if(cljs.core.truth_(inst_30889)){
var statearr_30916_32380 = state_30911__$1;
(statearr_30916_32380[(1)] = (5));

} else {
var statearr_30917_32381 = state_30911__$1;
(statearr_30917_32381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (13))){
var state_30911__$1 = state_30911;
var statearr_30918_32382 = state_30911__$1;
(statearr_30918_32382[(2)] = null);

(statearr_30918_32382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (6))){
var inst_30888 = (state_30911[(7)]);
var inst_30894 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30888) : p.call(null,inst_30888));
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30894)){
var statearr_30919_32383 = state_30911__$1;
(statearr_30919_32383[(1)] = (9));

} else {
var statearr_30920_32384 = state_30911__$1;
(statearr_30920_32384[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (3))){
var inst_30909 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30911__$1,inst_30909);
} else {
if((state_val_30912 === (12))){
var state_30911__$1 = state_30911;
var statearr_30921_32385 = state_30911__$1;
(statearr_30921_32385[(2)] = null);

(statearr_30921_32385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (2))){
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30911__$1,(4),ch);
} else {
if((state_val_30912 === (11))){
var inst_30888 = (state_30911[(7)]);
var inst_30898 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30911__$1,(8),inst_30898,inst_30888);
} else {
if((state_val_30912 === (9))){
var state_30911__$1 = state_30911;
var statearr_30922_32395 = state_30911__$1;
(statearr_30922_32395[(2)] = tc);

(statearr_30922_32395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (5))){
var inst_30891 = cljs.core.async.close_BANG_(tc);
var inst_30892 = cljs.core.async.close_BANG_(fc);
var state_30911__$1 = (function (){var statearr_30923 = state_30911;
(statearr_30923[(8)] = inst_30891);

return statearr_30923;
})();
var statearr_30924_32396 = state_30911__$1;
(statearr_30924_32396[(2)] = inst_30892);

(statearr_30924_32396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (14))){
var inst_30905 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30925_32397 = state_30911__$1;
(statearr_30925_32397[(2)] = inst_30905);

(statearr_30925_32397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (10))){
var state_30911__$1 = state_30911;
var statearr_30926_32399 = state_30911__$1;
(statearr_30926_32399[(2)] = fc);

(statearr_30926_32399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (8))){
var inst_30900 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30900)){
var statearr_30927_32400 = state_30911__$1;
(statearr_30927_32400[(1)] = (12));

} else {
var statearr_30928_32401 = state_30911__$1;
(statearr_30928_32401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_30929 = [null,null,null,null,null,null,null,null,null];
(statearr_30929[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_30929[(1)] = (1));

return statearr_30929;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_30911){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30911);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30930){if((e30930 instanceof Object)){
var ex__30510__auto__ = e30930;
var statearr_30931_32406 = state_30911;
(statearr_30931_32406[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32408 = state_30911;
state_30911 = G__32408;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_30911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_30911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_30932 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30932[(6)] = c__30571__auto___32367);

return statearr_30932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_30953){
var state_val_30954 = (state_30953[(1)]);
if((state_val_30954 === (7))){
var inst_30949 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
var statearr_30955_32409 = state_30953__$1;
(statearr_30955_32409[(2)] = inst_30949);

(statearr_30955_32409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (1))){
var inst_30933 = init;
var state_30953__$1 = (function (){var statearr_30956 = state_30953;
(statearr_30956[(7)] = inst_30933);

return statearr_30956;
})();
var statearr_30957_32410 = state_30953__$1;
(statearr_30957_32410[(2)] = null);

(statearr_30957_32410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (4))){
var inst_30936 = (state_30953[(8)]);
var inst_30936__$1 = (state_30953[(2)]);
var inst_30937 = (inst_30936__$1 == null);
var state_30953__$1 = (function (){var statearr_30958 = state_30953;
(statearr_30958[(8)] = inst_30936__$1);

return statearr_30958;
})();
if(cljs.core.truth_(inst_30937)){
var statearr_30959_32418 = state_30953__$1;
(statearr_30959_32418[(1)] = (5));

} else {
var statearr_30960_32419 = state_30953__$1;
(statearr_30960_32419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (6))){
var inst_30936 = (state_30953[(8)]);
var inst_30933 = (state_30953[(7)]);
var inst_30940 = (state_30953[(9)]);
var inst_30940__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30933,inst_30936) : f.call(null,inst_30933,inst_30936));
var inst_30941 = cljs.core.reduced_QMARK_(inst_30940__$1);
var state_30953__$1 = (function (){var statearr_30961 = state_30953;
(statearr_30961[(9)] = inst_30940__$1);

return statearr_30961;
})();
if(inst_30941){
var statearr_30962_32421 = state_30953__$1;
(statearr_30962_32421[(1)] = (8));

} else {
var statearr_30963_32422 = state_30953__$1;
(statearr_30963_32422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (3))){
var inst_30951 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30953__$1,inst_30951);
} else {
if((state_val_30954 === (2))){
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30953__$1,(4),ch);
} else {
if((state_val_30954 === (9))){
var inst_30940 = (state_30953[(9)]);
var inst_30933 = inst_30940;
var state_30953__$1 = (function (){var statearr_30964 = state_30953;
(statearr_30964[(7)] = inst_30933);

return statearr_30964;
})();
var statearr_30965_32424 = state_30953__$1;
(statearr_30965_32424[(2)] = null);

(statearr_30965_32424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (5))){
var inst_30933 = (state_30953[(7)]);
var state_30953__$1 = state_30953;
var statearr_30966_32425 = state_30953__$1;
(statearr_30966_32425[(2)] = inst_30933);

(statearr_30966_32425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (10))){
var inst_30947 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
var statearr_30967_32426 = state_30953__$1;
(statearr_30967_32426[(2)] = inst_30947);

(statearr_30967_32426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (8))){
var inst_30940 = (state_30953[(9)]);
var inst_30943 = cljs.core.deref(inst_30940);
var state_30953__$1 = state_30953;
var statearr_30968_32427 = state_30953__$1;
(statearr_30968_32427[(2)] = inst_30943);

(statearr_30968_32427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30507__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30507__auto____0 = (function (){
var statearr_30969 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30969[(0)] = cljs$core$async$reduce_$_state_machine__30507__auto__);

(statearr_30969[(1)] = (1));

return statearr_30969;
});
var cljs$core$async$reduce_$_state_machine__30507__auto____1 = (function (state_30953){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30953);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30970){if((e30970 instanceof Object)){
var ex__30510__auto__ = e30970;
var statearr_30971_32428 = state_30953;
(statearr_30971_32428[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32429 = state_30953;
state_30953 = G__32429;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30507__auto__ = function(state_30953){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30507__auto____1.call(this,state_30953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30507__auto____0;
cljs$core$async$reduce_$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30507__auto____1;
return cljs$core$async$reduce_$_state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_30972 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30972[(6)] = c__30571__auto__);

return statearr_30972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));

return c__30571__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_30978){
var state_val_30979 = (state_30978[(1)]);
if((state_val_30979 === (1))){
var inst_30973 = cljs.core.async.reduce(f__$1,init,ch);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30978__$1,(2),inst_30973);
} else {
if((state_val_30979 === (2))){
var inst_30975 = (state_30978[(2)]);
var inst_30976 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30975) : f__$1.call(null,inst_30975));
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30978__$1,inst_30976);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30507__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30507__auto____0 = (function (){
var statearr_30980 = [null,null,null,null,null,null,null];
(statearr_30980[(0)] = cljs$core$async$transduce_$_state_machine__30507__auto__);

(statearr_30980[(1)] = (1));

return statearr_30980;
});
var cljs$core$async$transduce_$_state_machine__30507__auto____1 = (function (state_30978){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_30978);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e30981){if((e30981 instanceof Object)){
var ex__30510__auto__ = e30981;
var statearr_30982_32437 = state_30978;
(statearr_30982_32437[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32438 = state_30978;
state_30978 = G__32438;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30507__auto__ = function(state_30978){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30507__auto____1.call(this,state_30978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30507__auto____0;
cljs$core$async$transduce_$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30507__auto____1;
return cljs$core$async$transduce_$_state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_30983 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_30983[(6)] = c__30571__auto__);

return statearr_30983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));

return c__30571__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30985 = arguments.length;
switch (G__30985) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31010){
var state_val_31011 = (state_31010[(1)]);
if((state_val_31011 === (7))){
var inst_30992 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31012_32440 = state_31010__$1;
(statearr_31012_32440[(2)] = inst_30992);

(statearr_31012_32440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (1))){
var inst_30986 = cljs.core.seq(coll);
var inst_30987 = inst_30986;
var state_31010__$1 = (function (){var statearr_31013 = state_31010;
(statearr_31013[(7)] = inst_30987);

return statearr_31013;
})();
var statearr_31014_32441 = state_31010__$1;
(statearr_31014_32441[(2)] = null);

(statearr_31014_32441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (4))){
var inst_30987 = (state_31010[(7)]);
var inst_30990 = cljs.core.first(inst_30987);
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31010__$1,(7),ch,inst_30990);
} else {
if((state_val_31011 === (13))){
var inst_31004 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31015_32443 = state_31010__$1;
(statearr_31015_32443[(2)] = inst_31004);

(statearr_31015_32443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (6))){
var inst_30995 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
if(cljs.core.truth_(inst_30995)){
var statearr_31016_32445 = state_31010__$1;
(statearr_31016_32445[(1)] = (8));

} else {
var statearr_31017_32449 = state_31010__$1;
(statearr_31017_32449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (3))){
var inst_31008 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31010__$1,inst_31008);
} else {
if((state_val_31011 === (12))){
var state_31010__$1 = state_31010;
var statearr_31018_32450 = state_31010__$1;
(statearr_31018_32450[(2)] = null);

(statearr_31018_32450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (2))){
var inst_30987 = (state_31010[(7)]);
var state_31010__$1 = state_31010;
if(cljs.core.truth_(inst_30987)){
var statearr_31019_32451 = state_31010__$1;
(statearr_31019_32451[(1)] = (4));

} else {
var statearr_31020_32452 = state_31010__$1;
(statearr_31020_32452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (11))){
var inst_31001 = cljs.core.async.close_BANG_(ch);
var state_31010__$1 = state_31010;
var statearr_31021_32453 = state_31010__$1;
(statearr_31021_32453[(2)] = inst_31001);

(statearr_31021_32453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (9))){
var state_31010__$1 = state_31010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31022_32454 = state_31010__$1;
(statearr_31022_32454[(1)] = (11));

} else {
var statearr_31023_32455 = state_31010__$1;
(statearr_31023_32455[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (5))){
var inst_30987 = (state_31010[(7)]);
var state_31010__$1 = state_31010;
var statearr_31024_32456 = state_31010__$1;
(statearr_31024_32456[(2)] = inst_30987);

(statearr_31024_32456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (10))){
var inst_31006 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31025_32457 = state_31010__$1;
(statearr_31025_32457[(2)] = inst_31006);

(statearr_31025_32457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31011 === (8))){
var inst_30987 = (state_31010[(7)]);
var inst_30997 = cljs.core.next(inst_30987);
var inst_30987__$1 = inst_30997;
var state_31010__$1 = (function (){var statearr_31026 = state_31010;
(statearr_31026[(7)] = inst_30987__$1);

return statearr_31026;
})();
var statearr_31027_32458 = state_31010__$1;
(statearr_31027_32458[(2)] = null);

(statearr_31027_32458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_31028 = [null,null,null,null,null,null,null,null];
(statearr_31028[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_31028[(1)] = (1));

return statearr_31028;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_31010){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31010);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31029){if((e31029 instanceof Object)){
var ex__30510__auto__ = e31029;
var statearr_31030_32459 = state_31010;
(statearr_31030_32459[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31029;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32460 = state_31010;
state_31010 = G__32460;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_31010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_31010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31031 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31031[(6)] = c__30571__auto__);

return statearr_31031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));

return c__30571__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31032 = (function (ch,cs,meta31033){
this.ch = ch;
this.cs = cs;
this.meta31033 = meta31033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31034,meta31033__$1){
var self__ = this;
var _31034__$1 = this;
return (new cljs.core.async.t_cljs$core$async31032(self__.ch,self__.cs,meta31033__$1));
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31034){
var self__ = this;
var _31034__$1 = this;
return self__.meta31033;
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31032.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31033","meta31033",-743933915,null)], null);
}));

(cljs.core.async.t_cljs$core$async31032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31032");

(cljs.core.async.t_cljs$core$async31032.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31032.
 */
cljs.core.async.__GT_t_cljs$core$async31032 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31032(ch__$1,cs__$1,meta31033){
return (new cljs.core.async.t_cljs$core$async31032(ch__$1,cs__$1,meta31033));
});

}

return (new cljs.core.async.t_cljs$core$async31032(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30571__auto___32469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31169){
var state_val_31170 = (state_31169[(1)]);
if((state_val_31170 === (7))){
var inst_31165 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31171_32470 = state_31169__$1;
(statearr_31171_32470[(2)] = inst_31165);

(statearr_31171_32470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (20))){
var inst_31068 = (state_31169[(7)]);
var inst_31080 = cljs.core.first(inst_31068);
var inst_31081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31080,(0),null);
var inst_31082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31080,(1),null);
var state_31169__$1 = (function (){var statearr_31172 = state_31169;
(statearr_31172[(8)] = inst_31081);

return statearr_31172;
})();
if(cljs.core.truth_(inst_31082)){
var statearr_31173_32471 = state_31169__$1;
(statearr_31173_32471[(1)] = (22));

} else {
var statearr_31174_32472 = state_31169__$1;
(statearr_31174_32472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (27))){
var inst_31112 = (state_31169[(9)]);
var inst_31110 = (state_31169[(10)]);
var inst_31117 = (state_31169[(11)]);
var inst_31037 = (state_31169[(12)]);
var inst_31117__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31110,inst_31112);
var inst_31118 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31117__$1,inst_31037,done);
var state_31169__$1 = (function (){var statearr_31175 = state_31169;
(statearr_31175[(11)] = inst_31117__$1);

return statearr_31175;
})();
if(cljs.core.truth_(inst_31118)){
var statearr_31176_32473 = state_31169__$1;
(statearr_31176_32473[(1)] = (30));

} else {
var statearr_31177_32474 = state_31169__$1;
(statearr_31177_32474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (1))){
var state_31169__$1 = state_31169;
var statearr_31178_32475 = state_31169__$1;
(statearr_31178_32475[(2)] = null);

(statearr_31178_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (24))){
var inst_31068 = (state_31169[(7)]);
var inst_31087 = (state_31169[(2)]);
var inst_31088 = cljs.core.next(inst_31068);
var inst_31046 = inst_31088;
var inst_31047 = null;
var inst_31048 = (0);
var inst_31049 = (0);
var state_31169__$1 = (function (){var statearr_31179 = state_31169;
(statearr_31179[(13)] = inst_31046);

(statearr_31179[(14)] = inst_31048);

(statearr_31179[(15)] = inst_31087);

(statearr_31179[(16)] = inst_31047);

(statearr_31179[(17)] = inst_31049);

return statearr_31179;
})();
var statearr_31180_32476 = state_31169__$1;
(statearr_31180_32476[(2)] = null);

(statearr_31180_32476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (39))){
var state_31169__$1 = state_31169;
var statearr_31184_32477 = state_31169__$1;
(statearr_31184_32477[(2)] = null);

(statearr_31184_32477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (4))){
var inst_31037 = (state_31169[(12)]);
var inst_31037__$1 = (state_31169[(2)]);
var inst_31038 = (inst_31037__$1 == null);
var state_31169__$1 = (function (){var statearr_31185 = state_31169;
(statearr_31185[(12)] = inst_31037__$1);

return statearr_31185;
})();
if(cljs.core.truth_(inst_31038)){
var statearr_31186_32478 = state_31169__$1;
(statearr_31186_32478[(1)] = (5));

} else {
var statearr_31187_32479 = state_31169__$1;
(statearr_31187_32479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (15))){
var inst_31046 = (state_31169[(13)]);
var inst_31048 = (state_31169[(14)]);
var inst_31047 = (state_31169[(16)]);
var inst_31049 = (state_31169[(17)]);
var inst_31064 = (state_31169[(2)]);
var inst_31065 = (inst_31049 + (1));
var tmp31181 = inst_31046;
var tmp31182 = inst_31048;
var tmp31183 = inst_31047;
var inst_31046__$1 = tmp31181;
var inst_31047__$1 = tmp31183;
var inst_31048__$1 = tmp31182;
var inst_31049__$1 = inst_31065;
var state_31169__$1 = (function (){var statearr_31188 = state_31169;
(statearr_31188[(13)] = inst_31046__$1);

(statearr_31188[(14)] = inst_31048__$1);

(statearr_31188[(18)] = inst_31064);

(statearr_31188[(16)] = inst_31047__$1);

(statearr_31188[(17)] = inst_31049__$1);

return statearr_31188;
})();
var statearr_31189_32481 = state_31169__$1;
(statearr_31189_32481[(2)] = null);

(statearr_31189_32481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (21))){
var inst_31091 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31193_32482 = state_31169__$1;
(statearr_31193_32482[(2)] = inst_31091);

(statearr_31193_32482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (31))){
var inst_31117 = (state_31169[(11)]);
var inst_31121 = done(null);
var inst_31122 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31117);
var state_31169__$1 = (function (){var statearr_31194 = state_31169;
(statearr_31194[(19)] = inst_31121);

return statearr_31194;
})();
var statearr_31195_32483 = state_31169__$1;
(statearr_31195_32483[(2)] = inst_31122);

(statearr_31195_32483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (32))){
var inst_31111 = (state_31169[(20)]);
var inst_31109 = (state_31169[(21)]);
var inst_31112 = (state_31169[(9)]);
var inst_31110 = (state_31169[(10)]);
var inst_31124 = (state_31169[(2)]);
var inst_31125 = (inst_31112 + (1));
var tmp31190 = inst_31111;
var tmp31191 = inst_31109;
var tmp31192 = inst_31110;
var inst_31109__$1 = tmp31191;
var inst_31110__$1 = tmp31192;
var inst_31111__$1 = tmp31190;
var inst_31112__$1 = inst_31125;
var state_31169__$1 = (function (){var statearr_31196 = state_31169;
(statearr_31196[(22)] = inst_31124);

(statearr_31196[(20)] = inst_31111__$1);

(statearr_31196[(21)] = inst_31109__$1);

(statearr_31196[(9)] = inst_31112__$1);

(statearr_31196[(10)] = inst_31110__$1);

return statearr_31196;
})();
var statearr_31197_32485 = state_31169__$1;
(statearr_31197_32485[(2)] = null);

(statearr_31197_32485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (40))){
var inst_31137 = (state_31169[(23)]);
var inst_31141 = done(null);
var inst_31142 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31137);
var state_31169__$1 = (function (){var statearr_31198 = state_31169;
(statearr_31198[(24)] = inst_31141);

return statearr_31198;
})();
var statearr_31199_32486 = state_31169__$1;
(statearr_31199_32486[(2)] = inst_31142);

(statearr_31199_32486[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (33))){
var inst_31128 = (state_31169[(25)]);
var inst_31130 = cljs.core.chunked_seq_QMARK_(inst_31128);
var state_31169__$1 = state_31169;
if(inst_31130){
var statearr_31200_32487 = state_31169__$1;
(statearr_31200_32487[(1)] = (36));

} else {
var statearr_31201_32488 = state_31169__$1;
(statearr_31201_32488[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (13))){
var inst_31058 = (state_31169[(26)]);
var inst_31061 = cljs.core.async.close_BANG_(inst_31058);
var state_31169__$1 = state_31169;
var statearr_31202_32489 = state_31169__$1;
(statearr_31202_32489[(2)] = inst_31061);

(statearr_31202_32489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (22))){
var inst_31081 = (state_31169[(8)]);
var inst_31084 = cljs.core.async.close_BANG_(inst_31081);
var state_31169__$1 = state_31169;
var statearr_31203_32490 = state_31169__$1;
(statearr_31203_32490[(2)] = inst_31084);

(statearr_31203_32490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (36))){
var inst_31128 = (state_31169[(25)]);
var inst_31132 = cljs.core.chunk_first(inst_31128);
var inst_31133 = cljs.core.chunk_rest(inst_31128);
var inst_31134 = cljs.core.count(inst_31132);
var inst_31109 = inst_31133;
var inst_31110 = inst_31132;
var inst_31111 = inst_31134;
var inst_31112 = (0);
var state_31169__$1 = (function (){var statearr_31204 = state_31169;
(statearr_31204[(20)] = inst_31111);

(statearr_31204[(21)] = inst_31109);

(statearr_31204[(9)] = inst_31112);

(statearr_31204[(10)] = inst_31110);

return statearr_31204;
})();
var statearr_31205_32495 = state_31169__$1;
(statearr_31205_32495[(2)] = null);

(statearr_31205_32495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (41))){
var inst_31128 = (state_31169[(25)]);
var inst_31144 = (state_31169[(2)]);
var inst_31145 = cljs.core.next(inst_31128);
var inst_31109 = inst_31145;
var inst_31110 = null;
var inst_31111 = (0);
var inst_31112 = (0);
var state_31169__$1 = (function (){var statearr_31206 = state_31169;
(statearr_31206[(20)] = inst_31111);

(statearr_31206[(21)] = inst_31109);

(statearr_31206[(9)] = inst_31112);

(statearr_31206[(10)] = inst_31110);

(statearr_31206[(27)] = inst_31144);

return statearr_31206;
})();
var statearr_31207_32496 = state_31169__$1;
(statearr_31207_32496[(2)] = null);

(statearr_31207_32496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (43))){
var state_31169__$1 = state_31169;
var statearr_31208_32497 = state_31169__$1;
(statearr_31208_32497[(2)] = null);

(statearr_31208_32497[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (29))){
var inst_31153 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31209_32498 = state_31169__$1;
(statearr_31209_32498[(2)] = inst_31153);

(statearr_31209_32498[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (44))){
var inst_31162 = (state_31169[(2)]);
var state_31169__$1 = (function (){var statearr_31210 = state_31169;
(statearr_31210[(28)] = inst_31162);

return statearr_31210;
})();
var statearr_31211_32505 = state_31169__$1;
(statearr_31211_32505[(2)] = null);

(statearr_31211_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (6))){
var inst_31101 = (state_31169[(29)]);
var inst_31100 = cljs.core.deref(cs);
var inst_31101__$1 = cljs.core.keys(inst_31100);
var inst_31102 = cljs.core.count(inst_31101__$1);
var inst_31103 = cljs.core.reset_BANG_(dctr,inst_31102);
var inst_31108 = cljs.core.seq(inst_31101__$1);
var inst_31109 = inst_31108;
var inst_31110 = null;
var inst_31111 = (0);
var inst_31112 = (0);
var state_31169__$1 = (function (){var statearr_31212 = state_31169;
(statearr_31212[(30)] = inst_31103);

(statearr_31212[(20)] = inst_31111);

(statearr_31212[(29)] = inst_31101__$1);

(statearr_31212[(21)] = inst_31109);

(statearr_31212[(9)] = inst_31112);

(statearr_31212[(10)] = inst_31110);

return statearr_31212;
})();
var statearr_31213_32510 = state_31169__$1;
(statearr_31213_32510[(2)] = null);

(statearr_31213_32510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (28))){
var inst_31128 = (state_31169[(25)]);
var inst_31109 = (state_31169[(21)]);
var inst_31128__$1 = cljs.core.seq(inst_31109);
var state_31169__$1 = (function (){var statearr_31214 = state_31169;
(statearr_31214[(25)] = inst_31128__$1);

return statearr_31214;
})();
if(inst_31128__$1){
var statearr_31215_32511 = state_31169__$1;
(statearr_31215_32511[(1)] = (33));

} else {
var statearr_31216_32512 = state_31169__$1;
(statearr_31216_32512[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (25))){
var inst_31111 = (state_31169[(20)]);
var inst_31112 = (state_31169[(9)]);
var inst_31114 = (inst_31112 < inst_31111);
var inst_31115 = inst_31114;
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31115)){
var statearr_31217_32513 = state_31169__$1;
(statearr_31217_32513[(1)] = (27));

} else {
var statearr_31218_32514 = state_31169__$1;
(statearr_31218_32514[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (34))){
var state_31169__$1 = state_31169;
var statearr_31219_32515 = state_31169__$1;
(statearr_31219_32515[(2)] = null);

(statearr_31219_32515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (17))){
var state_31169__$1 = state_31169;
var statearr_31220_32516 = state_31169__$1;
(statearr_31220_32516[(2)] = null);

(statearr_31220_32516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (3))){
var inst_31167 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31169__$1,inst_31167);
} else {
if((state_val_31170 === (12))){
var inst_31096 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31221_32518 = state_31169__$1;
(statearr_31221_32518[(2)] = inst_31096);

(statearr_31221_32518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (2))){
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31169__$1,(4),ch);
} else {
if((state_val_31170 === (23))){
var state_31169__$1 = state_31169;
var statearr_31222_32519 = state_31169__$1;
(statearr_31222_32519[(2)] = null);

(statearr_31222_32519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (35))){
var inst_31151 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31223_32520 = state_31169__$1;
(statearr_31223_32520[(2)] = inst_31151);

(statearr_31223_32520[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (19))){
var inst_31068 = (state_31169[(7)]);
var inst_31072 = cljs.core.chunk_first(inst_31068);
var inst_31073 = cljs.core.chunk_rest(inst_31068);
var inst_31074 = cljs.core.count(inst_31072);
var inst_31046 = inst_31073;
var inst_31047 = inst_31072;
var inst_31048 = inst_31074;
var inst_31049 = (0);
var state_31169__$1 = (function (){var statearr_31224 = state_31169;
(statearr_31224[(13)] = inst_31046);

(statearr_31224[(14)] = inst_31048);

(statearr_31224[(16)] = inst_31047);

(statearr_31224[(17)] = inst_31049);

return statearr_31224;
})();
var statearr_31225_32521 = state_31169__$1;
(statearr_31225_32521[(2)] = null);

(statearr_31225_32521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (11))){
var inst_31046 = (state_31169[(13)]);
var inst_31068 = (state_31169[(7)]);
var inst_31068__$1 = cljs.core.seq(inst_31046);
var state_31169__$1 = (function (){var statearr_31226 = state_31169;
(statearr_31226[(7)] = inst_31068__$1);

return statearr_31226;
})();
if(inst_31068__$1){
var statearr_31227_32524 = state_31169__$1;
(statearr_31227_32524[(1)] = (16));

} else {
var statearr_31228_32525 = state_31169__$1;
(statearr_31228_32525[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (9))){
var inst_31098 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31229_32526 = state_31169__$1;
(statearr_31229_32526[(2)] = inst_31098);

(statearr_31229_32526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (5))){
var inst_31044 = cljs.core.deref(cs);
var inst_31045 = cljs.core.seq(inst_31044);
var inst_31046 = inst_31045;
var inst_31047 = null;
var inst_31048 = (0);
var inst_31049 = (0);
var state_31169__$1 = (function (){var statearr_31230 = state_31169;
(statearr_31230[(13)] = inst_31046);

(statearr_31230[(14)] = inst_31048);

(statearr_31230[(16)] = inst_31047);

(statearr_31230[(17)] = inst_31049);

return statearr_31230;
})();
var statearr_31231_32527 = state_31169__$1;
(statearr_31231_32527[(2)] = null);

(statearr_31231_32527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (14))){
var state_31169__$1 = state_31169;
var statearr_31232_32528 = state_31169__$1;
(statearr_31232_32528[(2)] = null);

(statearr_31232_32528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (45))){
var inst_31159 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31233_32529 = state_31169__$1;
(statearr_31233_32529[(2)] = inst_31159);

(statearr_31233_32529[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (26))){
var inst_31101 = (state_31169[(29)]);
var inst_31155 = (state_31169[(2)]);
var inst_31156 = cljs.core.seq(inst_31101);
var state_31169__$1 = (function (){var statearr_31234 = state_31169;
(statearr_31234[(31)] = inst_31155);

return statearr_31234;
})();
if(inst_31156){
var statearr_31235_32533 = state_31169__$1;
(statearr_31235_32533[(1)] = (42));

} else {
var statearr_31236_32534 = state_31169__$1;
(statearr_31236_32534[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (16))){
var inst_31068 = (state_31169[(7)]);
var inst_31070 = cljs.core.chunked_seq_QMARK_(inst_31068);
var state_31169__$1 = state_31169;
if(inst_31070){
var statearr_31237_32535 = state_31169__$1;
(statearr_31237_32535[(1)] = (19));

} else {
var statearr_31238_32536 = state_31169__$1;
(statearr_31238_32536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (38))){
var inst_31148 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31239_32537 = state_31169__$1;
(statearr_31239_32537[(2)] = inst_31148);

(statearr_31239_32537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (30))){
var state_31169__$1 = state_31169;
var statearr_31240_32538 = state_31169__$1;
(statearr_31240_32538[(2)] = null);

(statearr_31240_32538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (10))){
var inst_31047 = (state_31169[(16)]);
var inst_31049 = (state_31169[(17)]);
var inst_31057 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31047,inst_31049);
var inst_31058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31057,(0),null);
var inst_31059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31057,(1),null);
var state_31169__$1 = (function (){var statearr_31241 = state_31169;
(statearr_31241[(26)] = inst_31058);

return statearr_31241;
})();
if(cljs.core.truth_(inst_31059)){
var statearr_31242_32539 = state_31169__$1;
(statearr_31242_32539[(1)] = (13));

} else {
var statearr_31243_32540 = state_31169__$1;
(statearr_31243_32540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (18))){
var inst_31094 = (state_31169[(2)]);
var state_31169__$1 = state_31169;
var statearr_31244_32554 = state_31169__$1;
(statearr_31244_32554[(2)] = inst_31094);

(statearr_31244_32554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (42))){
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31169__$1,(45),dchan);
} else {
if((state_val_31170 === (37))){
var inst_31128 = (state_31169[(25)]);
var inst_31137 = (state_31169[(23)]);
var inst_31037 = (state_31169[(12)]);
var inst_31137__$1 = cljs.core.first(inst_31128);
var inst_31138 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31137__$1,inst_31037,done);
var state_31169__$1 = (function (){var statearr_31245 = state_31169;
(statearr_31245[(23)] = inst_31137__$1);

return statearr_31245;
})();
if(cljs.core.truth_(inst_31138)){
var statearr_31246_32555 = state_31169__$1;
(statearr_31246_32555[(1)] = (39));

} else {
var statearr_31247_32556 = state_31169__$1;
(statearr_31247_32556[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31170 === (8))){
var inst_31048 = (state_31169[(14)]);
var inst_31049 = (state_31169[(17)]);
var inst_31051 = (inst_31049 < inst_31048);
var inst_31052 = inst_31051;
var state_31169__$1 = state_31169;
if(cljs.core.truth_(inst_31052)){
var statearr_31248_32557 = state_31169__$1;
(statearr_31248_32557[(1)] = (10));

} else {
var statearr_31249_32558 = state_31169__$1;
(statearr_31249_32558[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30507__auto__ = null;
var cljs$core$async$mult_$_state_machine__30507__auto____0 = (function (){
var statearr_31250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31250[(0)] = cljs$core$async$mult_$_state_machine__30507__auto__);

(statearr_31250[(1)] = (1));

return statearr_31250;
});
var cljs$core$async$mult_$_state_machine__30507__auto____1 = (function (state_31169){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31169);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31251){if((e31251 instanceof Object)){
var ex__30510__auto__ = e31251;
var statearr_31252_32566 = state_31169;
(statearr_31252_32566[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32567 = state_31169;
state_31169 = G__32567;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30507__auto__ = function(state_31169){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30507__auto____1.call(this,state_31169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30507__auto____0;
cljs$core$async$mult_$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30507__auto____1;
return cljs$core$async$mult_$_state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31253 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31253[(6)] = c__30571__auto___32469);

return statearr_31253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31255 = arguments.length;
switch (G__31255) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32587 = arguments.length;
var i__4790__auto___32588 = (0);
while(true){
if((i__4790__auto___32588 < len__4789__auto___32587)){
args__4795__auto__.push((arguments[i__4790__auto___32588]));

var G__32589 = (i__4790__auto___32588 + (1));
i__4790__auto___32588 = G__32589;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31260){
var map__31261 = p__31260;
var map__31261__$1 = (((((!((map__31261 == null))))?(((((map__31261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31261):map__31261);
var opts = map__31261__$1;
var statearr_31263_32590 = state;
(statearr_31263_32590[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31264_32591 = state;
(statearr_31264_32591[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31265_32592 = state;
(statearr_31265_32592[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31256){
var G__31257 = cljs.core.first(seq31256);
var seq31256__$1 = cljs.core.next(seq31256);
var G__31258 = cljs.core.first(seq31256__$1);
var seq31256__$2 = cljs.core.next(seq31256__$1);
var G__31259 = cljs.core.first(seq31256__$2);
var seq31256__$3 = cljs.core.next(seq31256__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31257,G__31258,G__31259,seq31256__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31266 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31267){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31267 = meta31267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31268,meta31267__$1){
var self__ = this;
var _31268__$1 = this;
return (new cljs.core.async.t_cljs$core$async31266(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31267__$1));
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31268){
var self__ = this;
var _31268__$1 = this;
return self__.meta31267;
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31267","meta31267",411146244,null)], null);
}));

(cljs.core.async.t_cljs$core$async31266.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31266");

(cljs.core.async.t_cljs$core$async31266.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31266");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31266.
 */
cljs.core.async.__GT_t_cljs$core$async31266 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31266(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31267){
return (new cljs.core.async.t_cljs$core$async31266(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31267));
});

}

return (new cljs.core.async.t_cljs$core$async31266(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30571__auto___32613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31370){
var state_val_31371 = (state_31370[(1)]);
if((state_val_31371 === (7))){
var inst_31285 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31372_32614 = state_31370__$1;
(statearr_31372_32614[(2)] = inst_31285);

(statearr_31372_32614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (20))){
var inst_31297 = (state_31370[(7)]);
var state_31370__$1 = state_31370;
var statearr_31373_32615 = state_31370__$1;
(statearr_31373_32615[(2)] = inst_31297);

(statearr_31373_32615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (27))){
var state_31370__$1 = state_31370;
var statearr_31374_32616 = state_31370__$1;
(statearr_31374_32616[(2)] = null);

(statearr_31374_32616[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (1))){
var inst_31272 = (state_31370[(8)]);
var inst_31272__$1 = calc_state();
var inst_31274 = (inst_31272__$1 == null);
var inst_31275 = cljs.core.not(inst_31274);
var state_31370__$1 = (function (){var statearr_31375 = state_31370;
(statearr_31375[(8)] = inst_31272__$1);

return statearr_31375;
})();
if(inst_31275){
var statearr_31376_32617 = state_31370__$1;
(statearr_31376_32617[(1)] = (2));

} else {
var statearr_31377_32618 = state_31370__$1;
(statearr_31377_32618[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (24))){
var inst_31330 = (state_31370[(9)]);
var inst_31321 = (state_31370[(10)]);
var inst_31344 = (state_31370[(11)]);
var inst_31344__$1 = (inst_31321.cljs$core$IFn$_invoke$arity$1 ? inst_31321.cljs$core$IFn$_invoke$arity$1(inst_31330) : inst_31321.call(null,inst_31330));
var state_31370__$1 = (function (){var statearr_31378 = state_31370;
(statearr_31378[(11)] = inst_31344__$1);

return statearr_31378;
})();
if(cljs.core.truth_(inst_31344__$1)){
var statearr_31379_32621 = state_31370__$1;
(statearr_31379_32621[(1)] = (29));

} else {
var statearr_31380_32622 = state_31370__$1;
(statearr_31380_32622[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (4))){
var inst_31288 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31288)){
var statearr_31381_32632 = state_31370__$1;
(statearr_31381_32632[(1)] = (8));

} else {
var statearr_31382_32633 = state_31370__$1;
(statearr_31382_32633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (15))){
var inst_31315 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31315)){
var statearr_31383_32634 = state_31370__$1;
(statearr_31383_32634[(1)] = (19));

} else {
var statearr_31384_32635 = state_31370__$1;
(statearr_31384_32635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (21))){
var inst_31320 = (state_31370[(12)]);
var inst_31320__$1 = (state_31370[(2)]);
var inst_31321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31320__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31320__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31320__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31370__$1 = (function (){var statearr_31385 = state_31370;
(statearr_31385[(13)] = inst_31322);

(statearr_31385[(12)] = inst_31320__$1);

(statearr_31385[(10)] = inst_31321);

return statearr_31385;
})();
return cljs.core.async.ioc_alts_BANG_(state_31370__$1,(22),inst_31323);
} else {
if((state_val_31371 === (31))){
var inst_31352 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31352)){
var statearr_31386_32636 = state_31370__$1;
(statearr_31386_32636[(1)] = (32));

} else {
var statearr_31387_32637 = state_31370__$1;
(statearr_31387_32637[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (32))){
var inst_31329 = (state_31370[(14)]);
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31370__$1,(35),out,inst_31329);
} else {
if((state_val_31371 === (33))){
var inst_31320 = (state_31370[(12)]);
var inst_31297 = inst_31320;
var state_31370__$1 = (function (){var statearr_31388 = state_31370;
(statearr_31388[(7)] = inst_31297);

return statearr_31388;
})();
var statearr_31389_32638 = state_31370__$1;
(statearr_31389_32638[(2)] = null);

(statearr_31389_32638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (13))){
var inst_31297 = (state_31370[(7)]);
var inst_31304 = inst_31297.cljs$lang$protocol_mask$partition0$;
var inst_31305 = (inst_31304 & (64));
var inst_31306 = inst_31297.cljs$core$ISeq$;
var inst_31307 = (cljs.core.PROTOCOL_SENTINEL === inst_31306);
var inst_31308 = ((inst_31305) || (inst_31307));
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31308)){
var statearr_31390_32639 = state_31370__$1;
(statearr_31390_32639[(1)] = (16));

} else {
var statearr_31391_32640 = state_31370__$1;
(statearr_31391_32640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (22))){
var inst_31330 = (state_31370[(9)]);
var inst_31329 = (state_31370[(14)]);
var inst_31328 = (state_31370[(2)]);
var inst_31329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31328,(0),null);
var inst_31330__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31328,(1),null);
var inst_31331 = (inst_31329__$1 == null);
var inst_31332 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31330__$1,change);
var inst_31333 = ((inst_31331) || (inst_31332));
var state_31370__$1 = (function (){var statearr_31392 = state_31370;
(statearr_31392[(9)] = inst_31330__$1);

(statearr_31392[(14)] = inst_31329__$1);

return statearr_31392;
})();
if(cljs.core.truth_(inst_31333)){
var statearr_31393_32645 = state_31370__$1;
(statearr_31393_32645[(1)] = (23));

} else {
var statearr_31394_32646 = state_31370__$1;
(statearr_31394_32646[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (36))){
var inst_31320 = (state_31370[(12)]);
var inst_31297 = inst_31320;
var state_31370__$1 = (function (){var statearr_31395 = state_31370;
(statearr_31395[(7)] = inst_31297);

return statearr_31395;
})();
var statearr_31396_32647 = state_31370__$1;
(statearr_31396_32647[(2)] = null);

(statearr_31396_32647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (29))){
var inst_31344 = (state_31370[(11)]);
var state_31370__$1 = state_31370;
var statearr_31397_32648 = state_31370__$1;
(statearr_31397_32648[(2)] = inst_31344);

(statearr_31397_32648[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (6))){
var state_31370__$1 = state_31370;
var statearr_31398_32649 = state_31370__$1;
(statearr_31398_32649[(2)] = false);

(statearr_31398_32649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (28))){
var inst_31340 = (state_31370[(2)]);
var inst_31341 = calc_state();
var inst_31297 = inst_31341;
var state_31370__$1 = (function (){var statearr_31399 = state_31370;
(statearr_31399[(15)] = inst_31340);

(statearr_31399[(7)] = inst_31297);

return statearr_31399;
})();
var statearr_31400_32650 = state_31370__$1;
(statearr_31400_32650[(2)] = null);

(statearr_31400_32650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (25))){
var inst_31366 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31401_32651 = state_31370__$1;
(statearr_31401_32651[(2)] = inst_31366);

(statearr_31401_32651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (34))){
var inst_31364 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31402_32652 = state_31370__$1;
(statearr_31402_32652[(2)] = inst_31364);

(statearr_31402_32652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (17))){
var state_31370__$1 = state_31370;
var statearr_31403_32654 = state_31370__$1;
(statearr_31403_32654[(2)] = false);

(statearr_31403_32654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (3))){
var state_31370__$1 = state_31370;
var statearr_31404_32655 = state_31370__$1;
(statearr_31404_32655[(2)] = false);

(statearr_31404_32655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (12))){
var inst_31368 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31370__$1,inst_31368);
} else {
if((state_val_31371 === (2))){
var inst_31272 = (state_31370[(8)]);
var inst_31277 = inst_31272.cljs$lang$protocol_mask$partition0$;
var inst_31278 = (inst_31277 & (64));
var inst_31279 = inst_31272.cljs$core$ISeq$;
var inst_31280 = (cljs.core.PROTOCOL_SENTINEL === inst_31279);
var inst_31281 = ((inst_31278) || (inst_31280));
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31281)){
var statearr_31405_32656 = state_31370__$1;
(statearr_31405_32656[(1)] = (5));

} else {
var statearr_31406_32657 = state_31370__$1;
(statearr_31406_32657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (23))){
var inst_31329 = (state_31370[(14)]);
var inst_31335 = (inst_31329 == null);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31335)){
var statearr_31407_32658 = state_31370__$1;
(statearr_31407_32658[(1)] = (26));

} else {
var statearr_31408_32659 = state_31370__$1;
(statearr_31408_32659[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (35))){
var inst_31355 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31355)){
var statearr_31409_32660 = state_31370__$1;
(statearr_31409_32660[(1)] = (36));

} else {
var statearr_31410_32661 = state_31370__$1;
(statearr_31410_32661[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (19))){
var inst_31297 = (state_31370[(7)]);
var inst_31317 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31297);
var state_31370__$1 = state_31370;
var statearr_31411_32662 = state_31370__$1;
(statearr_31411_32662[(2)] = inst_31317);

(statearr_31411_32662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (11))){
var inst_31297 = (state_31370[(7)]);
var inst_31301 = (inst_31297 == null);
var inst_31302 = cljs.core.not(inst_31301);
var state_31370__$1 = state_31370;
if(inst_31302){
var statearr_31412_32663 = state_31370__$1;
(statearr_31412_32663[(1)] = (13));

} else {
var statearr_31413_32664 = state_31370__$1;
(statearr_31413_32664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (9))){
var inst_31272 = (state_31370[(8)]);
var state_31370__$1 = state_31370;
var statearr_31414_32665 = state_31370__$1;
(statearr_31414_32665[(2)] = inst_31272);

(statearr_31414_32665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (5))){
var state_31370__$1 = state_31370;
var statearr_31415_32666 = state_31370__$1;
(statearr_31415_32666[(2)] = true);

(statearr_31415_32666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (14))){
var state_31370__$1 = state_31370;
var statearr_31416_32667 = state_31370__$1;
(statearr_31416_32667[(2)] = false);

(statearr_31416_32667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (26))){
var inst_31330 = (state_31370[(9)]);
var inst_31337 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31330);
var state_31370__$1 = state_31370;
var statearr_31417_32668 = state_31370__$1;
(statearr_31417_32668[(2)] = inst_31337);

(statearr_31417_32668[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (16))){
var state_31370__$1 = state_31370;
var statearr_31418_32669 = state_31370__$1;
(statearr_31418_32669[(2)] = true);

(statearr_31418_32669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (38))){
var inst_31360 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31419_32670 = state_31370__$1;
(statearr_31419_32670[(2)] = inst_31360);

(statearr_31419_32670[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (30))){
var inst_31330 = (state_31370[(9)]);
var inst_31322 = (state_31370[(13)]);
var inst_31321 = (state_31370[(10)]);
var inst_31347 = cljs.core.empty_QMARK_(inst_31321);
var inst_31348 = (inst_31322.cljs$core$IFn$_invoke$arity$1 ? inst_31322.cljs$core$IFn$_invoke$arity$1(inst_31330) : inst_31322.call(null,inst_31330));
var inst_31349 = cljs.core.not(inst_31348);
var inst_31350 = ((inst_31347) && (inst_31349));
var state_31370__$1 = state_31370;
var statearr_31420_32671 = state_31370__$1;
(statearr_31420_32671[(2)] = inst_31350);

(statearr_31420_32671[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (10))){
var inst_31272 = (state_31370[(8)]);
var inst_31293 = (state_31370[(2)]);
var inst_31294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31293,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31293,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31293,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31297 = inst_31272;
var state_31370__$1 = (function (){var statearr_31421 = state_31370;
(statearr_31421[(16)] = inst_31294);

(statearr_31421[(17)] = inst_31296);

(statearr_31421[(18)] = inst_31295);

(statearr_31421[(7)] = inst_31297);

return statearr_31421;
})();
var statearr_31422_32672 = state_31370__$1;
(statearr_31422_32672[(2)] = null);

(statearr_31422_32672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (18))){
var inst_31312 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31423_32673 = state_31370__$1;
(statearr_31423_32673[(2)] = inst_31312);

(statearr_31423_32673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (37))){
var state_31370__$1 = state_31370;
var statearr_31424_32674 = state_31370__$1;
(statearr_31424_32674[(2)] = null);

(statearr_31424_32674[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (8))){
var inst_31272 = (state_31370[(8)]);
var inst_31290 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31272);
var state_31370__$1 = state_31370;
var statearr_31425_32675 = state_31370__$1;
(statearr_31425_32675[(2)] = inst_31290);

(statearr_31425_32675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30507__auto__ = null;
var cljs$core$async$mix_$_state_machine__30507__auto____0 = (function (){
var statearr_31426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31426[(0)] = cljs$core$async$mix_$_state_machine__30507__auto__);

(statearr_31426[(1)] = (1));

return statearr_31426;
});
var cljs$core$async$mix_$_state_machine__30507__auto____1 = (function (state_31370){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31370);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31427){if((e31427 instanceof Object)){
var ex__30510__auto__ = e31427;
var statearr_31428_32676 = state_31370;
(statearr_31428_32676[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32677 = state_31370;
state_31370 = G__32677;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30507__auto__ = function(state_31370){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30507__auto____1.call(this,state_31370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30507__auto____0;
cljs$core$async$mix_$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30507__auto____1;
return cljs$core$async$mix_$_state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31429 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31429[(6)] = c__30571__auto___32613);

return statearr_31429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31431 = arguments.length;
switch (G__31431) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31434 = arguments.length;
switch (G__31434) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31432_SHARP_){
if(cljs.core.truth_((p1__31432_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31432_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31432_SHARP_.call(null,topic)))){
return p1__31432_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31432_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31435 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31436){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31436 = meta31436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31437,meta31436__$1){
var self__ = this;
var _31437__$1 = this;
return (new cljs.core.async.t_cljs$core$async31435(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31436__$1));
}));

(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31437){
var self__ = this;
var _31437__$1 = this;
return self__.meta31436;
}));

(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31436","meta31436",2119147227,null)], null);
}));

(cljs.core.async.t_cljs$core$async31435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31435");

(cljs.core.async.t_cljs$core$async31435.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31435.
 */
cljs.core.async.__GT_t_cljs$core$async31435 = (function cljs$core$async$__GT_t_cljs$core$async31435(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31436){
return (new cljs.core.async.t_cljs$core$async31435(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31436));
});

}

return (new cljs.core.async.t_cljs$core$async31435(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30571__auto___32686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31509){
var state_val_31510 = (state_31509[(1)]);
if((state_val_31510 === (7))){
var inst_31505 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31511_32687 = state_31509__$1;
(statearr_31511_32687[(2)] = inst_31505);

(statearr_31511_32687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (20))){
var state_31509__$1 = state_31509;
var statearr_31512_32688 = state_31509__$1;
(statearr_31512_32688[(2)] = null);

(statearr_31512_32688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (1))){
var state_31509__$1 = state_31509;
var statearr_31513_32689 = state_31509__$1;
(statearr_31513_32689[(2)] = null);

(statearr_31513_32689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (24))){
var inst_31488 = (state_31509[(7)]);
var inst_31497 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31488);
var state_31509__$1 = state_31509;
var statearr_31514_32690 = state_31509__$1;
(statearr_31514_32690[(2)] = inst_31497);

(statearr_31514_32690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (4))){
var inst_31440 = (state_31509[(8)]);
var inst_31440__$1 = (state_31509[(2)]);
var inst_31441 = (inst_31440__$1 == null);
var state_31509__$1 = (function (){var statearr_31515 = state_31509;
(statearr_31515[(8)] = inst_31440__$1);

return statearr_31515;
})();
if(cljs.core.truth_(inst_31441)){
var statearr_31516_32691 = state_31509__$1;
(statearr_31516_32691[(1)] = (5));

} else {
var statearr_31517_32692 = state_31509__$1;
(statearr_31517_32692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (15))){
var inst_31482 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31518_32693 = state_31509__$1;
(statearr_31518_32693[(2)] = inst_31482);

(statearr_31518_32693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (21))){
var inst_31502 = (state_31509[(2)]);
var state_31509__$1 = (function (){var statearr_31519 = state_31509;
(statearr_31519[(9)] = inst_31502);

return statearr_31519;
})();
var statearr_31520_32694 = state_31509__$1;
(statearr_31520_32694[(2)] = null);

(statearr_31520_32694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (13))){
var inst_31464 = (state_31509[(10)]);
var inst_31466 = cljs.core.chunked_seq_QMARK_(inst_31464);
var state_31509__$1 = state_31509;
if(inst_31466){
var statearr_31521_32695 = state_31509__$1;
(statearr_31521_32695[(1)] = (16));

} else {
var statearr_31522_32697 = state_31509__$1;
(statearr_31522_32697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (22))){
var inst_31494 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
if(cljs.core.truth_(inst_31494)){
var statearr_31523_32698 = state_31509__$1;
(statearr_31523_32698[(1)] = (23));

} else {
var statearr_31524_32699 = state_31509__$1;
(statearr_31524_32699[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (6))){
var inst_31440 = (state_31509[(8)]);
var inst_31490 = (state_31509[(11)]);
var inst_31488 = (state_31509[(7)]);
var inst_31488__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31440) : topic_fn.call(null,inst_31440));
var inst_31489 = cljs.core.deref(mults);
var inst_31490__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31489,inst_31488__$1);
var state_31509__$1 = (function (){var statearr_31525 = state_31509;
(statearr_31525[(11)] = inst_31490__$1);

(statearr_31525[(7)] = inst_31488__$1);

return statearr_31525;
})();
if(cljs.core.truth_(inst_31490__$1)){
var statearr_31526_32700 = state_31509__$1;
(statearr_31526_32700[(1)] = (19));

} else {
var statearr_31527_32701 = state_31509__$1;
(statearr_31527_32701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (25))){
var inst_31499 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31528_32702 = state_31509__$1;
(statearr_31528_32702[(2)] = inst_31499);

(statearr_31528_32702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (17))){
var inst_31464 = (state_31509[(10)]);
var inst_31473 = cljs.core.first(inst_31464);
var inst_31474 = cljs.core.async.muxch_STAR_(inst_31473);
var inst_31475 = cljs.core.async.close_BANG_(inst_31474);
var inst_31476 = cljs.core.next(inst_31464);
var inst_31450 = inst_31476;
var inst_31451 = null;
var inst_31452 = (0);
var inst_31453 = (0);
var state_31509__$1 = (function (){var statearr_31529 = state_31509;
(statearr_31529[(12)] = inst_31450);

(statearr_31529[(13)] = inst_31453);

(statearr_31529[(14)] = inst_31475);

(statearr_31529[(15)] = inst_31451);

(statearr_31529[(16)] = inst_31452);

return statearr_31529;
})();
var statearr_31530_32706 = state_31509__$1;
(statearr_31530_32706[(2)] = null);

(statearr_31530_32706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (3))){
var inst_31507 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31509__$1,inst_31507);
} else {
if((state_val_31510 === (12))){
var inst_31484 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31531_32715 = state_31509__$1;
(statearr_31531_32715[(2)] = inst_31484);

(statearr_31531_32715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (2))){
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31509__$1,(4),ch);
} else {
if((state_val_31510 === (23))){
var state_31509__$1 = state_31509;
var statearr_31532_32717 = state_31509__$1;
(statearr_31532_32717[(2)] = null);

(statearr_31532_32717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (19))){
var inst_31440 = (state_31509[(8)]);
var inst_31490 = (state_31509[(11)]);
var inst_31492 = cljs.core.async.muxch_STAR_(inst_31490);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31509__$1,(22),inst_31492,inst_31440);
} else {
if((state_val_31510 === (11))){
var inst_31450 = (state_31509[(12)]);
var inst_31464 = (state_31509[(10)]);
var inst_31464__$1 = cljs.core.seq(inst_31450);
var state_31509__$1 = (function (){var statearr_31533 = state_31509;
(statearr_31533[(10)] = inst_31464__$1);

return statearr_31533;
})();
if(inst_31464__$1){
var statearr_31534_32726 = state_31509__$1;
(statearr_31534_32726[(1)] = (13));

} else {
var statearr_31535_32727 = state_31509__$1;
(statearr_31535_32727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (9))){
var inst_31486 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31536_32728 = state_31509__$1;
(statearr_31536_32728[(2)] = inst_31486);

(statearr_31536_32728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (5))){
var inst_31447 = cljs.core.deref(mults);
var inst_31448 = cljs.core.vals(inst_31447);
var inst_31449 = cljs.core.seq(inst_31448);
var inst_31450 = inst_31449;
var inst_31451 = null;
var inst_31452 = (0);
var inst_31453 = (0);
var state_31509__$1 = (function (){var statearr_31537 = state_31509;
(statearr_31537[(12)] = inst_31450);

(statearr_31537[(13)] = inst_31453);

(statearr_31537[(15)] = inst_31451);

(statearr_31537[(16)] = inst_31452);

return statearr_31537;
})();
var statearr_31538_32729 = state_31509__$1;
(statearr_31538_32729[(2)] = null);

(statearr_31538_32729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (14))){
var state_31509__$1 = state_31509;
var statearr_31542_32730 = state_31509__$1;
(statearr_31542_32730[(2)] = null);

(statearr_31542_32730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (16))){
var inst_31464 = (state_31509[(10)]);
var inst_31468 = cljs.core.chunk_first(inst_31464);
var inst_31469 = cljs.core.chunk_rest(inst_31464);
var inst_31470 = cljs.core.count(inst_31468);
var inst_31450 = inst_31469;
var inst_31451 = inst_31468;
var inst_31452 = inst_31470;
var inst_31453 = (0);
var state_31509__$1 = (function (){var statearr_31543 = state_31509;
(statearr_31543[(12)] = inst_31450);

(statearr_31543[(13)] = inst_31453);

(statearr_31543[(15)] = inst_31451);

(statearr_31543[(16)] = inst_31452);

return statearr_31543;
})();
var statearr_31544_32731 = state_31509__$1;
(statearr_31544_32731[(2)] = null);

(statearr_31544_32731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (10))){
var inst_31450 = (state_31509[(12)]);
var inst_31453 = (state_31509[(13)]);
var inst_31451 = (state_31509[(15)]);
var inst_31452 = (state_31509[(16)]);
var inst_31458 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31451,inst_31453);
var inst_31459 = cljs.core.async.muxch_STAR_(inst_31458);
var inst_31460 = cljs.core.async.close_BANG_(inst_31459);
var inst_31461 = (inst_31453 + (1));
var tmp31539 = inst_31450;
var tmp31540 = inst_31451;
var tmp31541 = inst_31452;
var inst_31450__$1 = tmp31539;
var inst_31451__$1 = tmp31540;
var inst_31452__$1 = tmp31541;
var inst_31453__$1 = inst_31461;
var state_31509__$1 = (function (){var statearr_31545 = state_31509;
(statearr_31545[(12)] = inst_31450__$1);

(statearr_31545[(13)] = inst_31453__$1);

(statearr_31545[(17)] = inst_31460);

(statearr_31545[(15)] = inst_31451__$1);

(statearr_31545[(16)] = inst_31452__$1);

return statearr_31545;
})();
var statearr_31546_32732 = state_31509__$1;
(statearr_31546_32732[(2)] = null);

(statearr_31546_32732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (18))){
var inst_31479 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31547_32733 = state_31509__$1;
(statearr_31547_32733[(2)] = inst_31479);

(statearr_31547_32733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (8))){
var inst_31453 = (state_31509[(13)]);
var inst_31452 = (state_31509[(16)]);
var inst_31455 = (inst_31453 < inst_31452);
var inst_31456 = inst_31455;
var state_31509__$1 = state_31509;
if(cljs.core.truth_(inst_31456)){
var statearr_31548_32734 = state_31509__$1;
(statearr_31548_32734[(1)] = (10));

} else {
var statearr_31549_32735 = state_31509__$1;
(statearr_31549_32735[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_31550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31550[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_31550[(1)] = (1));

return statearr_31550;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_31509){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31509);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31551){if((e31551 instanceof Object)){
var ex__30510__auto__ = e31551;
var statearr_31552_32736 = state_31509;
(statearr_31552_32736[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32741 = state_31509;
state_31509 = G__32741;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_31509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_31509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31553 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31553[(6)] = c__30571__auto___32686);

return statearr_31553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31555 = arguments.length;
switch (G__31555) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31557 = arguments.length;
switch (G__31557) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31559 = arguments.length;
switch (G__31559) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30571__auto___32753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31598){
var state_val_31599 = (state_31598[(1)]);
if((state_val_31599 === (7))){
var state_31598__$1 = state_31598;
var statearr_31600_32754 = state_31598__$1;
(statearr_31600_32754[(2)] = null);

(statearr_31600_32754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (1))){
var state_31598__$1 = state_31598;
var statearr_31601_32758 = state_31598__$1;
(statearr_31601_32758[(2)] = null);

(statearr_31601_32758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (4))){
var inst_31562 = (state_31598[(7)]);
var inst_31564 = (inst_31562 < cnt);
var state_31598__$1 = state_31598;
if(cljs.core.truth_(inst_31564)){
var statearr_31602_32763 = state_31598__$1;
(statearr_31602_32763[(1)] = (6));

} else {
var statearr_31603_32764 = state_31598__$1;
(statearr_31603_32764[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (15))){
var inst_31594 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
var statearr_31604_32769 = state_31598__$1;
(statearr_31604_32769[(2)] = inst_31594);

(statearr_31604_32769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (13))){
var inst_31587 = cljs.core.async.close_BANG_(out);
var state_31598__$1 = state_31598;
var statearr_31605_32770 = state_31598__$1;
(statearr_31605_32770[(2)] = inst_31587);

(statearr_31605_32770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (6))){
var state_31598__$1 = state_31598;
var statearr_31606_32771 = state_31598__$1;
(statearr_31606_32771[(2)] = null);

(statearr_31606_32771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (3))){
var inst_31596 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31598__$1,inst_31596);
} else {
if((state_val_31599 === (12))){
var inst_31584 = (state_31598[(8)]);
var inst_31584__$1 = (state_31598[(2)]);
var inst_31585 = cljs.core.some(cljs.core.nil_QMARK_,inst_31584__$1);
var state_31598__$1 = (function (){var statearr_31607 = state_31598;
(statearr_31607[(8)] = inst_31584__$1);

return statearr_31607;
})();
if(cljs.core.truth_(inst_31585)){
var statearr_31608_32772 = state_31598__$1;
(statearr_31608_32772[(1)] = (13));

} else {
var statearr_31609_32773 = state_31598__$1;
(statearr_31609_32773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (2))){
var inst_31561 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31562 = (0);
var state_31598__$1 = (function (){var statearr_31610 = state_31598;
(statearr_31610[(9)] = inst_31561);

(statearr_31610[(7)] = inst_31562);

return statearr_31610;
})();
var statearr_31611_32774 = state_31598__$1;
(statearr_31611_32774[(2)] = null);

(statearr_31611_32774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (11))){
var inst_31562 = (state_31598[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31598,(10),Object,null,(9));
var inst_31571 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31562) : chs__$1.call(null,inst_31562));
var inst_31572 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31562) : done.call(null,inst_31562));
var inst_31573 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31571,inst_31572);
var state_31598__$1 = state_31598;
var statearr_31612_32778 = state_31598__$1;
(statearr_31612_32778[(2)] = inst_31573);


cljs.core.async.impl.ioc_helpers.process_exception(state_31598__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (9))){
var inst_31562 = (state_31598[(7)]);
var inst_31575 = (state_31598[(2)]);
var inst_31576 = (inst_31562 + (1));
var inst_31562__$1 = inst_31576;
var state_31598__$1 = (function (){var statearr_31613 = state_31598;
(statearr_31613[(10)] = inst_31575);

(statearr_31613[(7)] = inst_31562__$1);

return statearr_31613;
})();
var statearr_31614_32786 = state_31598__$1;
(statearr_31614_32786[(2)] = null);

(statearr_31614_32786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (5))){
var inst_31582 = (state_31598[(2)]);
var state_31598__$1 = (function (){var statearr_31615 = state_31598;
(statearr_31615[(11)] = inst_31582);

return statearr_31615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31598__$1,(12),dchan);
} else {
if((state_val_31599 === (14))){
var inst_31584 = (state_31598[(8)]);
var inst_31589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31584);
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31598__$1,(16),out,inst_31589);
} else {
if((state_val_31599 === (16))){
var inst_31591 = (state_31598[(2)]);
var state_31598__$1 = (function (){var statearr_31616 = state_31598;
(statearr_31616[(12)] = inst_31591);

return statearr_31616;
})();
var statearr_31617_32787 = state_31598__$1;
(statearr_31617_32787[(2)] = null);

(statearr_31617_32787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (10))){
var inst_31566 = (state_31598[(2)]);
var inst_31567 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31598__$1 = (function (){var statearr_31618 = state_31598;
(statearr_31618[(13)] = inst_31566);

return statearr_31618;
})();
var statearr_31619_32788 = state_31598__$1;
(statearr_31619_32788[(2)] = inst_31567);


cljs.core.async.impl.ioc_helpers.process_exception(state_31598__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (8))){
var inst_31580 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
var statearr_31620_32789 = state_31598__$1;
(statearr_31620_32789[(2)] = inst_31580);

(statearr_31620_32789[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_31621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31621[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_31621[(1)] = (1));

return statearr_31621;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_31598){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31598);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31622){if((e31622 instanceof Object)){
var ex__30510__auto__ = e31622;
var statearr_31623_32790 = state_31598;
(statearr_31623_32790[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32791 = state_31598;
state_31598 = G__32791;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_31598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_31598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31624 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31624[(6)] = c__30571__auto___32753);

return statearr_31624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31627 = arguments.length;
switch (G__31627) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30571__auto___32794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31659){
var state_val_31660 = (state_31659[(1)]);
if((state_val_31660 === (7))){
var inst_31638 = (state_31659[(7)]);
var inst_31639 = (state_31659[(8)]);
var inst_31638__$1 = (state_31659[(2)]);
var inst_31639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31638__$1,(0),null);
var inst_31640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31638__$1,(1),null);
var inst_31641 = (inst_31639__$1 == null);
var state_31659__$1 = (function (){var statearr_31661 = state_31659;
(statearr_31661[(7)] = inst_31638__$1);

(statearr_31661[(9)] = inst_31640);

(statearr_31661[(8)] = inst_31639__$1);

return statearr_31661;
})();
if(cljs.core.truth_(inst_31641)){
var statearr_31662_32795 = state_31659__$1;
(statearr_31662_32795[(1)] = (8));

} else {
var statearr_31663_32796 = state_31659__$1;
(statearr_31663_32796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (1))){
var inst_31628 = cljs.core.vec(chs);
var inst_31629 = inst_31628;
var state_31659__$1 = (function (){var statearr_31664 = state_31659;
(statearr_31664[(10)] = inst_31629);

return statearr_31664;
})();
var statearr_31665_32797 = state_31659__$1;
(statearr_31665_32797[(2)] = null);

(statearr_31665_32797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (4))){
var inst_31629 = (state_31659[(10)]);
var state_31659__$1 = state_31659;
return cljs.core.async.ioc_alts_BANG_(state_31659__$1,(7),inst_31629);
} else {
if((state_val_31660 === (6))){
var inst_31655 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31666_32798 = state_31659__$1;
(statearr_31666_32798[(2)] = inst_31655);

(statearr_31666_32798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (3))){
var inst_31657 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31659__$1,inst_31657);
} else {
if((state_val_31660 === (2))){
var inst_31629 = (state_31659[(10)]);
var inst_31631 = cljs.core.count(inst_31629);
var inst_31632 = (inst_31631 > (0));
var state_31659__$1 = state_31659;
if(cljs.core.truth_(inst_31632)){
var statearr_31668_32799 = state_31659__$1;
(statearr_31668_32799[(1)] = (4));

} else {
var statearr_31669_32801 = state_31659__$1;
(statearr_31669_32801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (11))){
var inst_31629 = (state_31659[(10)]);
var inst_31648 = (state_31659[(2)]);
var tmp31667 = inst_31629;
var inst_31629__$1 = tmp31667;
var state_31659__$1 = (function (){var statearr_31670 = state_31659;
(statearr_31670[(11)] = inst_31648);

(statearr_31670[(10)] = inst_31629__$1);

return statearr_31670;
})();
var statearr_31671_32802 = state_31659__$1;
(statearr_31671_32802[(2)] = null);

(statearr_31671_32802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (9))){
var inst_31639 = (state_31659[(8)]);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31659__$1,(11),out,inst_31639);
} else {
if((state_val_31660 === (5))){
var inst_31653 = cljs.core.async.close_BANG_(out);
var state_31659__$1 = state_31659;
var statearr_31672_32803 = state_31659__$1;
(statearr_31672_32803[(2)] = inst_31653);

(statearr_31672_32803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (10))){
var inst_31651 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31673_32804 = state_31659__$1;
(statearr_31673_32804[(2)] = inst_31651);

(statearr_31673_32804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (8))){
var inst_31638 = (state_31659[(7)]);
var inst_31640 = (state_31659[(9)]);
var inst_31629 = (state_31659[(10)]);
var inst_31639 = (state_31659[(8)]);
var inst_31643 = (function (){var cs = inst_31629;
var vec__31634 = inst_31638;
var v = inst_31639;
var c = inst_31640;
return (function (p1__31625_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31625_SHARP_);
});
})();
var inst_31644 = cljs.core.filterv(inst_31643,inst_31629);
var inst_31629__$1 = inst_31644;
var state_31659__$1 = (function (){var statearr_31674 = state_31659;
(statearr_31674[(10)] = inst_31629__$1);

return statearr_31674;
})();
var statearr_31675_32809 = state_31659__$1;
(statearr_31675_32809[(2)] = null);

(statearr_31675_32809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_31676 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31676[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_31676[(1)] = (1));

return statearr_31676;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_31659){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31659);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31677){if((e31677 instanceof Object)){
var ex__30510__auto__ = e31677;
var statearr_31678_32833 = state_31659;
(statearr_31678_32833[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32834 = state_31659;
state_31659 = G__32834;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_31659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_31659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31679 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31679[(6)] = c__30571__auto___32794);

return statearr_31679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31681 = arguments.length;
switch (G__31681) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30571__auto___32836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31705){
var state_val_31706 = (state_31705[(1)]);
if((state_val_31706 === (7))){
var inst_31687 = (state_31705[(7)]);
var inst_31687__$1 = (state_31705[(2)]);
var inst_31688 = (inst_31687__$1 == null);
var inst_31689 = cljs.core.not(inst_31688);
var state_31705__$1 = (function (){var statearr_31707 = state_31705;
(statearr_31707[(7)] = inst_31687__$1);

return statearr_31707;
})();
if(inst_31689){
var statearr_31708_32851 = state_31705__$1;
(statearr_31708_32851[(1)] = (8));

} else {
var statearr_31709_32852 = state_31705__$1;
(statearr_31709_32852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31706 === (1))){
var inst_31682 = (0);
var state_31705__$1 = (function (){var statearr_31710 = state_31705;
(statearr_31710[(8)] = inst_31682);

return statearr_31710;
})();
var statearr_31711_32853 = state_31705__$1;
(statearr_31711_32853[(2)] = null);

(statearr_31711_32853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31706 === (4))){
var state_31705__$1 = state_31705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31705__$1,(7),ch);
} else {
if((state_val_31706 === (6))){
var inst_31700 = (state_31705[(2)]);
var state_31705__$1 = state_31705;
var statearr_31712_32854 = state_31705__$1;
(statearr_31712_32854[(2)] = inst_31700);

(statearr_31712_32854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31706 === (3))){
var inst_31702 = (state_31705[(2)]);
var inst_31703 = cljs.core.async.close_BANG_(out);
var state_31705__$1 = (function (){var statearr_31713 = state_31705;
(statearr_31713[(9)] = inst_31702);

return statearr_31713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31705__$1,inst_31703);
} else {
if((state_val_31706 === (2))){
var inst_31682 = (state_31705[(8)]);
var inst_31684 = (inst_31682 < n);
var state_31705__$1 = state_31705;
if(cljs.core.truth_(inst_31684)){
var statearr_31714_32855 = state_31705__$1;
(statearr_31714_32855[(1)] = (4));

} else {
var statearr_31715_32856 = state_31705__$1;
(statearr_31715_32856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31706 === (11))){
var inst_31682 = (state_31705[(8)]);
var inst_31692 = (state_31705[(2)]);
var inst_31693 = (inst_31682 + (1));
var inst_31682__$1 = inst_31693;
var state_31705__$1 = (function (){var statearr_31716 = state_31705;
(statearr_31716[(8)] = inst_31682__$1);

(statearr_31716[(10)] = inst_31692);

return statearr_31716;
})();
var statearr_31717_32893 = state_31705__$1;
(statearr_31717_32893[(2)] = null);

(statearr_31717_32893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31706 === (9))){
var state_31705__$1 = state_31705;
var statearr_31718_32894 = state_31705__$1;
(statearr_31718_32894[(2)] = null);

(statearr_31718_32894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31706 === (5))){
var state_31705__$1 = state_31705;
var statearr_31719_32895 = state_31705__$1;
(statearr_31719_32895[(2)] = null);

(statearr_31719_32895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31706 === (10))){
var inst_31697 = (state_31705[(2)]);
var state_31705__$1 = state_31705;
var statearr_31720_32896 = state_31705__$1;
(statearr_31720_32896[(2)] = inst_31697);

(statearr_31720_32896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31706 === (8))){
var inst_31687 = (state_31705[(7)]);
var state_31705__$1 = state_31705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31705__$1,(11),out,inst_31687);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_31721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31721[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_31721[(1)] = (1));

return statearr_31721;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_31705){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31705);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31722){if((e31722 instanceof Object)){
var ex__30510__auto__ = e31722;
var statearr_31723_32901 = state_31705;
(statearr_31723_32901[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32902 = state_31705;
state_31705 = G__32902;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_31705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_31705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31724 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31724[(6)] = c__30571__auto___32836);

return statearr_31724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31726 = (function (f,ch,meta31727){
this.f = f;
this.ch = ch;
this.meta31727 = meta31727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31728,meta31727__$1){
var self__ = this;
var _31728__$1 = this;
return (new cljs.core.async.t_cljs$core$async31726(self__.f,self__.ch,meta31727__$1));
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31728){
var self__ = this;
var _31728__$1 = this;
return self__.meta31727;
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31729 = (function (f,ch,meta31727,_,fn1,meta31730){
this.f = f;
this.ch = ch;
this.meta31727 = meta31727;
this._ = _;
this.fn1 = fn1;
this.meta31730 = meta31730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31731,meta31730__$1){
var self__ = this;
var _31731__$1 = this;
return (new cljs.core.async.t_cljs$core$async31729(self__.f,self__.ch,self__.meta31727,self__._,self__.fn1,meta31730__$1));
}));

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31731){
var self__ = this;
var _31731__$1 = this;
return self__.meta31730;
}));

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31725_SHARP_){
var G__31732 = (((p1__31725_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31725_SHARP_) : self__.f.call(null,p1__31725_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31732) : f1.call(null,G__31732));
});
}));

(cljs.core.async.t_cljs$core$async31729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31727","meta31727",1198028729,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31726","cljs.core.async/t_cljs$core$async31726",-475900387,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31730","meta31730",-1159809662,null)], null);
}));

(cljs.core.async.t_cljs$core$async31729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31729");

(cljs.core.async.t_cljs$core$async31729.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31729.
 */
cljs.core.async.__GT_t_cljs$core$async31729 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31729(f__$1,ch__$1,meta31727__$1,___$2,fn1__$1,meta31730){
return (new cljs.core.async.t_cljs$core$async31729(f__$1,ch__$1,meta31727__$1,___$2,fn1__$1,meta31730));
});

}

return (new cljs.core.async.t_cljs$core$async31729(self__.f,self__.ch,self__.meta31727,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31733 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31733) : self__.f.call(null,G__31733));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31727","meta31727",1198028729,null)], null);
}));

(cljs.core.async.t_cljs$core$async31726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31726");

(cljs.core.async.t_cljs$core$async31726.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31726.
 */
cljs.core.async.__GT_t_cljs$core$async31726 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31726(f__$1,ch__$1,meta31727){
return (new cljs.core.async.t_cljs$core$async31726(f__$1,ch__$1,meta31727));
});

}

return (new cljs.core.async.t_cljs$core$async31726(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31734 = (function (f,ch,meta31735){
this.f = f;
this.ch = ch;
this.meta31735 = meta31735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31736,meta31735__$1){
var self__ = this;
var _31736__$1 = this;
return (new cljs.core.async.t_cljs$core$async31734(self__.f,self__.ch,meta31735__$1));
}));

(cljs.core.async.t_cljs$core$async31734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31736){
var self__ = this;
var _31736__$1 = this;
return self__.meta31735;
}));

(cljs.core.async.t_cljs$core$async31734.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31734.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31734.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31735","meta31735",-306767438,null)], null);
}));

(cljs.core.async.t_cljs$core$async31734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31734");

(cljs.core.async.t_cljs$core$async31734.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31734.
 */
cljs.core.async.__GT_t_cljs$core$async31734 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31734(f__$1,ch__$1,meta31735){
return (new cljs.core.async.t_cljs$core$async31734(f__$1,ch__$1,meta31735));
});

}

return (new cljs.core.async.t_cljs$core$async31734(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31737 = (function (p,ch,meta31738){
this.p = p;
this.ch = ch;
this.meta31738 = meta31738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31739,meta31738__$1){
var self__ = this;
var _31739__$1 = this;
return (new cljs.core.async.t_cljs$core$async31737(self__.p,self__.ch,meta31738__$1));
}));

(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31739){
var self__ = this;
var _31739__$1 = this;
return self__.meta31738;
}));

(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31738","meta31738",-1032710802,null)], null);
}));

(cljs.core.async.t_cljs$core$async31737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31737");

(cljs.core.async.t_cljs$core$async31737.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31737.
 */
cljs.core.async.__GT_t_cljs$core$async31737 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31737(p__$1,ch__$1,meta31738){
return (new cljs.core.async.t_cljs$core$async31737(p__$1,ch__$1,meta31738));
});

}

return (new cljs.core.async.t_cljs$core$async31737(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31741 = arguments.length;
switch (G__31741) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30571__auto___32969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31762){
var state_val_31763 = (state_31762[(1)]);
if((state_val_31763 === (7))){
var inst_31758 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31764_32970 = state_31762__$1;
(statearr_31764_32970[(2)] = inst_31758);

(statearr_31764_32970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (1))){
var state_31762__$1 = state_31762;
var statearr_31765_32971 = state_31762__$1;
(statearr_31765_32971[(2)] = null);

(statearr_31765_32971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (4))){
var inst_31744 = (state_31762[(7)]);
var inst_31744__$1 = (state_31762[(2)]);
var inst_31745 = (inst_31744__$1 == null);
var state_31762__$1 = (function (){var statearr_31766 = state_31762;
(statearr_31766[(7)] = inst_31744__$1);

return statearr_31766;
})();
if(cljs.core.truth_(inst_31745)){
var statearr_31767_32972 = state_31762__$1;
(statearr_31767_32972[(1)] = (5));

} else {
var statearr_31768_32973 = state_31762__$1;
(statearr_31768_32973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (6))){
var inst_31744 = (state_31762[(7)]);
var inst_31749 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31744) : p.call(null,inst_31744));
var state_31762__$1 = state_31762;
if(cljs.core.truth_(inst_31749)){
var statearr_31769_32978 = state_31762__$1;
(statearr_31769_32978[(1)] = (8));

} else {
var statearr_31770_32979 = state_31762__$1;
(statearr_31770_32979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (3))){
var inst_31760 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31762__$1,inst_31760);
} else {
if((state_val_31763 === (2))){
var state_31762__$1 = state_31762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31762__$1,(4),ch);
} else {
if((state_val_31763 === (11))){
var inst_31752 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31771_32980 = state_31762__$1;
(statearr_31771_32980[(2)] = inst_31752);

(statearr_31771_32980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (9))){
var state_31762__$1 = state_31762;
var statearr_31772_32981 = state_31762__$1;
(statearr_31772_32981[(2)] = null);

(statearr_31772_32981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (5))){
var inst_31747 = cljs.core.async.close_BANG_(out);
var state_31762__$1 = state_31762;
var statearr_31773_32982 = state_31762__$1;
(statearr_31773_32982[(2)] = inst_31747);

(statearr_31773_32982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (10))){
var inst_31755 = (state_31762[(2)]);
var state_31762__$1 = (function (){var statearr_31774 = state_31762;
(statearr_31774[(8)] = inst_31755);

return statearr_31774;
})();
var statearr_31775_32983 = state_31762__$1;
(statearr_31775_32983[(2)] = null);

(statearr_31775_32983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (8))){
var inst_31744 = (state_31762[(7)]);
var state_31762__$1 = state_31762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31762__$1,(11),out,inst_31744);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_31776 = [null,null,null,null,null,null,null,null,null];
(statearr_31776[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_31776[(1)] = (1));

return statearr_31776;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_31762){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31762);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31777){if((e31777 instanceof Object)){
var ex__30510__auto__ = e31777;
var statearr_31778_32993 = state_31762;
(statearr_31778_32993[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32994 = state_31762;
state_31762 = G__32994;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_31762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_31762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31779 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31779[(6)] = c__30571__auto___32969);

return statearr_31779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31781 = arguments.length;
switch (G__31781) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31843){
var state_val_31844 = (state_31843[(1)]);
if((state_val_31844 === (7))){
var inst_31839 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31845_32996 = state_31843__$1;
(statearr_31845_32996[(2)] = inst_31839);

(statearr_31845_32996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (20))){
var inst_31809 = (state_31843[(7)]);
var inst_31820 = (state_31843[(2)]);
var inst_31821 = cljs.core.next(inst_31809);
var inst_31795 = inst_31821;
var inst_31796 = null;
var inst_31797 = (0);
var inst_31798 = (0);
var state_31843__$1 = (function (){var statearr_31846 = state_31843;
(statearr_31846[(8)] = inst_31797);

(statearr_31846[(9)] = inst_31820);

(statearr_31846[(10)] = inst_31798);

(statearr_31846[(11)] = inst_31795);

(statearr_31846[(12)] = inst_31796);

return statearr_31846;
})();
var statearr_31847_32997 = state_31843__$1;
(statearr_31847_32997[(2)] = null);

(statearr_31847_32997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (1))){
var state_31843__$1 = state_31843;
var statearr_31848_32998 = state_31843__$1;
(statearr_31848_32998[(2)] = null);

(statearr_31848_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (4))){
var inst_31784 = (state_31843[(13)]);
var inst_31784__$1 = (state_31843[(2)]);
var inst_31785 = (inst_31784__$1 == null);
var state_31843__$1 = (function (){var statearr_31849 = state_31843;
(statearr_31849[(13)] = inst_31784__$1);

return statearr_31849;
})();
if(cljs.core.truth_(inst_31785)){
var statearr_31850_32999 = state_31843__$1;
(statearr_31850_32999[(1)] = (5));

} else {
var statearr_31851_33000 = state_31843__$1;
(statearr_31851_33000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (15))){
var state_31843__$1 = state_31843;
var statearr_31855_33001 = state_31843__$1;
(statearr_31855_33001[(2)] = null);

(statearr_31855_33001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (21))){
var state_31843__$1 = state_31843;
var statearr_31856_33002 = state_31843__$1;
(statearr_31856_33002[(2)] = null);

(statearr_31856_33002[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (13))){
var inst_31797 = (state_31843[(8)]);
var inst_31798 = (state_31843[(10)]);
var inst_31795 = (state_31843[(11)]);
var inst_31796 = (state_31843[(12)]);
var inst_31805 = (state_31843[(2)]);
var inst_31806 = (inst_31798 + (1));
var tmp31852 = inst_31797;
var tmp31853 = inst_31795;
var tmp31854 = inst_31796;
var inst_31795__$1 = tmp31853;
var inst_31796__$1 = tmp31854;
var inst_31797__$1 = tmp31852;
var inst_31798__$1 = inst_31806;
var state_31843__$1 = (function (){var statearr_31857 = state_31843;
(statearr_31857[(8)] = inst_31797__$1);

(statearr_31857[(14)] = inst_31805);

(statearr_31857[(10)] = inst_31798__$1);

(statearr_31857[(11)] = inst_31795__$1);

(statearr_31857[(12)] = inst_31796__$1);

return statearr_31857;
})();
var statearr_31858_33003 = state_31843__$1;
(statearr_31858_33003[(2)] = null);

(statearr_31858_33003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (22))){
var state_31843__$1 = state_31843;
var statearr_31859_33004 = state_31843__$1;
(statearr_31859_33004[(2)] = null);

(statearr_31859_33004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (6))){
var inst_31784 = (state_31843[(13)]);
var inst_31793 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31784) : f.call(null,inst_31784));
var inst_31794 = cljs.core.seq(inst_31793);
var inst_31795 = inst_31794;
var inst_31796 = null;
var inst_31797 = (0);
var inst_31798 = (0);
var state_31843__$1 = (function (){var statearr_31860 = state_31843;
(statearr_31860[(8)] = inst_31797);

(statearr_31860[(10)] = inst_31798);

(statearr_31860[(11)] = inst_31795);

(statearr_31860[(12)] = inst_31796);

return statearr_31860;
})();
var statearr_31861_33005 = state_31843__$1;
(statearr_31861_33005[(2)] = null);

(statearr_31861_33005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (17))){
var inst_31809 = (state_31843[(7)]);
var inst_31813 = cljs.core.chunk_first(inst_31809);
var inst_31814 = cljs.core.chunk_rest(inst_31809);
var inst_31815 = cljs.core.count(inst_31813);
var inst_31795 = inst_31814;
var inst_31796 = inst_31813;
var inst_31797 = inst_31815;
var inst_31798 = (0);
var state_31843__$1 = (function (){var statearr_31862 = state_31843;
(statearr_31862[(8)] = inst_31797);

(statearr_31862[(10)] = inst_31798);

(statearr_31862[(11)] = inst_31795);

(statearr_31862[(12)] = inst_31796);

return statearr_31862;
})();
var statearr_31863_33006 = state_31843__$1;
(statearr_31863_33006[(2)] = null);

(statearr_31863_33006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (3))){
var inst_31841 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31843__$1,inst_31841);
} else {
if((state_val_31844 === (12))){
var inst_31829 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31864_33008 = state_31843__$1;
(statearr_31864_33008[(2)] = inst_31829);

(statearr_31864_33008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (2))){
var state_31843__$1 = state_31843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31843__$1,(4),in$);
} else {
if((state_val_31844 === (23))){
var inst_31837 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31865_33009 = state_31843__$1;
(statearr_31865_33009[(2)] = inst_31837);

(statearr_31865_33009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (19))){
var inst_31824 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31866_33010 = state_31843__$1;
(statearr_31866_33010[(2)] = inst_31824);

(statearr_31866_33010[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (11))){
var inst_31809 = (state_31843[(7)]);
var inst_31795 = (state_31843[(11)]);
var inst_31809__$1 = cljs.core.seq(inst_31795);
var state_31843__$1 = (function (){var statearr_31867 = state_31843;
(statearr_31867[(7)] = inst_31809__$1);

return statearr_31867;
})();
if(inst_31809__$1){
var statearr_31868_33011 = state_31843__$1;
(statearr_31868_33011[(1)] = (14));

} else {
var statearr_31869_33012 = state_31843__$1;
(statearr_31869_33012[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (9))){
var inst_31831 = (state_31843[(2)]);
var inst_31832 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31843__$1 = (function (){var statearr_31870 = state_31843;
(statearr_31870[(15)] = inst_31831);

return statearr_31870;
})();
if(cljs.core.truth_(inst_31832)){
var statearr_31871_33013 = state_31843__$1;
(statearr_31871_33013[(1)] = (21));

} else {
var statearr_31872_33014 = state_31843__$1;
(statearr_31872_33014[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (5))){
var inst_31787 = cljs.core.async.close_BANG_(out);
var state_31843__$1 = state_31843;
var statearr_31873_33015 = state_31843__$1;
(statearr_31873_33015[(2)] = inst_31787);

(statearr_31873_33015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (14))){
var inst_31809 = (state_31843[(7)]);
var inst_31811 = cljs.core.chunked_seq_QMARK_(inst_31809);
var state_31843__$1 = state_31843;
if(inst_31811){
var statearr_31874_33016 = state_31843__$1;
(statearr_31874_33016[(1)] = (17));

} else {
var statearr_31875_33017 = state_31843__$1;
(statearr_31875_33017[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (16))){
var inst_31827 = (state_31843[(2)]);
var state_31843__$1 = state_31843;
var statearr_31876_33018 = state_31843__$1;
(statearr_31876_33018[(2)] = inst_31827);

(statearr_31876_33018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31844 === (10))){
var inst_31798 = (state_31843[(10)]);
var inst_31796 = (state_31843[(12)]);
var inst_31803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31796,inst_31798);
var state_31843__$1 = state_31843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31843__$1,(13),out,inst_31803);
} else {
if((state_val_31844 === (18))){
var inst_31809 = (state_31843[(7)]);
var inst_31818 = cljs.core.first(inst_31809);
var state_31843__$1 = state_31843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31843__$1,(20),out,inst_31818);
} else {
if((state_val_31844 === (8))){
var inst_31797 = (state_31843[(8)]);
var inst_31798 = (state_31843[(10)]);
var inst_31800 = (inst_31798 < inst_31797);
var inst_31801 = inst_31800;
var state_31843__$1 = state_31843;
if(cljs.core.truth_(inst_31801)){
var statearr_31877_33021 = state_31843__$1;
(statearr_31877_33021[(1)] = (10));

} else {
var statearr_31878_33022 = state_31843__$1;
(statearr_31878_33022[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30507__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30507__auto____0 = (function (){
var statearr_31879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31879[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30507__auto__);

(statearr_31879[(1)] = (1));

return statearr_31879;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30507__auto____1 = (function (state_31843){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31843);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31880){if((e31880 instanceof Object)){
var ex__30510__auto__ = e31880;
var statearr_31881_33030 = state_31843;
(statearr_31881_33030[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33031 = state_31843;
state_31843 = G__33031;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30507__auto__ = function(state_31843){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30507__auto____1.call(this,state_31843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30507__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30507__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31882 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31882[(6)] = c__30571__auto__);

return statearr_31882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));

return c__30571__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31884 = arguments.length;
switch (G__31884) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31886 = arguments.length;
switch (G__31886) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31888 = arguments.length;
switch (G__31888) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30571__auto___33064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31912){
var state_val_31913 = (state_31912[(1)]);
if((state_val_31913 === (7))){
var inst_31907 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31914_33105 = state_31912__$1;
(statearr_31914_33105[(2)] = inst_31907);

(statearr_31914_33105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (1))){
var inst_31889 = null;
var state_31912__$1 = (function (){var statearr_31915 = state_31912;
(statearr_31915[(7)] = inst_31889);

return statearr_31915;
})();
var statearr_31916_33113 = state_31912__$1;
(statearr_31916_33113[(2)] = null);

(statearr_31916_33113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (4))){
var inst_31892 = (state_31912[(8)]);
var inst_31892__$1 = (state_31912[(2)]);
var inst_31893 = (inst_31892__$1 == null);
var inst_31894 = cljs.core.not(inst_31893);
var state_31912__$1 = (function (){var statearr_31917 = state_31912;
(statearr_31917[(8)] = inst_31892__$1);

return statearr_31917;
})();
if(inst_31894){
var statearr_31918_33121 = state_31912__$1;
(statearr_31918_33121[(1)] = (5));

} else {
var statearr_31919_33122 = state_31912__$1;
(statearr_31919_33122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (6))){
var state_31912__$1 = state_31912;
var statearr_31920_33124 = state_31912__$1;
(statearr_31920_33124[(2)] = null);

(statearr_31920_33124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (3))){
var inst_31909 = (state_31912[(2)]);
var inst_31910 = cljs.core.async.close_BANG_(out);
var state_31912__$1 = (function (){var statearr_31921 = state_31912;
(statearr_31921[(9)] = inst_31909);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31912__$1,inst_31910);
} else {
if((state_val_31913 === (2))){
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31912__$1,(4),ch);
} else {
if((state_val_31913 === (11))){
var inst_31892 = (state_31912[(8)]);
var inst_31901 = (state_31912[(2)]);
var inst_31889 = inst_31892;
var state_31912__$1 = (function (){var statearr_31922 = state_31912;
(statearr_31922[(7)] = inst_31889);

(statearr_31922[(10)] = inst_31901);

return statearr_31922;
})();
var statearr_31923_33163 = state_31912__$1;
(statearr_31923_33163[(2)] = null);

(statearr_31923_33163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (9))){
var inst_31892 = (state_31912[(8)]);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31912__$1,(11),out,inst_31892);
} else {
if((state_val_31913 === (5))){
var inst_31889 = (state_31912[(7)]);
var inst_31892 = (state_31912[(8)]);
var inst_31896 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31892,inst_31889);
var state_31912__$1 = state_31912;
if(inst_31896){
var statearr_31925_33167 = state_31912__$1;
(statearr_31925_33167[(1)] = (8));

} else {
var statearr_31926_33168 = state_31912__$1;
(statearr_31926_33168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (10))){
var inst_31904 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31927_33169 = state_31912__$1;
(statearr_31927_33169[(2)] = inst_31904);

(statearr_31927_33169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (8))){
var inst_31889 = (state_31912[(7)]);
var tmp31924 = inst_31889;
var inst_31889__$1 = tmp31924;
var state_31912__$1 = (function (){var statearr_31928 = state_31912;
(statearr_31928[(7)] = inst_31889__$1);

return statearr_31928;
})();
var statearr_31929_33175 = state_31912__$1;
(statearr_31929_33175[(2)] = null);

(statearr_31929_33175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_31930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31930[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_31930[(1)] = (1));

return statearr_31930;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_31912){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31912);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31931){if((e31931 instanceof Object)){
var ex__30510__auto__ = e31931;
var statearr_31932_33176 = state_31912;
(statearr_31932_33176[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33178 = state_31912;
state_31912 = G__33178;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_31912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_31912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31933 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31933[(6)] = c__30571__auto___33064);

return statearr_31933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31935 = arguments.length;
switch (G__31935) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30571__auto___33181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_31973){
var state_val_31974 = (state_31973[(1)]);
if((state_val_31974 === (7))){
var inst_31969 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31975_33182 = state_31973__$1;
(statearr_31975_33182[(2)] = inst_31969);

(statearr_31975_33182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (1))){
var inst_31936 = (new Array(n));
var inst_31937 = inst_31936;
var inst_31938 = (0);
var state_31973__$1 = (function (){var statearr_31976 = state_31973;
(statearr_31976[(7)] = inst_31937);

(statearr_31976[(8)] = inst_31938);

return statearr_31976;
})();
var statearr_31977_33183 = state_31973__$1;
(statearr_31977_33183[(2)] = null);

(statearr_31977_33183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (4))){
var inst_31941 = (state_31973[(9)]);
var inst_31941__$1 = (state_31973[(2)]);
var inst_31942 = (inst_31941__$1 == null);
var inst_31943 = cljs.core.not(inst_31942);
var state_31973__$1 = (function (){var statearr_31978 = state_31973;
(statearr_31978[(9)] = inst_31941__$1);

return statearr_31978;
})();
if(inst_31943){
var statearr_31979_33184 = state_31973__$1;
(statearr_31979_33184[(1)] = (5));

} else {
var statearr_31980_33185 = state_31973__$1;
(statearr_31980_33185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (15))){
var inst_31963 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31981_33186 = state_31973__$1;
(statearr_31981_33186[(2)] = inst_31963);

(statearr_31981_33186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (13))){
var state_31973__$1 = state_31973;
var statearr_31982_33187 = state_31973__$1;
(statearr_31982_33187[(2)] = null);

(statearr_31982_33187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (6))){
var inst_31938 = (state_31973[(8)]);
var inst_31959 = (inst_31938 > (0));
var state_31973__$1 = state_31973;
if(cljs.core.truth_(inst_31959)){
var statearr_31983_33188 = state_31973__$1;
(statearr_31983_33188[(1)] = (12));

} else {
var statearr_31984_33189 = state_31973__$1;
(statearr_31984_33189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (3))){
var inst_31971 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31973__$1,inst_31971);
} else {
if((state_val_31974 === (12))){
var inst_31937 = (state_31973[(7)]);
var inst_31961 = cljs.core.vec(inst_31937);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31973__$1,(15),out,inst_31961);
} else {
if((state_val_31974 === (2))){
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31973__$1,(4),ch);
} else {
if((state_val_31974 === (11))){
var inst_31953 = (state_31973[(2)]);
var inst_31954 = (new Array(n));
var inst_31937 = inst_31954;
var inst_31938 = (0);
var state_31973__$1 = (function (){var statearr_31985 = state_31973;
(statearr_31985[(7)] = inst_31937);

(statearr_31985[(10)] = inst_31953);

(statearr_31985[(8)] = inst_31938);

return statearr_31985;
})();
var statearr_31986_33190 = state_31973__$1;
(statearr_31986_33190[(2)] = null);

(statearr_31986_33190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (9))){
var inst_31937 = (state_31973[(7)]);
var inst_31951 = cljs.core.vec(inst_31937);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31973__$1,(11),out,inst_31951);
} else {
if((state_val_31974 === (5))){
var inst_31937 = (state_31973[(7)]);
var inst_31938 = (state_31973[(8)]);
var inst_31941 = (state_31973[(9)]);
var inst_31946 = (state_31973[(11)]);
var inst_31945 = (inst_31937[inst_31938] = inst_31941);
var inst_31946__$1 = (inst_31938 + (1));
var inst_31947 = (inst_31946__$1 < n);
var state_31973__$1 = (function (){var statearr_31987 = state_31973;
(statearr_31987[(12)] = inst_31945);

(statearr_31987[(11)] = inst_31946__$1);

return statearr_31987;
})();
if(cljs.core.truth_(inst_31947)){
var statearr_31988_33191 = state_31973__$1;
(statearr_31988_33191[(1)] = (8));

} else {
var statearr_31989_33192 = state_31973__$1;
(statearr_31989_33192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (14))){
var inst_31966 = (state_31973[(2)]);
var inst_31967 = cljs.core.async.close_BANG_(out);
var state_31973__$1 = (function (){var statearr_31991 = state_31973;
(statearr_31991[(13)] = inst_31966);

return statearr_31991;
})();
var statearr_31992_33193 = state_31973__$1;
(statearr_31992_33193[(2)] = inst_31967);

(statearr_31992_33193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (10))){
var inst_31957 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31993_33194 = state_31973__$1;
(statearr_31993_33194[(2)] = inst_31957);

(statearr_31993_33194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (8))){
var inst_31937 = (state_31973[(7)]);
var inst_31946 = (state_31973[(11)]);
var tmp31990 = inst_31937;
var inst_31937__$1 = tmp31990;
var inst_31938 = inst_31946;
var state_31973__$1 = (function (){var statearr_31994 = state_31973;
(statearr_31994[(7)] = inst_31937__$1);

(statearr_31994[(8)] = inst_31938);

return statearr_31994;
})();
var statearr_31995_33195 = state_31973__$1;
(statearr_31995_33195[(2)] = null);

(statearr_31995_33195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_31996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31996[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_31996[(1)] = (1));

return statearr_31996;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_31973){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_31973);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e31997){if((e31997 instanceof Object)){
var ex__30510__auto__ = e31997;
var statearr_31998_33196 = state_31973;
(statearr_31998_33196[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33197 = state_31973;
state_31973 = G__33197;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_31973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_31973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_31999 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_31999[(6)] = c__30571__auto___33181);

return statearr_31999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32001 = arguments.length;
switch (G__32001) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30571__auto___33199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30572__auto__ = (function (){var switch__30506__auto__ = (function (state_32043){
var state_val_32044 = (state_32043[(1)]);
if((state_val_32044 === (7))){
var inst_32039 = (state_32043[(2)]);
var state_32043__$1 = state_32043;
var statearr_32045_33200 = state_32043__$1;
(statearr_32045_33200[(2)] = inst_32039);

(statearr_32045_33200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (1))){
var inst_32002 = [];
var inst_32003 = inst_32002;
var inst_32004 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32043__$1 = (function (){var statearr_32046 = state_32043;
(statearr_32046[(7)] = inst_32003);

(statearr_32046[(8)] = inst_32004);

return statearr_32046;
})();
var statearr_32047_33201 = state_32043__$1;
(statearr_32047_33201[(2)] = null);

(statearr_32047_33201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (4))){
var inst_32007 = (state_32043[(9)]);
var inst_32007__$1 = (state_32043[(2)]);
var inst_32008 = (inst_32007__$1 == null);
var inst_32009 = cljs.core.not(inst_32008);
var state_32043__$1 = (function (){var statearr_32048 = state_32043;
(statearr_32048[(9)] = inst_32007__$1);

return statearr_32048;
})();
if(inst_32009){
var statearr_32049_33202 = state_32043__$1;
(statearr_32049_33202[(1)] = (5));

} else {
var statearr_32050_33203 = state_32043__$1;
(statearr_32050_33203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (15))){
var inst_32033 = (state_32043[(2)]);
var state_32043__$1 = state_32043;
var statearr_32051_33204 = state_32043__$1;
(statearr_32051_33204[(2)] = inst_32033);

(statearr_32051_33204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (13))){
var state_32043__$1 = state_32043;
var statearr_32052_33205 = state_32043__$1;
(statearr_32052_33205[(2)] = null);

(statearr_32052_33205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (6))){
var inst_32003 = (state_32043[(7)]);
var inst_32028 = inst_32003.length;
var inst_32029 = (inst_32028 > (0));
var state_32043__$1 = state_32043;
if(cljs.core.truth_(inst_32029)){
var statearr_32053_33206 = state_32043__$1;
(statearr_32053_33206[(1)] = (12));

} else {
var statearr_32054_33207 = state_32043__$1;
(statearr_32054_33207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (3))){
var inst_32041 = (state_32043[(2)]);
var state_32043__$1 = state_32043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32043__$1,inst_32041);
} else {
if((state_val_32044 === (12))){
var inst_32003 = (state_32043[(7)]);
var inst_32031 = cljs.core.vec(inst_32003);
var state_32043__$1 = state_32043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32043__$1,(15),out,inst_32031);
} else {
if((state_val_32044 === (2))){
var state_32043__$1 = state_32043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32043__$1,(4),ch);
} else {
if((state_val_32044 === (11))){
var inst_32011 = (state_32043[(10)]);
var inst_32007 = (state_32043[(9)]);
var inst_32021 = (state_32043[(2)]);
var inst_32022 = [];
var inst_32023 = inst_32022.push(inst_32007);
var inst_32003 = inst_32022;
var inst_32004 = inst_32011;
var state_32043__$1 = (function (){var statearr_32055 = state_32043;
(statearr_32055[(7)] = inst_32003);

(statearr_32055[(8)] = inst_32004);

(statearr_32055[(11)] = inst_32021);

(statearr_32055[(12)] = inst_32023);

return statearr_32055;
})();
var statearr_32056_33208 = state_32043__$1;
(statearr_32056_33208[(2)] = null);

(statearr_32056_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (9))){
var inst_32003 = (state_32043[(7)]);
var inst_32019 = cljs.core.vec(inst_32003);
var state_32043__$1 = state_32043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32043__$1,(11),out,inst_32019);
} else {
if((state_val_32044 === (5))){
var inst_32004 = (state_32043[(8)]);
var inst_32011 = (state_32043[(10)]);
var inst_32007 = (state_32043[(9)]);
var inst_32011__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32007) : f.call(null,inst_32007));
var inst_32012 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32011__$1,inst_32004);
var inst_32013 = cljs.core.keyword_identical_QMARK_(inst_32004,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32014 = ((inst_32012) || (inst_32013));
var state_32043__$1 = (function (){var statearr_32057 = state_32043;
(statearr_32057[(10)] = inst_32011__$1);

return statearr_32057;
})();
if(cljs.core.truth_(inst_32014)){
var statearr_32058_33209 = state_32043__$1;
(statearr_32058_33209[(1)] = (8));

} else {
var statearr_32059_33210 = state_32043__$1;
(statearr_32059_33210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (14))){
var inst_32036 = (state_32043[(2)]);
var inst_32037 = cljs.core.async.close_BANG_(out);
var state_32043__$1 = (function (){var statearr_32061 = state_32043;
(statearr_32061[(13)] = inst_32036);

return statearr_32061;
})();
var statearr_32062_33211 = state_32043__$1;
(statearr_32062_33211[(2)] = inst_32037);

(statearr_32062_33211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (10))){
var inst_32026 = (state_32043[(2)]);
var state_32043__$1 = state_32043;
var statearr_32063_33212 = state_32043__$1;
(statearr_32063_33212[(2)] = inst_32026);

(statearr_32063_33212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (8))){
var inst_32003 = (state_32043[(7)]);
var inst_32011 = (state_32043[(10)]);
var inst_32007 = (state_32043[(9)]);
var inst_32016 = inst_32003.push(inst_32007);
var tmp32060 = inst_32003;
var inst_32003__$1 = tmp32060;
var inst_32004 = inst_32011;
var state_32043__$1 = (function (){var statearr_32064 = state_32043;
(statearr_32064[(7)] = inst_32003__$1);

(statearr_32064[(8)] = inst_32004);

(statearr_32064[(14)] = inst_32016);

return statearr_32064;
})();
var statearr_32065_33213 = state_32043__$1;
(statearr_32065_33213[(2)] = null);

(statearr_32065_33213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30507__auto__ = null;
var cljs$core$async$state_machine__30507__auto____0 = (function (){
var statearr_32066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32066[(0)] = cljs$core$async$state_machine__30507__auto__);

(statearr_32066[(1)] = (1));

return statearr_32066;
});
var cljs$core$async$state_machine__30507__auto____1 = (function (state_32043){
while(true){
var ret_value__30508__auto__ = (function (){try{while(true){
var result__30509__auto__ = switch__30506__auto__(state_32043);
if(cljs.core.keyword_identical_QMARK_(result__30509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30509__auto__;
}
break;
}
}catch (e32067){if((e32067 instanceof Object)){
var ex__30510__auto__ = e32067;
var statearr_32068_33214 = state_32043;
(statearr_32068_33214[(5)] = ex__30510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33215 = state_32043;
state_32043 = G__33215;
continue;
} else {
return ret_value__30508__auto__;
}
break;
}
});
cljs$core$async$state_machine__30507__auto__ = function(state_32043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30507__auto____1.call(this,state_32043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30507__auto____0;
cljs$core$async$state_machine__30507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30507__auto____1;
return cljs$core$async$state_machine__30507__auto__;
})()
})();
var state__30573__auto__ = (function (){var statearr_32069 = (f__30572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30572__auto__.cljs$core$IFn$_invoke$arity$0() : f__30572__auto__.call(null));
(statearr_32069[(6)] = c__30571__auto___33199);

return statearr_32069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30573__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
