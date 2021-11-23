const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    //Logic..
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});



/*
=======
GSAP
=======
*/
// 함수가 계속 실행되는 것을 0.3초의 텀을 주는 역할
// lodash라는 javascript library를 통해 throttle이라는 메소드 사용 가능
// _.throttle(함수, 시간)
const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
    // console.log(window.scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기
        // gasp.to(요소, 지속시간, 옵션); 
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
//fadeEls 의 요소에 갯수만큼 function을 돌린다.
// gasp.to(요소, 지속시간, 옵션); 
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,    // 0.7, 1.4, 2.1, 2.7 순차적으로 딜레이가 생기기 위한 코드
        opacity: 1
    });
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector,          // 선택자 
        random(1.5, 2.5),  // 애니메이션 동작 시간
        {   // 옵션
            y: size,
            repeat: -1,  // 무한 반복
            yoyo: true,  //한번 재생된 애니메이션을 다시 뒤로 재생  
            ease: Power1.easeInOut,
            delay: random(0, delay)

        });
}


/*
=======
Swiper
=======
*/
// new Swiper(선택자, 옵션)
// JS에서 많이 쓰이는 웹 프론트엔드 라이브러리
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,   // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10,   // 슬라이드 사이 여백
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



/*
=======
Scroll Magic
=======
*/
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,       // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')      // 각 section에 show 클래스명 추가
    .addTo(new ScrollMagic.Controller());
});