import getData from "./data.js";

export default async function domHandler() {
  const d = document,
    $fragment = d.createDocumentFragment();

  try {
    const data = await getData();
    d.title = data.header.title;
    d.getElementById(`header-title`).textContent = data.header.title;
    d.querySelector(`meta[name="description"]`).textContent =
      data.header.description;
    d.getElementById(`logo`).src = data.header.logo_url;

    data.header.menu.forEach((el, ix) => {
      const $li = d.createElement(`li`),
        $a = d.createElement(`a`);
      $a.dataset.src = el.src;
      $a.textContent = ix + 1 + `. ${el.text}`;
      $li.appendChild($a);
      $li.classList.add(`menu-item`);
      $fragment.appendChild($li);
    });

    d.getElementById(`menu-side`).appendChild($fragment);
    d.dispatchEvent(new CustomEvent("DOMLoadedFromData"));
  } catch (error) {
    return console.error(error);
  }
}
