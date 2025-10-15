const backgroundColorArr = ["#d51811", "#F9EDD3", "#fff", "#FFC83A", "#d51811"];

const anchors = [
  "Section01",
  "Section02",
  "Section03",
  "Section04",
  "Section05",
];

let pageColorMap = new Map();
let header;
let menuBtn;
let navpage;

window.onload = () => {
  //  header
  header = document.querySelector(".header");
  hambergerIcon = document.querySelector(".hambergerIcon");
  logo = document.querySelector(".header-top h1");
  navpage = document.querySelector(".nav-page");

  //  fullpage
  InitfullPage();
};

function InitfullPage() {
  var myFullpage = new fullpage("#fullpage", {
    sectionsColor: backgroundColorArr,
    anchors: anchors,
    navigation: false,
    menu: "#menu",
    responsiveWidth: 1800,
    scrollingSpeed: 900,
    afterResponsive: function (isResponsive) {},
    //  onLeave : Section 변경 시
    onLeave: function (index, nextIndex, direction) {
      // 객체 -> JSON 문자열로 변환
      const jsonString = JSON.stringify(nextIndex);
      // JSON 파싱
      const jsonParse = JSON.parse(jsonString);
      //  앵커 변화는 값에 따라 Header, MenuBtn, logo 색 변경
      console.log(`parse : ${jsonParse.anchor}`);
      header.setAttribute("id", `${jsonParse.anchor}`);
      hambergerIcon.setAttribute("id", `${jsonParse.anchor}`);
      logo.setAttribute("id", `${jsonParse.anchor}`);
      navpage.setAttribute("id", `${jsonParse.anchor}`);
    },
  });
}

$(document).ready(function () {
  $(".btn-menu-wrap").on("click", function () {
    $(this).find(".hambergerIcon").toggleClass("open");
    $(".nav-page").toggleClass("active");
  });
});
