// Меняет внешний вид списка с сожержанием консультации в мобильной версии
const productDetails = document.querySelector('.product-details');
const detailsListTemplate = document.querySelector('#product-list-mobile').content.querySelector('.product-details__list-mobile');

const addDetailsList = () => {
    const detailsList = detailsListTemplate.cloneNode(true);
    productDetails.appendChild(detailsList);
 };

 const removeDetailsList = () => {
  document.querySelector('.product-details__list-mobile').remove();
 };

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
    addDetailsList();
    changeListOrder();
  } else {
    removeDetailsList();
    setDefaultListOrder();
  }
}

mediaQueryList.addEventListener('change', onMediaQueryChange);

