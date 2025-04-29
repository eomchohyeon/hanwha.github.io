$(document).ready(function(){


    let currentSlide = 0;

function changeSlide(index) {
    const slides = document.querySelectorAll('.slidelist li');
    const buttons = document.querySelectorAll('.button');

    // 현재 슬라이드 숨기기
    slides[currentSlide].style.display = 'none';
    buttons[currentSlide].classList.remove('active');

    // 새로운 슬라이드 보여주기
    currentSlide = index;
    slides[currentSlide].style.display = 'block';
    buttons[currentSlide].classList.add('active');

    // 슬라이드 이동
    const slidesContainer = document.querySelector('.slidelist');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 초기 슬라이드 설정
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slidelist li');
    slides.forEach((slide, index) => {
        if (index !== currentSlide) {
            slide.style.display = 'none'; // 초기에는 첫 번째 슬라이드만 보이도록 설정
        }
    });
});

    const circle = document.querySelector('.circle');

    document.addEventListener('mousemove', (e) => {
      const mouseX = e.pageX;  // 페이지 전체 좌표를 사용 (스크롤이 있어도 문제 없음)
      const mouseY = e.pageY;  // 페이지 전체 좌표를 사용

      circle.style.left = `${mouseX}px`;  // 마우스 X 좌표에 원을 배치
      circle.style.top = `${mouseY}px`;   // 마우스 Y 좌표에 원을 배치
    });

});