//fetch data
fetch("https://kea-alt-del.dk/t7/api/subcategories")
  .then((res) => res.json())
  .then(gotData);

//loop through
function gotData(data) {
  data.forEach(showSubCategory);
}
function showSubCategory(subcategory) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = subcategory.subcategory;
  copy.querySelector(
    "a"
  ).href = `productlist.html?subcategory=${subcategory.subcategory}`;
  const parent = document.querySelector("#subcategories");
  parent.appendChild(copy);
}
//grab template, clone it, change content, and append
