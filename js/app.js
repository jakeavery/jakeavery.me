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
        
        // Get height of image below it
        var imgHeight = $(this).closest(".row").next().height();
        console.log(imgHeight);
        
        // If collapsed, set card size to be bigger than image
        if ($(this).data("toggle") == "collapsed") {
           var cardHeight = imgHeight*1.1+"px"; 
           $(this).css("height", cardHeight);
        }
        // Get card top offset
    
        // Position image in relation to card
    });
}

// Expand/collapse cards
function showcaseCardToggle() {
    
}
