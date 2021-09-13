var body = $('body');
var box = $('#box');
var photo = $('#photo');
var changeButton = $("#mode-button");
var buttonValue = $("#modeCheck").text();

$(function(){

    if ($.cookie('mode') == undefined) {
        $.cookie('mode', 'dark');
        var modeCookie = $.cookie('mode');
        changeMode(buttonValue);

    } else if ($.cookie('mode') == "dark") {
        changeMode($.cookie('mode'));
        $("#modeCheck").text("dark");

    } else if ($.cookie('mode') == "light") {
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
        body.removeClass("landing-light-mode");
        box.removeClass("bckg-box-light");
        photo.removeClass("photo-light");

        body.toggleClass("landing-dark-mode");
        box.toggleClass("bckg-box-dark");
        photo.toggleClass("photo-dark");

        $.cookie('mode', 'dark')
        $("#modeCheck").text("dark");
    } 
    if(currentMode == "light") {
        body.removeClass("landing-dark-mode");
        box.removeClass("bckg-box-dark");
        photo.removeClass("photo-dark");

        body.toggleClass("landing-light-mode");
        box.toggleClass("bckg-box-light");
        photo.toggleClass("photo-light");

        $.cookie('mode', 'light')
        $("#modeCheck").text("light");
    }
}
