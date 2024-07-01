// ----  all string animation ----------


// Function to apply scroll-triggered animation
function applyScrollAnimation(selector, startTrigger, endTrigger, animationTarget, scaleXValue, scaleYValue, transformOriginValue) {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(selector).forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: startTrigger,
        end: endTrigger,
        scrub: 1,
        marker: true,
        onEnter: () => {
          item.classList.add("in-view");
          gsap.to(animationTarget, {
            scaleX: scaleXValue,
            scaleY: scaleYValue,
            transformOrigin: transformOriginValue,
            duration: 5,
            delay: 0,
          });
        },
        onLeaveBack: () => item.classList.remove("in-view"),
      },
      ease: "none",
    });
  });
}

// Example usage with dynamic scaleX, scaleY, and transformOrigin values
applyScrollAnimation(".string-right-s", "top 400px", "bottom top", ".string-right-s-cover", 0, 1, "left");
applyScrollAnimation(".string-exp1", "top center", "bottom top", ".string-exp1-cover", 0, 1, "right");
applyScrollAnimation(".string-exp2-cover", "bottom 850px", "bottom top", ".string-exp2-cover", 0, 1, "left");
applyScrollAnimation(".string-c", "top 290px", "bottom top", ".string-c-cover", 1, 0, "bottom center");
applyScrollAnimation(".string-a", "top 600px", "bottom top", ".string-a-cover", 0, 1, "left");
// You can add more calls with different values as needed






// --------------scroll btn --------------
const fixedButton = document.getElementById("fixedButton");

// 設定滾動的位置閾值
const scrollThresholdToShow = 1000;
const scrollThresholdToHide = document.body.scrollHeight - 1000;

// 監聽視窗滾動事件
window.addEventListener("scroll", function () {
  // 如果滾動的距離超過顯示的閾值，則顯示按鈕，否則隱藏
  if (
    window.scrollY > scrollThresholdToShow &&
    window.scrollY < scrollThresholdToHide
  ) {
    fixedButton.classList.add("show");
  } else {
    fixedButton.classList.remove("show");
  }
});

//-----------------to the top-----------------

const toTheTopButton = document.querySelector(".to-the-top");

// 檢查是否找到了元素
if (toTheTopButton) {
  toTheTopButton.addEventListener("click", () => {
    // 直接滾動，而不使用平滑滾動
    window.scrollTo(0, 0);
  });
} else {
  console.error("找不到 .to-the-top 元素");
}

//----------------- z-index -----------------

document.getElementById('April-img').addEventListener('click', function() {
  // 點擊container-1-f時，將其z-index設為較高的值
  this.style.zIndex = '4';
  // 同時將container-2-f的z-index設為較低的值
  document.getElementById('container1').style.zIndex = '3';
  document.getElementById('container2').style.zIndex = '2';
});

document.getElementById('May-img').addEventListener('click', function() {
  // 點擊container-1-f時，將其z-index設為較高的值
  this.style.zIndex = '4';
  // 同時將container-2-f的z-index設為較低的值
  document.getElementById('container1').style.zIndex = '3';
  document.getElementById('container2').style.zIndex = '2';
});

document.getElementById('June-img').addEventListener('click', function() {
  // 點擊container-1-f時，將其z-index設為較高的值
  this.style.zIndex = '4';
  // 同時將container-2-f的z-index設為較低的值
  document.getElementById('container2').style.zIndex = '3';
  document.getElementById('container1').style.zIndex = '2';
});

document.getElementById('July-img').addEventListener('click', function() {
  // 點擊container-1-f時，將其z-index設為較高的值
  this.style.zIndex = '4';
  // 同時將container-2-f的z-index設為較低的值
  document.getElementById('container2').style.zIndex = '3';
  document.getElementById('container1').style.zIndex = '2';
});


//----------------- April -----------------
const img1 = document.getElementById("April-img");
const dialog1 = document.querySelector("#dialog_c");
const overlay1 = document.querySelector(".ol_4");
const currentImage1 = document.getElementById("currentImage");
const nextPageImage1 = document.getElementById("nextPageImage");
const thirdPageImage1 = document.getElementById("thirdPageImage");
const currentImageSmartphone1 = document.getElementById("currentImage-smartphone");
const nextPageImageSmartphone1 = document.getElementById("nextPageImage-smartphone");
const thirdPageImageSmartphone1 = document.getElementById("thirdPageImage-smartphone");

