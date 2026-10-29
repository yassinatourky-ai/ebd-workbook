
import { items } from "./items.js";

export function renderItems(list) {
  const container = document.querySelector("#list");
  container.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");
    li.className = "product";
    li.textContent = `${item.name} (${item.category})`;
    container.append(li);
  });
}

export function matching() {
  return items.filter(item => item.category === "electronics");
}

export function start() {
  renderItems(items);

  document.querySelector("#narrow").addEventListener("click", () => {
    renderItems(matching());
  });
}
