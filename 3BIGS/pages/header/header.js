document.querySelectorAll('.header-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.header-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll("#content-header, .h-logo, .header-btn-wrap, .header-lang, .header-lang > span, .header-right > div");
  const contentHeader = document.querySelector("#content-header");
  const logoImg = document.querySelector(".h-logo > img");

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
    headers.forEach(function (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    if (window.scrollY > 50) {
      logoImg.src = "3BIGS/source/header/LOGO-color.svg";
    } else {
      if (!isHovered) {
        logoImg.src = "3BIGS/source/header/LOGO-white.svg";
      }
    }
  });
});



// 2차 카테고리
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.header-btn');
  const depthWraps = document.querySelectorAll('.header-depths-wrap');
  const contentHeader = document.getElementById('content-header');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      const target = button.getAttribute('data-target');
      
      depthWraps.forEach(wrap => {
        wrap.classList.remove('active');
      });
      
      const targetWrap = document.querySelector(`.header-depths-wrap[data-target="${target}"]`);
      if (targetWrap) {
        targetWrap.classList.add('active');
      }
    });
  });

  contentHeader.addEventListener('mouseleave', () => {
    depthWraps.forEach(wrap => {
      wrap.classList.remove('active');
    });
  });
  
  contentHeader.addEventListener('mouseenter', () => {
    depthWraps.forEach(wrap => {
      if (wrap.classList.contains('active')) {
        wrap.style.display = 'block';
      }
    });
  });
});

document.querySelector('.header-right').addEventListener('click', function() {
  document.getElementById('site-map-wrap').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('site-map-wrap').classList.remove('active');
});
