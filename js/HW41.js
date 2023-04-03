const categories = document.querySelectorAll(".category__click");
const items = document.querySelectorAll(".item");
const buyBlock = document.querySelector(".buy");
const products = document.querySelectorAll(".product");
const buyButton = document.querySelector(".button");
const modal = document.querySelector(".modal");
const form = document.querySelector(".main-form");

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
  form.style.display = "block";

  //   modal.style.display = "block";
  //   const del = document.querySelector(".productBuy");
  //   del.remove();
  //   setTimeout(() => {
  //     buyButton.style.display = "none";
  //     modal.style.display = "none";
  //     items.forEach((item) => {
  //       item.style.display = "none";
  //     });
  //   }, 2500);
});


const mainForm = document.forms.main;
mainForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const n = mainForm.name.value;
  const surname = mainForm.surname.value;
  const fname = mainForm.fname.value;
  const citySelect = mainForm.citySelect.value;
  const post = mainForm.post.value;
  const paymentMethod = mainForm.paymentMethod.value;
  const quantity = mainForm.quantity.value;
  const nameTextarea = mainForm.nameTextarea.value;

  const orderInfoDiv = document.createElement("div");
  orderInfoDiv.id = "orderInfoDiv";
  document.body.appendChild(orderInfoDiv);
  const PIB = document.createElement("div");
  PIB.innerText = `ПІБ: ${n} ${surname} ${fname}`;

  const city = document.createElement("div");
  city.innerText = `Город: ${citySelect}`;

  const postal = document.createElement("div");
  postal.innerText = `Почта: ${post}`;

  const pay = document.createElement("div");
  pay.innerText = `Оплата: ${paymentMethod}`;

  const quanties = document.createElement("div");
  quanties.innerText = `Количество: ${quantity}`;

  const text = document.createElement("div");
  text.innerText = `Коментарий: ${nameTextarea}`;


  const productBuyDiv = document.querySelector(".productBuy");
  const productText = productBuyDiv.textContent;
  const productBuyInformation = document.createElement("div");
  productBuyInformation.innerText = `Информация о товаре: ${productText}`


  if (
    n === "" ||
    surname === "" ||
    fname === "" ||
    post === "" ||
    nameTextarea === ""
  ) {
    alert("Пожалуйста, заполните все обязательные поля формы");
  } else {
    // mainForm.submit();
    orderInfoDiv.appendChild(PIB);
    orderInfoDiv.appendChild(city);
    orderInfoDiv.appendChild(postal);
    orderInfoDiv.appendChild(pay);
    orderInfoDiv.appendChild(quanties);
    orderInfoDiv.appendChild(text);
    orderInfoDiv.appendChild(productBuyInformation)
  }
});
