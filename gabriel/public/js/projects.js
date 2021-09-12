var acc = document.getElementsByClassName("accord");
var i;
var body = $('body');
var box = $('#box');
var btn = $('#btn');
var smallLine = $('.small-line');
// console.log(bodyClass);
var changeButton = $("#mode-button");
var buttonValue = $("#modeCheck").text();
var accordion = $('.accord');
var panel = $('.panel');
var modeCookie = $.cookie("mode");

$(function(){
    if (modeCookie == undefined) {
        $.cookie("mode" , "dark");
        $("#modeCheck").text("dark");

    } else if ($.cookie("mode") == "dark") {
        changeMode($.cookie("mode"));
        $("#modeCheck").text("dark");

    } else if ($.cookie("mode") == "light") {
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
        body.removeClass("light-pages");
        box.removeClass("bckg-box-light");
        btn.removeClass("page-buttons-light");
        smallLine.removeClass("light-line-but-smaller");
        accordion.removeClass("accordion-light");
        panel.removeClass("panel-light");

        body.toggleClass("dark-pages");
        box.toggleClass("bckg-box-dark");
        btn.toggleClass("page-buttons-dark");
        smallLine.toggleClass("dark-line-but-smaller");
        accordion.toggleClass("accordion-dark");
        panel.toggleClass("panel-dark");

        $.cookie("mode" , "dark");
    } 
    if(currentMode == "light") {
        body.removeClass("dark-pages");
        box.removeClass("bckg-box-dark");
        btn.removeClass("page-buttons-dark");
        smallLine.removeClass("dark-line-but-smaller");
        accordion.removeClass("accordion-dark");
        panel.removeClass("panel-dark");

        body.toggleClass("light-pages");
        box.toggleClass("bckg-box-light");
        btn.toggleClass("page-buttons-light");
        smallLine.toggleClass("light-line-but-smaller");
        accordion.toggleClass("accordion-light");
        panel.toggleClass("panel-light")

        $.cookie("mode" , "light");
    }
}


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}