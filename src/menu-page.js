export function loadMenuPage(content){
  const menu = createMenu();
  content.appendChild(menu);
};

function createMenu(){
  const menuContainer = document.createElement("div");
  const menuContent = document.createElement("div");
  const menuHeader = document.createElement("h2");
  const menuList = generateMenuList();

  menuContent.className = "menu-content";
  menuHeader.className = "menu-header";

  menuContent.appendChild(menuHeader);
  menuContent.appendChild(menuList);
  menuContainer.appendChild(menuContent);

  return menuContainer;
  function generateMenuList(){

    const pizzas = [
      {
        name: "MARGHERITA",
        desc: "Pomodoro San Marzano, fiordilatte, olio EVO, basilico. Si consiglia la variante 'MARGHERITA DI MASTRO STEFANO', con aggiunta di origano del Matese.",
        price: "7,00€",
      },
      {
        name: "MARGHERITA DOP",
        desc: "Pomodoro San Marzano DOP, mozzarella di Bufala Campana DOP, olio EVO",
        price: "9,50€",
      },
      {
        name: "MARINARA CLASSICA",
        desc: "Pomodoro San Marzano, origano, aglio, olio EVO",
        price: "6,00€",
      },
      {
        name: "SCHIACCIATA",
        desc: "Sale, origano, olio EVO",
        price: "4,00€",
      },
      {
        name: "LA BOSCAIOLA",
        desc: "Pomodoro San Marzano, fiordilatte, funghi, speck IGP, origano, olio Evo",
        price: "8,00€",
      },
      {
        name: "LA PICCANTE",
        desc: "Fiordilatte, pomodoro San Marzano, salame piccante, origano e olio Evo.",
        price: "8,00€",
      },
      {
        name: "CALZONE CLASSICO",
        desc: "Fiordilatte, pomodoro San Marzano, prosciutto cotto, basilico, olio Evo",
        price: "8,50€",
      },
      {
        name: "4 STAGIONI",
        desc: "Pomodoro San Marzano, fiordilatte, carciofi Paestum, funghi, capperi, filetti di alici Cetara, olive, prosciutto cotto, olio Evo, origano",
        price: "9,00€",
      },
      {
        name: "CAPRICCIOSA",
        desc: "Pomodoro San Marzano, fiordilatte, capperi, filetti di alici Cetara, prosciutto cotto, carciofini Paestum, funghi, olive caiazzane, origano, olio Evo",
        price: "9,00€",
      },
    ];

    const NUMBER_OF_PIZZAS = pizzas.length;

    const pizzasImagesURLs = [
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2024/01/16/1705429922_844.jpg",
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2023/03/10/1678466552_539.jpg",
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2023/03/10/1678466663_210.jpg",
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2024/01/16/1705430777_789.jpg",
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2023/03/16/1679008226_921.jpg",
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2024/01/16/1705430702_237.jpg",
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2023/03/10/1678462941_986.jpg",
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2023/03/16/1679008341_746.jpg",
      "https://www.pepeingrani.it/imgresizer.php?w=75&h=75&src=https://www.pepeingrani.it/storage/2023/03/16/1679008208_467.jpg",
    ];
    const menuList = document.createElement("div");

    for(let i = 0; i < NUMBER_OF_PIZZAS; i++){
      const pizzaLi = document.createElement("li");
      const pizzaLogo = document.createElement("img");
      const pizzaDiv = document.createElement("div");
      const pizzaName = document.createElement("span");
      const pizzaDesc = document.createElement("p");
      const pizzaPrice = document.createElement("div");
      const pizzaPriceText = document.createElement("strong");

      pizzaLi.className = "pizza-item";
      pizzaLogo.className = "pizza-logo";
      pizzaDiv.className = "pizza-item-container";
      pizzaName.className = "pizza-name";
      pizzaDesc.className = "pizza-desc";
      pizzaPrice.className = "pizza-price";
      pizzaPriceText.className = "pizza-price-text";

      pizzaLogo.src = pizzasImagesURLs[i];
      pizzaLogo.alt = `${pizzas[i].name} image`;
      pizzaName.textContent = `${pizzas[i].name}`;
      pizzaDesc.textContent = `${pizzas[i].desc}`;
      pizzaPrice.textContent = "€ ";
      pizzaPriceText.textContent = `${pizzas[i].price}`;

      pizzaDiv.appendChild(pizzaName);
      pizzaDiv.appendChild(pizzaDesc);

      pizzaPrice.appendChild(pizzaPriceText);

      pizzaLi.appendChild(pizzaLogo);
      pizzaLi.appendChild(pizzaDiv);
      pizzaLi.appendChild(pizzaPrice);

      menuList.appendChild(pizzaLi);

    };

    return menuList;
  };
}