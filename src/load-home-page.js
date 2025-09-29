function loadHomePage(content){
  const pageContainer = document.createElement("div");
  pageContainer.className = "init-page-container"; 
  
  const slider = createSlider()
  pageContainer.appendChild(slider);
  content.appendChild(pageContainer);
}

function createSlider(){
  const imageURLs = [
    "https://images.pexels.com/photos/16994473/pexels-photo-16994473.jpeg",
    "https://images.pexels.com/photos/30305404/pexels-photo-30305404.jpeg",
    "https://images.pexels.com/photos/33240983/pexels-photo-33240983.jpeg",
  ];

  const sliderWrapper = document.createElement("div");
  const slider = document.createElement("div");
  const sliderNav = document.createElement("div");
  sliderWrapper.className = "slider-wrapper";
  slider.className = "slider";
  sliderNav.className = "slider-nav";

  for(let i = 0; i < 3; i++){
    const sliderImage = document.createElement("img");
    sliderImage.id = "slide-" + i;
    sliderImage.src = imageURLs[i];
    sliderImage.alt = "3D rendering of pizza image";
    slider.appendChild(sliderImage);

    const navBullet = document.createElement("a");
    navBullet.href = "#slide-" + i;
    sliderNav.appendChild(navBullet);
  };

  sliderWrapper.appendChild(slider);
  sliderWrapper.appendChild(sliderNav);

  return sliderWrapper;
};

export { loadHomePage };