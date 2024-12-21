import { data } from "data.js";
const Btns = document.querySelectorAll("button");
const controls = document.querySelector(".controls");
const cards = document.querySelectorAll(".card");
const contentCards = document.querySelector(".data");
const layout = document.querySelector(".layout");
const close = document.querySelector(".close");
// add active class at cliked button
controls.addEventListener("click", (ele) => {
  if (ele.target.getAttribute("class") !== "controls") {
    // remove ative class from all elements
    Btns.forEach((el) => {
      el.classList.remove("active");
    });
    ele.target.classList.add("active");
    // filter data
    if (ele.target.hasAttribute("data-filter")) {
      cards.forEach((card) => {
        if (card.dataset.filter != ele.target.dataset.filter)
          // reomve non matched cards
          card.style.display = "none";
        // show only matched cards
        else card.style.display = "block";
      });
    } else {
      cards.forEach((card) => {
        card.style.display = "block";
      });
    }
  }
});
// open profile for specific developer
contentCards.addEventListener("click", (e) => {
  if (e.target.parentElement.parentElement.hasAttribute("data-id")) {
    const cardDate = data.find(
      (el) => el.id == e.target.parentElement.parentElement.dataset.id
    );
    layout.style.display = "block";

    // contents of profile page
    document.querySelector(".user-details img").src = cardDate.photo;
    document.querySelector(".user-details h3").innerHTML = cardDate.name;
    document.querySelector(".user-details p").innerHTML = cardDate.description;
    document.querySelector(".user-details span").innerHTML = cardDate.field;
    document.querySelector("li .insta").href = cardDate.instegram;
    document.querySelector("li .facebook").href = cardDate.facebook;
    document.querySelector("li .linked").href = cardDate.linkenin;
    document.querySelector("li .mail").href = `mailto:${cardDate.email}`;
    document.querySelector("li .tel").href = `tel:+${cardDate.phone}`;
    close.addEventListener("click", (e) => {
      layout.style.display = "none";
    });
  }
});
