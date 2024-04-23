import getData from "./data.js";
import { hide_loader } from "./loader.js";
import getPath from "./path.js";

const { document: d, window: w, sessionStorage: ss } = globalThis;

export default function mdHandler() {
  d.addEventListener("src-added", async (e) => {
    e.preventDefault();
    const src = ss.getItem("src") || (await getData()).content.default;

    await fetch(`${getPath()}${src}.md`)
      .then((response) => {
        if (!response.ok)
          throw new Error(`Error: ${response.status}, ${response.statusText}`);
        return response.text();
      })
      .then((md) => {
        const html = new showdown.Converter().makeHtml(md),
          doc = new DOMParser().parseFromString(html, "text/html"),
          links = doc.querySelectorAll("a");

        if (links.length) links[links.length - 1].remove();

        d.getElementById("section").innerHTML = doc.body.innerHTML;
        d.querySelectorAll("pre code").forEach((block) =>
          hljs.highlightBlock(block)
        );

        w.scrollTo(0, 0);
      })
      .catch(console.error);

    hide_loader();
  });

  d.dispatchEvent(new CustomEvent("src-added"));
}
