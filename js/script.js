let openButton = document.querySelector('.open-btn');
let closeButton = document.querySelector('.close-btn');
let sideBar = document.querySelector('.sidebar');
let mainSection = document.querySelector('.main');
let dropContent = document.querySelector('.drop-content');
let dropdown = document.querySelector('.dropdown');
let dropIcon = document.querySelector('.drop-icon');

// k_76z0yo9a   -- apiKey
// let isOpen = true;

// closeButton.addEventListener('click', () => {
//   isOpen = !isOpen;
//   closeButton.classList.toggle('open');

// });
openButton.addEventListener('click', () => {
  sideBar.classList.toggle('active');
  if(sideBar.classList.contains('active')) {
    openButton.innerHTML = `<box-icon name='menu' ></box-icon>`;
    mainSection.style.marginLeft = '0';
    // openButton.style.position = 'initial';
  } else {
    openButton.innerHTML = `<box-icon name='x'></box-icon>`;
    mainSection.style.marginLeft = '240px';
    // openButton.style.position = 'absolute';
  }
});

dropdown.addEventListener('click', () => {
  dropContent.classList.toggle('active');
  if(!dropContent.classList.contains('active')) {
    dropIcon.innerHTML = `<box-icon name='chevron-down'></box-icon>`;
  } else {
    dropIcon.innerHTML = `<box-icon name='chevron-up'></box-icon>`;
  }
})