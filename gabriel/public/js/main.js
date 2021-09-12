var body = $("body");
var bodyClass = $("body").attr('class');
console.log(bodyClass);
var modeCookie = $.cookie("mode");
console.log("cookie:" + modeCookie);

var changeButton = $("#mode-button");

$(function(){

});

function changeMode(){
    changeButton.on("click" , function(){
        body.removeClass("landing-dark-mode");
        body.addClass("landing-dark-mode");
    });
}