// Compiled by ClojureScript 0.0-2030
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
async_tut1.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
async_tut1.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
async_tut1.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.call(null);var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,(function (res){return cljs.core.async.put_BANG_.call(null,out,res);
}));
return out;
});
async_tut1.core.query_url = (function query_url(q){return [cljs.core.str(async_tut1.core.wiki_search_url),cljs.core.str(q)].join('');
});
async_tut1.core.user_query = (function user_query(){return goog.dom.getElement("query").value;
});
async_tut1.core.render_query = (function render_query(results){return [cljs.core.str("<ul"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__3819__auto__ = (function iter__16575(s__16576){return (new cljs.core.LazySeq(null,(function (){var s__16576__$1 = s__16576;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16576__$1);if(temp__4092__auto__)
{var s__16576__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16576__$2))
{var c__3817__auto__ = cljs.core.chunk_first.call(null,s__16576__$2);var size__3818__auto__ = cljs.core.count.call(null,c__3817__auto__);var b__16578 = cljs.core.chunk_buffer.call(null,size__3818__auto__);if((function (){var i__16577 = 0;while(true){
if((i__16577 < size__3818__auto__))
{var result = cljs.core._nth.call(null,c__3817__auto__,i__16577);cljs.core.chunk_append.call(null,b__16578,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));
{
var G__16579 = (i__16577 + 1);
i__16577 = G__16579;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16578),iter__16575.call(null,cljs.core.chunk_rest.call(null,s__16576__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16578),null);
}
} else
{var result = cljs.core.first.call(null,s__16576__$2);return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__16575.call(null,cljs.core.rest.call(null,s__16576__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3819__auto__.call(null,results);
})())),cljs.core.str("</ul>")].join('');
});
async_tut1.core.init = (function init(){var clicks = async_tut1.core.listen.call(null,goog.dom.getElement("search"),"click");var results_view = goog.dom.getElement("results");var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_16639){var state_val_16640 = (state_16639[1]);if((state_val_16640 === 8))
{var inst_16627 = (state_16639[2]);var inst_16628 = cljs.core.nth.call(null,inst_16627,0,null);var inst_16629 = cljs.core.nth.call(null,inst_16627,1,null);var inst_16630 = async_tut1.core.render_query.call(null,inst_16629);var inst_16631 = results_view.innerHTML = inst_16630;var state_16639__$1 = (function (){var statearr_16641 = state_16639;(statearr_16641[7] = inst_16628);
(statearr_16641[8] = inst_16631);
return statearr_16641;
})();var statearr_16642_16656 = state_16639__$1;(statearr_16642_16656[2] = null);
(statearr_16642_16656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16640 === 7))
{var inst_16621 = (state_16639[2]);var inst_16623 = async_tut1.core.user_query.call(null);var inst_16624 = async_tut1.core.query_url.call(null,inst_16623);var inst_16625 = async_tut1.core.jsonp.call(null,inst_16624);var state_16639__$1 = (function (){var statearr_16643 = state_16639;(statearr_16643[9] = inst_16621);
return statearr_16643;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16639__$1,8,inst_16625);
} else
{if((state_val_16640 === 6))
{var inst_16635 = (state_16639[2]);var state_16639__$1 = state_16639;var statearr_16644_16657 = state_16639__$1;(statearr_16644_16657[2] = inst_16635);
(statearr_16644_16657[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16640 === 5))
{var state_16639__$1 = state_16639;var statearr_16645_16658 = state_16639__$1;(statearr_16645_16658[2] = null);
(statearr_16645_16658[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16640 === 4))
{var state_16639__$1 = state_16639;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16639__$1,7,clicks);
} else
{if((state_val_16640 === 3))
{var inst_16637 = (state_16639[2]);var state_16639__$1 = state_16639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16639__$1,inst_16637);
} else
{if((state_val_16640 === 2))
{var state_16639__$1 = state_16639;if(true)
{var statearr_16646_16659 = state_16639__$1;(statearr_16646_16659[1] = 4);
} else
{var statearr_16647_16660 = state_16639__$1;(statearr_16647_16660[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16640 === 1))
{var state_16639__$1 = state_16639;var statearr_16648_16661 = state_16639__$1;(statearr_16648_16661[2] = null);
(statearr_16648_16661[1] = 2);
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
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_16652 = (new Array(10));(statearr_16652[0] = state_machine__5425__auto__);
(statearr_16652[1] = 1);
return statearr_16652;
});
var state_machine__5425__auto____1 = (function (state_16639){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_16639);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e16653){if((e16653 instanceof Object))
{var ex__5428__auto__ = e16653;var statearr_16654_16662 = state_16639;(statearr_16654_16662[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16639);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16663 = state_16639;
state_16639 = G__16663;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_16639){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_16639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_16655 = f__5495__auto__.call(null);(statearr_16655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_16655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
async_tut1.core.init.call(null);

//# sourceMappingURL=core.js.map