// ... （其余代码保持不变）

img1.addEventListener("click", e => {
  e.stopPropagation()
  if (dialog1.classList.contains("active")) {
    dialog1.classList.remove("active");
    overlay1.classList.add("hidden");
    currentImage1.classList.add("active");
    nextPageImage1.classList.add("active");
    thirdPageImage1.classList.add("active");
    currentImageSmartphone1.classList.add("active");
    nextPageImageSmartphone1.classList.add("active");
    thirdPageImageSmartphone1.classList.add("active");
    document.body.style.overflow = "auto";
  } else {
    dialog1.classList.add("active");
    overlay1.classList.remove("hidden");
    currentImage1.classList.remove("active");
    nextPageImage1.classList.remove("active");
    thirdPageImage1.classList.remove("active");
    currentImageSmartphone1.classList.remove("active");
    nextPageImageSmartphone1.classList.remove("active");
    thirdPageImageSmartphone1.classList.remove("active");
    document.body.style.overflow = "hidden";
  }
});

const closeBtn = document.querySelector("#dialog_c .close");
closeBtn.addEventListener("click", e => {
  e.stopPropagation()
  dialog1.classList.remove("active");
  overlay1.classList.add("hidden");
  currentImage1.classList.remove("active");
  nextPageImage1.classList.remove("active");
  thirdPageImage1.classList.remove("active");
  currentImageSmartphone1.classList.remove("active");
  nextPageImageSmartphone1.classList.remove("active");
  thirdPageImageSmartphone1.classList.remove("active");
  document.body.style.overflow = "auto";
});

