function trackLocation(e) {
  var rect = videoContainer.getBoundingClientRect(),
      position = ((e.pageX - rect.left) / videoContainer.offsetWidth)*100;
  if (position <= 100) { 
    videoClipper.style.width = position+"%";
    clippedVideo.style.width = ((100/position)*100)+"%";
    clippedVideo.style.zIndex = 3;
	}
}
var videoContainer = document.getElementById("video-compare-container"),
videoClipper = document.getElementById("video-clipper"),
clippedVideo = videoClipper.getElementsByTagName("video")[0];
videoContainer.addEventListener( "mousemove", trackLocation, false); 
videoContainer.addEventListener("touchstart",trackLocation,false);
videoContainer.addEventListener("touchmove",trackLocation,false);




var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var btn = document.getElementById('videoPlay');
btn.addEventListener('click',function(){
  alert('vai tocar');
  video1.play();  
  video2.play();
},false);

const videoContainer = document.getElementById("video-compare-container");
const videoClipper = document.getElementById("video-clipper");

videoContainer.addEventListener("mousemove", (e) => {
  const rect = videoContainer.getBoundingClientRect();
  const position = ((e.clientX - rect.left) / rect.width) * 100;

  // 슬라이더 위치 제한 (0% ~ 100%)
  const adjustedPosition = Math.max(0, Math.min(100, position));

  // 슬라이더 위치 업데이트
  videoClipper.style.width = `${adjustedPosition}%`;
});


