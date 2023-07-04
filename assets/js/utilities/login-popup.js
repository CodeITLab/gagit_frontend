
let modal = document.getElementById("login-popup-wrapper");

function openModal() {
  openCloseModal('none', 'block');
}

function closeModal() {
  openCloseModal('block', 'none');
}

function openCloseModal(classToCheck, classToAdd) {
  if(modal.classList.contains(classToCheck)) {
    modal.classList.remove(classToCheck);
    modal.classList.add(classToAdd);
  }
}