// 新增事件監聽器，點擊文檔時檢查是否在對話框之外，如果是，就隱藏對話框
document.addEventListener("click", function (e) {
  e.stopPropagation()
  if (!dialog1.contains(event.target) && !img1.contains(event.target)) {
    dialog1.classList.remove("active");
    overlay1.classList.add("hidden");
    currentImage1.classList.remove("active");
    nextPageImage1.classList.remove("active");
    thirdPageImage1.classList.remove("active");
    currentImageSmartphone1.classList.remove("active");
    nextPageImageSmartphone1.classList.remove("active");
    thirdPageImageSmartphone1.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// next page
let imgIndex1 = 0;
const imageUrls1 = [
  "./public/features-pages/1-1.png",
  "./public/features-pages/1-2.png",
  "./public/features-pages/1-3.png",
];

const nextPageBtn1 = document.getElementById("nextPageBtn");
const prevPageBtn1 = document.getElementById("prevPageBtn");
// const currentImageSmartphone1 = document.getElementById("currentImage-smartphone");

// 在這裡應用換頁的邏輯，確保 currentImageSmartphone1 類別的正確設置
nextPageBtn1.addEventListener("click", () => {
  imgIndex1 = (imgIndex1 + 1) % imageUrls1.length;
  currentImage1.src = imageUrls1[imgIndex1];
  nextPageImage1.src = imageUrls1[(imgIndex1 + 1) % imageUrls1.length];
  thirdPageImage1.src = imageUrls1[(imgIndex1 + 2) % imageUrls1.length];
  currentImageSmartphone1.src = "./public/features-pages/new pages/1-" + (imgIndex1 + 1) + "-fe.png";
});

prevPageBtn1.addEventListener("click", () => {
  imgIndex1 = (imgIndex1 - 1 + imageUrls1.length) % imageUrls1.length;
  currentImage1.src = imageUrls1[imgIndex1];
  nextPageImage1.src = imageUrls1[(imgIndex1 + 1) % imageUrls1.length];
  thirdPageImage1.src = imageUrls1[(imgIndex1 + 2) % imageUrls1.length];
  currentImageSmartphone1.src = "./public/features-pages/new pages/1-" + (imgIndex1 + 1) + "-fe.png";
});

// ... （其他功能逻辑保持不变）


//----------------- May -----------------
const img2 = document.getElementById("May-img");
const dialog2 = document.querySelector("#dialog_d");
const overlay2 = document.querySelector(".ol_5");
const currentImage2 = document.getElementById("currentImage2");
const nextPageImage2 = document.getElementById("nextPageImage2");
const thirdPageImage2 = document.getElementById("thirdPageImage2");
const currentImageSmartphone2 = document.getElementById("currentImage2-smartphone");
const nextPageImageSmartphone2 = document.getElementById("nextPageImage2-smartphone");
const thirdPageImageSmartphone2 = document.getElementById("thirdPageImage2-smartphone");

console.log(img2);
console.log(dialog2);
console.log(overlay2);

img2.addEventListener("click", e => {
  e.stopPropagation();
  if (dialog2.classList.contains("active")) {
    dialog2.classList.remove("active");
    overlay2.classList.add("hidden");
    currentImage2.classList.add("active");
    currentImageSmartphone2.classList.add("active");
    nextPageImageSmartphone2.classList.add("active");
    thirdPageImageSmartphone2.classList.add("active");
    document.body.style.overflow = "auto";
  } else {
    dialog2.classList.add("active");
    overlay2.classList.remove("hidden");
    currentImage2.classList.remove("active");
    currentImageSmartphone2.classList.remove("active");
    nextPageImageSmartphone2.classList.remove("active");
    thirdPageImageSmartphone2.classList.remove("active");
    document.body.style.overflow = "hidden";
  }
});

const closeBtn2 = document.querySelector("#dialog_d .close2");
closeBtn2.addEventListener("click", e => {
  e.stopPropagation();
  dialog2.classList.remove("active");
  overlay2.classList.add("hidden");
  currentImage2.classList.remove("active");
  currentImageSmartphone2.classList.remove("active");
  nextPageImageSmartphone2.classList.remove("active");
  thirdPageImageSmartphone2.classList.remove("active");
  document.body.style.overflow = "auto";
});

// 新增事件監聽器，點擊文檔時檢查是否在對話框之外，如果是，就隱藏對話框
document.addEventListener("click", function (e) {
  e.stopPropagation();
  if (!dialog2.contains(event.target) && !img2.contains(event.target)) {
    dialog2.classList.remove("active");
    overlay2.classList.add("hidden");
    currentImage2.classList.remove("active");
    currentImageSmartphone2.classList.remove("active");
    nextPageImageSmartphone2.classList.remove("active");
    thirdPageImageSmartphone2.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// next page
let imgIndex2 = 0;
const imageUrls2 = [
  "./public/features-pages/2-1.png",
  "./public/features-pages/2-2.png",
  "./public/features-pages/2-3.png",
];

const nextPageBtn2 = document.getElementById("nextPageBtn2");
const prevPageBtn2 = document.getElementById("prevPageBtn2");

// 在這裡應用換頁的邏輯，確保 currentImage2 類別的正確設置
nextPageBtn2.addEventListener("click", () => {
  imgIndex2 = (imgIndex2 + 1) % imageUrls2.length;
  currentImage2.src = imageUrls2[imgIndex2];
  nextPageImage2.src = imageUrls2[(imgIndex2 + 1) % imageUrls2.length];
  thirdPageImage2.src = imageUrls2[(imgIndex2 + 2) % imageUrls2.length];
  currentImageSmartphone2.src = "./public/features-pages/new pages/2-" + (imgIndex2 + 1) + "-fe.png";

});

prevPageBtn2.addEventListener("click", () => {
  imgIndex2 = (imgIndex2 - 1 + imageUrls2.length) % imageUrls2.length;
  currentImage2.src = imageUrls2[imgIndex2];
  nextPageImage2.src = imageUrls2[(imgIndex2 + 1) % imageUrls2.length];
  thirdPageImage2.src = imageUrls2[(imgIndex2 + 2) % imageUrls2.length];
  currentImageSmartphone2.src = "./public/features-pages/new pages/2-" + (imgIndex2 + 1) + "-fe.png";

});




//----------------- June -----------------
const img3 = document.getElementById("June-img");
const dialog3 = document.querySelector("#dialog_e");
const overlay3 = document.querySelector(".ol_6");

console.log(img3);
console.log(dialog3);
console.log(overlay3);

img3.addEventListener("click", e => {
  e.stopPropagation()
  if (dialog3.classList.contains("active")) {
    dialog3.classList.remove("active");
    overlay3.classList.add("hidden");
    currentImage3.classList.add("active");
    document.body.style.overflow = "auto";
  } else {
    dialog3.classList.add("active");
    overlay3.classList.remove("hidden");
    currentImage3.classList.remove("active");
    document.body.style.overflow = "hidden";
  }
});

const closeBtn3 = document.querySelector("#dialog_e .close3");
closeBtn3.addEventListener("click", e => {
  e.stopPropagation()
  dialog3.classList.remove("active");
  overlay3.classList.add("hidden");
  currentImage3.classList.remove("active");  // 修正此行
  document.body.style.overflow = "auto";
});

// 新增事件監聽器，點擊文檔時檢查是否在對話框之外，如果是，就隱藏對話框
document.addEventListener("click", function (e) {
  e.stopPropagation()
  if (!dialog3.contains(event.target) && !img3.contains(event.target)) {
    dialog3.classList.remove("active");
    overlay3.classList.add("hidden");
    currentImage3.classList.remove("active");  // 修正此行
    document.body.style.overflow = "auto";
  }
});







//----------------- July -----------------
const img4 = document.getElementById("July-img");
const dialog4 = document.querySelector("#dialog_f");
const overlay4 = document.querySelector(".ol_7");

console.log(img4);
console.log(dialog4);
console.log(overlay4);

img4.addEventListener("click", e => {
  e.stopPropagation()
  if (dialog4.classList.contains("active")) {
    dialog4.classList.remove("active");
    overlay4.classList.add("hidden");
    currentImage4.classList.add("active");
    document.body.style.overflow = "auto";
  } else {
    dialog4.classList.add("active");
    overlay4.classList.remove("hidden");
    currentImage4.classList.remove("active");
    document.body.style.overflow = "hidden";
  }
});

const closeBtn4 = document.querySelector("#dialog_f .close4");
closeBtn4.addEventListener("click", e => {
  e.stopPropagation()
  dialog4.classList.remove("active");
  overlay4.classList.add("hidden");
  currentImage4.classList.remove("active");  // 修正此行
  document.body.style.overflow = "auto";
});

// 新增事件監聽器，點擊文檔時檢查是否在對話框之外，如果是，就隱藏對話框
document.addEventListener("click", function (e) {
  e.stopPropagation()
  if (!dialog4.contains(event.target) && !img4.contains(event.target)) {
    dialog4.classList.remove("active");
    overlay4.classList.add("hidden");
    currentImage4.classList.remove("active");  // 修正此行
    document.body.style.overflow = "auto";
  }
});

















//about

const aboutDiv = document.querySelector("#about");

// 获取所有元素
const allElements = document.querySelectorAll("*");

// 定义正则表达式
const regex = /^circle-\d+-a$/;

// 迭代所有元素，筛选出符合正则表达式的元素
const matchedElements = Array.from(allElements).filter((element) =>
  regex.test(element.className)
);


// 创建 Intersection Observer 实例
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        matchedElements.forEach((ele) => {
          setTimeout(() => {
            ele.classList.add("onceanime");
          }, 1000);
        });
        console.log("元素进入可视范围");
      } else {
        console.log("元素不在可视范围");
      }
    });
  },
  { threshold: 0.7 }
); // threshold 是一个 0 到 1 之间的值，表示交叉比例

// 开始观察目标元素
observer.observe(aboutDiv);

document
  .querySelector(".circle-1-a")
  .addEventListener("mouseover", function () {
    this.src = "./public/aboutus pic/create-1.png";
  });
document
  .querySelector(".circle-1-a")
  .addEventListener("mouseleave", function () {
    this.src = "./public/aboutus pic/create.png";
  });
document
  .querySelector(".circle-1-a")
  .addEventListener("mouseleave", function () {});

let animeFlag = false;

//----------------

document
  .querySelector(".circle-2-a")
  .addEventListener("mouseover", function () {
    this.src = "./public/aboutus pic/arrange-1.png";
  });
document
  .querySelector(".circle-2-a")
  .addEventListener("mouseleave", function () {
    this.src = "./public/aboutus pic/arrange.png";
  });
document
  .querySelector(".circle-2-a")
  .addEventListener("mouseleave", function () {});

//----------------

document
  .querySelector(".circle-3-a")
  .addEventListener("mouseover", function () {
    this.src = "./public/aboutus pic/analysis-1.png";
  });
document
  .querySelector(".circle-3-a")
  .addEventListener("mouseleave", function () {
    this.src = "./public/aboutus pic/analysis.png";
  });
document
  .querySelector(".circle-3-a")
  .addEventListener("mouseleave", function () {});

//----------------

document
  .querySelector(".circle-4-a")
  .addEventListener("mouseover", function () {
    this.src = "./public/aboutus pic/support-1.png";
  });
document
  .querySelector(".circle-4-a")
  .addEventListener("mouseleave", function () {
    this.src = "./public/aboutus pic/support.png";
  });
document
  .querySelector(".circle-4-a")
  .addEventListener("mouseleave", function () {});

//----------------

document
.querySelector(".circle-5-a")
.addEventListener("mouseover", function () {
  this.src = "./public/aboutus pic/security-1.png";
});
document
.querySelector(".circle-5-a")
.addEventListener("mouseleave", function () {
  this.src = "./public/aboutus pic/security.png";
});
document
.querySelector(".circle-5-a")
.addEventListener("mouseleave", function () {});

//----------------

document
.querySelector(".circle-6-a")
.addEventListener("mouseover", function () {
  this.src = "./public/aboutus pic/read-1.png";
});
document
.querySelector(".circle-6-a")
.addEventListener("mouseleave", function () {
  this.src = "./public/aboutus pic/read.png";
});
document
.querySelector(".circle-6-a")
.addEventListener("mouseleave", function () {});










//------------- 每頁自動顯示效果 ---------------------------

let animeFlag1 = false; // for #concerns
let animeFlag2 = false; // for #ourVoice
let animeFlag3 = false; // for #example1
let animeFlag4 = false; // for #example2
let animeFlag5 = false; // for #footer
let animeFlag6 = false; // for #switch


// concern
const observer1 = new IntersectionObserver(
  // 進入或離開可視區域時
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animeFlag1) {
        animeFlag1 = true;
        const dialogElements = document.querySelectorAll(
          '[class^="dialogue-c-"]'
        );

        const tl = gsap.timeline(); //動畫時間軸的初始化
        dialogElements.forEach((dialogElement, i) => {
          // 设置初始状态
          gsap.set(dialogElement, { autoAlpha: 0, y: 20 });
          // 将每个元素的动画添加到时间轴
          tl.to(
            dialogElement,
            { duration: 1.2, autoAlpha: 1, y: 0 }, //動畫持續時間
            (i + 1) * 0.5  //動畫延遲時間
          );
        });
      } else {
        console.log("元素不在可视范围");
      }
    });
  },
  { threshold: 0.7 }
);
observer1.observe(document.querySelector("#concerns")); //change


