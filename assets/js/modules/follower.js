const d = document,
  follower = d.getElementById("follower"),
  body = d.body;

export default function followerHandler() {
  d.addEventListener("mousemove", (e) => {
    let left = e.clientX + 20;
    let top = e.clientY + 20;

    // Asegúrate de que el "follower" no salga del cuerpo del documento
    if (left + follower.offsetWidth > body.clientWidth) {
      left = body.clientWidth - follower.offsetWidth;
    }
    if (top < 0) {
      top = 0;
    }

    follower.style.left = left + "px";
    follower.style.top = top + "px";
  });
}