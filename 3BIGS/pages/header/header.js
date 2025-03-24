// JavaScript로 클릭한 버튼에 active 클래스 추가
document.querySelectorAll('.header-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // 기존에 active 상태였던 버튼에서 active 클래스 제거
    document.querySelectorAll('.header-btn').forEach(b => b.classList.remove('active'));
    // 클릭한 버튼에 active 클래스 추가
    btn.classList.add('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll("#content-header, .h-logo, .header-btn-wrap, .header-lang, .header-right > div"); // 여러 요소 선택
  const contentHeader = document.querySelector("#content-header"); // #content-header 요소 선택
  const logoImg = document.querySelector(".h-logo-img"); // <img> 태그 선택

  if (!contentHeader || !logoImg) return; // 요소가 없으면 실행하지 않음

  let isHovered = false; // hover 상태를 추적하는 변수

  // #content-header가 hover되면 다른 요소들에 scrolled 클래스를 추가
  contentHeader.addEventListener("mouseenter", function () {
    isHovered = true;
    headers.forEach(function (header) {
      header.classList.add("scrolled");
    });

    // hover 시 로고 색상 변경
    logoImg.src = "3BIGS/source/header/LOGO-color.svg"; // hover 시 변경된 로고
  });

  // #content-header에서 hover를 벗어나면 scrolled 클래스를 제거
  contentHeader.addEventListener("mouseleave", function () {
    isHovered = false;

    // 스크롤 위치가 50 이하일 때는 로고와 다른 요소들 모두 원래대로 되돌리기
    if (window.scrollY <= 50) {
      logoImg.src = "3BIGS/source/header/LOGO-white.svg"; // 원래 로고로 변경
      headers.forEach(function (header) {
        header.classList.remove("scrolled"); // 모든 요소에서 scrolled 클래스 제거
      });
    }
  });

  // 기존 스크롤 이벤트
  window.addEventListener("scroll", function () {
    // 스크롤 시 .scrolled 클래스 추가/제거
    headers.forEach(function (header) {
      if (window.scrollY > 50) { // 50px 이상 스크롤하면 클래스 추가
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // 스크롤 시 로고 이미지 변경
    if (window.scrollY > 50) {
      logoImg.src = "3BIGS/source/header/LOGO-color.svg"; // 변경된 로고
    } else {
      // hover 상태일 때는 로고 색상 변경하지 않음
      if (!isHovered) {
        logoImg.src = "3BIGS/source/header/LOGO-white.svg"; // 원래 로고
      }
    }
  });
});