// ourVoice
const observer2 = new IntersectionObserver(
  // 進入或離開可視區域時
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animeFlag2) {
        animeFlag2 = true;
        const dialogElements = document.querySelectorAll(
          '[class$="-all-o"]'
        );

        const tl = gsap.timeline(); //動畫時間軸的初始化 不可動
        dialogElements.forEach((dialogElement, i) => {
          // 设置初始状态
          gsap.set(dialogElement, { autoAlpha: 0, y: 20 });
          // 将每个元素的动画添加到时间轴
          tl.to(
            dialogElement,
            { duration: 1.2, autoAlpha: 1, y: 0 }, //動畫持續時間
            (i + 1) * 0.5  //動畫延遲時間
          );
        });
      } else {
        console.log("元素不在可视范围");
      }
    });
  },
  { threshold: 0.7 } //元素被看到多少的時候會顯示（0-1）
);
observer2.observe(document.querySelector("#ourVoice")); //要換成那個範圍


// example1
const observer3 = new IntersectionObserver(
  // 進入或離開可視區域時
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animeFlag3) {
        animeFlag3 = true;
        const dialogElements = document.querySelectorAll(
          '[class^="dialogue-change1"]'
        );

        const tl = gsap.timeline(); //動畫時間軸的初始化 不可動
        dialogElements.forEach((dialogElement, i) => {
          // 设置初始状态
          gsap.set(dialogElement, { autoAlpha: 0, y: 20 });
          // 将每个元素的动画添加到时间轴
          tl.to(
            dialogElement,
            { duration: 1.2, autoAlpha: 1, y: 0 }, //動畫持續時間
            (i + 1) * 0.5  //動畫延遲時間
          );
        });
      } else {
        console.log("元素不在可视范围");
      }
    });
  },
  { threshold: 0.7 } //元素被看到多少的時候會顯示（0-1）
);
observer3.observe(document.querySelector("#example1")); //要換成那個範圍



