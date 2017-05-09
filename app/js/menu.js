$(document).on('ready', function(){
  
	var navMain = document.querySelectorAll('.main-nav-block');
	var navToggle = document.querySelectorAll('.main-nav__toggle');
	var start_pos = navMain[0].offsetTop + 100; 
  var FLAG_visible_scroll_menu = false;   
  

	navToggle[0].addEventListener('click', function() {
		if (navMain[0].classList.contains('main-nav--closed')) {
			navMain[0].classList.remove('main-nav--closed');	
			navMain[0].classList.add('main-nav--opened');
		} else {
			navMain[0].classList.add('main-nav--closed');	
			navMain[0].classList.remove('main-nav--opened');	
		}
	});


  

 navToggle[1].addEventListener('click', function() {
    if (navMain[1].classList.contains('main-nav--closed')) {
      navMain[1].classList.remove('main-nav--closed');  
      navMain[1].classList.add('main-nav--opened');
    } else {
      navMain[1].classList.add('main-nav--closed'); 
      navMain[1].classList.remove('main-nav--opened');  
    }
  });

	$(window).scroll(function(){

    if ($(window).scrollTop() > start_pos && !FLAG_visible_scroll_menu) {
          if ($('.main-nav-scroll').hasClass('to_top')==false) {                        
                $('.main-nav-scroll').addClass('to_top');
                $('.main-nav-scroll').slideDown(600);
                FLAG_visible_scroll_menu = true;
          } 
    } 

    if ($(window).scrollTop() < start_pos && FLAG_visible_scroll_menu) {
                 $('.main-nav-scroll').slideUp(100, function() {
                    $('.main-nav-scroll').removeClass('to_top');               
                    FLAG_visible_scroll_menu = false;
                 });
                
             
          };

  });  

  var storage_cur_month = localStorage.getItem('cur_month');
  var storage_cur_year = localStorage.getItem('cur_year');  
  var curDate   = new Date();
  var curMonth = curDate.getMonth() + 1;
  var curYear  = curDate.getYear() + 1900;
  if (parseInt(storage_cur_month)) curMonth = +storage_cur_month + 1; else storage_cur_month = curMonth;
  if (parseInt(storage_cur_year)) curYear = +storage_cur_year; else storage_cur_year = curYear;

  $("#calendar").calendarWidget({
    month: 5,//parseInt(storage_cur_month), // номер месяца 
    year: parseInt(storage_cur_year)              
  });  



  

 


});