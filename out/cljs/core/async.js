// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13550 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13550 = (function (f,fn_handler,meta13551){
this.f = f;
this.fn_handler = fn_handler;
this.meta13551 = meta13551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13550.cljs$lang$type = true;
cljs.core.async.t13550.cljs$lang$ctorStr = "cljs.core.async/t13550";
cljs.core.async.t13550.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13550");
});
cljs.core.async.t13550.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13552){var self__ = this;
var _13552__$1 = this;return self__.meta13551;
});
cljs.core.async.t13550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13552,meta13551__$1){var self__ = this;
var _13552__$1 = this;return (new cljs.core.async.t13550(self__.f,self__.fn_handler,meta13551__$1));
});
cljs.core.async.__GT_t13550 = (function __GT_t13550(f__$1,fn_handler__$1,meta13551){return (new cljs.core.async.t13550(f__$1,fn_handler__$1,meta13551));
});
}
return (new cljs.core.async.t13550(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13554 = buff;if(G__13554)
{var bit__3752__auto__ = null;if(cljs.core.truth_((function (){var or__3133__auto__ = bit__3752__auto__;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return G__13554.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13554.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13554);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13554);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13555 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13555);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13555);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3124__auto__ = ret;if(cljs.core.truth_(and__3124__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3124__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3922__auto___13556 = n;var x_13557 = 0;while(true){
if((x_13557 < n__3922__auto___13556))
{(a[x_13557] = 0);
{
var G__13558 = (x_13557 + 1);
x_13557 = G__13558;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13559 = (i + 1);
i = G__13559;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13563 = (function (flag,alt_flag,meta13564){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13564 = meta13564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13563.cljs$lang$type = true;
cljs.core.async.t13563.cljs$lang$ctorStr = "cljs.core.async/t13563";
cljs.core.async.t13563.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13563");
});
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13565){var self__ = this;
var _13565__$1 = this;return self__.meta13564;
});
cljs.core.async.t13563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13565,meta13564__$1){var self__ = this;
var _13565__$1 = this;return (new cljs.core.async.t13563(self__.flag,self__.alt_flag,meta13564__$1));
});
cljs.core.async.__GT_t13563 = (function __GT_t13563(flag__$1,alt_flag__$1,meta13564){return (new cljs.core.async.t13563(flag__$1,alt_flag__$1,meta13564));
});
}
return (new cljs.core.async.t13563(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13569 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13569 = (function (cb,flag,alt_handler,meta13570){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13570 = meta13570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13569.cljs$lang$type = true;
cljs.core.async.t13569.cljs$lang$ctorStr = "cljs.core.async/t13569";
cljs.core.async.t13569.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13569");
});
cljs.core.async.t13569.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13571){var self__ = this;
var _13571__$1 = this;return self__.meta13570;
});
cljs.core.async.t13569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13571,meta13570__$1){var self__ = this;
var _13571__$1 = this;return (new cljs.core.async.t13569(self__.cb,self__.flag,self__.alt_handler,meta13570__$1));
});
cljs.core.async.__GT_t13569 = (function __GT_t13569(cb__$1,flag__$1,alt_handler__$1,meta13570){return (new cljs.core.async.t13569(cb__$1,flag__$1,alt_handler__$1,meta13570));
});
}
return (new cljs.core.async.t13569(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13572_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__13572_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3133__auto__ = wport;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__13573 = (i + 1);
i = G__13573;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3133__auto__ = ret;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3124__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3124__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3124__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13574){var map__13576 = p__13574;var map__13576__$1 = ((cljs.core.seq_QMARK_.call(null,map__13576))?cljs.core.apply.call(null,cljs.core.hash_map,map__13576):map__13576);var opts = map__13576__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13574 = null;if (arguments.length > 1) {
  p__13574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13574);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13577){
var ports = cljs.core.first(arglist__13577);
var p__13574 = cljs.core.rest(arglist__13577);
return alts_BANG___delegate(ports,p__13574);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13585 = (function (ch,f,map_LT_,meta13586){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13586 = meta13586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13585.cljs$lang$type = true;
cljs.core.async.t13585.cljs$lang$ctorStr = "cljs.core.async/t13585";
cljs.core.async.t13585.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13585");
});
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13588 = (function (fn1,_,meta13586,ch,f,map_LT_,meta13589){
this.fn1 = fn1;
this._ = _;
this.meta13586 = meta13586;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13589 = meta13589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13588.cljs$lang$type = true;
cljs.core.async.t13588.cljs$lang$ctorStr = "cljs.core.async/t13588";
cljs.core.async.t13588.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13588");
});
cljs.core.async.t13588.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13588.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13578_SHARP_){return f1.call(null,(((p1__13578_SHARP_ == null))?null:self__.f.call(null,p1__13578_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13590){var self__ = this;
var _13590__$1 = this;return self__.meta13589;
});
cljs.core.async.t13588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13590,meta13589__$1){var self__ = this;
var _13590__$1 = this;return (new cljs.core.async.t13588(self__.fn1,self__._,self__.meta13586,self__.ch,self__.f,self__.map_LT_,meta13589__$1));
});
cljs.core.async.__GT_t13588 = (function __GT_t13588(fn1__$1,___$2,meta13586__$1,ch__$2,f__$2,map_LT___$2,meta13589){return (new cljs.core.async.t13588(fn1__$1,___$2,meta13586__$1,ch__$2,f__$2,map_LT___$2,meta13589));
});
}
return (new cljs.core.async.t13588(fn1,___$1,self__.meta13586,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3124__auto__ = ret;if(cljs.core.truth_(and__3124__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3124__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13587){var self__ = this;
var _13587__$1 = this;return self__.meta13586;
});
cljs.core.async.t13585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13587,meta13586__$1){var self__ = this;
var _13587__$1 = this;return (new cljs.core.async.t13585(self__.ch,self__.f,self__.map_LT_,meta13586__$1));
});
cljs.core.async.__GT_t13585 = (function __GT_t13585(ch__$1,f__$1,map_LT___$1,meta13586){return (new cljs.core.async.t13585(ch__$1,f__$1,map_LT___$1,meta13586));
});
}
return (new cljs.core.async.t13585(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13594 = (function (ch,f,map_GT_,meta13595){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13595 = meta13595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13594.cljs$lang$type = true;
cljs.core.async.t13594.cljs$lang$ctorStr = "cljs.core.async/t13594";
cljs.core.async.t13594.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13594");
});
cljs.core.async.t13594.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13594.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13594.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13596){var self__ = this;
var _13596__$1 = this;return self__.meta13595;
});
cljs.core.async.t13594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13596,meta13595__$1){var self__ = this;
var _13596__$1 = this;return (new cljs.core.async.t13594(self__.ch,self__.f,self__.map_GT_,meta13595__$1));
});
cljs.core.async.__GT_t13594 = (function __GT_t13594(ch__$1,f__$1,map_GT___$1,meta13595){return (new cljs.core.async.t13594(ch__$1,f__$1,map_GT___$1,meta13595));
});
}
return (new cljs.core.async.t13594(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13600 = (function (ch,p,filter_GT_,meta13601){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13601 = meta13601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13600.cljs$lang$type = true;
cljs.core.async.t13600.cljs$lang$ctorStr = "cljs.core.async/t13600";
cljs.core.async.t13600.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13600");
});
cljs.core.async.t13600.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13600.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13600.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13602){var self__ = this;
var _13602__$1 = this;return self__.meta13601;
});
cljs.core.async.t13600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13602,meta13601__$1){var self__ = this;
var _13602__$1 = this;return (new cljs.core.async.t13600(self__.ch,self__.p,self__.filter_GT_,meta13601__$1));
});
cljs.core.async.__GT_t13600 = (function __GT_t13600(ch__$1,p__$1,filter_GT___$1,meta13601){return (new cljs.core.async.t13600(ch__$1,p__$1,filter_GT___$1,meta13601));
});
}
return (new cljs.core.async.t13600(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___13685 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_13664){var state_val_13665 = (state_13664[1]);if((state_val_13665 === 1))
{var state_13664__$1 = state_13664;var statearr_13666_13686 = state_13664__$1;(statearr_13666_13686[2] = null);
(statearr_13666_13686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 2))
{var state_13664__$1 = state_13664;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13664__$1,4,ch);
} else
{if((state_val_13665 === 3))
{var inst_13662 = (state_13664[2]);var state_13664__$1 = state_13664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13664__$1,inst_13662);
} else
{if((state_val_13665 === 4))
{var inst_13646 = (state_13664[7]);var inst_13646__$1 = (state_13664[2]);var inst_13647 = (inst_13646__$1 == null);var state_13664__$1 = (function (){var statearr_13667 = state_13664;(statearr_13667[7] = inst_13646__$1);
return statearr_13667;
})();if(cljs.core.truth_(inst_13647))
{var statearr_13668_13687 = state_13664__$1;(statearr_13668_13687[1] = 5);
} else
{var statearr_13669_13688 = state_13664__$1;(statearr_13669_13688[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 5))
{var inst_13649 = cljs.core.async.close_BANG_.call(null,out);var state_13664__$1 = state_13664;var statearr_13670_13689 = state_13664__$1;(statearr_13670_13689[2] = inst_13649);
(statearr_13670_13689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 6))
{var inst_13646 = (state_13664[7]);var inst_13651 = p.call(null,inst_13646);var state_13664__$1 = state_13664;if(cljs.core.truth_(inst_13651))
{var statearr_13671_13690 = state_13664__$1;(statearr_13671_13690[1] = 8);
} else
{var statearr_13672_13691 = state_13664__$1;(statearr_13672_13691[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 7))
{var inst_13660 = (state_13664[2]);var state_13664__$1 = state_13664;var statearr_13673_13692 = state_13664__$1;(statearr_13673_13692[2] = inst_13660);
(statearr_13673_13692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 8))
{var inst_13646 = (state_13664[7]);var state_13664__$1 = state_13664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13664__$1,11,out,inst_13646);
} else
{if((state_val_13665 === 9))
{var state_13664__$1 = state_13664;var statearr_13674_13693 = state_13664__$1;(statearr_13674_13693[2] = null);
(statearr_13674_13693[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 10))
{var inst_13657 = (state_13664[2]);var state_13664__$1 = (function (){var statearr_13675 = state_13664;(statearr_13675[8] = inst_13657);
return statearr_13675;
})();var statearr_13676_13694 = state_13664__$1;(statearr_13676_13694[2] = null);
(statearr_13676_13694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13665 === 11))
{var inst_13654 = (state_13664[2]);var state_13664__$1 = state_13664;var statearr_13677_13695 = state_13664__$1;(statearr_13677_13695[2] = inst_13654);
(statearr_13677_13695[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_13681 = (new Array(9));(statearr_13681[0] = state_machine__5425__auto__);
(statearr_13681[1] = 1);
return statearr_13681;
});
var state_machine__5425__auto____1 = (function (state_13664){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_13664);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e13682){if((e13682 instanceof Object))
{var ex__5428__auto__ = e13682;var statearr_13683_13696 = state_13664;(statearr_13683_13696[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13664);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13697 = state_13664;
state_13664 = G__13697;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_13664){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_13664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_13684 = f__5495__auto__.call(null);(statearr_13684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___13685);
return statearr_13684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_13849){var state_val_13850 = (state_13849[1]);if((state_val_13850 === 1))
{var state_13849__$1 = state_13849;var statearr_13851_13888 = state_13849__$1;(statearr_13851_13888[2] = null);
(statearr_13851_13888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 2))
{var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13849__$1,4,in$);
} else
{if((state_val_13850 === 3))
{var inst_13847 = (state_13849[2]);var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13849__$1,inst_13847);
} else
{if((state_val_13850 === 4))
{var inst_13795 = (state_13849[7]);var inst_13795__$1 = (state_13849[2]);var inst_13796 = (inst_13795__$1 == null);var state_13849__$1 = (function (){var statearr_13852 = state_13849;(statearr_13852[7] = inst_13795__$1);
return statearr_13852;
})();if(cljs.core.truth_(inst_13796))
{var statearr_13853_13889 = state_13849__$1;(statearr_13853_13889[1] = 5);
} else
{var statearr_13854_13890 = state_13849__$1;(statearr_13854_13890[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 5))
{var inst_13798 = cljs.core.async.close_BANG_.call(null,out);var state_13849__$1 = state_13849;var statearr_13855_13891 = state_13849__$1;(statearr_13855_13891[2] = inst_13798);
(statearr_13855_13891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 6))
{var inst_13795 = (state_13849[7]);var inst_13800 = f.call(null,inst_13795);var inst_13805 = cljs.core.seq.call(null,inst_13800);var inst_13806 = inst_13805;var inst_13807 = null;var inst_13808 = 0;var inst_13809 = 0;var state_13849__$1 = (function (){var statearr_13856 = state_13849;(statearr_13856[8] = inst_13806);
(statearr_13856[9] = inst_13809);
(statearr_13856[10] = inst_13807);
(statearr_13856[11] = inst_13808);
return statearr_13856;
})();var statearr_13857_13892 = state_13849__$1;(statearr_13857_13892[2] = null);
(statearr_13857_13892[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 7))
{var inst_13845 = (state_13849[2]);var state_13849__$1 = state_13849;var statearr_13858_13893 = state_13849__$1;(statearr_13858_13893[2] = inst_13845);
(statearr_13858_13893[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 8))
{var inst_13809 = (state_13849[9]);var inst_13808 = (state_13849[11]);var inst_13811 = (inst_13809 < inst_13808);var inst_13812 = inst_13811;var state_13849__$1 = state_13849;if(cljs.core.truth_(inst_13812))
{var statearr_13859_13894 = state_13849__$1;(statearr_13859_13894[1] = 10);
} else
{var statearr_13860_13895 = state_13849__$1;(statearr_13860_13895[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 9))
{var inst_13842 = (state_13849[2]);var state_13849__$1 = (function (){var statearr_13861 = state_13849;(statearr_13861[12] = inst_13842);
return statearr_13861;
})();var statearr_13862_13896 = state_13849__$1;(statearr_13862_13896[2] = null);
(statearr_13862_13896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 10))
{var inst_13809 = (state_13849[9]);var inst_13807 = (state_13849[10]);var inst_13814 = cljs.core._nth.call(null,inst_13807,inst_13809);var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13849__$1,13,out,inst_13814);
} else
{if((state_val_13850 === 11))
{var inst_13806 = (state_13849[8]);var inst_13820 = (state_13849[13]);var inst_13820__$1 = cljs.core.seq.call(null,inst_13806);var state_13849__$1 = (function (){var statearr_13866 = state_13849;(statearr_13866[13] = inst_13820__$1);
return statearr_13866;
})();if(inst_13820__$1)
{var statearr_13867_13897 = state_13849__$1;(statearr_13867_13897[1] = 14);
} else
{var statearr_13868_13898 = state_13849__$1;(statearr_13868_13898[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 12))
{var inst_13840 = (state_13849[2]);var state_13849__$1 = state_13849;var statearr_13869_13899 = state_13849__$1;(statearr_13869_13899[2] = inst_13840);
(statearr_13869_13899[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 13))
{var inst_13806 = (state_13849[8]);var inst_13809 = (state_13849[9]);var inst_13807 = (state_13849[10]);var inst_13808 = (state_13849[11]);var inst_13816 = (state_13849[2]);var inst_13817 = (inst_13809 + 1);var tmp13863 = inst_13806;var tmp13864 = inst_13807;var tmp13865 = inst_13808;var inst_13806__$1 = tmp13863;var inst_13807__$1 = tmp13864;var inst_13808__$1 = tmp13865;var inst_13809__$1 = inst_13817;var state_13849__$1 = (function (){var statearr_13870 = state_13849;(statearr_13870[8] = inst_13806__$1);
(statearr_13870[9] = inst_13809__$1);
(statearr_13870[10] = inst_13807__$1);
(statearr_13870[11] = inst_13808__$1);
(statearr_13870[14] = inst_13816);
return statearr_13870;
})();var statearr_13871_13900 = state_13849__$1;(statearr_13871_13900[2] = null);
(statearr_13871_13900[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 14))
{var inst_13820 = (state_13849[13]);var inst_13822 = cljs.core.chunked_seq_QMARK_.call(null,inst_13820);var state_13849__$1 = state_13849;if(inst_13822)
{var statearr_13872_13901 = state_13849__$1;(statearr_13872_13901[1] = 17);
} else
{var statearr_13873_13902 = state_13849__$1;(statearr_13873_13902[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 15))
{var state_13849__$1 = state_13849;var statearr_13874_13903 = state_13849__$1;(statearr_13874_13903[2] = null);
(statearr_13874_13903[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 16))
{var inst_13838 = (state_13849[2]);var state_13849__$1 = state_13849;var statearr_13875_13904 = state_13849__$1;(statearr_13875_13904[2] = inst_13838);
(statearr_13875_13904[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 17))
{var inst_13820 = (state_13849[13]);var inst_13824 = cljs.core.chunk_first.call(null,inst_13820);var inst_13825 = cljs.core.chunk_rest.call(null,inst_13820);var inst_13826 = cljs.core.count.call(null,inst_13824);var inst_13806 = inst_13825;var inst_13807 = inst_13824;var inst_13808 = inst_13826;var inst_13809 = 0;var state_13849__$1 = (function (){var statearr_13876 = state_13849;(statearr_13876[8] = inst_13806);
(statearr_13876[9] = inst_13809);
(statearr_13876[10] = inst_13807);
(statearr_13876[11] = inst_13808);
return statearr_13876;
})();var statearr_13877_13905 = state_13849__$1;(statearr_13877_13905[2] = null);
(statearr_13877_13905[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 18))
{var inst_13820 = (state_13849[13]);var inst_13829 = cljs.core.first.call(null,inst_13820);var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13849__$1,20,out,inst_13829);
} else
{if((state_val_13850 === 19))
{var inst_13835 = (state_13849[2]);var state_13849__$1 = state_13849;var statearr_13878_13906 = state_13849__$1;(statearr_13878_13906[2] = inst_13835);
(statearr_13878_13906[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 20))
{var inst_13820 = (state_13849[13]);var inst_13831 = (state_13849[2]);var inst_13832 = cljs.core.next.call(null,inst_13820);var inst_13806 = inst_13832;var inst_13807 = null;var inst_13808 = 0;var inst_13809 = 0;var state_13849__$1 = (function (){var statearr_13879 = state_13849;(statearr_13879[8] = inst_13806);
(statearr_13879[9] = inst_13809);
(statearr_13879[10] = inst_13807);
(statearr_13879[11] = inst_13808);
(statearr_13879[15] = inst_13831);
return statearr_13879;
})();var statearr_13880_13907 = state_13849__$1;(statearr_13880_13907[2] = null);
(statearr_13880_13907[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_13884 = (new Array(16));(statearr_13884[0] = state_machine__5425__auto__);
(statearr_13884[1] = 1);
return statearr_13884;
});
var state_machine__5425__auto____1 = (function (state_13849){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_13849);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e13885){if((e13885 instanceof Object))
{var ex__5428__auto__ = e13885;var statearr_13886_13908 = state_13849;(statearr_13886_13908[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13909 = state_13849;
state_13849 = G__13909;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_13849){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_13849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_13887 = f__5495__auto__.call(null);(statearr_13887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_13887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5494__auto___13990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_13969){var state_val_13970 = (state_13969[1]);if((state_val_13970 === 1))
{var state_13969__$1 = state_13969;var statearr_13971_13991 = state_13969__$1;(statearr_13971_13991[2] = null);
(statearr_13971_13991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 2))
{var state_13969__$1 = state_13969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13969__$1,4,from);
} else
{if((state_val_13970 === 3))
{var inst_13967 = (state_13969[2]);var state_13969__$1 = state_13969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13969__$1,inst_13967);
} else
{if((state_val_13970 === 4))
{var inst_13952 = (state_13969[7]);var inst_13952__$1 = (state_13969[2]);var inst_13953 = (inst_13952__$1 == null);var state_13969__$1 = (function (){var statearr_13972 = state_13969;(statearr_13972[7] = inst_13952__$1);
return statearr_13972;
})();if(cljs.core.truth_(inst_13953))
{var statearr_13973_13992 = state_13969__$1;(statearr_13973_13992[1] = 5);
} else
{var statearr_13974_13993 = state_13969__$1;(statearr_13974_13993[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 5))
{var state_13969__$1 = state_13969;if(cljs.core.truth_(close_QMARK_))
{var statearr_13975_13994 = state_13969__$1;(statearr_13975_13994[1] = 8);
} else
{var statearr_13976_13995 = state_13969__$1;(statearr_13976_13995[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 6))
{var inst_13952 = (state_13969[7]);var state_13969__$1 = state_13969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13969__$1,11,to,inst_13952);
} else
{if((state_val_13970 === 7))
{var inst_13965 = (state_13969[2]);var state_13969__$1 = state_13969;var statearr_13977_13996 = state_13969__$1;(statearr_13977_13996[2] = inst_13965);
(statearr_13977_13996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 8))
{var inst_13956 = cljs.core.async.close_BANG_.call(null,to);var state_13969__$1 = state_13969;var statearr_13978_13997 = state_13969__$1;(statearr_13978_13997[2] = inst_13956);
(statearr_13978_13997[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 9))
{var state_13969__$1 = state_13969;var statearr_13979_13998 = state_13969__$1;(statearr_13979_13998[2] = null);
(statearr_13979_13998[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 10))
{var inst_13959 = (state_13969[2]);var state_13969__$1 = state_13969;var statearr_13980_13999 = state_13969__$1;(statearr_13980_13999[2] = inst_13959);
(statearr_13980_13999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13970 === 11))
{var inst_13962 = (state_13969[2]);var state_13969__$1 = (function (){var statearr_13981 = state_13969;(statearr_13981[8] = inst_13962);
return statearr_13981;
})();var statearr_13982_14000 = state_13969__$1;(statearr_13982_14000[2] = null);
(statearr_13982_14000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_13986 = (new Array(9));(statearr_13986[0] = state_machine__5425__auto__);
(statearr_13986[1] = 1);
return statearr_13986;
});
var state_machine__5425__auto____1 = (function (state_13969){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_13969);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e13987){if((e13987 instanceof Object))
{var ex__5428__auto__ = e13987;var statearr_13988_14001 = state_13969;(statearr_13988_14001[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13969);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14002 = state_13969;
state_13969 = G__14002;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_13969){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_13969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_13989 = f__5495__auto__.call(null);(statearr_13989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___13990);
return statearr_13989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5494__auto___14089 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14067){var state_val_14068 = (state_14067[1]);if((state_val_14068 === 1))
{var state_14067__$1 = state_14067;var statearr_14069_14090 = state_14067__$1;(statearr_14069_14090[2] = null);
(statearr_14069_14090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14068 === 2))
{var state_14067__$1 = state_14067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14067__$1,4,ch);
} else
{if((state_val_14068 === 3))
{var inst_14065 = (state_14067[2]);var state_14067__$1 = state_14067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14067__$1,inst_14065);
} else
{if((state_val_14068 === 4))
{var inst_14048 = (state_14067[7]);var inst_14048__$1 = (state_14067[2]);var inst_14049 = (inst_14048__$1 == null);var state_14067__$1 = (function (){var statearr_14070 = state_14067;(statearr_14070[7] = inst_14048__$1);
return statearr_14070;
})();if(cljs.core.truth_(inst_14049))
{var statearr_14071_14091 = state_14067__$1;(statearr_14071_14091[1] = 5);
} else
{var statearr_14072_14092 = state_14067__$1;(statearr_14072_14092[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14068 === 5))
{var inst_14051 = cljs.core.async.close_BANG_.call(null,tc);var inst_14052 = cljs.core.async.close_BANG_.call(null,fc);var state_14067__$1 = (function (){var statearr_14073 = state_14067;(statearr_14073[8] = inst_14051);
return statearr_14073;
})();var statearr_14074_14093 = state_14067__$1;(statearr_14074_14093[2] = inst_14052);
(statearr_14074_14093[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14068 === 6))
{var inst_14048 = (state_14067[7]);var inst_14054 = p.call(null,inst_14048);var state_14067__$1 = state_14067;if(cljs.core.truth_(inst_14054))
{var statearr_14075_14094 = state_14067__$1;(statearr_14075_14094[1] = 9);
} else
{var statearr_14076_14095 = state_14067__$1;(statearr_14076_14095[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14068 === 7))
{var inst_14063 = (state_14067[2]);var state_14067__$1 = state_14067;var statearr_14077_14096 = state_14067__$1;(statearr_14077_14096[2] = inst_14063);
(statearr_14077_14096[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14068 === 8))
{var inst_14060 = (state_14067[2]);var state_14067__$1 = (function (){var statearr_14078 = state_14067;(statearr_14078[9] = inst_14060);
return statearr_14078;
})();var statearr_14079_14097 = state_14067__$1;(statearr_14079_14097[2] = null);
(statearr_14079_14097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14068 === 9))
{var state_14067__$1 = state_14067;var statearr_14080_14098 = state_14067__$1;(statearr_14080_14098[2] = tc);
(statearr_14080_14098[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14068 === 10))
{var state_14067__$1 = state_14067;var statearr_14081_14099 = state_14067__$1;(statearr_14081_14099[2] = fc);
(statearr_14081_14099[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14068 === 11))
{var inst_14048 = (state_14067[7]);var inst_14058 = (state_14067[2]);var state_14067__$1 = state_14067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14067__$1,8,inst_14058,inst_14048);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14085 = (new Array(10));(statearr_14085[0] = state_machine__5425__auto__);
(statearr_14085[1] = 1);
return statearr_14085;
});
var state_machine__5425__auto____1 = (function (state_14067){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14067);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14086){if((e14086 instanceof Object))
{var ex__5428__auto__ = e14086;var statearr_14087_14100 = state_14067;(statearr_14087_14100[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14101 = state_14067;
state_14067 = G__14101;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14067){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14088 = f__5495__auto__.call(null);(statearr_14088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14089);
return statearr_14088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14148){var state_val_14149 = (state_14148[1]);if((state_val_14149 === 7))
{var inst_14144 = (state_14148[2]);var state_14148__$1 = state_14148;var statearr_14150_14166 = state_14148__$1;(statearr_14150_14166[2] = inst_14144);
(statearr_14150_14166[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 6))
{var inst_14137 = (state_14148[7]);var inst_14134 = (state_14148[8]);var inst_14141 = f.call(null,inst_14134,inst_14137);var inst_14134__$1 = inst_14141;var state_14148__$1 = (function (){var statearr_14151 = state_14148;(statearr_14151[8] = inst_14134__$1);
return statearr_14151;
})();var statearr_14152_14167 = state_14148__$1;(statearr_14152_14167[2] = null);
(statearr_14152_14167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 5))
{var inst_14134 = (state_14148[8]);var state_14148__$1 = state_14148;var statearr_14153_14168 = state_14148__$1;(statearr_14153_14168[2] = inst_14134);
(statearr_14153_14168[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 4))
{var inst_14137 = (state_14148[7]);var inst_14137__$1 = (state_14148[2]);var inst_14138 = (inst_14137__$1 == null);var state_14148__$1 = (function (){var statearr_14154 = state_14148;(statearr_14154[7] = inst_14137__$1);
return statearr_14154;
})();if(cljs.core.truth_(inst_14138))
{var statearr_14155_14169 = state_14148__$1;(statearr_14155_14169[1] = 5);
} else
{var statearr_14156_14170 = state_14148__$1;(statearr_14156_14170[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14149 === 3))
{var inst_14146 = (state_14148[2]);var state_14148__$1 = state_14148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14148__$1,inst_14146);
} else
{if((state_val_14149 === 2))
{var state_14148__$1 = state_14148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14148__$1,4,ch);
} else
{if((state_val_14149 === 1))
{var inst_14134 = init;var state_14148__$1 = (function (){var statearr_14157 = state_14148;(statearr_14157[8] = inst_14134);
return statearr_14157;
})();var statearr_14158_14171 = state_14148__$1;(statearr_14158_14171[2] = null);
(statearr_14158_14171[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14162 = (new Array(9));(statearr_14162[0] = state_machine__5425__auto__);
(statearr_14162[1] = 1);
return statearr_14162;
});
var state_machine__5425__auto____1 = (function (state_14148){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14163){if((e14163 instanceof Object))
{var ex__5428__auto__ = e14163;var statearr_14164_14172 = state_14148;(statearr_14164_14172[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14173 = state_14148;
state_14148 = G__14173;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14148){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14165 = f__5495__auto__.call(null);(statearr_14165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_14165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14235){var state_val_14236 = (state_14235[1]);if((state_val_14236 === 1))
{var inst_14215 = cljs.core.seq.call(null,coll);var inst_14216 = inst_14215;var state_14235__$1 = (function (){var statearr_14237 = state_14235;(statearr_14237[7] = inst_14216);
return statearr_14237;
})();var statearr_14238_14256 = state_14235__$1;(statearr_14238_14256[2] = null);
(statearr_14238_14256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 2))
{var inst_14216 = (state_14235[7]);var state_14235__$1 = state_14235;if(cljs.core.truth_(inst_14216))
{var statearr_14239_14257 = state_14235__$1;(statearr_14239_14257[1] = 4);
} else
{var statearr_14240_14258 = state_14235__$1;(statearr_14240_14258[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 3))
{var inst_14233 = (state_14235[2]);var state_14235__$1 = state_14235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14235__$1,inst_14233);
} else
{if((state_val_14236 === 4))
{var inst_14216 = (state_14235[7]);var inst_14219 = cljs.core.first.call(null,inst_14216);var state_14235__$1 = state_14235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14235__$1,7,ch,inst_14219);
} else
{if((state_val_14236 === 5))
{var state_14235__$1 = state_14235;if(cljs.core.truth_(close_QMARK_))
{var statearr_14241_14259 = state_14235__$1;(statearr_14241_14259[1] = 8);
} else
{var statearr_14242_14260 = state_14235__$1;(statearr_14242_14260[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 6))
{var inst_14231 = (state_14235[2]);var state_14235__$1 = state_14235;var statearr_14243_14261 = state_14235__$1;(statearr_14243_14261[2] = inst_14231);
(statearr_14243_14261[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 7))
{var inst_14216 = (state_14235[7]);var inst_14221 = (state_14235[2]);var inst_14222 = cljs.core.next.call(null,inst_14216);var inst_14216__$1 = inst_14222;var state_14235__$1 = (function (){var statearr_14244 = state_14235;(statearr_14244[7] = inst_14216__$1);
(statearr_14244[8] = inst_14221);
return statearr_14244;
})();var statearr_14245_14262 = state_14235__$1;(statearr_14245_14262[2] = null);
(statearr_14245_14262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 8))
{var inst_14226 = cljs.core.async.close_BANG_.call(null,ch);var state_14235__$1 = state_14235;var statearr_14246_14263 = state_14235__$1;(statearr_14246_14263[2] = inst_14226);
(statearr_14246_14263[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 9))
{var state_14235__$1 = state_14235;var statearr_14247_14264 = state_14235__$1;(statearr_14247_14264[2] = null);
(statearr_14247_14264[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14236 === 10))
{var inst_14229 = (state_14235[2]);var state_14235__$1 = state_14235;var statearr_14248_14265 = state_14235__$1;(statearr_14248_14265[2] = inst_14229);
(statearr_14248_14265[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14252 = (new Array(9));(statearr_14252[0] = state_machine__5425__auto__);
(statearr_14252[1] = 1);
return statearr_14252;
});
var state_machine__5425__auto____1 = (function (state_14235){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14235);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14253){if((e14253 instanceof Object))
{var ex__5428__auto__ = e14253;var statearr_14254_14266 = state_14235;(statearr_14254_14266[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14235);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14267 = state_14235;
state_14235 = G__14267;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14235){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14255 = f__5495__auto__.call(null);(statearr_14255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_14255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3124__auto__ = _;if(and__3124__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3729__auto__ = (((_ == null))?null:_);return (function (){var or__3133__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14482 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14482 = (function (cs,ch,mult,meta14483){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14483 = meta14483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14482.cljs$lang$type = true;
cljs.core.async.t14482.cljs$lang$ctorStr = "cljs.core.async/t14482";
cljs.core.async.t14482.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14482");
});})(cs))
;
cljs.core.async.t14482.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14482.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14482.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14482.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14482.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14484){var self__ = this;
var _14484__$1 = this;return self__.meta14483;
});})(cs))
;
cljs.core.async.t14482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14484,meta14483__$1){var self__ = this;
var _14484__$1 = this;return (new cljs.core.async.t14482(self__.cs,self__.ch,self__.mult,meta14483__$1));
});})(cs))
;
cljs.core.async.__GT_t14482 = ((function (cs){
return (function __GT_t14482(cs__$1,ch__$1,mult__$1,meta14483){return (new cljs.core.async.t14482(cs__$1,ch__$1,mult__$1,meta14483));
});})(cs))
;
}
return (new cljs.core.async.t14482(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5494__auto___14696 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14614){var state_val_14615 = (state_14614[1]);if((state_val_14615 === 32))
{var inst_14563 = (state_14614[7]);var inst_14487 = (state_14614[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14614,31,Object,null,30);var inst_14570 = cljs.core.async.put_BANG_.call(null,inst_14563,inst_14487,done);var state_14614__$1 = state_14614;var statearr_14616_14697 = state_14614__$1;(statearr_14616_14697[2] = inst_14570);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14614__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 1))
{var state_14614__$1 = state_14614;var statearr_14617_14698 = state_14614__$1;(statearr_14617_14698[2] = null);
(statearr_14617_14698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 33))
{var inst_14576 = (state_14614[9]);var inst_14578 = cljs.core.chunked_seq_QMARK_.call(null,inst_14576);var state_14614__$1 = state_14614;if(inst_14578)
{var statearr_14618_14699 = state_14614__$1;(statearr_14618_14699[1] = 36);
} else
{var statearr_14619_14700 = state_14614__$1;(statearr_14619_14700[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 2))
{var state_14614__$1 = state_14614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14614__$1,4,ch);
} else
{if((state_val_14615 === 34))
{var state_14614__$1 = state_14614;var statearr_14620_14701 = state_14614__$1;(statearr_14620_14701[2] = null);
(statearr_14620_14701[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 3))
{var inst_14612 = (state_14614[2]);var state_14614__$1 = state_14614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14614__$1,inst_14612);
} else
{if((state_val_14615 === 35))
{var inst_14601 = (state_14614[2]);var state_14614__$1 = state_14614;var statearr_14621_14702 = state_14614__$1;(statearr_14621_14702[2] = inst_14601);
(statearr_14621_14702[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 4))
{var inst_14487 = (state_14614[8]);var inst_14487__$1 = (state_14614[2]);var inst_14488 = (inst_14487__$1 == null);var state_14614__$1 = (function (){var statearr_14622 = state_14614;(statearr_14622[8] = inst_14487__$1);
return statearr_14622;
})();if(cljs.core.truth_(inst_14488))
{var statearr_14623_14703 = state_14614__$1;(statearr_14623_14703[1] = 5);
} else
{var statearr_14624_14704 = state_14614__$1;(statearr_14624_14704[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 36))
{var inst_14576 = (state_14614[9]);var inst_14580 = cljs.core.chunk_first.call(null,inst_14576);var inst_14581 = cljs.core.chunk_rest.call(null,inst_14576);var inst_14582 = cljs.core.count.call(null,inst_14580);var inst_14555 = inst_14581;var inst_14556 = inst_14580;var inst_14557 = inst_14582;var inst_14558 = 0;var state_14614__$1 = (function (){var statearr_14625 = state_14614;(statearr_14625[10] = inst_14558);
(statearr_14625[11] = inst_14557);
(statearr_14625[12] = inst_14556);
(statearr_14625[13] = inst_14555);
return statearr_14625;
})();var statearr_14626_14705 = state_14614__$1;(statearr_14626_14705[2] = null);
(statearr_14626_14705[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 5))
{var inst_14494 = cljs.core.deref.call(null,cs);var inst_14495 = cljs.core.seq.call(null,inst_14494);var inst_14496 = inst_14495;var inst_14497 = null;var inst_14498 = 0;var inst_14499 = 0;var state_14614__$1 = (function (){var statearr_14627 = state_14614;(statearr_14627[14] = inst_14499);
(statearr_14627[15] = inst_14497);
(statearr_14627[16] = inst_14498);
(statearr_14627[17] = inst_14496);
return statearr_14627;
})();var statearr_14628_14706 = state_14614__$1;(statearr_14628_14706[2] = null);
(statearr_14628_14706[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 37))
{var inst_14576 = (state_14614[9]);var inst_14585 = cljs.core.first.call(null,inst_14576);var state_14614__$1 = (function (){var statearr_14629 = state_14614;(statearr_14629[18] = inst_14585);
return statearr_14629;
})();var statearr_14630_14707 = state_14614__$1;(statearr_14630_14707[2] = null);
(statearr_14630_14707[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 6))
{var inst_14546 = cljs.core.deref.call(null,cs);var inst_14547 = cljs.core.keys.call(null,inst_14546);var inst_14548 = cljs.core.count.call(null,inst_14547);var inst_14549 = cljs.core.reset_BANG_.call(null,dctr,inst_14548);var inst_14554 = cljs.core.seq.call(null,inst_14547);var inst_14555 = inst_14554;var inst_14556 = null;var inst_14557 = 0;var inst_14558 = 0;var state_14614__$1 = (function (){var statearr_14631 = state_14614;(statearr_14631[10] = inst_14558);
(statearr_14631[11] = inst_14557);
(statearr_14631[12] = inst_14556);
(statearr_14631[19] = inst_14549);
(statearr_14631[13] = inst_14555);
return statearr_14631;
})();var statearr_14632_14708 = state_14614__$1;(statearr_14632_14708[2] = null);
(statearr_14632_14708[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 38))
{var inst_14598 = (state_14614[2]);var state_14614__$1 = state_14614;var statearr_14633_14709 = state_14614__$1;(statearr_14633_14709[2] = inst_14598);
(statearr_14633_14709[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 7))
{var inst_14610 = (state_14614[2]);var state_14614__$1 = state_14614;var statearr_14634_14710 = state_14614__$1;(statearr_14634_14710[2] = inst_14610);
(statearr_14634_14710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 39))
{var inst_14576 = (state_14614[9]);var inst_14594 = (state_14614[2]);var inst_14595 = cljs.core.next.call(null,inst_14576);var inst_14555 = inst_14595;var inst_14556 = null;var inst_14557 = 0;var inst_14558 = 0;var state_14614__$1 = (function (){var statearr_14635 = state_14614;(statearr_14635[10] = inst_14558);
(statearr_14635[11] = inst_14557);
(statearr_14635[12] = inst_14556);
(statearr_14635[13] = inst_14555);
(statearr_14635[20] = inst_14594);
return statearr_14635;
})();var statearr_14636_14711 = state_14614__$1;(statearr_14636_14711[2] = null);
(statearr_14636_14711[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 8))
{var inst_14499 = (state_14614[14]);var inst_14498 = (state_14614[16]);var inst_14501 = (inst_14499 < inst_14498);var inst_14502 = inst_14501;var state_14614__$1 = state_14614;if(cljs.core.truth_(inst_14502))
{var statearr_14637_14712 = state_14614__$1;(statearr_14637_14712[1] = 10);
} else
{var statearr_14638_14713 = state_14614__$1;(statearr_14638_14713[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 40))
{var inst_14585 = (state_14614[18]);var inst_14586 = (state_14614[2]);var inst_14587 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14588 = cljs.core.async.untap_STAR_.call(null,m,inst_14585);var state_14614__$1 = (function (){var statearr_14639 = state_14614;(statearr_14639[21] = inst_14586);
(statearr_14639[22] = inst_14587);
return statearr_14639;
})();var statearr_14640_14714 = state_14614__$1;(statearr_14640_14714[2] = inst_14588);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14614__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 9))
{var inst_14544 = (state_14614[2]);var state_14614__$1 = state_14614;var statearr_14641_14715 = state_14614__$1;(statearr_14641_14715[2] = inst_14544);
(statearr_14641_14715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 41))
{var inst_14487 = (state_14614[8]);var inst_14585 = (state_14614[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14614,40,Object,null,39);var inst_14592 = cljs.core.async.put_BANG_.call(null,inst_14585,inst_14487,done);var state_14614__$1 = state_14614;var statearr_14642_14716 = state_14614__$1;(statearr_14642_14716[2] = inst_14592);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14614__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 10))
{var inst_14499 = (state_14614[14]);var inst_14497 = (state_14614[15]);var inst_14505 = cljs.core._nth.call(null,inst_14497,inst_14499);var inst_14506 = cljs.core.nth.call(null,inst_14505,0,null);var inst_14507 = cljs.core.nth.call(null,inst_14505,1,null);var state_14614__$1 = (function (){var statearr_14643 = state_14614;(statearr_14643[23] = inst_14506);
return statearr_14643;
})();if(cljs.core.truth_(inst_14507))
{var statearr_14644_14717 = state_14614__$1;(statearr_14644_14717[1] = 13);
} else
{var statearr_14645_14718 = state_14614__$1;(statearr_14645_14718[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 42))
{var inst_14607 = (state_14614[2]);var state_14614__$1 = (function (){var statearr_14646 = state_14614;(statearr_14646[24] = inst_14607);
return statearr_14646;
})();var statearr_14647_14719 = state_14614__$1;(statearr_14647_14719[2] = null);
(statearr_14647_14719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 11))
{var inst_14496 = (state_14614[17]);var inst_14516 = (state_14614[25]);var inst_14516__$1 = cljs.core.seq.call(null,inst_14496);var state_14614__$1 = (function (){var statearr_14648 = state_14614;(statearr_14648[25] = inst_14516__$1);
return statearr_14648;
})();if(inst_14516__$1)
{var statearr_14649_14720 = state_14614__$1;(statearr_14649_14720[1] = 16);
} else
{var statearr_14650_14721 = state_14614__$1;(statearr_14650_14721[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 12))
{var inst_14542 = (state_14614[2]);var state_14614__$1 = state_14614;var statearr_14651_14722 = state_14614__$1;(statearr_14651_14722[2] = inst_14542);
(statearr_14651_14722[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 13))
{var inst_14506 = (state_14614[23]);var inst_14509 = cljs.core.async.close_BANG_.call(null,inst_14506);var state_14614__$1 = state_14614;var statearr_14655_14723 = state_14614__$1;(statearr_14655_14723[2] = inst_14509);
(statearr_14655_14723[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 14))
{var state_14614__$1 = state_14614;var statearr_14656_14724 = state_14614__$1;(statearr_14656_14724[2] = null);
(statearr_14656_14724[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 15))
{var inst_14499 = (state_14614[14]);var inst_14497 = (state_14614[15]);var inst_14498 = (state_14614[16]);var inst_14496 = (state_14614[17]);var inst_14512 = (state_14614[2]);var inst_14513 = (inst_14499 + 1);var tmp14652 = inst_14497;var tmp14653 = inst_14498;var tmp14654 = inst_14496;var inst_14496__$1 = tmp14654;var inst_14497__$1 = tmp14652;var inst_14498__$1 = tmp14653;var inst_14499__$1 = inst_14513;var state_14614__$1 = (function (){var statearr_14657 = state_14614;(statearr_14657[14] = inst_14499__$1);
(statearr_14657[15] = inst_14497__$1);
(statearr_14657[16] = inst_14498__$1);
(statearr_14657[17] = inst_14496__$1);
(statearr_14657[26] = inst_14512);
return statearr_14657;
})();var statearr_14658_14725 = state_14614__$1;(statearr_14658_14725[2] = null);
(statearr_14658_14725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 16))
{var inst_14516 = (state_14614[25]);var inst_14518 = cljs.core.chunked_seq_QMARK_.call(null,inst_14516);var state_14614__$1 = state_14614;if(inst_14518)
{var statearr_14659_14726 = state_14614__$1;(statearr_14659_14726[1] = 19);
} else
{var statearr_14660_14727 = state_14614__$1;(statearr_14660_14727[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 17))
{var state_14614__$1 = state_14614;var statearr_14661_14728 = state_14614__$1;(statearr_14661_14728[2] = null);
(statearr_14661_14728[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 18))
{var inst_14540 = (state_14614[2]);var state_14614__$1 = state_14614;var statearr_14662_14729 = state_14614__$1;(statearr_14662_14729[2] = inst_14540);
(statearr_14662_14729[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 19))
{var inst_14516 = (state_14614[25]);var inst_14520 = cljs.core.chunk_first.call(null,inst_14516);var inst_14521 = cljs.core.chunk_rest.call(null,inst_14516);var inst_14522 = cljs.core.count.call(null,inst_14520);var inst_14496 = inst_14521;var inst_14497 = inst_14520;var inst_14498 = inst_14522;var inst_14499 = 0;var state_14614__$1 = (function (){var statearr_14663 = state_14614;(statearr_14663[14] = inst_14499);
(statearr_14663[15] = inst_14497);
(statearr_14663[16] = inst_14498);
(statearr_14663[17] = inst_14496);
return statearr_14663;
})();var statearr_14664_14730 = state_14614__$1;(statearr_14664_14730[2] = null);
(statearr_14664_14730[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 20))
{var inst_14516 = (state_14614[25]);var inst_14526 = cljs.core.first.call(null,inst_14516);var inst_14527 = cljs.core.nth.call(null,inst_14526,0,null);var inst_14528 = cljs.core.nth.call(null,inst_14526,1,null);var state_14614__$1 = (function (){var statearr_14665 = state_14614;(statearr_14665[27] = inst_14527);
return statearr_14665;
})();if(cljs.core.truth_(inst_14528))
{var statearr_14666_14731 = state_14614__$1;(statearr_14666_14731[1] = 22);
} else
{var statearr_14667_14732 = state_14614__$1;(statearr_14667_14732[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 21))
{var inst_14537 = (state_14614[2]);var state_14614__$1 = state_14614;var statearr_14668_14733 = state_14614__$1;(statearr_14668_14733[2] = inst_14537);
(statearr_14668_14733[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 22))
{var inst_14527 = (state_14614[27]);var inst_14530 = cljs.core.async.close_BANG_.call(null,inst_14527);var state_14614__$1 = state_14614;var statearr_14669_14734 = state_14614__$1;(statearr_14669_14734[2] = inst_14530);
(statearr_14669_14734[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 23))
{var state_14614__$1 = state_14614;var statearr_14670_14735 = state_14614__$1;(statearr_14670_14735[2] = null);
(statearr_14670_14735[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 24))
{var inst_14516 = (state_14614[25]);var inst_14533 = (state_14614[2]);var inst_14534 = cljs.core.next.call(null,inst_14516);var inst_14496 = inst_14534;var inst_14497 = null;var inst_14498 = 0;var inst_14499 = 0;var state_14614__$1 = (function (){var statearr_14671 = state_14614;(statearr_14671[28] = inst_14533);
(statearr_14671[14] = inst_14499);
(statearr_14671[15] = inst_14497);
(statearr_14671[16] = inst_14498);
(statearr_14671[17] = inst_14496);
return statearr_14671;
})();var statearr_14672_14736 = state_14614__$1;(statearr_14672_14736[2] = null);
(statearr_14672_14736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 25))
{var inst_14558 = (state_14614[10]);var inst_14557 = (state_14614[11]);var inst_14560 = (inst_14558 < inst_14557);var inst_14561 = inst_14560;var state_14614__$1 = state_14614;if(cljs.core.truth_(inst_14561))
{var statearr_14673_14737 = state_14614__$1;(statearr_14673_14737[1] = 27);
} else
{var statearr_14674_14738 = state_14614__$1;(statearr_14674_14738[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 26))
{var inst_14605 = (state_14614[2]);var state_14614__$1 = (function (){var statearr_14675 = state_14614;(statearr_14675[29] = inst_14605);
return statearr_14675;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14614__$1,42,dchan);
} else
{if((state_val_14615 === 27))
{var inst_14558 = (state_14614[10]);var inst_14556 = (state_14614[12]);var inst_14563 = cljs.core._nth.call(null,inst_14556,inst_14558);var state_14614__$1 = (function (){var statearr_14676 = state_14614;(statearr_14676[7] = inst_14563);
return statearr_14676;
})();var statearr_14677_14739 = state_14614__$1;(statearr_14677_14739[2] = null);
(statearr_14677_14739[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 28))
{var inst_14576 = (state_14614[9]);var inst_14555 = (state_14614[13]);var inst_14576__$1 = cljs.core.seq.call(null,inst_14555);var state_14614__$1 = (function (){var statearr_14681 = state_14614;(statearr_14681[9] = inst_14576__$1);
return statearr_14681;
})();if(inst_14576__$1)
{var statearr_14682_14740 = state_14614__$1;(statearr_14682_14740[1] = 33);
} else
{var statearr_14683_14741 = state_14614__$1;(statearr_14683_14741[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 29))
{var inst_14603 = (state_14614[2]);var state_14614__$1 = state_14614;var statearr_14684_14742 = state_14614__$1;(statearr_14684_14742[2] = inst_14603);
(statearr_14684_14742[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 30))
{var inst_14558 = (state_14614[10]);var inst_14557 = (state_14614[11]);var inst_14556 = (state_14614[12]);var inst_14555 = (state_14614[13]);var inst_14572 = (state_14614[2]);var inst_14573 = (inst_14558 + 1);var tmp14678 = inst_14557;var tmp14679 = inst_14556;var tmp14680 = inst_14555;var inst_14555__$1 = tmp14680;var inst_14556__$1 = tmp14679;var inst_14557__$1 = tmp14678;var inst_14558__$1 = inst_14573;var state_14614__$1 = (function (){var statearr_14685 = state_14614;(statearr_14685[30] = inst_14572);
(statearr_14685[10] = inst_14558__$1);
(statearr_14685[11] = inst_14557__$1);
(statearr_14685[12] = inst_14556__$1);
(statearr_14685[13] = inst_14555__$1);
return statearr_14685;
})();var statearr_14686_14743 = state_14614__$1;(statearr_14686_14743[2] = null);
(statearr_14686_14743[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14615 === 31))
{var inst_14563 = (state_14614[7]);var inst_14564 = (state_14614[2]);var inst_14565 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14566 = cljs.core.async.untap_STAR_.call(null,m,inst_14563);var state_14614__$1 = (function (){var statearr_14687 = state_14614;(statearr_14687[31] = inst_14564);
(statearr_14687[32] = inst_14565);
return statearr_14687;
})();var statearr_14688_14744 = state_14614__$1;(statearr_14688_14744[2] = inst_14566);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14614__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14692 = (new Array(33));(statearr_14692[0] = state_machine__5425__auto__);
(statearr_14692[1] = 1);
return statearr_14692;
});
var state_machine__5425__auto____1 = (function (state_14614){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14693){if((e14693 instanceof Object))
{var ex__5428__auto__ = e14693;var statearr_14694_14745 = state_14614;(statearr_14694_14745[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14746 = state_14614;
state_14614 = G__14746;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14614){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14695 = f__5495__auto__.call(null);(statearr_14695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14696);
return statearr_14695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14856 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14857){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta14857 = meta14857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14856.cljs$lang$type = true;
cljs.core.async.t14856.cljs$lang$ctorStr = "cljs.core.async/t14856";
cljs.core.async.t14856.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t14856");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14856.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14856.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14856.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14856.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14856.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14856.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14856.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14858){var self__ = this;
var _14858__$1 = this;return self__.meta14857;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14858,meta14857__$1){var self__ = this;
var _14858__$1 = this;return (new cljs.core.async.t14856(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14857__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14856 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14856(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14857){return (new cljs.core.async.t14856(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14857));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14856(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5494__auto___14965 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14923){var state_val_14924 = (state_14923[1]);if((state_val_14924 === 1))
{var inst_14862 = (state_14923[7]);var inst_14862__$1 = calc_state.call(null);var inst_14863 = cljs.core.seq_QMARK_.call(null,inst_14862__$1);var state_14923__$1 = (function (){var statearr_14925 = state_14923;(statearr_14925[7] = inst_14862__$1);
return statearr_14925;
})();if(inst_14863)
{var statearr_14926_14966 = state_14923__$1;(statearr_14926_14966[1] = 2);
} else
{var statearr_14927_14967 = state_14923__$1;(statearr_14927_14967[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 2))
{var inst_14862 = (state_14923[7]);var inst_14865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14862);var state_14923__$1 = state_14923;var statearr_14928_14968 = state_14923__$1;(statearr_14928_14968[2] = inst_14865);
(statearr_14928_14968[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 3))
{var inst_14862 = (state_14923[7]);var state_14923__$1 = state_14923;var statearr_14929_14969 = state_14923__$1;(statearr_14929_14969[2] = inst_14862);
(statearr_14929_14969[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 4))
{var inst_14862 = (state_14923[7]);var inst_14868 = (state_14923[2]);var inst_14869 = cljs.core.get.call(null,inst_14868,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14870 = cljs.core.get.call(null,inst_14868,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14871 = cljs.core.get.call(null,inst_14868,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14872 = inst_14862;var state_14923__$1 = (function (){var statearr_14930 = state_14923;(statearr_14930[8] = inst_14869);
(statearr_14930[9] = inst_14871);
(statearr_14930[10] = inst_14872);
(statearr_14930[11] = inst_14870);
return statearr_14930;
})();var statearr_14931_14970 = state_14923__$1;(statearr_14931_14970[2] = null);
(statearr_14931_14970[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 5))
{var inst_14872 = (state_14923[10]);var inst_14875 = cljs.core.seq_QMARK_.call(null,inst_14872);var state_14923__$1 = state_14923;if(inst_14875)
{var statearr_14932_14971 = state_14923__$1;(statearr_14932_14971[1] = 7);
} else
{var statearr_14933_14972 = state_14923__$1;(statearr_14933_14972[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 6))
{var inst_14921 = (state_14923[2]);var state_14923__$1 = state_14923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14923__$1,inst_14921);
} else
{if((state_val_14924 === 7))
{var inst_14872 = (state_14923[10]);var inst_14877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14872);var state_14923__$1 = state_14923;var statearr_14934_14973 = state_14923__$1;(statearr_14934_14973[2] = inst_14877);
(statearr_14934_14973[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 8))
{var inst_14872 = (state_14923[10]);var state_14923__$1 = state_14923;var statearr_14935_14974 = state_14923__$1;(statearr_14935_14974[2] = inst_14872);
(statearr_14935_14974[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 9))
{var inst_14880 = (state_14923[12]);var inst_14880__$1 = (state_14923[2]);var inst_14881 = cljs.core.get.call(null,inst_14880__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14882 = cljs.core.get.call(null,inst_14880__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14883 = cljs.core.get.call(null,inst_14880__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14923__$1 = (function (){var statearr_14936 = state_14923;(statearr_14936[13] = inst_14882);
(statearr_14936[14] = inst_14883);
(statearr_14936[12] = inst_14880__$1);
return statearr_14936;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14923__$1,10,inst_14881);
} else
{if((state_val_14924 === 10))
{var inst_14888 = (state_14923[15]);var inst_14887 = (state_14923[16]);var inst_14886 = (state_14923[2]);var inst_14887__$1 = cljs.core.nth.call(null,inst_14886,0,null);var inst_14888__$1 = cljs.core.nth.call(null,inst_14886,1,null);var inst_14889 = (inst_14887__$1 == null);var inst_14890 = cljs.core._EQ_.call(null,inst_14888__$1,change);var inst_14891 = (inst_14889) || (inst_14890);var state_14923__$1 = (function (){var statearr_14937 = state_14923;(statearr_14937[15] = inst_14888__$1);
(statearr_14937[16] = inst_14887__$1);
return statearr_14937;
})();if(cljs.core.truth_(inst_14891))
{var statearr_14938_14975 = state_14923__$1;(statearr_14938_14975[1] = 11);
} else
{var statearr_14939_14976 = state_14923__$1;(statearr_14939_14976[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 11))
{var inst_14887 = (state_14923[16]);var inst_14893 = (inst_14887 == null);var state_14923__$1 = state_14923;if(cljs.core.truth_(inst_14893))
{var statearr_14940_14977 = state_14923__$1;(statearr_14940_14977[1] = 14);
} else
{var statearr_14941_14978 = state_14923__$1;(statearr_14941_14978[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 12))
{var inst_14883 = (state_14923[14]);var inst_14888 = (state_14923[15]);var inst_14902 = (state_14923[17]);var inst_14902__$1 = inst_14883.call(null,inst_14888);var state_14923__$1 = (function (){var statearr_14942 = state_14923;(statearr_14942[17] = inst_14902__$1);
return statearr_14942;
})();if(cljs.core.truth_(inst_14902__$1))
{var statearr_14943_14979 = state_14923__$1;(statearr_14943_14979[1] = 17);
} else
{var statearr_14944_14980 = state_14923__$1;(statearr_14944_14980[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 13))
{var inst_14919 = (state_14923[2]);var state_14923__$1 = state_14923;var statearr_14945_14981 = state_14923__$1;(statearr_14945_14981[2] = inst_14919);
(statearr_14945_14981[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 14))
{var inst_14888 = (state_14923[15]);var inst_14895 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14888);var state_14923__$1 = state_14923;var statearr_14946_14982 = state_14923__$1;(statearr_14946_14982[2] = inst_14895);
(statearr_14946_14982[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 15))
{var state_14923__$1 = state_14923;var statearr_14947_14983 = state_14923__$1;(statearr_14947_14983[2] = null);
(statearr_14947_14983[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 16))
{var inst_14898 = (state_14923[2]);var inst_14899 = calc_state.call(null);var inst_14872 = inst_14899;var state_14923__$1 = (function (){var statearr_14948 = state_14923;(statearr_14948[18] = inst_14898);
(statearr_14948[10] = inst_14872);
return statearr_14948;
})();var statearr_14949_14984 = state_14923__$1;(statearr_14949_14984[2] = null);
(statearr_14949_14984[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 17))
{var inst_14902 = (state_14923[17]);var state_14923__$1 = state_14923;var statearr_14950_14985 = state_14923__$1;(statearr_14950_14985[2] = inst_14902);
(statearr_14950_14985[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 18))
{var inst_14882 = (state_14923[13]);var inst_14883 = (state_14923[14]);var inst_14888 = (state_14923[15]);var inst_14905 = cljs.core.empty_QMARK_.call(null,inst_14883);var inst_14906 = inst_14882.call(null,inst_14888);var inst_14907 = cljs.core.not.call(null,inst_14906);var inst_14908 = (inst_14905) && (inst_14907);var state_14923__$1 = state_14923;var statearr_14951_14986 = state_14923__$1;(statearr_14951_14986[2] = inst_14908);
(statearr_14951_14986[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 19))
{var inst_14910 = (state_14923[2]);var state_14923__$1 = state_14923;if(cljs.core.truth_(inst_14910))
{var statearr_14952_14987 = state_14923__$1;(statearr_14952_14987[1] = 20);
} else
{var statearr_14953_14988 = state_14923__$1;(statearr_14953_14988[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 20))
{var inst_14887 = (state_14923[16]);var state_14923__$1 = state_14923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14923__$1,23,out,inst_14887);
} else
{if((state_val_14924 === 21))
{var state_14923__$1 = state_14923;var statearr_14954_14989 = state_14923__$1;(statearr_14954_14989[2] = null);
(statearr_14954_14989[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 22))
{var inst_14880 = (state_14923[12]);var inst_14916 = (state_14923[2]);var inst_14872 = inst_14880;var state_14923__$1 = (function (){var statearr_14955 = state_14923;(statearr_14955[19] = inst_14916);
(statearr_14955[10] = inst_14872);
return statearr_14955;
})();var statearr_14956_14990 = state_14923__$1;(statearr_14956_14990[2] = null);
(statearr_14956_14990[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14924 === 23))
{var inst_14913 = (state_14923[2]);var state_14923__$1 = state_14923;var statearr_14957_14991 = state_14923__$1;(statearr_14957_14991[2] = inst_14913);
(statearr_14957_14991[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14961 = (new Array(20));(statearr_14961[0] = state_machine__5425__auto__);
(statearr_14961[1] = 1);
return statearr_14961;
});
var state_machine__5425__auto____1 = (function (state_14923){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14962){if((e14962 instanceof Object))
{var ex__5428__auto__ = e14962;var statearr_14963_14992 = state_14923;(statearr_14963_14992[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14923);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14993 = state_14923;
state_14923 = G__14993;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14923){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14964 = f__5495__auto__.call(null);(statearr_14964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14965);
return statearr_14964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3133__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3133__auto__,mults){
return (function (p1__14994_SHARP_){if(cljs.core.truth_(p1__14994_SHARP_.call(null,topic)))
{return p1__14994_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14994_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3133__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15119 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15120){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15120 = meta15120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15119.cljs$lang$type = true;
cljs.core.async.t15119.cljs$lang$ctorStr = "cljs.core.async/t15119";
cljs.core.async.t15119.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t15119");
});})(mults,ensure_mult))
;
cljs.core.async.t15119.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15119.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15119.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15119.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15121){var self__ = this;
var _15121__$1 = this;return self__.meta15120;
});})(mults,ensure_mult))
;
cljs.core.async.t15119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15121,meta15120__$1){var self__ = this;
var _15121__$1 = this;return (new cljs.core.async.t15119(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15120__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15119 = ((function (mults,ensure_mult){
return (function __GT_t15119(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15120){return (new cljs.core.async.t15119(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15120));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15119(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5494__auto___15243 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15195){var state_val_15196 = (state_15195[1]);if((state_val_15196 === 1))
{var state_15195__$1 = state_15195;var statearr_15197_15244 = state_15195__$1;(statearr_15197_15244[2] = null);
(statearr_15197_15244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 2))
{var state_15195__$1 = state_15195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15195__$1,4,ch);
} else
{if((state_val_15196 === 3))
{var inst_15193 = (state_15195[2]);var state_15195__$1 = state_15195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15195__$1,inst_15193);
} else
{if((state_val_15196 === 4))
{var inst_15124 = (state_15195[7]);var inst_15124__$1 = (state_15195[2]);var inst_15125 = (inst_15124__$1 == null);var state_15195__$1 = (function (){var statearr_15198 = state_15195;(statearr_15198[7] = inst_15124__$1);
return statearr_15198;
})();if(cljs.core.truth_(inst_15125))
{var statearr_15199_15245 = state_15195__$1;(statearr_15199_15245[1] = 5);
} else
{var statearr_15200_15246 = state_15195__$1;(statearr_15200_15246[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 5))
{var inst_15131 = cljs.core.deref.call(null,mults);var inst_15132 = cljs.core.vals.call(null,inst_15131);var inst_15133 = cljs.core.seq.call(null,inst_15132);var inst_15134 = inst_15133;var inst_15135 = null;var inst_15136 = 0;var inst_15137 = 0;var state_15195__$1 = (function (){var statearr_15201 = state_15195;(statearr_15201[8] = inst_15135);
(statearr_15201[9] = inst_15136);
(statearr_15201[10] = inst_15134);
(statearr_15201[11] = inst_15137);
return statearr_15201;
})();var statearr_15202_15247 = state_15195__$1;(statearr_15202_15247[2] = null);
(statearr_15202_15247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 6))
{var inst_15174 = (state_15195[12]);var inst_15124 = (state_15195[7]);var inst_15172 = (state_15195[13]);var inst_15172__$1 = topic_fn.call(null,inst_15124);var inst_15173 = cljs.core.deref.call(null,mults);var inst_15174__$1 = cljs.core.get.call(null,inst_15173,inst_15172__$1);var state_15195__$1 = (function (){var statearr_15203 = state_15195;(statearr_15203[12] = inst_15174__$1);
(statearr_15203[13] = inst_15172__$1);
return statearr_15203;
})();if(cljs.core.truth_(inst_15174__$1))
{var statearr_15204_15248 = state_15195__$1;(statearr_15204_15248[1] = 19);
} else
{var statearr_15205_15249 = state_15195__$1;(statearr_15205_15249[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 7))
{var inst_15191 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15206_15250 = state_15195__$1;(statearr_15206_15250[2] = inst_15191);
(statearr_15206_15250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 8))
{var inst_15136 = (state_15195[9]);var inst_15137 = (state_15195[11]);var inst_15139 = (inst_15137 < inst_15136);var inst_15140 = inst_15139;var state_15195__$1 = state_15195;if(cljs.core.truth_(inst_15140))
{var statearr_15210_15251 = state_15195__$1;(statearr_15210_15251[1] = 10);
} else
{var statearr_15211_15252 = state_15195__$1;(statearr_15211_15252[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 9))
{var inst_15170 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15212_15253 = state_15195__$1;(statearr_15212_15253[2] = inst_15170);
(statearr_15212_15253[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 10))
{var inst_15135 = (state_15195[8]);var inst_15136 = (state_15195[9]);var inst_15134 = (state_15195[10]);var inst_15137 = (state_15195[11]);var inst_15142 = cljs.core._nth.call(null,inst_15135,inst_15137);var inst_15143 = cljs.core.async.muxch_STAR_.call(null,inst_15142);var inst_15144 = cljs.core.async.close_BANG_.call(null,inst_15143);var inst_15145 = (inst_15137 + 1);var tmp15207 = inst_15135;var tmp15208 = inst_15136;var tmp15209 = inst_15134;var inst_15134__$1 = tmp15209;var inst_15135__$1 = tmp15207;var inst_15136__$1 = tmp15208;var inst_15137__$1 = inst_15145;var state_15195__$1 = (function (){var statearr_15213 = state_15195;(statearr_15213[8] = inst_15135__$1);
(statearr_15213[9] = inst_15136__$1);
(statearr_15213[10] = inst_15134__$1);
(statearr_15213[14] = inst_15144);
(statearr_15213[11] = inst_15137__$1);
return statearr_15213;
})();var statearr_15214_15254 = state_15195__$1;(statearr_15214_15254[2] = null);
(statearr_15214_15254[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 11))
{var inst_15134 = (state_15195[10]);var inst_15148 = (state_15195[15]);var inst_15148__$1 = cljs.core.seq.call(null,inst_15134);var state_15195__$1 = (function (){var statearr_15215 = state_15195;(statearr_15215[15] = inst_15148__$1);
return statearr_15215;
})();if(inst_15148__$1)
{var statearr_15216_15255 = state_15195__$1;(statearr_15216_15255[1] = 13);
} else
{var statearr_15217_15256 = state_15195__$1;(statearr_15217_15256[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 12))
{var inst_15168 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15218_15257 = state_15195__$1;(statearr_15218_15257[2] = inst_15168);
(statearr_15218_15257[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 13))
{var inst_15148 = (state_15195[15]);var inst_15150 = cljs.core.chunked_seq_QMARK_.call(null,inst_15148);var state_15195__$1 = state_15195;if(inst_15150)
{var statearr_15219_15258 = state_15195__$1;(statearr_15219_15258[1] = 16);
} else
{var statearr_15220_15259 = state_15195__$1;(statearr_15220_15259[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 14))
{var state_15195__$1 = state_15195;var statearr_15221_15260 = state_15195__$1;(statearr_15221_15260[2] = null);
(statearr_15221_15260[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 15))
{var inst_15166 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15222_15261 = state_15195__$1;(statearr_15222_15261[2] = inst_15166);
(statearr_15222_15261[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 16))
{var inst_15148 = (state_15195[15]);var inst_15152 = cljs.core.chunk_first.call(null,inst_15148);var inst_15153 = cljs.core.chunk_rest.call(null,inst_15148);var inst_15154 = cljs.core.count.call(null,inst_15152);var inst_15134 = inst_15153;var inst_15135 = inst_15152;var inst_15136 = inst_15154;var inst_15137 = 0;var state_15195__$1 = (function (){var statearr_15223 = state_15195;(statearr_15223[8] = inst_15135);
(statearr_15223[9] = inst_15136);
(statearr_15223[10] = inst_15134);
(statearr_15223[11] = inst_15137);
return statearr_15223;
})();var statearr_15224_15262 = state_15195__$1;(statearr_15224_15262[2] = null);
(statearr_15224_15262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 17))
{var inst_15148 = (state_15195[15]);var inst_15157 = cljs.core.first.call(null,inst_15148);var inst_15158 = cljs.core.async.muxch_STAR_.call(null,inst_15157);var inst_15159 = cljs.core.async.close_BANG_.call(null,inst_15158);var inst_15160 = cljs.core.next.call(null,inst_15148);var inst_15134 = inst_15160;var inst_15135 = null;var inst_15136 = 0;var inst_15137 = 0;var state_15195__$1 = (function (){var statearr_15225 = state_15195;(statearr_15225[8] = inst_15135);
(statearr_15225[9] = inst_15136);
(statearr_15225[10] = inst_15134);
(statearr_15225[11] = inst_15137);
(statearr_15225[16] = inst_15159);
return statearr_15225;
})();var statearr_15226_15263 = state_15195__$1;(statearr_15226_15263[2] = null);
(statearr_15226_15263[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 18))
{var inst_15163 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15227_15264 = state_15195__$1;(statearr_15227_15264[2] = inst_15163);
(statearr_15227_15264[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 19))
{var state_15195__$1 = state_15195;var statearr_15228_15265 = state_15195__$1;(statearr_15228_15265[2] = null);
(statearr_15228_15265[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 20))
{var state_15195__$1 = state_15195;var statearr_15229_15266 = state_15195__$1;(statearr_15229_15266[2] = null);
(statearr_15229_15266[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 21))
{var inst_15188 = (state_15195[2]);var state_15195__$1 = (function (){var statearr_15230 = state_15195;(statearr_15230[17] = inst_15188);
return statearr_15230;
})();var statearr_15231_15267 = state_15195__$1;(statearr_15231_15267[2] = null);
(statearr_15231_15267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 22))
{var inst_15185 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15232_15268 = state_15195__$1;(statearr_15232_15268[2] = inst_15185);
(statearr_15232_15268[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 23))
{var inst_15172 = (state_15195[13]);var inst_15176 = (state_15195[2]);var inst_15177 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15172);var state_15195__$1 = (function (){var statearr_15233 = state_15195;(statearr_15233[18] = inst_15176);
return statearr_15233;
})();var statearr_15234_15269 = state_15195__$1;(statearr_15234_15269[2] = inst_15177);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15195__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15196 === 24))
{var inst_15174 = (state_15195[12]);var inst_15124 = (state_15195[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15195,23,Object,null,22);var inst_15181 = cljs.core.async.muxch_STAR_.call(null,inst_15174);var state_15195__$1 = state_15195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15195__$1,25,inst_15181,inst_15124);
} else
{if((state_val_15196 === 25))
{var inst_15183 = (state_15195[2]);var state_15195__$1 = state_15195;var statearr_15235_15270 = state_15195__$1;(statearr_15235_15270[2] = inst_15183);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15195__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15239 = (new Array(19));(statearr_15239[0] = state_machine__5425__auto__);
(statearr_15239[1] = 1);
return statearr_15239;
});
var state_machine__5425__auto____1 = (function (state_15195){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15240){if((e15240 instanceof Object))
{var ex__5428__auto__ = e15240;var statearr_15241_15271 = state_15195;(statearr_15241_15271[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15240;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15272 = state_15195;
state_15195 = G__15272;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15195){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15242 = f__5495__auto__.call(null);(statearr_15242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15243);
return statearr_15242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5494__auto___15409 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15379){var state_val_15380 = (state_15379[1]);if((state_val_15380 === 1))
{var state_15379__$1 = state_15379;var statearr_15381_15410 = state_15379__$1;(statearr_15381_15410[2] = null);
(statearr_15381_15410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 2))
{var inst_15342 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15343 = 0;var state_15379__$1 = (function (){var statearr_15382 = state_15379;(statearr_15382[7] = inst_15342);
(statearr_15382[8] = inst_15343);
return statearr_15382;
})();var statearr_15383_15411 = state_15379__$1;(statearr_15383_15411[2] = null);
(statearr_15383_15411[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 3))
{var inst_15377 = (state_15379[2]);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15379__$1,inst_15377);
} else
{if((state_val_15380 === 4))
{var inst_15343 = (state_15379[8]);var inst_15345 = (inst_15343 < cnt);var state_15379__$1 = state_15379;if(cljs.core.truth_(inst_15345))
{var statearr_15384_15412 = state_15379__$1;(statearr_15384_15412[1] = 6);
} else
{var statearr_15385_15413 = state_15379__$1;(statearr_15385_15413[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 5))
{var inst_15363 = (state_15379[2]);var state_15379__$1 = (function (){var statearr_15386 = state_15379;(statearr_15386[9] = inst_15363);
return statearr_15386;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15379__$1,12,dchan);
} else
{if((state_val_15380 === 6))
{var state_15379__$1 = state_15379;var statearr_15387_15414 = state_15379__$1;(statearr_15387_15414[2] = null);
(statearr_15387_15414[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 7))
{var state_15379__$1 = state_15379;var statearr_15388_15415 = state_15379__$1;(statearr_15388_15415[2] = null);
(statearr_15388_15415[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 8))
{var inst_15361 = (state_15379[2]);var state_15379__$1 = state_15379;var statearr_15389_15416 = state_15379__$1;(statearr_15389_15416[2] = inst_15361);
(statearr_15389_15416[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 9))
{var inst_15343 = (state_15379[8]);var inst_15356 = (state_15379[2]);var inst_15357 = (inst_15343 + 1);var inst_15343__$1 = inst_15357;var state_15379__$1 = (function (){var statearr_15390 = state_15379;(statearr_15390[8] = inst_15343__$1);
(statearr_15390[10] = inst_15356);
return statearr_15390;
})();var statearr_15391_15417 = state_15379__$1;(statearr_15391_15417[2] = null);
(statearr_15391_15417[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 10))
{var inst_15347 = (state_15379[2]);var inst_15348 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15379__$1 = (function (){var statearr_15392 = state_15379;(statearr_15392[11] = inst_15347);
return statearr_15392;
})();var statearr_15393_15418 = state_15379__$1;(statearr_15393_15418[2] = inst_15348);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15379__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 11))
{var inst_15343 = (state_15379[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15379,10,Object,null,9);var inst_15352 = chs__$1.call(null,inst_15343);var inst_15353 = done.call(null,inst_15343);var inst_15354 = cljs.core.async.take_BANG_.call(null,inst_15352,inst_15353);var state_15379__$1 = state_15379;var statearr_15394_15419 = state_15379__$1;(statearr_15394_15419[2] = inst_15354);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15379__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 12))
{var inst_15365 = (state_15379[12]);var inst_15365__$1 = (state_15379[2]);var inst_15366 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15365__$1);var state_15379__$1 = (function (){var statearr_15395 = state_15379;(statearr_15395[12] = inst_15365__$1);
return statearr_15395;
})();if(cljs.core.truth_(inst_15366))
{var statearr_15396_15420 = state_15379__$1;(statearr_15396_15420[1] = 13);
} else
{var statearr_15397_15421 = state_15379__$1;(statearr_15397_15421[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 13))
{var inst_15368 = cljs.core.async.close_BANG_.call(null,out);var state_15379__$1 = state_15379;var statearr_15398_15422 = state_15379__$1;(statearr_15398_15422[2] = inst_15368);
(statearr_15398_15422[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 14))
{var inst_15365 = (state_15379[12]);var inst_15370 = cljs.core.apply.call(null,f,inst_15365);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15379__$1,16,out,inst_15370);
} else
{if((state_val_15380 === 15))
{var inst_15375 = (state_15379[2]);var state_15379__$1 = state_15379;var statearr_15399_15423 = state_15379__$1;(statearr_15399_15423[2] = inst_15375);
(statearr_15399_15423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15380 === 16))
{var inst_15372 = (state_15379[2]);var state_15379__$1 = (function (){var statearr_15400 = state_15379;(statearr_15400[13] = inst_15372);
return statearr_15400;
})();var statearr_15401_15424 = state_15379__$1;(statearr_15401_15424[2] = null);
(statearr_15401_15424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15405 = (new Array(14));(statearr_15405[0] = state_machine__5425__auto__);
(statearr_15405[1] = 1);
return statearr_15405;
});
var state_machine__5425__auto____1 = (function (state_15379){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15406){if((e15406 instanceof Object))
{var ex__5428__auto__ = e15406;var statearr_15407_15425 = state_15379;(statearr_15407_15425[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15426 = state_15379;
state_15379 = G__15426;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15379){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15408 = f__5495__auto__.call(null);(statearr_15408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15409);
return statearr_15408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___15534 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15510){var state_val_15511 = (state_15510[1]);if((state_val_15511 === 1))
{var inst_15481 = cljs.core.vec.call(null,chs);var inst_15482 = inst_15481;var state_15510__$1 = (function (){var statearr_15512 = state_15510;(statearr_15512[7] = inst_15482);
return statearr_15512;
})();var statearr_15513_15535 = state_15510__$1;(statearr_15513_15535[2] = null);
(statearr_15513_15535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 2))
{var inst_15482 = (state_15510[7]);var inst_15484 = cljs.core.count.call(null,inst_15482);var inst_15485 = (inst_15484 > 0);var state_15510__$1 = state_15510;if(cljs.core.truth_(inst_15485))
{var statearr_15514_15536 = state_15510__$1;(statearr_15514_15536[1] = 4);
} else
{var statearr_15515_15537 = state_15510__$1;(statearr_15515_15537[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 3))
{var inst_15508 = (state_15510[2]);var state_15510__$1 = state_15510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15510__$1,inst_15508);
} else
{if((state_val_15511 === 4))
{var inst_15482 = (state_15510[7]);var state_15510__$1 = state_15510;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15510__$1,7,inst_15482);
} else
{if((state_val_15511 === 5))
{var inst_15504 = cljs.core.async.close_BANG_.call(null,out);var state_15510__$1 = state_15510;var statearr_15516_15538 = state_15510__$1;(statearr_15516_15538[2] = inst_15504);
(statearr_15516_15538[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 6))
{var inst_15506 = (state_15510[2]);var state_15510__$1 = state_15510;var statearr_15517_15539 = state_15510__$1;(statearr_15517_15539[2] = inst_15506);
(statearr_15517_15539[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 7))
{var inst_15489 = (state_15510[8]);var inst_15490 = (state_15510[9]);var inst_15489__$1 = (state_15510[2]);var inst_15490__$1 = cljs.core.nth.call(null,inst_15489__$1,0,null);var inst_15491 = cljs.core.nth.call(null,inst_15489__$1,1,null);var inst_15492 = (inst_15490__$1 == null);var state_15510__$1 = (function (){var statearr_15518 = state_15510;(statearr_15518[8] = inst_15489__$1);
(statearr_15518[9] = inst_15490__$1);
(statearr_15518[10] = inst_15491);
return statearr_15518;
})();if(cljs.core.truth_(inst_15492))
{var statearr_15519_15540 = state_15510__$1;(statearr_15519_15540[1] = 8);
} else
{var statearr_15520_15541 = state_15510__$1;(statearr_15520_15541[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 8))
{var inst_15489 = (state_15510[8]);var inst_15490 = (state_15510[9]);var inst_15491 = (state_15510[10]);var inst_15482 = (state_15510[7]);var inst_15494 = (function (){var c = inst_15491;var v = inst_15490;var vec__15487 = inst_15489;var cs = inst_15482;return ((function (c,v,vec__15487,cs,inst_15489,inst_15490,inst_15491,inst_15482,state_val_15511){
return (function (p1__15427_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15427_SHARP_);
});
;})(c,v,vec__15487,cs,inst_15489,inst_15490,inst_15491,inst_15482,state_val_15511))
})();var inst_15495 = cljs.core.filterv.call(null,inst_15494,inst_15482);var inst_15482__$1 = inst_15495;var state_15510__$1 = (function (){var statearr_15521 = state_15510;(statearr_15521[7] = inst_15482__$1);
return statearr_15521;
})();var statearr_15522_15542 = state_15510__$1;(statearr_15522_15542[2] = null);
(statearr_15522_15542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 9))
{var inst_15490 = (state_15510[9]);var state_15510__$1 = state_15510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15510__$1,11,out,inst_15490);
} else
{if((state_val_15511 === 10))
{var inst_15502 = (state_15510[2]);var state_15510__$1 = state_15510;var statearr_15524_15543 = state_15510__$1;(statearr_15524_15543[2] = inst_15502);
(statearr_15524_15543[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15511 === 11))
{var inst_15482 = (state_15510[7]);var inst_15499 = (state_15510[2]);var tmp15523 = inst_15482;var inst_15482__$1 = tmp15523;var state_15510__$1 = (function (){var statearr_15525 = state_15510;(statearr_15525[11] = inst_15499);
(statearr_15525[7] = inst_15482__$1);
return statearr_15525;
})();var statearr_15526_15544 = state_15510__$1;(statearr_15526_15544[2] = null);
(statearr_15526_15544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15530 = (new Array(12));(statearr_15530[0] = state_machine__5425__auto__);
(statearr_15530[1] = 1);
return statearr_15530;
});
var state_machine__5425__auto____1 = (function (state_15510){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15510);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15531){if((e15531 instanceof Object))
{var ex__5428__auto__ = e15531;var statearr_15532_15545 = state_15510;(statearr_15532_15545[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15546 = state_15510;
state_15510 = G__15546;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15510){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15533 = f__5495__auto__.call(null);(statearr_15533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15534);
return statearr_15533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___15639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15616){var state_val_15617 = (state_15616[1]);if((state_val_15617 === 1))
{var inst_15593 = 0;var state_15616__$1 = (function (){var statearr_15618 = state_15616;(statearr_15618[7] = inst_15593);
return statearr_15618;
})();var statearr_15619_15640 = state_15616__$1;(statearr_15619_15640[2] = null);
(statearr_15619_15640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 2))
{var inst_15593 = (state_15616[7]);var inst_15595 = (inst_15593 < n);var state_15616__$1 = state_15616;if(cljs.core.truth_(inst_15595))
{var statearr_15620_15641 = state_15616__$1;(statearr_15620_15641[1] = 4);
} else
{var statearr_15621_15642 = state_15616__$1;(statearr_15621_15642[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 3))
{var inst_15613 = (state_15616[2]);var inst_15614 = cljs.core.async.close_BANG_.call(null,out);var state_15616__$1 = (function (){var statearr_15622 = state_15616;(statearr_15622[8] = inst_15613);
return statearr_15622;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15616__$1,inst_15614);
} else
{if((state_val_15617 === 4))
{var state_15616__$1 = state_15616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15616__$1,7,ch);
} else
{if((state_val_15617 === 5))
{var state_15616__$1 = state_15616;var statearr_15623_15643 = state_15616__$1;(statearr_15623_15643[2] = null);
(statearr_15623_15643[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 6))
{var inst_15611 = (state_15616[2]);var state_15616__$1 = state_15616;var statearr_15624_15644 = state_15616__$1;(statearr_15624_15644[2] = inst_15611);
(statearr_15624_15644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 7))
{var inst_15598 = (state_15616[9]);var inst_15598__$1 = (state_15616[2]);var inst_15599 = (inst_15598__$1 == null);var inst_15600 = cljs.core.not.call(null,inst_15599);var state_15616__$1 = (function (){var statearr_15625 = state_15616;(statearr_15625[9] = inst_15598__$1);
return statearr_15625;
})();if(inst_15600)
{var statearr_15626_15645 = state_15616__$1;(statearr_15626_15645[1] = 8);
} else
{var statearr_15627_15646 = state_15616__$1;(statearr_15627_15646[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 8))
{var inst_15598 = (state_15616[9]);var state_15616__$1 = state_15616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15616__$1,11,out,inst_15598);
} else
{if((state_val_15617 === 9))
{var state_15616__$1 = state_15616;var statearr_15628_15647 = state_15616__$1;(statearr_15628_15647[2] = null);
(statearr_15628_15647[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 10))
{var inst_15608 = (state_15616[2]);var state_15616__$1 = state_15616;var statearr_15629_15648 = state_15616__$1;(statearr_15629_15648[2] = inst_15608);
(statearr_15629_15648[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 11))
{var inst_15593 = (state_15616[7]);var inst_15603 = (state_15616[2]);var inst_15604 = (inst_15593 + 1);var inst_15593__$1 = inst_15604;var state_15616__$1 = (function (){var statearr_15630 = state_15616;(statearr_15630[10] = inst_15603);
(statearr_15630[7] = inst_15593__$1);
return statearr_15630;
})();var statearr_15631_15649 = state_15616__$1;(statearr_15631_15649[2] = null);
(statearr_15631_15649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15635 = (new Array(11));(statearr_15635[0] = state_machine__5425__auto__);
(statearr_15635[1] = 1);
return statearr_15635;
});
var state_machine__5425__auto____1 = (function (state_15616){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15616);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15636){if((e15636 instanceof Object))
{var ex__5428__auto__ = e15636;var statearr_15637_15650 = state_15616;(statearr_15637_15650[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15651 = state_15616;
state_15616 = G__15651;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15616){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15638 = f__5495__auto__.call(null);(statearr_15638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15639);
return statearr_15638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___15748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15723){var state_val_15724 = (state_15723[1]);if((state_val_15724 === 1))
{var inst_15700 = null;var state_15723__$1 = (function (){var statearr_15725 = state_15723;(statearr_15725[7] = inst_15700);
return statearr_15725;
})();var statearr_15726_15749 = state_15723__$1;(statearr_15726_15749[2] = null);
(statearr_15726_15749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 2))
{var state_15723__$1 = state_15723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15723__$1,4,ch);
} else
{if((state_val_15724 === 3))
{var inst_15720 = (state_15723[2]);var inst_15721 = cljs.core.async.close_BANG_.call(null,out);var state_15723__$1 = (function (){var statearr_15727 = state_15723;(statearr_15727[8] = inst_15720);
return statearr_15727;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15723__$1,inst_15721);
} else
{if((state_val_15724 === 4))
{var inst_15703 = (state_15723[9]);var inst_15703__$1 = (state_15723[2]);var inst_15704 = (inst_15703__$1 == null);var inst_15705 = cljs.core.not.call(null,inst_15704);var state_15723__$1 = (function (){var statearr_15728 = state_15723;(statearr_15728[9] = inst_15703__$1);
return statearr_15728;
})();if(inst_15705)
{var statearr_15729_15750 = state_15723__$1;(statearr_15729_15750[1] = 5);
} else
{var statearr_15730_15751 = state_15723__$1;(statearr_15730_15751[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 5))
{var inst_15700 = (state_15723[7]);var inst_15703 = (state_15723[9]);var inst_15707 = cljs.core._EQ_.call(null,inst_15703,inst_15700);var state_15723__$1 = state_15723;if(inst_15707)
{var statearr_15731_15752 = state_15723__$1;(statearr_15731_15752[1] = 8);
} else
{var statearr_15732_15753 = state_15723__$1;(statearr_15732_15753[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 6))
{var state_15723__$1 = state_15723;var statearr_15734_15754 = state_15723__$1;(statearr_15734_15754[2] = null);
(statearr_15734_15754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 7))
{var inst_15718 = (state_15723[2]);var state_15723__$1 = state_15723;var statearr_15735_15755 = state_15723__$1;(statearr_15735_15755[2] = inst_15718);
(statearr_15735_15755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 8))
{var inst_15700 = (state_15723[7]);var tmp15733 = inst_15700;var inst_15700__$1 = tmp15733;var state_15723__$1 = (function (){var statearr_15736 = state_15723;(statearr_15736[7] = inst_15700__$1);
return statearr_15736;
})();var statearr_15737_15756 = state_15723__$1;(statearr_15737_15756[2] = null);
(statearr_15737_15756[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 9))
{var inst_15703 = (state_15723[9]);var state_15723__$1 = state_15723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15723__$1,11,out,inst_15703);
} else
{if((state_val_15724 === 10))
{var inst_15715 = (state_15723[2]);var state_15723__$1 = state_15723;var statearr_15738_15757 = state_15723__$1;(statearr_15738_15757[2] = inst_15715);
(statearr_15738_15757[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 11))
{var inst_15703 = (state_15723[9]);var inst_15712 = (state_15723[2]);var inst_15700 = inst_15703;var state_15723__$1 = (function (){var statearr_15739 = state_15723;(statearr_15739[7] = inst_15700);
(statearr_15739[10] = inst_15712);
return statearr_15739;
})();var statearr_15740_15758 = state_15723__$1;(statearr_15740_15758[2] = null);
(statearr_15740_15758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15744 = (new Array(11));(statearr_15744[0] = state_machine__5425__auto__);
(statearr_15744[1] = 1);
return statearr_15744;
});
var state_machine__5425__auto____1 = (function (state_15723){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15723);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15745){if((e15745 instanceof Object))
{var ex__5428__auto__ = e15745;var statearr_15746_15759 = state_15723;(statearr_15746_15759[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15760 = state_15723;
state_15723 = G__15760;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15723){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15747 = f__5495__auto__.call(null);(statearr_15747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15748);
return statearr_15747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___15895 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_15865){var state_val_15866 = (state_15865[1]);if((state_val_15866 === 1))
{var inst_15828 = (new Array(n));var inst_15829 = inst_15828;var inst_15830 = 0;var state_15865__$1 = (function (){var statearr_15867 = state_15865;(statearr_15867[7] = inst_15829);
(statearr_15867[8] = inst_15830);
return statearr_15867;
})();var statearr_15868_15896 = state_15865__$1;(statearr_15868_15896[2] = null);
(statearr_15868_15896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 2))
{var state_15865__$1 = state_15865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15865__$1,4,ch);
} else
{if((state_val_15866 === 3))
{var inst_15863 = (state_15865[2]);var state_15865__$1 = state_15865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15865__$1,inst_15863);
} else
{if((state_val_15866 === 4))
{var inst_15833 = (state_15865[9]);var inst_15833__$1 = (state_15865[2]);var inst_15834 = (inst_15833__$1 == null);var inst_15835 = cljs.core.not.call(null,inst_15834);var state_15865__$1 = (function (){var statearr_15869 = state_15865;(statearr_15869[9] = inst_15833__$1);
return statearr_15869;
})();if(inst_15835)
{var statearr_15870_15897 = state_15865__$1;(statearr_15870_15897[1] = 5);
} else
{var statearr_15871_15898 = state_15865__$1;(statearr_15871_15898[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 5))
{var inst_15829 = (state_15865[7]);var inst_15838 = (state_15865[10]);var inst_15833 = (state_15865[9]);var inst_15830 = (state_15865[8]);var inst_15837 = (inst_15829[inst_15830] = inst_15833);var inst_15838__$1 = (inst_15830 + 1);var inst_15839 = (inst_15838__$1 < n);var state_15865__$1 = (function (){var statearr_15872 = state_15865;(statearr_15872[10] = inst_15838__$1);
(statearr_15872[11] = inst_15837);
return statearr_15872;
})();if(cljs.core.truth_(inst_15839))
{var statearr_15873_15899 = state_15865__$1;(statearr_15873_15899[1] = 8);
} else
{var statearr_15874_15900 = state_15865__$1;(statearr_15874_15900[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 6))
{var inst_15830 = (state_15865[8]);var inst_15851 = (inst_15830 > 0);var state_15865__$1 = state_15865;if(cljs.core.truth_(inst_15851))
{var statearr_15876_15901 = state_15865__$1;(statearr_15876_15901[1] = 12);
} else
{var statearr_15877_15902 = state_15865__$1;(statearr_15877_15902[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 7))
{var inst_15861 = (state_15865[2]);var state_15865__$1 = state_15865;var statearr_15878_15903 = state_15865__$1;(statearr_15878_15903[2] = inst_15861);
(statearr_15878_15903[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 8))
{var inst_15829 = (state_15865[7]);var inst_15838 = (state_15865[10]);var tmp15875 = inst_15829;var inst_15829__$1 = tmp15875;var inst_15830 = inst_15838;var state_15865__$1 = (function (){var statearr_15879 = state_15865;(statearr_15879[7] = inst_15829__$1);
(statearr_15879[8] = inst_15830);
return statearr_15879;
})();var statearr_15880_15904 = state_15865__$1;(statearr_15880_15904[2] = null);
(statearr_15880_15904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 9))
{var inst_15829 = (state_15865[7]);var inst_15843 = cljs.core.vec.call(null,inst_15829);var state_15865__$1 = state_15865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15865__$1,11,out,inst_15843);
} else
{if((state_val_15866 === 10))
{var inst_15849 = (state_15865[2]);var state_15865__$1 = state_15865;var statearr_15881_15905 = state_15865__$1;(statearr_15881_15905[2] = inst_15849);
(statearr_15881_15905[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 11))
{var inst_15845 = (state_15865[2]);var inst_15846 = (new Array(n));var inst_15829 = inst_15846;var inst_15830 = 0;var state_15865__$1 = (function (){var statearr_15882 = state_15865;(statearr_15882[7] = inst_15829);
(statearr_15882[12] = inst_15845);
(statearr_15882[8] = inst_15830);
return statearr_15882;
})();var statearr_15883_15906 = state_15865__$1;(statearr_15883_15906[2] = null);
(statearr_15883_15906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 12))
{var inst_15829 = (state_15865[7]);var inst_15853 = cljs.core.vec.call(null,inst_15829);var state_15865__$1 = state_15865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15865__$1,15,out,inst_15853);
} else
{if((state_val_15866 === 13))
{var state_15865__$1 = state_15865;var statearr_15884_15907 = state_15865__$1;(statearr_15884_15907[2] = null);
(statearr_15884_15907[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 14))
{var inst_15858 = (state_15865[2]);var inst_15859 = cljs.core.async.close_BANG_.call(null,out);var state_15865__$1 = (function (){var statearr_15885 = state_15865;(statearr_15885[13] = inst_15858);
return statearr_15885;
})();var statearr_15886_15908 = state_15865__$1;(statearr_15886_15908[2] = inst_15859);
(statearr_15886_15908[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15866 === 15))
{var inst_15855 = (state_15865[2]);var state_15865__$1 = state_15865;var statearr_15887_15909 = state_15865__$1;(statearr_15887_15909[2] = inst_15855);
(statearr_15887_15909[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_15891 = (new Array(14));(statearr_15891[0] = state_machine__5425__auto__);
(statearr_15891[1] = 1);
return statearr_15891;
});
var state_machine__5425__auto____1 = (function (state_15865){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_15865);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e15892){if((e15892 instanceof Object))
{var ex__5428__auto__ = e15892;var statearr_15893_15910 = state_15865;(statearr_15893_15910[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15911 = state_15865;
state_15865 = G__15911;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_15865){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_15865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_15894 = f__5495__auto__.call(null);(statearr_15894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___15895);
return statearr_15894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___16054 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_16024){var state_val_16025 = (state_16024[1]);if((state_val_16025 === 1))
{var inst_15983 = (new Array(0));var inst_15984 = inst_15983;var inst_15985 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16024__$1 = (function (){var statearr_16026 = state_16024;(statearr_16026[7] = inst_15985);
(statearr_16026[8] = inst_15984);
return statearr_16026;
})();var statearr_16027_16055 = state_16024__$1;(statearr_16027_16055[2] = null);
(statearr_16027_16055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 2))
{var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16024__$1,4,ch);
} else
{if((state_val_16025 === 3))
{var inst_16022 = (state_16024[2]);var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16024__$1,inst_16022);
} else
{if((state_val_16025 === 4))
{var inst_15988 = (state_16024[9]);var inst_15988__$1 = (state_16024[2]);var inst_15989 = (inst_15988__$1 == null);var inst_15990 = cljs.core.not.call(null,inst_15989);var state_16024__$1 = (function (){var statearr_16028 = state_16024;(statearr_16028[9] = inst_15988__$1);
return statearr_16028;
})();if(inst_15990)
{var statearr_16029_16056 = state_16024__$1;(statearr_16029_16056[1] = 5);
} else
{var statearr_16030_16057 = state_16024__$1;(statearr_16030_16057[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 5))
{var inst_15985 = (state_16024[7]);var inst_15992 = (state_16024[10]);var inst_15988 = (state_16024[9]);var inst_15992__$1 = f.call(null,inst_15988);var inst_15993 = cljs.core._EQ_.call(null,inst_15992__$1,inst_15985);var inst_15994 = cljs.core.keyword_identical_QMARK_.call(null,inst_15985,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15995 = (inst_15993) || (inst_15994);var state_16024__$1 = (function (){var statearr_16031 = state_16024;(statearr_16031[10] = inst_15992__$1);
return statearr_16031;
})();if(cljs.core.truth_(inst_15995))
{var statearr_16032_16058 = state_16024__$1;(statearr_16032_16058[1] = 8);
} else
{var statearr_16033_16059 = state_16024__$1;(statearr_16033_16059[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 6))
{var inst_15984 = (state_16024[8]);var inst_16009 = inst_15984.length;var inst_16010 = (inst_16009 > 0);var state_16024__$1 = state_16024;if(cljs.core.truth_(inst_16010))
{var statearr_16035_16060 = state_16024__$1;(statearr_16035_16060[1] = 12);
} else
{var statearr_16036_16061 = state_16024__$1;(statearr_16036_16061[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 7))
{var inst_16020 = (state_16024[2]);var state_16024__$1 = state_16024;var statearr_16037_16062 = state_16024__$1;(statearr_16037_16062[2] = inst_16020);
(statearr_16037_16062[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 8))
{var inst_15984 = (state_16024[8]);var inst_15992 = (state_16024[10]);var inst_15988 = (state_16024[9]);var inst_15997 = inst_15984.push(inst_15988);var tmp16034 = inst_15984;var inst_15984__$1 = tmp16034;var inst_15985 = inst_15992;var state_16024__$1 = (function (){var statearr_16038 = state_16024;(statearr_16038[7] = inst_15985);
(statearr_16038[8] = inst_15984__$1);
(statearr_16038[11] = inst_15997);
return statearr_16038;
})();var statearr_16039_16063 = state_16024__$1;(statearr_16039_16063[2] = null);
(statearr_16039_16063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 9))
{var inst_15984 = (state_16024[8]);var inst_16000 = cljs.core.vec.call(null,inst_15984);var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16024__$1,11,out,inst_16000);
} else
{if((state_val_16025 === 10))
{var inst_16007 = (state_16024[2]);var state_16024__$1 = state_16024;var statearr_16040_16064 = state_16024__$1;(statearr_16040_16064[2] = inst_16007);
(statearr_16040_16064[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 11))
{var inst_15992 = (state_16024[10]);var inst_15988 = (state_16024[9]);var inst_16002 = (state_16024[2]);var inst_16003 = (new Array(0));var inst_16004 = inst_16003.push(inst_15988);var inst_15984 = inst_16003;var inst_15985 = inst_15992;var state_16024__$1 = (function (){var statearr_16041 = state_16024;(statearr_16041[7] = inst_15985);
(statearr_16041[8] = inst_15984);
(statearr_16041[12] = inst_16004);
(statearr_16041[13] = inst_16002);
return statearr_16041;
})();var statearr_16042_16065 = state_16024__$1;(statearr_16042_16065[2] = null);
(statearr_16042_16065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 12))
{var inst_15984 = (state_16024[8]);var inst_16012 = cljs.core.vec.call(null,inst_15984);var state_16024__$1 = state_16024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16024__$1,15,out,inst_16012);
} else
{if((state_val_16025 === 13))
{var state_16024__$1 = state_16024;var statearr_16043_16066 = state_16024__$1;(statearr_16043_16066[2] = null);
(statearr_16043_16066[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 14))
{var inst_16017 = (state_16024[2]);var inst_16018 = cljs.core.async.close_BANG_.call(null,out);var state_16024__$1 = (function (){var statearr_16044 = state_16024;(statearr_16044[14] = inst_16017);
return statearr_16044;
})();var statearr_16045_16067 = state_16024__$1;(statearr_16045_16067[2] = inst_16018);
(statearr_16045_16067[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16025 === 15))
{var inst_16014 = (state_16024[2]);var state_16024__$1 = state_16024;var statearr_16046_16068 = state_16024__$1;(statearr_16046_16068[2] = inst_16014);
(statearr_16046_16068[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_16050 = (new Array(15));(statearr_16050[0] = state_machine__5425__auto__);
(statearr_16050[1] = 1);
return statearr_16050;
});
var state_machine__5425__auto____1 = (function (state_16024){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_16024);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e16051){if((e16051 instanceof Object))
{var ex__5428__auto__ = e16051;var statearr_16052_16069 = state_16024;(statearr_16052_16069[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16070 = state_16024;
state_16024 = G__16070;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_16024){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_16024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_16053 = f__5495__auto__.call(null);(statearr_16053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___16054);
return statearr_16053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map