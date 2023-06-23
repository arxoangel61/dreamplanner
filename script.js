
// модильное меню

const menuIcon = document.querySelector('.menu-icon'),
// console.log(menuIcon);
  header = document.querySelector('header'),

  nav_test = document.querySelector('.nav--test'),

  social_test = document.querySelector('.socials--test')

  // для видео
  playVideoBtn = document.querySelector('.play'),
  video = document.querySelector('.video'),
  playVideoImg = playVideoBtn.querySelector('img');


// для видео
playVideoBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playVideoImg.src = "images/play-icon-active.svg";
  } else {
    video.pause();
    playVideoImg.src = "images/play-icon.svg";
  }
});


//для мобильной версии меню
// создаем стрелучную функцию действия которое будет проходить по клику 
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon--active');

  header.classList.toggle('header--mobile');

  nav_test.classList.toggle('nav--test');
  social_test.classList.toggle('socials--test');
  document.body.classList.toggle('no-scroll');
});

//модальное окно - форма
const modal = document.querySelector('.modal-wrapper')
// console.log(modal);

const btns = document.querySelectorAll('.btn, .cta_btn')
// console.log(btns);





// окрываем форму, нет скролу 
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('none');
    document.body.classList.add('no-scroll');
  });
});

// крестик выход, возвращения скрола
const exitModal = document.querySelector('.modal__exit');
exitModal.addEventListener('click', () => {
  modal.classList.add('none');
  document.body.classList.remove('no-scroll');
});


