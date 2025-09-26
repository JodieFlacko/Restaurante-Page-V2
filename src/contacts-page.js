import emailIcon from "./assets/svgs/email-open.svg";
import phoneIcon from "./assets/svgs/phone.svg";
import mapIcon from "./assets/svgs/map-marker.svg";

export function loadContactsPage(document){
  const firstSection = createSectionOne();
  document.appendChild(firstSection);
};

function createSectionOne(){
  const section = document.createElement("section");
  const container = document.createElement("div");
  const squareData = [
    {
      icon: emailIcon,
      purpose: "How can we help you?",
      action: "Send us an email",
      desc: "For general information example@example.it",
      link: "mailto:example@example.it"
    },
    {
      icon: phoneIcon,
      purpose: "Call us",
      action: "+39 1234 56 78 90",
      desc: "Feel free to get in touch",
      link: "tel:+39 1234 56 78 90"
    },
    {
      icon: mapIcon,
      purpose: "How to get here",
      action: "Discover",
      desc: "Directions to reach Mareluna",
      link: "https://www.google.it/maps/place/Posillipo,+Napoli+NA/"
    },
  ]



  for(let item of squareData){
    const squareCell = document.createElement("div");
    const iconDiv = document.createElement("div");
    const logoImg = document.createElement("img");

    const topPartDiv = document.createElement("div");
    const purpose = document.createElement("span");
    const actionLink = document.createElement("a");

    const bottomPartDiv = document.createElement("div");
    const desc = document.createElement("p");

    squareCell.className = "contact-square";
    iconDiv.className = "icon-div";
    topPartDiv.className = "top-part-div";
    purpose.className = "purpose"
    actionLink.className = "action-link"
    bottomPartDiv.className = "bottom-part-div";
    desc.className = "desc";

    purpose.textContent = item.purpose;
    desc.textContent = item.desc;

    logoImg.src = item.icon;
    actionLink.href = item.link;

    iconDiv.appendChild(logoImg);

    topPartDiv.appendChild(purpose);
    topPartDiv.appendChild(actionLink);

    bottomPartDiv.appendChild(desc);

    squareCell.appendChild(iconDiv);
    squareCell.appendChild(topPartDiv);
    squareCell.appendChild(bottomPartDiv);

    container.appendChild(squareCell);
  };

  section.appendChild(container);
  section.className = "contacts-section-one"
  return section;
};

function createSectionTwo(){

};

function createMapSection(){

}