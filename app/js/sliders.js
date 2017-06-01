document.addEventListener('DOMContentLoaded', function () {
	var windowWidth = $(window).width();
    if(windowWidth < 768)$(".main-events__block-prev").addClass("events-slider");
    else $(".main-events__block-prev").removeClass("events-slider");
                
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 768)$(".main-events__block-prev").addClass("events-slider");
        else $(".main-events__block-prev").removeClass("events-slider");
    });


	Array.prototype.slice.call(document.querySelectorAll('.js_variablewlidth')).forEach(function (element, index) {

        if (element.classList.contains('main-photo-slider')
        	||element.classList.contains('partners_slider')
        	||element.classList.contains('events-slider')
        	||element.classList.contains('galery-slider')) {
            lory(element, {
                rewind: true,
                slideSpeed: 1000,
                element: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
             });
        };        
    });




});


//    document.addEventListener('DOMContentLoaded', function () {
//        var variableWidth = document.querySelector('.js_variablewlidth');
//
//        lory(variableWidth, {
//            rewind: true
//        });
//    });

