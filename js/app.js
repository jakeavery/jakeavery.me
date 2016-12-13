$(document).foundation();

// Run these functions on page load and resize
$(document).ready(function() {
    // Run on initial page load
    equalizeResume();    
    showcaseCards();
    
    // Run on resize of the window
    $(window).resize(function() {
        equalizeResume(); 
        showcaseCards();
    });
});

// Equalized Resume section width at large screens
function equalizeResume() {
    // Check if Skills and Tech cards are stacked or not. If not, equalize!
    if ($("#right-card").offset().left - $("#left-card").offset().left - $("#left-card").outerWidth() > 0) {
        // Space between left and right cards
        var spaceBetween = $("#right-card").offset().left - $("#left-card").offset().left - $("#left-card").outerWidth();
        // Total width of cards + space between
        var equalizedWidth = $("#left-card").outerWidth() + $("#right-card").outerWidth() + spaceBetween+"px";
        // Set Resume cards to equalized width
        $("#work-leadership .card, #education .card").css("max-width", equalizedWidth);
        //$("#education .card").css("max-width", equalizedWidth);
    }
}


// Controls Showcase Card size and position on page load and resize
function showcaseCards() {

    // For each card:
    $("#showcase .card").each(function() {
        
        // Get height of this card's image
        var thisImg = $(this).closest(".row").next();
        var imgHeight = thisImg.height();
        
        // If collapsed, set card size to be bigger than image
        if ($(this).data("toggle") == "collapsed") {
            
            // Set card height
            var cardHeight = imgHeight*1.1; 
            $(this).css("height", cardHeight);
            
            // Position image
            var cardOffset = $(this).offset().top;
            var imgOffset = cardOffset+((cardHeight-imgHeight)/2)+"px";
            thisImg.css("top", imgOffset);            
        }

    });
}

// Expand/collapse cards
$("#showcase img").click(function() {
    
    // Determine if card is collapsed or expanded
    var thisCard = $(this).prev().find(".card");
    if (thisCard.data("toggle") == "collapsed") {
        // Expand card
        
        // Expand width
        thisCard.removeClass("small-10").addClass("small-12");
        
        // Show text
        thisCard.children().removeClass("is-hidden");
        
        // Expand height
        var headingHeight = thisCard.children("h3").height();
        var paragraphHeight = thisCard.children("p").height();
        var cardHeight = thisCard.height() + headingHeight + paragraphHeight;
        thisCard.css("height", cardHeight);
        
        // Move image
        var imgOffset = $(this).offset().top+headingHeight+"px";
        $(this).css("top", imgOffset);
        
        // Move other images
        
        // Remove drop shadow
        $(this).css("box-shadow", "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)");
        
        // Set data attribute
        thisCard.data("toggle", "expanded");
        
        
    } else {
        // Collapse Card
        
        // Shrink width
        thisCard.removeClass("small-12").addClass("small-10");
        
        // Hide text
        thisCard.children().addClass("is-hidden");
        
        // Shrink height
        var cardHeight = $(this).height()*1.1;
        thisCard.css("height", cardHeight);
        
        // Move image back
        var cardOffset = thisCard.offset().top;
        var imgOffset = cardOffset+((cardHeight-$(this).height())/2)+"px";
        $(this).css("top", imgOffset);
        
        // Add drop shadow
        $(this).css("box-shadow", "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)");
        
        // Set data attribute
        thisCard.data("toggle", "collapsed");
    }
    
})
