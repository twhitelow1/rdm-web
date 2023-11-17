$(document).ready(function() {
    // Select all elements with class 'click-scroll'
    $('.click-scroll').click(function(e) {
        e.preventDefault();
        var targetId = $(this).attr('href'); // Get the target section ID
    
        // Check if the targetId corresponds to a valid element with an id
        var targetElement = $(targetId);
        if (targetElement.length) {
            var offset = targetElement.offset().top; // Calculate the target offset
    
            // Smooth scroll to the target section
            $('html, body').animate({
                scrollTop: offset
            }, 500);
        }
    });  

    // Handle the scroll event to update the active link
    $(document).scroll(function() {
        var scrollPosition = $(document).scrollTop();

        // Remove 'active' class from all links
        $('.navbar-nav .nav-item .nav-link').removeClass('active');

        // Add 'active' class to the link corresponding to the visible section
        $('.navbar-nav .nav-item .nav-link').each(function() {
            var targetId = $(this).attr('href');
            var targetSection = $(targetId);
            if (targetSection.length) {
                var sectionTop = targetSection.offset().top;
                var sectionBottom = sectionTop + targetSection.outerHeight();

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    $(this).addClass('active');
                }
            }
        });
    });
});