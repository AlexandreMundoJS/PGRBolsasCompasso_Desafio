var body = $('body');
var box = $('#box');
var photo = $('#photo');
// console.log(bodyClass);
var changeButton = $("#mode-button");
var buttonValue = $("#modeCheck").text();
var modeCookie = $.cookie("mode");

$(function(){
    if (modeCookie == undefined) {
        $.cookie("mode" , "dark");
        $("#modeCheck").text("dark");

    } else if ($.cookie("mode") == "dark") {
        console.log("site abert: cookie" + $.cookie("mode"));
        changeMode($.cookie("mode"));
        $("#modeCheck").text("dark");

    } else if ($.cookie("mode") == "light") {
        console.log("site abert: cookie" + $.cookie("mode"));
        changeMode($.cookie("mode"));
        $("#modeCheck").text("light");
    }
    buttonValue = $("#modeCheck").text();
});

changeButton.on("click" , function(){

    if (buttonValue == "dark") {
        $("#modeCheck").text("light");
        buttonValue = $("#modeCheck").text();
        console.log("agora é:" + buttonValue);

    } else {
        $("#modeCheck").text("dark");
        buttonValue = $("#modeCheck").text();
        console.log("agora é:" + buttonValue);
    }
    changeMode(buttonValue);
});

function changeMode(currentMode) {
    if (currentMode == "dark") {
        body.removeClass("landing-light-mode");
        box.removeClass("bckg-box-light");
        photo.removeClass("photo-light");

        body.toggleClass("landing-dark-mode");
        box.toggleClass("bckg-box-dark");
        photo.toggleClass("photo-dark");

        $.cookie("mode" , "dark");
    } 
    if(currentMode == "light") {
        body.removeClass("landing-dark-mode");
        box.removeClass("bckg-box-dark");
        photo.removeClass("photo-dark");

        body.toggleClass("landing-light-mode");
        box.toggleClass("bckg-box-light");
        photo.toggleClass("photo-light");

        $.cookie("mode" , "light");
    }
}
