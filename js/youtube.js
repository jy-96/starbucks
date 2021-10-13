// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script'); // script 요소 생성

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];  // 첫번째 존재하는 script 태그를 가져온다.
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  // firstScriptTag 앞에 tag요소 추가

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: '1mlk9CZTV0M ', // 최초 재생할 유튜브 영상 id (url에서 복사)
    playerVars : {
      autoplay: true,
      loop: true,
      playlist: '1mlk9CZTV0M',
    },
    events: {
      onReady: function(event) {
        event.target.mute() // 음소거
      }
    }
  });
}
