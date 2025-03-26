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

  function startAutoSlide() {
    if (window.innerWidth >= 1440) {
      interval = setInterval(() => changeSlide(), 20000);
    }
  }

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

      slides.forEach((slide, index) => {
        if (index !== 0) {
          const title = slide.querySelector(".c-2-head-title");
          const subTitle = slide.querySelector(".c-2-txt .c-2-sub-title2");

          if (title) title.classList.add("c-2-text-center");
          if (subTitle) subTitle.classList.add("c-2-display-none");
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
      clearInterval(intervalId);
      activateButton(index);
      startAutoRotate();
    });
  });
});
// content-04 End
