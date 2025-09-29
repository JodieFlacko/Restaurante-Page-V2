import "./styles/styles.css";
import "./styles/css-reset-by-Josh-Cameau.css";
import { loadHomePage } from "./load-home-page";
import { addListeners } from "./add-listeners";

const content = document.querySelector("#content");
const nav = document.querySelector("#nav");

loadHomePage(content)
addListeners(nav);