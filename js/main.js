/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

/* 돋보기 아이콘과 input 텍스트 박스가 겹쳐도, 클릭 시 input 텍스트 박스가 강조되게. */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});


/* input요소가 focus 되었을 때. */
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});


/* input요소가 blur 되었을 때. */
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

/* 스크롤을 아래로 일정 수준 이상 내리면, 화면 좌측의 뱃지가 사라지게 하는 코드 */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {

  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 뱃지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    /** GO TO TOP 버튼 보이기 !! **/
    gsap.to(toTopEl, .2, {
      x: 0
    });
    /** GO TO TOP 버튼 보이기 !! **/
  }
  else {
    // 뱃지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    /** GO TO TOP 버튼 숨기기 !! **/
    gsap.to(toTopEl, .2, {
      x: 100
    });
    /** GO TO TOP 버튼 숨기기 !! **/
  }
}, 300));


/** GO TO TOP 버튼 클릭시, 화면 상단으로 이동 기능 **/
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});
/** GO TO TOP 버튼 클릭시, 화면 상단으로 이동 기능 **/

/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

// visual title 부분 순차 애니메이션 적용
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

// NOTICE 부분 슬라이드 기능 적용.
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
}); 


/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

// PROMOTION 부분 슬라이드 적용
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

// Promotion 페이지 드랍다운 효과 설정.
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리 실행.
    promotionEl.classList.add('hide');
  }
  else {
    // 드랍다운 실행.
    promotionEl.classList.remove('hide');
  }
});

/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

// 둥둥 떠다니는 이미지 효과 구현

// 범위 랜덤 함수.
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject (selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

// Scroll Magic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl, index) {
  
  // 메소드 체이닝
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

// Awards 부분 슬라이드 효과.
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


/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

// 올해가 몇년도인지 자동으로 계산해주는 코드.
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

/**********************************************************************************************************************************************************************/
/**********************************************************************************************************************************************************************/