// example2
const observer4 = new IntersectionObserver(
  // 進入或離開可視區域時
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animeFlag4) {
        animeFlag4 = true;
        const dialogElements = document.querySelectorAll(
          '[class^="dialogue-change2"]'
        );

        const tl = gsap.timeline(); //動畫時間軸的初始化 不可動
        dialogElements.forEach((dialogElement, i) => {
          // 设置初始状态
          gsap.set(dialogElement, { autoAlpha: 0, y: 20 });
          // 将每个元素的动画添加到时间轴
          tl.to(
            dialogElement,
            { duration: 1.2, autoAlpha: 1, y: 0 }, //動畫持續時間
            (i + 1) * 0.5  //動畫延遲時間
          );
        });
      } else {
        console.log("元素不在可视范围");
      }
    });
  },
  { threshold: 0.7 } //元素被看到多少的時候會顯示（0-1）
);
observer4.observe(document.querySelector("#example2")); //要換成那個範圍


// footer
const observer5 = new IntersectionObserver(
  // 進入或離開可視區域時
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animeFlag5) {
        animeFlag5 = true;
        const dialogElements = document.querySelectorAll(
          '[class^="dialogue-footer-change"]'
        );

        const tl = gsap.timeline(); //動畫時間軸的初始化 不可動
        dialogElements.forEach((dialogElement, i) => {
          // 设置初始状态
          gsap.set(dialogElement, { autoAlpha: 0, y: 20 });
          // 将每个元素的动画添加到时间轴
          tl.to(
            dialogElement,
            { duration: 1.2, autoAlpha: 1, y: 0 }, //動畫持續時間
            (i + 1) * 0.5  //動畫延遲時間
          );
        });
      } else {
        console.log("元素不在可视范围");
      }
    });
  },
  { threshold: 0.7 } //元素被看到多少的時候會顯示（0-1）
);
observer5.observe(document.querySelector("#footer")); //要換成那個範圍

// switch
const observer6 = new IntersectionObserver(
  // 進入或離開可視區域時
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animeFlag6) {
        animeFlag6 = true;
        const dialogElements = document.querySelectorAll(
          '[class^="switch-change"]'
        );

        const tl = gsap.timeline(); //動畫時間軸的初始化 不可動
        dialogElements.forEach((dialogElement, i) => {
          // 设置初始状态
          gsap.set(dialogElement, { autoAlpha: 0, y: 20 });
          // 将每个元素的动画添加到时间轴
          tl.to(
            dialogElement,
            { duration: 1.2, autoAlpha: 1, y: 0 }, //動畫持續時間
            (i + 1) * 0.5  //動畫延遲時間
          );
        });
      } else {
        console.log("元素不在可视范围");
      }
    });
  },
  { threshold: 0.7 } //元素被看到多少的時候會顯示（0-1）
);
observer6.observe(document.querySelector("#switch")); //要換成那個範圍



// window.addEventListener("resize",() => {
//   if(window.innerWidth <= 600) {
   
//   }
// })

