// content-02 Start
document.addEventListener("DOMContentLoaded", function () {
  console.log("스크립트 실행됨");

  const slides = document.querySelectorAll(".c-2-slide");
  if (slides.length === 0) {
    console.error("슬라이드 요소를 찾을 수 없음");
    return;
  }
  console.log("slides 찾음:", slides);

  let currentIndex = 0;
  let interval;

  function changeSlide(index = null) {
    if (slides.length === 0) return;

    const prevSlide = slides[currentIndex];
    prevSlide.classList.remove("c-2-on");

    const prevTitle = prevSlide.querySelector(".c-2-head-title");
    const prevSubTitle = prevSlide.querySelector(".c-2-txt .c-2-sub-title2");

    if (prevTitle) prevTitle.classList.add("c-2-text-center");
    if (prevSubTitle) prevSubTitle.classList.add("c-2-display-none");

    currentIndex = index !== null ? index : (currentIndex + 1) % slides.length;

    const newSlide = slides[currentIndex];
    newSlide.classList.add("c-2-on");

    const newTitle = newSlide.querySelector(".c-2-head-title");
    const newSubTitle = newSlide.querySelector(".c-2-txt .c-2-sub-title2");

    if (newTitle) newTitle.classList.remove("c-2-text-center");
    if (newSubTitle) newSubTitle.classList.remove("c-2-display-none");
  }

  // 자동 슬라이드 시작 함수
  function startAutoSlide() {
    if (window.innerWidth >= 1440) {
      interval = setInterval(() => changeSlide(), 20000);
    }
  }

  // 슬라이드에 마우스 호버 이벤트 추가
  function addHoverEvents() {
    slides.forEach((slide, index) => {
      slide.addEventListener("mouseenter", () => {
        if (window.innerWidth >= 1440) {
          clearInterval(interval);
          changeSlide(index);
        }
      });
      slide.addEventListener("mouseleave", () => {
        if (window.innerWidth >= 1440) startAutoSlide();
      });
    });
  }

  function init() {
    if (window.innerWidth >= 1440) {
      const firstSlide = slides[0];
      firstSlide.classList.add("c-2-on");

      const firstTitle = firstSlide.querySelector(".c-2-head-title");
      const firstSubTitle = firstSlide.querySelector(".c-2-txt .c-2-sub-title2");

      if (firstTitle) firstTitle.classList.remove("c-2-text-center");
      if (firstSubTitle) firstSubTitle.classList.remove("c-2-display-none");

      // 나머지 슬라이드는 비활성화
      slides.forEach((slide, index) => {
        if (index !== 0) {  // 첫 번째 슬라이드를 제외한 다른 슬라이드들
          const title = slide.querySelector(".c-2-head-title");  // 제목
          const subTitle = slide.querySelector(".c-2-txt .c-2-sub-title2");  // 서브 제목

          if (title) title.classList.add("c-2-text-center");  // 중앙 정렬 적용
          if (subTitle) subTitle.classList.add("c-2-display-none");  // 서브 제목 숨기기
        }
      });

      startAutoSlide();
      addHoverEvents();
    }
  }

  init();

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1440) {
      clearInterval(interval);
    } else {
      init();
    }
  });
});
// content-02 End

// content-04 Start
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".c-4-btn");
  const contents = document.querySelectorAll(".c-4-txt-n-img");
  const btnWrap = document.querySelector(".c-4-btn-wrap");

  let currentIndex = 0;
  let intervalId;

  function activateButton(index) {
    buttons.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("display"));

    const activeButton = buttons[index];
    const target = activeButton.dataset.target;
    const activeContent = document.querySelector(`.c-4-txt-n-img[data-target="${target}"]`);

    activeButton.classList.add("active");
    activeContent.classList.add("display");
    currentIndex = index;
  }

  function startAutoRotate() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % buttons.length;
      activateButton(currentIndex);
    }, 20000);
  }

  activateButton(0);
  startAutoRotate();

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearInterval(intervalId); // 자동 순환 멈추기
      activateButton(index);
      startAutoRotate(); // 다시 자동 순환 시작
    });
  });
});
// content-04 End
