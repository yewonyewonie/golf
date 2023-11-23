//nav
let navi = document.querySelector('.navi')
let gnb = document.querySelector('.gnb')
let lnbWrap = document.querySelector('.lnb_wrap')
let naviTop = navi.offsetTop;
let seceion = document.querySelector('.section_1')
let icon1 = document.querySelector('.my')
let icon2 = document.querySelector('.scadule')
let icon3 = document.querySelector('.my_black')
let icon4 = document.querySelector('.day_black')
let logo = document.querySelector('.logo')

  navi.addEventListener('mouseenter', function(){
    lnbWrap.classList.add('active2')  ;
    navi.classList.add('color');   
    gnb.classList.add('color_2');  
    logo.classList.add('color_2');     
    icon1.classList.add('none')
    icon2.classList.add('none')
    icon3.classList.add('block')
    icon4.classList.add('block')
})

window.addEventListener('scroll',  event1)
navi.addEventListener('mouseleave',  event1)

function event1(){  
  if(naviTop < window.scrollY){
    navi.classList.add('color');   
    gnb.classList.add('color_2');  
    logo.classList.add('color_2'); 
    lnbWrap.classList.remove('active2');
    icon1.classList.add('none')
    icon2.classList.add('none')
    icon3.classList.add('block')
    icon4.classList.add('block')
  }else if(naviTop === window.scrollY){
    navi.classList.remove('color');
    gnb.classList.remove('color_2');
    logo.classList.remove('color_2');
    lnbWrap.classList.remove('active2'); 
    icon1.classList.remove('none')
    icon2.classList.remove('none')
    icon3.classList.remove('block')
    icon4.classList.remove('block')
  }
  }
//nav


//section_1 background
let sectionOne = document.querySelector('.section_1_img')

if(window.innerWidth >= 1025){
  if(naviTop === window.scrollY){
  sectionOne.classList.add('scale')
}
}
//section_1 background


//햄버거바
let bars = document.querySelectorAll('.bar')
let moGnb = document.querySelector('.mo_nav')
let menuTrigger = document.querySelector('.menu-trigger')
let off = document.querySelector('.close')

window.addEventListener('scroll', function(){
    bars.forEach(function(bar){
      if(window.innerWidth <= 1024){
        bar.classList.add('black')
      }
      if(naviTop === window.scrollY){
        bar.classList.remove('black')
        navi.classList.remove('color');
      }
    })
})

menuTrigger.addEventListener('click',function(){
  moGnb.classList.add('active');
})

off.addEventListener('click',function(){
  moGnb.classList.remove('active');

})

let moGnbConts = document.querySelectorAll('.mo_gnb_cont')
let moGnbWraps = document.querySelectorAll('.mo_gnb_wrap')

function tabOpen(a){  
  let tabcont = document.getElementsByClassName('mo_gnb_wrap'); 
for(i=0; i<tabcont.length; i++){
  console.log(tabcont[i])
  tabcont[i].style.display = 'none'
}
tabcont[a].style.display = 'block'
}

//햄버거바

window.addEventListener('load', function(){
  if(window.innerWidth >= 1025){
    console.log(window.innerWidth);
    scrolling();
    sectionFour();
    navi.classList.remove('color');
  }
})

//캘린더

let planner = document.querySelector('.planner')
let calendar = document.querySelector('.Calendar')

planner.addEventListener('click', function(){
  calendar.classList.add('block')
})
calendar.addEventListener('click', function(){
  calendar.classList.remove('block')
})


//오늘 날짜 불러오기
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.querySelector('.current_date').innerHTML = year + "/" + month + "/" + day;



//section_2//
var swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });



