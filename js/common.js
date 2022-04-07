// css에서 할수 없는 효과를 js에서 실행할수 있도록 한다.
// 돋보기모양을 포커스하면 input요소에 포커스할때와 같이 요소가 길어지게 하는 효과
const searchEl = document.querySelector('.search');
// 도큐멘트에.search라는 선택자를 찾아서 searchEl이라는 변수에 저장
const searchInputEl = searchEl.querySelector('input');
// 전에 저장해놓은 searchEl변수 안에 input 요소를 찾는다는 의미로 더 효율적으로 찾을 수 있음. 

searchEl.addEventListener('click', function() {
  // 익명의 함수를 가지고 있는 요소를 클릭하게 되면
  searchInputEl.focus();
  // searchInput에 강제로 포커스를 해라
});

searchInputEl.addEventListener('focus', function () {
  // searchInoputEl이라고 지정한 곳에 focus되면
  searchEl.classList.add('focused');
  //  focused라는 이름에 클래스를 추가하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색')
  // html 속성 지정하겠다.
});

searchInputEl.addEventListener('blur', function () {
  // searchInoputEl이라고 지정한 곳에 focus가 해제되면 (blur)
  searchEl.classList.remove('focused');
  //  focused라는 이름에 클래스를 제거하겠다.
  searchInputEl.setAttribute('placeholder', '');
  // html 속성 지정하겠다.
});

//footer 현재 년수 넣기 
const thisYear = document.querySelector('.this-year');
thisYear.textContent =  new Date().getFullYear();
