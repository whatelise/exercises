const urlParams = new URLSearchParams(window.location.search);
const subcategory = urlParams.get("subcategory");
console.log(subcategory);
const url = "https://kea-alt-del.dk/t7/api/products?subcategory=" + subcategory;

fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  document.querySelector("h1").textContent = product.subcategory;
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(".brandname").textContent = product.brandname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector("a").href = `productview.html?id=${product.id}`;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".prevprice").textContent = product.price + " DKK";
    copy.querySelector(".newprice").textContent = product.discount + " DKK";
  } else {
    copy.querySelector(".price").textContent = product.price + " DKK";
  }
  const parent = document.querySelector("#productlist");
  parent.appendChild(copy);
}
