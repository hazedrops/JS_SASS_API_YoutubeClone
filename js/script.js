'use strict';

const hamburderBar = document.getElementById('hamburgerBar');
hamburderBar.addEventListener('click', toggleMenu);

function toggleMenu() {
  // const itemsToHide = document.querySelectorAll('.hideInSmall');

  // itemsToHide.forEach((item) => {
  //   item.style.display = 'none';
  // });
  const leftSection = document.getElementById('leftSection');
  const middleLeftSection = document.getElementById('middleLeftSection');

  leftSection.classList.toggle("narrowMenu");

}
