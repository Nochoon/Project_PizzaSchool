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

window.onload = () => {
  //  header
  header = document.querySelector(".header");
  hambergerIcon = document.querySelector(".hambergerIcon");

  //  fullpage
  InitfullPage();
};

// window.addEventListener("hashchange", function () {
//   for (let i = 0; i < anchors.length; i++) {
//     if (`#${anchors[i]}` == window.location.hash) {
//       console.log("앵커가 변경되었습니다! 현재 앵커:", window.location.hash);
//       header.setAttribute("id", `${anchors[i]}`);
//       hambergerIcon.setAttribute("id", `${anchors[i]}`);
//     }
//   }
// });

function InitfullPage() {
  var myFullpage = new fullpage("#fullpage", {
    sectionsColor: backgroundColorArr,
    anchors: anchors,
    navigation: false,
    // navigationTooltips: ["Page 1", "Page 2", "Any text!"],
    // showActiveTooltip: true,
    menu: "#menu",
    responsiveWidth: 1670,
    scrollingSpeed: 900,
    afterResponsive: function (isResponsive) {},
    onLeave: function (index, nextIndex, direction) {
      // 객체 -> JSON 문자열로 변환
      const jsonString = JSON.stringify(nextIndex);

      // JSON 파싱
      const jsonParse = JSON.parse(jsonString);

      //  앵커 변화는 값에 따라 Header , MenuBtn 색 변경
      console.log(`parse : ${jsonParse.anchor}`);
      header.setAttribute("id", `${jsonParse.anchor}`);
      hambergerIcon.setAttribute("id", `${jsonParse.anchor}`);
    },
  });
}

$(document).ready(function () {
  $(".btn-menu-wrap").on("click", function () {
    $(this).find(".hambergerIcon").toggleClass("open");
  });
});
