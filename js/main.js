const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top'); // 클릭하면 최상단으로 이동

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY > 500);
  if (window.scrollY) {
    // 배지 숨기기
    // gsap.to( 요소 , 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function() { // 클릭하면 최상단으로 이동
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, 
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 가운데 슬라이드 보여주기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});
function random(min, max) {
  // .toFixed()를 통해 반환된 문자 데이터를,
  // parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floationObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector,  //선택자
    random(1.5, 2.5),  // 애니메이션 동작 시간
    {  // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floationObject('.floating1', 1, 15);
floationObject('.floating2', .5, 15);
floationObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
      triggerHook: .8  // 뷰포트 기준에서 지나는 점을 넘으면 밑에 있는 메소드 실행
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
