'use strict';

const hamburderBar = document.getElementById('hamburgerBar');

window.addEventListener('resize', applyClass);
hamburderBar.addEventListener('click', toggleMenu);

function applyClass() {
  const hidingItems = document.querySelectorAll('.hidingItems');
  const bottomLeftSection = document.querySelector('.bottomLeftSection');

  if (window.innerWidth < 1312) {     
    hidingItems.forEach(item => {
      item.classList.add('hideInSmall');
    });

    bottomLeftSection.style.display = "none";
  }

}

function toggleMenu() {
  const leftSection = document.getElementById('leftSection');
  const middleLeftSection = document.getElementById('middleLeftSection');
  const hidingItems = document.querySelectorAll('.hidingItems');

  hidingItems.forEach(item => {
    if (window.innerWidth < 1312) {      
      // if(item.classList.contains('hideInSmall') && item.classList.contains('hideInClick')) {
      //   item.classList.remove("hideInClick")
        // item.classList.remove("hideInSmall")
        toggleOnResizing(item);
        bottomLeftToggle();
                
        // middleLeftSection.style.flexDirection = "row";        
      // }
      // toggleOnResizing(item);
      // toggleOnClick(item); 
      // bottomLeftToggle();
    } else {      
      toggleOnClick(item); 
      bottomLeftToggle();
    }  

    // toggleOnClick(item); 
    // bottomLeftToggle();
  });
 
  leftSection.classList.toggle("narrowMenu");
  // bottomLeftToggle();
 
  // middleleftSetction.classList.add("")


}

function toggleOnResizing(item) {
  if (item.classList.contains("hideInSmall")) {
    item.classList.remove("hideInSmall");
  } else {
    item.classList.add("hideInSmall");
  }   
}

function toggleOnClick(item) {
  if (item.classList.contains("hideInClick")) {
    item.classList.remove("hideInClick");
  } else {
    item.classList.add("hideInClick");
  }   
}

function bottomLeftToggle() {
  const bottomLeftSection = document.querySelector('.bottomLeftSection');

  if (bottomLeftSection.style.display === "none") {
    bottomLeftSection.style.display = "block";
  } else {
    bottomLeftSection.style.display = "none";
  }   
}
