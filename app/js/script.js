$(document).on('ready', function(){
	if (document.querySelector('#js_btn_about')) {
      	document.querySelector('#js_btn_about').addEventListener('click', function(event){
        	event.preventDefault(); 
        	var textShow = document.querySelector('.about__text-unfolding');
        	var textHide = document.querySelector('.about__text-wr');
        
        	textShow.style.display='block';
        	this.style.display='none';
        	textHide.style.display='none';
        	document.querySelector('.about').style.paddingBottom = 0;
      	});
    };

    if (document.querySelector('#js_btn_hide')) {
      	document.querySelector('#js_btn_hide').addEventListener('click', function(event){
        	event.preventDefault(); 
        	var textShow = document.querySelector('.about__text-unfolding');
        	var textHide = document.querySelector('.about__text-wr');
        
        	textShow.style.display='none';
        	document.querySelector('#js_btn_about').style.display='inline-block';
        	textHide.style.display='block';
        	document.querySelector('.about').style.paddingBottom = '3rem';
      	});
    };
});