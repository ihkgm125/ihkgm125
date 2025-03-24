document.querySelectorAll('.header-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.header-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll("#content-header, .h-logo, .header-btn-wrap, .header-lang, .header-right > div");
  const contentHeader = document.querySelector("#content-header");
  const logoImg = document.querySelector(".h-logo-img");

  if (!contentHeader || !logoImg) return;
  let isHovered = false;

  contentHeader.addEventListener("mouseenter", function () {
    isHovered = true;
    headers.forEach(function (header) {
      header.classList.add("scrolled");
    });

    logoImg.src = "3BIGS/source/header/LOGO-color.svg";
  });

  contentHeader.addEventListener("mouseleave", function () {
    isHovered = false;

    if (window.scrollY <= 50) {
      logoImg.src = "3BIGS/source/header/LOGO-white.svg";
      headers.forEach(function (header) {
        header.classList.remove("scrolled");
      });
    }
  });

  window.addEventListener("scroll", function () {
    // 스크롤 시 .scrolled 클래스 추가/제거
    headers.forEach(function (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // 스크롤 시 로고 이미지 변경
    if (window.scrollY > 50) {
      logoImg.src = "3BIGS/source/header/LOGO-color.svg";
    } else {
      // hover 상태일 때는 로고 색상 변경하지 않음
      if (!isHovered) {
        logoImg.src = "3BIGS/source/header/LOGO-white.svg";
      }
    }
  });
});
