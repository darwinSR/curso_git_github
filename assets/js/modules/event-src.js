import { show_loader } from "./loader.js";

const d = document,
  w = window,
  ss = sessionStorage;

export default function eventSrc() {
  d.addEventListener(`click`, (e) => {
    e.preventDefault();

    if (e.target.matches(`a[data-src]`)) {
      show_loader();
      ss.setItem("src", e.target.dataset.src);
      d.dispatchEvent(new CustomEvent("src-added"));
    }
  });
}
