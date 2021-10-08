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

// 함수가 계속 실행되는 것을 0.3초의 텀을 주는 역할
// lodash라는 javascript library를 통해 throttle이라는 메소드 사용 가능
// _.throttle(함수, 시간)
const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
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

// new Swiper(선택자, 옵션)
// JS에서 많이 쓰이는 웹 프론트엔드 라이브러리
const swiper = new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});