/*section_3*/
var swiper = new Swiper(".facilitySwiper", {
  slidesPerView: 'auto',
  slidesPerGroupSkip: 1,
  spaceBetween: 20,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  // breakpoints: {
  //   1024: {
  //     slidesPerView: 1,
  //     slidesPerGroup: 2,
  //   },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// contents.forEach(function(content){
//   content.addEventListener('click', function(){
//     let secId = e.currentTarget.dataset.id
//     if(){

//     }
//   })
// })


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

/*section_4*/
// function sectionFour(){
// price.addEventListener('mouseenter', function(){
//   one.classList.add('black')
//   font1.classList.add('fontSize')
// })
// price.addEventListener('mouseleave', function(){
//   one.classList.remove('black')
//   font1.classList.remove('fontSize')
// })
// manner.addEventListener('mouseenter', function(){
//   two.classList.add('black')
//   font2.classList.add('fontSize')
// })
// manner.addEventListener('mouseleave', function(){
//   two.classList.remove('black')
//   font2.classList.remove('fontSize')
// })
// course.addEventListener('mouseenter', function(){
//   three.classList.add('black')
//   font3.classList.add('fontSize')
// })
// course.addEventListener('mouseleave', function(){
//   three.classList.remove('black')
//   font3.classList.remove('fontSize')
// })
// guide.addEventListener('mouseenter', function(){
//   four.classList.add('black')
//   font4.classList.add('fontSize')
// })
// guide.addEventListener('mouseleave', function(){
//   four.classList.remove('black')
//   font4.classList.remove('fontSize')
// })
// }

/*section_4*/

/*section_6*/

let serviceImg = document.querySelector('.service_img')
let serviceBtn = document.querySelector('.service_btn')
let serviceImgTop = serviceImg.offsetTop;

serviceBtn.addEventListener('mouseenter', function(e){
    serviceImg.classList.add('size');
}) 
serviceBtn.addEventListener('mouseleave', function(e){
  serviceImg.classList.remove('size');
}) 


//스크롤 부드럽게 전환
function scrolling(){

  let currentSection = 0;
  let isScrolling = false;

  const sections = document.querySelectorAll("section");

  const handleWheel = (event) => {
          if (!isScrolling) {
              isScrolling = true;

              if (event.deltaY > 0) {
                  currentSection = Math.min(currentSection + 1, sections.length - 1);
              } else {
                  currentSection = Math.max(currentSection - 1, 0);
              }

              scrollToSection(currentSection);

              setTimeout(() => {
                  isScrolling = false;
              }, 500); // 스크롤 간 딜레이 설정 (500ms)
          }
      };

      window.addEventListener("wheel", handleWheel);
  // });

  function scrollToSection(sectionIndex) {
      window.scrollTo({
          top: sectionIndex * window.innerHeight,
          behavior: "smooth"
      });
  }

}



//캘린더 불러오기
window.onload = function () { buildCalendar(); }    // 웹 페이지가 로드되면 buildCalendar 실행

let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today = new Date();     // 페이지를 로드한 날짜를 저장
today.setHours(0,0,0,0);    // 비교 편의를 위해 today의 시간을 초기화

// 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar() {

    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar = document.querySelector(".Calendar > tbody");
    document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고
        nowColumn.innerText = leftPad(nowDay.getDate());      // 추가한 열에 날짜 입력

    
        if (nowDay.getDay() == 0) {                 // 일요일인 경우 글자색 빨강으로
            nowColumn.style.color = "#DC143C";
        }
        if (nowDay.getDay() == 6) {                 // 토요일인 경우 글자색 파랑으로 하고
            nowColumn.style.color = "#0000CD";
            nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
        }


        if (nowDay < today) {                       // 지난날인 경우
            nowColumn.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            nowColumn.className = "today";
            nowColumn.onclick = function () { choiceDate(this); }
        }
        else {                                      // 미래인 경우
            nowColumn.className = "futureDay";
            nowColumn.onclick = function () { choiceDate(this); }
        }
    }
}

// 날짜 선택
function choiceDate(nowColumn) {
    if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
    }
    nowColumn.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가
}

// 이전달 버튼 클릭
function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar();    // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();    // 달력 다시 생성
}

// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
    if (value < 10) {
        value = "0" + value;
        return value;
    }
    return value;
}

