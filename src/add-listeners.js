import { loadHomePage } from "./load-home-page";
import { loadMenuPage } from "./load-menu-page";
import { loadContactsPage } from "./load-contacts-page";

export function addListeners(nav){
  const content = document.querySelector("#content");
  
  nav.addEventListener("click", (event) => {
    const buttonPage = event.target.dataset.page;
    switch(buttonPage){
      case "Home": 
        clearContent();
        loadHomePage(content);
        break;
      case "Menu": 
        clearContent();
        loadMenuPage(content);
        break;
      case "Contacts": 
        clearContent();
        loadContactsPage(content);
        break;
    };
  });

  // Get all navigation links
  const sliderNav = document.querySelectorAll('.slider-nav a');

  sliderNav.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      
      const targetId = link.getAttribute('href');
      const targetImage = document.querySelector(targetId);
      
      // Scroll the slider container, not the page
      targetImage.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // says the browser "Don't scroll if you don't need to"
        inline: 'start' //scroll the image to the left edge of the slider
      });
    });
  });
};

function clearContent(){
  content.textContent = "";
};

