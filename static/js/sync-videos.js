const videos = document.querySelectorAll('.sync-video');
let isSyncing = false;

// 비디오 싱크 맞추기 함수
function syncVideos() {
  if (isSyncing) return;
  isSyncing = true;

  const masterTime = videos[0].currentTime; // 첫 번째 비디오 기준
  videos.forEach(video => {
    if (Math.abs(video.currentTime - masterTime) > 0.1) {
      video.currentTime = masterTime; // 시간 차이가 0.05초 이상이면 싱크 맞추기
    }
  });

  isSyncing = false;
}

// 모든 비디오 로드 후 싱크 및 재생 시작
Promise.all(
  Array.from(videos).map(video =>
    new Promise(resolve => {
      video.addEventListener('loadeddata', resolve); // 로드 완료 이벤트
    })
  )
).then(() => {
  videos.forEach(video => {
    video.play(); // 모든 비디오 재생
    video.playbackRate = 1.0; // 재생 속도 동일하게 설정
    video.addEventListener('play', () => videos.forEach(v => v.play())); // 동시 재생
    video.addEventListener('pause', () => videos.forEach(v => v.pause())); // 동시 일시정지
    video.addEventListener('timeupdate', syncVideos); // 시간 동기화
  });
});