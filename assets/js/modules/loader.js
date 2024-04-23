const d = document,
  $loader = d.getElementById(`loader`);

export const hide_loader = () => {
  setTimeout(() => {
    Object.assign($loader.style, {
      transition: `all .5s ease`,
      visibility: `hidden`,
      opacity: 0
    });
  }, 1000);
};

export const show_loader = () => {
  Object.assign($loader.style, {
    transition: `none`,
    visibility: `visible`,
    opacity: 1
  });
};