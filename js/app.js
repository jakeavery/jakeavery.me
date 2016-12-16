$(document).foundation();

// Run these functions on page load and resize
$(document).ready(function() {
    // Run on initial page load
    equalizeCards(); 
    
    // Run on resize of the window
    $(window).resize(function() {
        equalizeCards(); 
    });
});

// Equalized Resume section width at large screens
function equalizeCards() {
    // Check if Skills and Tech cards are stacked or not. If not, equalize! (Medium and large)
    if ($("#right-card").offset().left - $("#left-card").offset().left - $("#left-card").outerWidth() > 0) {
        // Space between left and right cards
        var spaceBetween = $("#right-card").offset().left - $("#left-card").offset().left - $("#left-card").outerWidth();
        // Total width of cards + space between
        var equalizedWidth = $("#left-card").outerWidth() + $("#right-card").outerWidth() + spaceBetween+"px";
        // Set Resume cards to equalized width
        $("#work-leadership .card, #education .card").css("max-width", equalizedWidth);
        // Set Showcase cards to proper width
        if ($("#large-cta-button .show-for-large").is(":visible") == false ) {
            $("#showcase .card").css("max-width", equalizedWidth);  
        } else {
            $("#showcase .card").css("max-width", "440px"); 
        }
    } else if ($("#large-cta-button .show-for-large").is(":visible") == true ) {
        // xlarge and up
        
        // Position Skills & Leadership cards correctly
        var leftMargin = $("#work-leadership .card").offset().left;
        var viewWidth = $(window).width();
        var rightCardWidth = $("#skills-tech .card").outerWidth();
        var cardOffset = viewWidth - leftMargin - rightCardWidth;
        $("#skills-tech .card").offset({left: cardOffset});
        
        // Equalize and position Showcase cards correctly
    }
    
}

$(".toggle-click-target").click(function() {
    if ($(this).prev().css("display") == "none") {
        // Expand card
        $(this).prev().show(200);
        $(this).children("svg").addClass("expanded");
        
    } else {
        // Collapse card
        $(this).prev().hide(200);
        $(this).children("svg").removeClass("expanded");
    }
});
