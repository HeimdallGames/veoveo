//Logica del veoveo
var card = $('.card');
card.click( function () {
    if(!$(this).hasClass('is-flipped'))
    {
        $(this).addClass('is-flipped');
    }
    
});