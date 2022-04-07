

// 뱃지가 일정값이 넘어가면 없어지고 다시 돌아오면 생기도록 하는 
// 도큐먼트에서 선택하겠다 헤더에 뱃지 부분을 badgeEl이라고 선언

// scrolltop 버튼 기능, 스크롤에따라 우측으로 사라지고 나오고 함.

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// window 화면자체를 뜻함.
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // scorll to 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0 //요소의 원래 위치
    });
  } else {
    // 배지보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // scroll to 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100 
    });
  }
}, 300));
// _.throttle(함수, 시간)

// scrolltop 버튼 누르면 상단으로
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// 메인이미지에서 음료이미지텍스트끼리 순서대로 fade-in 효과
// 하나하나 효과를 입력하기 보다는 자동화되는 로직사용을 하면 좋다.
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity : 1
  });
});

// notice 공지사항 swiper slide
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// promotion 프로모션 swiper slide
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBeetween: 10, //슬라이드 여백
  centeredSlides: true, //1번 슬라이드가 가운데에 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지네이션
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
// awards - swiper slide
new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  spaceBeetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});
// promotion 누르면 하단에 생기고 다시 누르면 닫히는 효과
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const innerRightEl = document.querySelector('.inner__right');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  // ! : 반대로 반환하는 것
  if (isHidePromotion) {
    // 숨김처리! 
    promotionEl.classList.add('hide');
  } else {
    // 보임처리!
    promotionEl.classList.remove('hide');
  }
});
innerRightEl.addEventListener('click', function() {
  // 익명의 함수를 가지고 있는 요소를 클릭하게 되면
  promotionToggleBtn.click();
  // searchInput에 강제로 포커스를 해라
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 유튜브 요소 위에 동그란 이미지 3개 움직이는 기능
function floatingObject(selector, delay, size) {
  // gsap. to(요소, 지속시간, 어떻게 넣을건지 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작시간
    { //옵션
    y: size,
    repeat: -1, //무한반복
    yoyo: true, //다시 돌아오는 애니메이션
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// scroll magic cdn - 스크롤하면 그림이나 문자가 생기고 움직이는 기능
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
 new ScrollMagic //생성자 
 .Scene({
   triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
   triggerHook:.8 
 })
 .setClassToggle(spyEl, 'show')
 .addTo(new ScrollMagic.Controller());
});
