let counter = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let entries = "";
let count = 0;

function increment() {
  count += 1;
  counter.textContent = count;
}

function save() {
  let saveCount = count + " - ";
  entries += saveCount;
  saveEl.textContent = entries;
  counter.textContent = 0;
  count = 0;
}

function reset() {
  counter.textContent = 0;
  count = 0;
  entries = "";
  saveEl.textContent = "";
}
