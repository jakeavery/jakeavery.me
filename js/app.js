$(document).foundation();
// Run these functions on page load and resize
$(document).ready(function() {
    // Run on initial page load
    equalizeCards(); 
    stickyCards();
    
    // Run on resize of the window
    $(window).resize(function() {
        equalizeCards();
        stickyCards();
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
    } else if ($("#large-cta-button .show-for-large").is(":visible") == true) {
        // Position Skills & Leadership cards correctly
        var leftMargin = $("#work-leadership .card").offset().left;
        var viewWidth = $(window).width();
        var rightCardWidth = $("#skills-tech .card").outerWidth();
        var cardOffset = viewWidth - leftMargin - rightCardWidth;
        $("#skills-tech .card").offset({left: cardOffset});
        
        // Equalize and position Showcase cards correctly
        var rowWidth = $("#showcase .card").parent(".row").width();
        var leftRowMargin = $("#work-leadership .card").offset().left - $("#hero").offset().left;
        var showcaseCardWidth = (rowWidth - 3*leftRowMargin)/2;
        $("#showcase .card").css("max-width", showcaseCardWidth);   
    } 
}

// Stickied cards
function stickyCards() {
    if (($("#right-card").offset().left - $("#left-card").offset().left - $("#left-card").outerWidth() <= 0) && ($("#large-cta-button .show-for-large").is(":visible") == true)) {
        $("#skills-tech").attr("data-sticky-container", "");
        $("#skills-tech .align-spaced").addClass("sticky").attr("data-sticky", "").attr("data-margin-top", "0").attr("data-anchor", "sticky-anchor");
        $("#skills-tech").foundation();
    } else {
        $("#skills-tech").removeAttr("data-sticky-container", "");
        $("#skills-tech .align-spaced").removeClass("sticky").removeClass("is-anchored").removeClass("is-stuck").removeAttr("data-sticky", "").removeAttr("data-margin-top", "0").removeAttr("data-anchor", "sticky-anchor");
        $("#skills-tech").foundation();
    }
}

// Expand Showcase cards
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
