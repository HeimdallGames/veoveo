//Logica del veoveo
var card = $('.card');
var otherCardFlipped = false;
var cardFlipped;

card.click( function () {
    if(!$(this).hasClass('is-flipped'))
    {
        $(this).addClass('is-flipped');
        if(otherCardFlipped)
        {
            otherCardFlipped = false;
            new Promise((resolve) => setTimeout(resolve, 1000 )).then(() => {
                if(cardFlipped.css("background-image")==$(this).css("background-image"))
                {
                    cardFlipped.remove();
                    $(this).remove();
                }
                else
                {
                    cardFlipped.removeClass('is-flipped');
                    $(this).removeClass('is-flipped');
                }
            });

        }
        else
        {
            otherCardFlipped=true;
            cardFlipped = $(this);
        }        
    }
    
});