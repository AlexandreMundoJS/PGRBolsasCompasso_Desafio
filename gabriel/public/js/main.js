var body = $('body');
// console.log(bodyClass);
var changeButton = $("#mode-button");
var buttonValue = $("#modeCheck").text();

$(function(){
    if (modeCookie == undefined) {
        $.cookie("mode" , "dark");
        console.log("adasdasdad");
    }
    changeMode(buttonValue);

});
var modeCookie = $.cookie("mode");

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
    if (currentMode = "dark") {
        body.toggleClass("landing-dark-mode");
    } else if (currentMode = "light") {
        body.toggleClass("landing-light-mode");
    }
}
