// Таймер
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const timerContainer = document.querySelector('.promo__timer-wrapper');

const DEADLINE_DATE = new Date(`March 31 2023 23:59:59`);


const updateTimer = () => {
const currentTime = new Date();
const diff = DEADLINE_DATE - currentTime;
const hoursLeft = Math.floor(diff / 1000 / 60 / 60);
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
const secondsLeft = Math.floor(diff / 1000) % 60;

hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

if (diff <= 0) {
    clearInterval(timeinterval);
    timerContainer.innerHTML = 'Акция завершена';
  }
};

updateTimer();

const timeinterval = setInterval(updateTimer, 1000);

// Смена порядка ссылок в футере в мобильной версии
const mainFooterList = document.querySelector('.main-footer__list--mobile');
 const listItemCases = document.querySelector('.main-footer__list-item--cases');
 const listItemLetters = document.querySelector('.main-footer__list-item--letters');
 const listItemCertificates = document.querySelector('.main-footer__list-item--certificates');
 const listItemBlog = document.querySelector('.main-footer__list-item--blog');
 const listItemFaq = document.querySelector('.main-footer__list-item--faq');
 const footerLinkLetters = document.querySelector('.main-footer__link--letters');

 const changeListOrder = () => {
  mainFooterList.innerHTML = "";
  mainFooterList.appendChild(listItemLetters);
  mainFooterList.appendChild(listItemCases);
  mainFooterList.appendChild(listItemCertificates);
  mainFooterList.appendChild(listItemBlog);
  mainFooterList.appendChild(listItemFaq);
  footerLinkLetters.textContent = 'Благодарность клиентов';
 }

 const setDefaultListOrder = () => {
  mainFooterList.innerHTML = "";
  mainFooterList.appendChild(listItemCases);
  mainFooterList.appendChild(listItemLetters);
  mainFooterList.appendChild(listItemCertificates);
  mainFooterList.appendChild(listItemBlog);
  mainFooterList.appendChild(listItemFaq);
  footerLinkLetters.textContent = 'Благодарственные письма';
 }

 const mediaQueryList = window.matchMedia('(max-width: 767px)');

 function onMediaQueryChange(e) {
  if (e.matches) {
    changeListOrder();
  } else {
    setDefaultListOrder();
  }
}

mediaQueryList.addEventListener('change', onMediaQueryChange);

