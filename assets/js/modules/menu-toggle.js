export default function menuToggleHandler(btn, menuSide, menuItem) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(`${btn}, ${btn} *, ${menuItem}`)) {
      d.querySelector(btn).classList.toggle(`is_active`);
      d.querySelector(menuSide).classList.toggle(`is_active`);
    }
  });
}
