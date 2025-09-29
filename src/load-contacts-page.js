import emailIcon from "./assets/svgs/email-open.svg";
import phoneIcon from "./assets/svgs/phone.svg";
import mapIcon from "./assets/svgs/map-marker.svg";

export function loadContactsPage(content){
  const container = document.createElement("div");

  const firstSection = createSectionOne();
  const secondSection = createSectionTwo();
  const formSection = createContactFormSection();
  const mapSection = createMapSection();

  const sections = [firstSection, secondSection, formSection, mapSection];
  appendMultipleChildren(container, sections);
  content.appendChild(container);
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
  const section = document.createElement("section");
  const container = document.createElement("div");
  const header = document.createElement("div");
  const headerLabel = document.createElement("span");
  const headerText = document.createElement("h4");

  headerLabel.className = "header-label";
  headerText.className = "header-text";

  headerLabel.textContent = "Address and Opening Hours";
  headerText.textContent = "Come Visit Us";
  
  header.appendChild(headerLabel);
  header.appendChild(headerText);
  container.appendChild(header);
  
  const locationData = [
    {
      firstRow: "Address\nVia Marechiaro, Posillipo, Napoli, NA, Italy",
      secondRow: "GPS Coordinates\n40.795982, 14.193196",
      thirdRow: "Phone\n+39 123 456 789",
    },
    {
      firstRow: "Opening Hours\nOpen Tuesday to Saturday from 6:30 PM to 12:30 AM",
      secondRow: "Sunday Hours\nOpen Sunday from 6:45 PM to 12:30 AM",
      thirdRow: "Closed on Monday",
    },
  ];

  for(let data of locationData){
    const squareCell = document.createElement("div");
    for(let row in data){
      const div = document.createElement("div")
      const par = document.createElement("p");
      par.textContent = data[row];
      div.className = "row-div";
      div.appendChild(par);
      squareCell.appendChild(div);
    };
    container.appendChild(squareCell);
  };
  section.appendChild(container);
  section.className = "contacts-section-two"
  return section;
};

function createContactFormSection(){
  const section = document.createElement("section");
  const container = document.createElement("div");

  const background = document.createElement("div");
  background.className = "background";
  const formDiv = document.createElement("div");
  const form = document.createElement("form");

  const formTitle = document.createElement("h5");
  const formDesc = document.createElement("p");

  form.appendChild(formTitle);
  form.appendChild(formDesc);
  formDiv.appendChild(form);

  const inputs = createFormInputs();

  inputs.forEach(input => form.appendChild(input));

  container.appendChild(background);
  container.appendChild(formDiv);
  section.appendChild(container);
  section.className = "form-section";
  return section;

  // helper functions
  function createFormInputs(){
    const inputElements = [];
    const inputs = [
      {
        id: "name",
        placeholder: "Name",
        value: "",
        type: "text"
      },
      {
        id: "email",
        placeholder: "Email",
        value: "",
        type: "email"
      },
      {
        id: "phone",
        placeholder: "Phone",
        value: "",
        type: "tel"
      },
      {
        id: "message",
        placeholder: "Message",
        value: "",
        type: "textarea"
      }
    ];

    for(let input of inputs){
      const element = document.createElement("input");
      element.id = input.id; 
      element.placeholder = input.placeholder; 
      element.value = input.value; 
      element.type = input.type; 
      element.autocomplete = "on";
      inputElements.push(element);
    };
  return inputElements;
  };
}


function createMapSection(){
  const section = document.createElement("section");
  const container = document.createElement("div");
  const iFrame = document.createElement("iframe");
  iFrame.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDMk2my1F3oAYkjzk02IepDdJ16LLK4RfI&q=Posillipo,+Napoli+NA/";

  container.appendChild(iFrame);
  section.appendChild(container);

  return section;
}

function appendMultipleChildren(element, children){
  children.forEach(child => element.appendChild(child));
}