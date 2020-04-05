export { moveScreenTouch, moveScreenWheel };

function moveScreenWheel(event) {
  const sectionMain = document.querySelector('.main');
  const sectionDetails = document.querySelector('.details');

  if (event.deltaY > 0) {
    sectionMain.classList.add('moveUp');
    sectionDetails.classList.add('moveUp');
  } else {
    sectionMain.classList.remove('moveUp');
    sectionDetails.classList.remove('moveUp');
  }
}
function moveScreenTouch() {
  const sectionMain = document.querySelector('.main');
  const sectionDetails = document.querySelector('.details');

  sectionMain.classList.toggle('moveUp');
  sectionDetails.classList.toggle('moveUp');
}
