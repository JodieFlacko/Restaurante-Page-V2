import "./styles/styles.css";
import "./styles/css-reset-by-Josh-Cameau.css";
import { initialPageLoad } from "./init-page";
import { loadMenuPage } from "./menu-page";
import { loadContactsPage } from "./contacts-page";

const content = document.querySelector("#content");
loadContactsPage(content);