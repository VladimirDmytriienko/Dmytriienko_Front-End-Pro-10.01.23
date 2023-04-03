const categories = document.querySelectorAll(".category__click");
const items = document.querySelectorAll(".item");
const buyBlock = document.querySelector(".buy");
const products = document.querySelectorAll(".product");
const buyButton = document.querySelector(".button");
const modal = document.querySelector(".modal");

categories.forEach((category, index) => {
  category.addEventListener("click", () => {
    if (items[index].style.display === "none") {
      items[index].style.display = "block";
    } else {
      items[index].style.display = "none";
    }
  });
});

products.forEach((product, index) => {
  product.addEventListener("click", (event) => {
    const productText = event.target.textContent;
    const newDiv = document.createElement("div");
    newDiv.classList.add("productBuy");
    newDiv.textContent = productText;
    buyBlock.appendChild(newDiv);
    buyButton.style.display = "flex";
  });
});

buyButton.addEventListener("click", () => {
  modal.style.display = "block";
  const del = document.querySelector(".productBuy");
  del.remove();
  setTimeout(() => {
    buyButton.style.display = "none";
    modal.style.display = "none";
    items.forEach((item) => {
      item.style.display = "none";
    });
  }, 2500);
});
