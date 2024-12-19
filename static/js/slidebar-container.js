  // 모든 슬라이더에 대해 공통 동작 설정
  document.querySelectorAll('[data-slider]').forEach((slider) => {
    const leftVideo = slider.querySelector('.left-video');
    const rightVideo = slider.querySelector('.right-video');
    const sliderBar = slider.querySelector('.slider-bar');
    const sliderDivider = slider.querySelector('.slider-divider');

    // 슬라이더 동작 처리
    slider.addEventListener('mousemove', (e) => handleSliderMove(e, slider, sliderBar, sliderDivider));
    slider.addEventListener('touchmove', (e) => handleSliderMove(e, slider, sliderBar, sliderDivider));

    // 비디오 재생/정지 동작
    slider.addEventListener('click', () => {
      if (leftVideo.paused) {
        leftVideo.play();
        rightVideo.play();
      } else {
        leftVideo.pause();
        rightVideo.pause();
      }
    });
  });

  // 슬라이더 위치 조정 함수
  function handleSliderMove(event, slider, sliderBar, sliderDivider) {
    const rect = slider.getBoundingClientRect();
    const xPos = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    const position = ((xPos - rect.left) / slider.offsetWidth) * 100;

    if (position >= 0 && position <= 100) {
      sliderBar.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
      sliderDivider.style.left = `${position}%`;
    }
  }