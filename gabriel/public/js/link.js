var acc = document.getElementsByClassName("accord");
var i;
var body = $('body');
var box = $('#box');
var btn = $('#btn');
// console.log(bodyClass);
var changeButton = $("#mode-button");
var buttonValue = $("#modeCheck").text();
var modeCookie = $.cookie("mode");

$(function(){
    if (modeCookie == undefined) {
        $.cookie("mode" , "dark");
        $("#modeCheck").text("dark");
        changeMode(buttonValue);

    } else if ($.cookie("mode") == 'dark') {
        changeMode($.cookie("mode"));
        $("#modeCheck").text("dark");

    } else if ($.cookie("mode") == 'light') {
        changeMode($.cookie("mode"));
        $("#modeCheck").text("light");
    }
    buttonValue = $("#modeCheck").text();
});

changeButton.on("click" , function(){

    if (buttonValue == "dark") {
        $("#modeCheck").text("light");
        buttonValue = $("#modeCheck").text();

    } else {
        $("#modeCheck").text("dark");
        buttonValue = $("#modeCheck").text();
    }
    changeMode(buttonValue);
});

function changeMode(currentMode) {
    if (currentMode == "dark") {
        body.removeClass("light-pages");
        box.removeClass("bckg-box-light");
        btn.removeClass("page-buttons-light");

        body.toggleClass("dark-pages");
        box.toggleClass("bckg-box-dark");
        btn.toggleClass("page-buttons-dark");


        $.cookie("mode" , "dark");
    } 
    if(currentMode == "light") {
        body.removeClass("dark-pages");
        box.removeClass("bckg-box-dark");
        btn.removeClass("page-buttons-dark");


        body.toggleClass("light-pages");
        box.toggleClass("bckg-box-light");
        btn.toggleClass("page-buttons-light");


        $.cookie("mode" , "light");
    }
}