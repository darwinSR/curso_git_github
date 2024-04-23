import getPath from "./path.js";

export default async function getData() {
  const d = document;
  try {
    const response = await fetch(`${getPath()}data.json`);
    if (!response.ok) throw new Error(`Error: ${response.status}, ${response.statusText}`);
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}
