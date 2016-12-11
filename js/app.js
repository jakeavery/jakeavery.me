$(document).foundation();

// Run these functions on page load and resize
$(document).ready(function() {
    // Run on initial page load
    equalizeResume();
    
    // Run on resize of the window
    $(window).resize(equalizeResume);
});

// Equalized Resume section width at large screens
function equalizeResume() {
    // Check if Skills and Tech cards are stacked or not. If not, equalize!
    if ($('#right-card').offset().left - $('#left-card').offset().left - $('#left-card').outerWidth() > 0) {
        // Space between left and right cards
        var spaceBetween = $('#right-card').offset().left - $('#left-card').offset().left - $('#left-card').outerWidth();
        // Total width of cards + space between
        var equalizedWidth = $('#left-card').outerWidth() + $('#right-card').outerWidth() + spaceBetween+"px";
        // Set Resume cards to equalized width
        $('#work-leadership .card, #education .card').css("max-width", equalizedWidth);
        //$('#education .card').css("max-width", equalizedWidth);
    }
}
