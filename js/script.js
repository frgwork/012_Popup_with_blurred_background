
const contentLincks = document.querySelectorAll('.content__link');
const fog = document.querySelector('.fog');
const popup = document.querySelector('.popup');

contentLincks.forEach(item => {
  item.addEventListener('click', () => {
    fog.classList.toggle('active');
    popup.classList.toggle('popup-active');
  });
});




// let func = function () {
//   if (!fog.classList.contains('active')) {
//     fog.classList.add('active');
//     popup.classList.add('popup-active');
//   }else{
//     fog.classList.remove('active');
//     popup.classList.remove('popup-active');
//   }
// }

// fog.addEventListener('click', func);
// popup.addEventListener('click', func);