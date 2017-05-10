$(document).ready(function() {
  var players = document.querySelectorAll(".player");
 

  players.forEach(function(element,i,array) {
    element.querySelector('.btn-play').addEventListener("click", () => element.querySelector('video').play());
    element.querySelector('.btn-stop').addEventListener("click", () => element.querySelector('video').pause());
    element.querySelector('.btn-fullscreen').addEventListener("click", () => {      
      requestFullscreen(element);
    });

   
  });


  

//        video = player.querySelector("video")
//    , play = player.querySelector(".btn-play")
//    , stop = player.querySelector(".btn-stop")
//    , full = player.querySelector(".btn-fullscreen")
//;

//$(".player").on("click", ".btn-play", function(){
//  $(this).parent('.controls-video').siblings('video').play();
//})
//
//$('.player .btn-play').click(() => document.querySelector("video").play());
//$('.player .btn-stop').click(() => $('.player video').pause());
//$('.player .btn-fullscreen').click(() => {
//    $('.player').classList.add("fullscreen");
//    requestFullscreen(player);
//});

//play.addEventListener("click", () => video.play());
//stop.addEventListener("click", () => video.pause());
//full.addEventListener("click", () => {
//    player.classList.add("fullscreen");
//    requestFullscreen(player);
//});


/**
 * Source: https://changelog.com/screenfull-js-simple-cross-browser-wrapper-for-fullscree/
 */
function requestFullscreen( element ) {
  if ( element.requestFullscreen ) {
    element.requestFullscreen();
  } else if ( element.mozRequestFullScreen ) {
    element.mozRequestFullScreen();
  } else if ( element.webkitRequestFullScreen ) {
    element.webkitRequestFullScreen( Element.ALLOW_KEYBOARD_INPUT );
  }
}



//Запустить отображение в полноэкранном режиме
function launchFullScreen(element) {
if(element.requestFullScreen) {
element.requestFullScreen();
} else if(element.mozRequestFullScreen) {
element.mozRequestFullScreen();
} else if(element.webkitRequestFullScreen) {
element.webkitRequestFullScreen();
};
  element.addEventListener("fullscreenchange",       onfullscreenchange);

}
// Выход из полноэкранного режима
function cancelFullscreen() {
if(document.cancelFullScreen) {
document.cancelFullScreen();
} else if(document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if(document.webkitCancelFullScreen) {
document.webkitCancelFullScreen();
}
}
var onfullscreenchange =  function(e){
var fullscreenElement = 
document.fullscreenElement || 
document.mozFullscreenElement || 
document.webkitFullscreenElement;
var fullscreenEnabled = 
document.fullscreenEnabled || 
document.mozFullscreenEnabled || 
document.webkitFullscreenEnabled;
console.log( 'fullscreenEnabled = ' + fullscreenEnabled, ',  fullscreenElement = ', fullscreenElement, ',  e = ', e);
}
//// Событие об изменениии режима
//el.addEventListener("webkitfullscreenchange", onfullscreenchange);
//el.addEventListener("mozfullscreenchange",    onfullscreenchange);
//el.addEventListener("fullscreenchange",       onfullscreenchange);

});