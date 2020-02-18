goog.provide('bharati.binita.frontend.demo2');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react_simple_keyboard$build$index=shadow.js.require("module$node_modules$react_simple_keyboard$build$index", {});
bharati.binita.frontend.demo2.create_wrapper = (function bharati$binita$frontend$demo2$create_wrapper(input){
var comp_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layoutName","layoutName",-1441709063),"default",new cljs.core.Keyword(null,"input","input",556931961),""], null));
var keyboardRef1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"bini-wrapper-component",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return console.log("component-did-mount: entered. Need to set keyboard ref here!");
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
console.log(["reagent-render: entered with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp_state))].join(''));

console.log(["reagent-render: entered with input = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(comp_state),new cljs.core.Keyword(null,"input","input",556931961)))].join(''));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(comp_state),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Tap on the virtual keyboard to start",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (event){
console.log(["onChangeInput: entered with",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.target.value)].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),event.target.value);

console.log(["onChangeInput: keyboardRef = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(keyboardRef1))].join(''));

return cljs.core.deref(keyboardRef1).setInput(event.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_simple_keyboard$build$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layoutName","layoutName",-1441709063),"default",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (input__$1){
console.log(["Keyboard -> onChange: entered with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input__$1)].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),input__$1);

return console.log(["Keyboard -> onChange: after mutating ratom = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comp_state))].join(''));
}),new cljs.core.Keyword(null,"onKeyPress","onKeyPress",1548576017),(function (button){
console.log(["onKeyPress: entered with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button)].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,"{enter}")){
return console.log(["Keyboard -> onKeyPress: submitted input ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(comp_state),new cljs.core.Keyword(null,"input","input",556931961)))].join(''));
} else {
return console.log(["Keyboard -> onKeyPress: pressed input ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button)].join(''));

}
}),new cljs.core.Keyword(null,"keyboardRef","keyboardRef",1418607315),(function (myRef){
console.log(["Before setting keyboard ref, keyboardRef = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(keyboardRef1))].join(''));

cljs.core.reset_BANG_(keyboardRef1,myRef);

return console.log(["After setting keyboard ref , keyboardRef = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(keyboardRef1))].join(''));
})], null)], null)], null);
})], null));
});
bharati.binita.frontend.demo2.run = (function bharati$binita$frontend$demo2$run(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bharati.binita.frontend.demo2.create_wrapper], null),document.getElementById("root"));
});

//# sourceMappingURL=bharati.binita.frontend.demo2.js.map
