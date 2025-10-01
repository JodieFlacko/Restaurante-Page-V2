import slide1 from "./assets/slides/slide1.png";
import slide2 from "./assets/slides/slide2.png";
import slide3 from "./assets/slides/slide3.png";

function loadHomePage(content){
  const pageContainer = document.createElement("div");
  pageContainer.className = "init-page-container"; 
  
  const slider = createSlider()
  pageContainer.appendChild(slider);
  content.appendChild(pageContainer);
}

function createSlider(){
  const imageURLs = [
    slide1, slide2, slide3,
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