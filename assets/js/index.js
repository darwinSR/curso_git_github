import getData from "./modules/data.js";
import domHandler from "./modules/dom.js";
import eventSrc from "./modules/event-src.js";
import followerHandler from "./modules/follower.js";
import { show_loader } from "./modules/loader.js";
import mdHandler from "./modules/markdown.js";
import menuToggleHandler from "./modules/menu-toggle.js";

const { document: d, window: w, sessionStorage: ss } = globalThis;

d.addEventListener("DOMContentLoaded", () => {
  menuToggleHandler(
    `.hamburguer-menu-button`,
    `.header-side`,
    `.header-side li a`
  );
  [domHandler, eventSrc, mdHandler, followerHandler].forEach((fn) => fn());
});

w.onload = () => {
  d.addEventListener("DOMLoadedFromData", () => {
    d.addEventListener("click", async (e) => {
      if (e.target.matches(`#header-title, #logo`)) {
        show_loader();
        ss.setItem(`src`, (await getData()).content.default);
        d.dispatchEvent(new CustomEvent("src-added"));
      }
    });
  });
};
