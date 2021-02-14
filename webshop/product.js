const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const urlProduct = "https://kea-alt-del.dk/t7/api/products/" + productId;
// const url = "https://kea-alt-del.dk/t7/api/products?id=1163";
//fetch the data

fetch(urlProduct)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showProduct(data);
  });

function showProduct(product) {
  console.log(product);

  document.querySelector(".brandname").textContent = product.brandname;
  document.querySelector(".productname1").textContent =
    product.productdisplayname;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(
    ".productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".productimage").alt = product.displayname;
}
