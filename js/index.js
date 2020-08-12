const burgerBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__navigation");
const body = document.querySelector('body');
// Ссыски на секции
const neurologyStream = document.querySelector('.js-neurology');
const massageStream = document.querySelector('.js-massage');
const rheumatologyStream = document.querySelector('.js-rheumatology');
// Ссылки на треугольники
const neurologyTriangle = document.querySelector('.js__triangle-neurology');
const massageTriangle = document.querySelector('.js__triangle-massage');
const rheumatologyTriangle = document.querySelector('.js__triangle-rheumatology');
// Ссылки на названия направлений
const nameNeurology = document.querySelector('.js__name-neurology');
const nameMassage = document.querySelector('.js__name-massage');
const nameRheumatology = document.querySelector('.js__name-rheumatology');

// Слушатель бургера
burgerBtn.addEventListener("click", onClickBurger);

// Слушатели переключений секций направлений
nameNeurology.addEventListener('click', onClickNeurology);
nameMassage.addEventListener('click', onClicMassage);
nameRheumatology.addEventListener('click', onClickRheumatology);

// Функция меню бургера
function onClickBurger() {
   burgerBtn.classList.toggle("active");
   menu.classList.toggle("active");
   body.classList.toggle('lock');
}

// Функции переключения секций направлений
function onClickNeurology() {
   neurologyTriangle.classList.add('active');
   neurologyStream.classList.add('active');
   massageStream.classList.remove('active');
   massageTriangle.classList.remove('active');
   rheumatologyStream.classList.remove('active');
   rheumatologyTriangle.classList.remove('active');
}
function onClicMassage() {
   neurologyTriangle.classList.remove('active');
   neurologyStream.classList.remove('active');
   massageStream.classList.add('active');
   massageTriangle.classList.add('active');
   rheumatologyStream.classList.remove('active');
   rheumatologyTriangle.classList.remove('active');
}
function onClickRheumatology() {
   neurologyTriangle.classList.remove('active');
   neurologyStream.classList.remove('active');
   massageStream.classList.remove('active');
   massageTriangle.classList.remove('active');
   rheumatologyStream.classList.add('active');
   rheumatologyTriangle.classList.add('active');
}