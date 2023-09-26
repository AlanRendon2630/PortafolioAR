//Set up / main

const btns = document.querySelectorAll(".btn");
const sections = document.querySelectorAll(".section");
const column = document.querySelector(".column");

btns.forEach((el, i) => {
  el.addEventListener("click", () => {
    sections.forEach((el) => el.classList.add("not-visible"));
    sections[i].classList.remove("not-visible");
    btns.forEach((el) => el.classList.remove("btn-selected"));
    btns[i].classList.add("btn-selected");
  });
});

column.style.height = window.innerHeight + "px";

window.addEventListener("resize", () => {
  column.style.height = window.innerHeight + "px";
});

// Course cards

const javaCard = document.querySelector(".javas");
const htmlCssCard = document.querySelector(".html-css");
const projectsCard = document.querySelector(".pro");
const advancedCard = document.querySelector(".advanced");

javaCard.addEventListener("click", () => {
  const link = "https://www.udemy.com/course/the-complete-javascript-course/";
  window.open(link, "_blank");
});

htmlCssCard.addEventListener("click", () => {
  const link =
    "https://www.udemy.com/share/101Wtc3@oO1WPQiM9ga6mEOX6BVSz1F3CZN1Rz56VFzjrokQOOLeFyrMxs9-EfQULJQiQa5cAQ==/";
  window.open(link, "_blank");
});

projectsCard.addEventListener("click", () => {
  const link =
    "https://www.udemy.com/share/103miG3@jEHcWKWjB57Dk4QENqy-U2t2oCKdzSzhESHMSWvxH_3pvF3JeNuzL3Q3wuYaiKie2A==/";
  window.open(link, "_blank");
});

advancedCard.addEventListener("click", () => {
  const link = "https://www.udemy.com/course/advanced-javascript-concepts/";
  window.open(link, "_blank");
});

const card = document.querySelectorAll(".course-card");

card.forEach((el) => {
  el.addEventListener("mouseover", function () {
    this.style.cursor = "pointer";
  });
});

// Projects

const projectWhereTo = document.querySelector(".where-to");
const projectForkify = document.querySelector(".forkify");
const projectPushYourLuck = document.querySelector(".push-your-luck");
const projectQuoteGenerator = document.querySelector(".quote-generator");
const projectCalculator = document.querySelector(".calculator");
const projectNasaApod = document.querySelector(".nasa-apod");
const projectSpock = document.querySelector(".spock");
const projectInfiniteScroll = document.querySelector(".infinite-scroll");
const projectJokerTeller = document.querySelector(".joker-teller");
const projectCountdown = document.querySelector(".countdown");
const projects = document.querySelectorAll(".project");

projectWhereTo.addEventListener("click", () => {
  const link = "https://wheretoproject.netlify.app";
  window.open(link, "_blank");
});

projectForkify.addEventListener("click", () => {
  const link = "https://whattoeatnext.netlify.app";
  window.open(link, "_blank");
});

projectPushYourLuck.addEventListener("click", () => {
  const link = "https://pushyourluck.netlify.app";
  window.open(link, "_blank");
});

projectQuoteGenerator.addEventListener("click", () => {
  const link = "https://quotegeneratorar.netlify.app";
  window.open(link, "_blank");
});

projectCalculator.addEventListener("click", () => {
  const link = "https://calculatorprojectar.netlify.app";
  window.open(link, "_blank");
});

projectNasaApod.addEventListener("click", () => {
  const link = "https://nasapictureofthedayapiar.netlify.app";
  window.open(link, "_blank");
});
projectSpock.addEventListener("click", () => {
  const link = "https://spock-rock-paper.netlify.app";
  window.open(link, "_blank");
});
projectInfiniteScroll.addEventListener("click", () => {
  const link = "https://infiniscrolly.netlify.app";
  window.open(link, "_blank");
});
projectJokerTeller.addEventListener("click", () => {
  const link = "https://jokertellerar.netlify.app";
  window.open(link, "_blank");
});
projectCountdown.addEventListener("click", () => {
  const link = "https://countdownar.netlify.app";
  window.open(link, "_blank");
});

projects.forEach((el) => {
  el.addEventListener("mouseover", function () {
    this.style.cursor = "pointer";
  });
});
