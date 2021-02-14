const product1 = {
  name: "Ilaria hot mama skirt",
  price: 100,
  img:
    "https://img.ltwebstatic.com/images2_pi/2019/07/12/15629164243969762281.webp",
};

const template = document.querySelector("template").content;
const copy = template.cloneNode(true);
copy.querySelector("h1").textContent = product1.name;
copy.querySelector("p span").textContent = product1.price;
copy.querySelector("img").src = product1.img;

const parent = document.querySelector("main");
parent.appendChild(copy);
