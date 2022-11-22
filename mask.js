// global vars
const $container = document.getElementById("container"),
  $menuButton = document.getElementById("menu-button"),
  $menu = document.getElementById("full-page-menu"),
  $preLoader = document.getElementById("preLoader"),
  $video = document.getElementById("video"),
  $videoContainer = document.getElementById("video-container"),
  $videoBackground = document.getElementById("video-background"),
  $body = document.getElementById("body");
// $title = document.getElementById('title');

// $video.classList.remove('hidden');

$(".title-front")
  .mouseenter(function() {
    $video.classList.add("big");
  })
  .mouseleave(function() {
    $video.classList.remove("big");
  });

// ---
// video size
// ---
var windowHeight = $(window).outerHeight();
$($videoBackground).css({
  // 'height': windowHeight,
  height: windowHeight * 1.5
});
// do the same whenever the window resizes
$(window).resize(function() {
  // windowHeight = $(window).height();
  windowHeight = $(window).outerWidth();
  $($videoBackground).css({
    // 'height': windowHeight,
    width: windowHeight * 1.5
  });
});

// ---
// hero video effect
// ---
var X,
		Y;

	const moveVideo = function (e) {
		// declare mouse position
		// console.log(staticX)
		// console.log(staticY)
		// if not full screen move video 
		if (!fullscreenMode()) {
			X = e.clientX
			Y = e.clientY
			$videoContainer.style.transform = `translate3d(${X}px,${Y}px,0)`
			// fix video by doing the opposite as above
			$videoBackground.style.transform = `translate3d(-${X}px,-${Y}px,0) scale(1)`
		}
		// else {
		// 	// var matrix = $($videoBackground).css('transform').replace(/[^0-9\-.,]/g, '').split(','),
		// 	//     staticX = matrix[12] || matrix[4],
		// 	//     staticY = matrix[13] || matrix[5];
		// 	$videoBackground.style.transform = `translate3d(-${X}px,-${Y}px,0) scale(0.3)`
		// }
	}
	const fullscreenMode = () => $videoContainer.classList.contains('full-screen')
	// on video click
	const fullscreenVideo = function (e) {
		// if not full screen
		if (!fullscreenMode() && $($video).hasClass('big')) {

			// add full screen class
			$videoContainer.classList.add('full-screen')
			// expand effect
			$videoContainer.style.transform = `translate3d(${window.innerWidth / 2}px,${window.innerHeight / 2}px,0)`

			$videoBackground.style.transform = `translate3d(-${X}px,-${Y}px,0) scale(0.2)`

			// moveVideo(e)
		}
		// if full screen
		else {
			// remove full screen class
			$videoContainer.classList.remove('full-screen')
			// make video follow cursor
			moveVideo(e)
		}
	}
	// add video click listener
	if ($container) $container.addEventListener('click', fullscreenVideo)
	// add cursor listener
	if ($body) $body.addEventListener('mousemove', moveVideo, false);
