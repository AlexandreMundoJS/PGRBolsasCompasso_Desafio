$(function(){
    $('.tooltip').tooltipster();
});

$(document).ready(function(){

    $('.slide').click(function(){
        $("#contato-id").slideToggle();
        $('.contato').addClass('.hidden');

    });
});