goog.provide('bharati.binita.frontend.loginpage');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react_simple_keyboard$build$index=shadow.js.require("module$node_modules$react_simple_keyboard$build$index", {});
bharati.binita.frontend.loginpage.comp_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"showVK","showVK",404535463),"none",new cljs.core.Keyword(null,"input","input",556931961),"",new cljs.core.Keyword(null,"submittedEmail","submittedEmail",1197740730),"",new cljs.core.Keyword(null,"submittedPassword","submittedPassword",-1991123384),"",new cljs.core.Keyword(null,"emailKlass","emailKlass",-1269782353),"input100",new cljs.core.Keyword(null,"passwordKlass","passwordKlass",1255861219),"input100"], null));
bharati.binita.frontend.loginpage.comp_state_no_render = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showVK","showVK",404535463),"none",new cljs.core.Keyword(null,"latestFocus","latestFocus",1986781694),"none"], null));
bharati.binita.frontend.loginpage.keyboardRef1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bharati.binita.frontend.loginpage.generate_component = (function bharati$binita$frontend$loginpage$generate_component(input){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"wrap-login100"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"login100-form validate-form"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"login100-form-title p-b-43"], null),"Login to continue"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"wrap-input100 validate-input",new cljs.core.Keyword(null,"data-validate","data-validate",-1779839800),"Valid email is required: ex@abc.xyz"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"emailKlass","emailKlass",-1269782353)),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (event){
console.log("email input onClick");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state_no_render),new cljs.core.Keyword(null,"showVK","showVK",404535463)),"block")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state_no_render,cljs.core.assoc,new cljs.core.Keyword(null,"latestFocus","latestFocus",1986781694),"email");
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state_no_render,cljs.core.assoc,new cljs.core.Keyword(null,"latestFocus","latestFocus",1986781694),"none");

}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"submittedEmail","submittedEmail",1197740730)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (event){
console.log("email input onChange",event.target.value);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"submittedEmail","submittedEmail",1197740730),event.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"focus-input100"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"label-input100"], null),"Email"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"wrap-input100 validate-input",new cljs.core.Keyword(null,"data-validate","data-validate",-1779839800),"Password is required"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"password",new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"passwordKlass","passwordKlass",1255861219)),new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"pass",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state_no_render),new cljs.core.Keyword(null,"showVK","showVK",404535463)),"block")){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state_no_render,cljs.core.assoc,new cljs.core.Keyword(null,"latestFocus","latestFocus",1986781694),"password");
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state_no_render,cljs.core.assoc,new cljs.core.Keyword(null,"latestFocus","latestFocus",1986781694),"none");

}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"submittedPassword","submittedPassword",-1991123384)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (event){
console.log("email input onChange",event.target.value);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"submittedPassword","submittedPassword",-1991123384),event.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"focus-input100"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"label-input100"], null),"Password"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"flex-sb-m w-full p-t-3 p-b-32"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"contact100-form-checkbox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"input-checkbox100",new cljs.core.Keyword(null,"id","id",-1388402092),"ckb1",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"remember-me"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"label-checkbox100",new cljs.core.Keyword(null,"for","for",-1323786319),"ckb1"], null),"Remember me"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"txt1"], null),"Forgot Password?"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"flex-sb-m w-full p-t-3 p-b-32"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"contact100-form-checkbox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"input-checkbox100",new cljs.core.Keyword(null,"id","id",-1388402092),"ckb2",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"use-virtual-keyboard",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (event){
console.log(["UseVirtualKeyboard -> onChange: entered with1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''));

console.log(["UseVirtualKeyboard -> onChange: entered with2 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(event))].join(''));

console.log(["UseVirtualKeyboard -> onChange: entered with3 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.target.checked)].join(''));

if(cljs.core.truth_(event.target.checked)){
console.log("UseVirtualKeyboard -> onChange: setting VK to visible ");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"showVK","showVK",404535463),"block");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state_no_render,cljs.core.assoc,new cljs.core.Keyword(null,"showVK","showVK",404535463),"block");

return console.log("bini1111",document.activeElement.id);
} else {
console.log("UseVirtualKeyboard -> onChange: setting VK to hidden ");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"showVK","showVK",404535463),"none");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state_no_render,cljs.core.assoc,new cljs.core.Keyword(null,"showVK","showVK",404535463),"none");

}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"label-checkbox100",new cljs.core.Keyword(null,"for","for",-1323786319),"ckb2"], null),"Use virtual keyboard"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"container-login100-form-btn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"login100-form-btn"], null),"Login"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"loginBackgroundDiv",new cljs.core.Keyword(null,"className","className",-1983287057),"login100-more",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"url('images/bg-01.jpg')",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"vkeyboardDiv",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"display","display",242065432),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"showVK","showVK",404535463)),new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Tap on the virtual keyboard to start",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (event){
console.log(["onChangeInput: entered with",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.target.value)].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),event.target.value);

console.log(["onChangeInput: keyboardRef = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bharati.binita.frontend.loginpage.keyboardRef1))].join(''));

return cljs.core.deref(bharati.binita.frontend.loginpage.keyboardRef1).setInput(event.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_simple_keyboard$build$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layoutName","layoutName",-1441709063),"default",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (input__$1){
console.log(["Keyboard -> onChange: entered with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input__$1)].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),input__$1);

return console.log(["Keyboard -> onChange: after mutating ratom = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state))].join(''));
}),new cljs.core.Keyword(null,"onKeyPress","onKeyPress",1548576017),(function (button){
console.log(["onKeyPress: entered with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button)].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,"{enter}")){
console.log(["Keyboard -> onKeyPress: submitted input ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"input","input",556931961)))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state_no_render),new cljs.core.Keyword(null,"latestFocus","latestFocus",1986781694)),"email")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"submittedEmail","submittedEmail",1197740730),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"input","input",556931961)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"emailKlass","emailKlass",-1269782353),"input-100 has-val");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state_no_render),new cljs.core.Keyword(null,"latestFocus","latestFocus",1986781694)),"password")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"submittedPassword","submittedPassword",-1991123384),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bharati.binita.frontend.loginpage.comp_state),new cljs.core.Keyword(null,"input","input",556931961)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bharati.binita.frontend.loginpage.comp_state,cljs.core.assoc,new cljs.core.Keyword(null,"passwordKlass","passwordKlass",1255861219),"input-100 has-val");
} else {
return null;
}
}
} else {
return console.log(["Keyboard -> onKeyPress: pressed input ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button)].join(''));

}
}),new cljs.core.Keyword(null,"keyboardRef","keyboardRef",1418607315),(function (myRef){
console.log(["Before setting keyboard ref, keyboardRef = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bharati.binita.frontend.loginpage.keyboardRef1))].join(''));

cljs.core.reset_BANG_(bharati.binita.frontend.loginpage.keyboardRef1,myRef);

return console.log(["After setting keyboard ref , keyboardRef = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bharati.binita.frontend.loginpage.keyboardRef1))].join(''));
})], null)], null)], null)], null)], null);
});
bharati.binita.frontend.loginpage.run = (function bharati$binita$frontend$loginpage$run(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bharati.binita.frontend.loginpage.generate_component], null),document.getElementById("root"));
});

//# sourceMappingURL=bharati.binita.frontend.loginpage.js.map
