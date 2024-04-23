export default function getPath() {
  const w = window;
  let path = w.location.pathname,
    indexPosition = path.lastIndexOf("/") + 1;

  if (path.includes(".")) {
    path = path.substring(0, indexPosition);
  }

  return path;
}