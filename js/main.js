const backgroundColorArr = ["#d51811", "#F9EDD3", "#fff", "#FFC83A", "#ccddff"];

const anchors = [
  "Section01",
  "Section02",
  "Section03",
  "Section04",
  "addfooter",
];

let pageColorMap = new Map();
let header;

window.onload = () => {
  //  header
  header = document.querySelector(".header");

  //  fullpage
  InitfullPage();
};

window.addEventListener("hashchange", function () {
  for (let i = 0; i < anchors.length; i++) {
    if (`#${anchors[i]}` == window.location.hash) {
      console.log("앵커가 변경되었습니다! 현재 앵커:", window.location.hash);
      header.setAttribute("id", `${anchors[i]}`);
    }
  }
});

function InitfullPage() {
  var myFullpage = new fullpage("#fullpage", {
    sectionsColor: backgroundColorArr,
    anchors: anchors,
    navigation: false,
    navigationTooltips: ["Page 1", "Page 2", "Any text!"],
    showActiveTooltip: true,
    menu: "#menu",
    responsiveWidth: 640,
    scrollingSpeed: 900,
    afterResponsive: function (isResponsive) {},
  });
}
