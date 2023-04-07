const categories = document.querySelectorAll(".category__click");
const items = document.querySelectorAll(".item");
const buyBlock = document.querySelector(".buy");
const products = document.querySelectorAll(".product");
const buyButton = document.querySelector(".button");
const modal = document.querySelector(".modal");
const form = document.querySelector(".main-form");
const wrapper = document.querySelector(".wrapper");
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

const myOrders = document.createElement('div');
myOrders.classList.add('myorders');
const heading = document.createElement('h2');
heading.textContent = 'Мои заказы';

document.body.appendChild(myOrders);
myOrders.appendChild(heading);

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
  const today = new Date().toLocaleString();
  
  const orderInfoDiv = document.createElement("div");
  orderInfoDiv.classList.add("block");
  orderInfoDiv.id = "orderInfoDiv";
  
  myOrders.appendChild(orderInfoDiv);
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

  const day = document.createElement("div");
  day.innerText = `Дата заказа: ${today}`;

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
    orderInfoDiv.appendChild(day)
    const orderData = {
      name: n,
      surname: surname,
      fname: fname,
      city: citySelect,
      post: post,
      paymentMethod: paymentMethod,
      quantity: quantity,
      comment: nameTextarea,
      productText: productText,
      day: today
    };
    
    let orders = localStorage.getItem('orders');
    if (!orders) {
      orders = [];
    } else {
      orders = JSON.parse(orders);
    }
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
  }
      modal.style.display = "block";
    const del = document.querySelector(".productBuy");
    del.remove();
    const foormDel = document.querySelector(".main-form");
    foormDel.reset();
    setTimeout(() => {
      buyButton.style.display = "none";
      modal.style.display = "none";
      items.forEach((item) => {
        item.style.display = "none";
      });
      location.reload();
    }, 1500);
});
function getLastWord(str) {
  const words = str.trim().split(/\s+/);
  return words[words.length - 1];
}
let orders = localStorage.getItem('orders');
if (orders) {

  
  orders = JSON.parse(orders);
  orders.forEach((orderData, index) => {
    const orderInfoDiv = document.createElement("div");
    orderInfoDiv.classList.add("block");
    orderInfoDiv.id = "orderInfoDiv";

    const PIB = document.createElement("div");
    PIB.innerText = `ПІБ: ${orderData.name} ${orderData.surname} ${orderData.fname}`;

    const city = document.createElement("div");
    city.innerText = `Город: ${orderData.city}`;

    const postal = document.createElement("div");
    postal.innerText = `Почта: ${orderData.post}`;

    const pay = document.createElement("div");
    pay.innerText = `Оплата: ${orderData.paymentMethod}`;

    const quanties = document.createElement("div");
    quanties.innerText = `Количество: ${orderData.quantity}`;

    const text = document.createElement("div");
    text.innerText = `Коментарий: ${orderData.comment}`;

    const productBuyInformation = document.createElement("div");
    productBuyInformation.innerText = `Информация о товаре: ${orderData.productText}`;

    const days = document.createElement("div");
    days.innerText = `Дата заказа: ${orderData.day}`;

    
    const price = document.createElement("div");
    price.innerText = `Сумма заказа: ${getLastWord(orderData.productText) * orderData.quantity}`;

    PIB.classList.add("hidden");
    city.classList.add("hidden");
    postal.classList.add("hidden");
    pay.classList.add("hidden");
    quanties.classList.add("hidden");
    text.classList.add("hidden");
    productBuyInformation.classList.add("hidden");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Удалить";
    deleteBtn.addEventListener("click", () => {
      orders.splice(index, 1);
      localStorage.setItem("orders", JSON.stringify(orders));
      orderInfoDiv.remove();
    });
    

    orderInfoDiv.appendChild(PIB);
    orderInfoDiv.appendChild(city);
    orderInfoDiv.appendChild(postal);
    orderInfoDiv.appendChild(pay);
    orderInfoDiv.appendChild(quanties);
    orderInfoDiv.appendChild(text);
    orderInfoDiv.appendChild(productBuyInformation);
    orderInfoDiv.appendChild(days)
    orderInfoDiv.appendChild(price)
    orderInfoDiv.appendChild(deleteBtn);
    myOrders.appendChild(orderInfoDiv);

  });
}

const myOrderH2 = document.querySelector('h2');
myOrderH2.addEventListener('click', () => {
  
  wrapper.style.display = "none"
  const orderDivs = document.querySelectorAll('#orderInfoDiv');
  orderDivs.forEach((orderDiv) => {
    orderDiv.style.display = "inline-block";
  });
  
});


const orderDivs = document.querySelectorAll('#orderInfoDiv');

orderDivs.forEach((orderDiv) => {
  const hiddenElements = orderDiv.querySelectorAll('.hidden');

  orderDiv.addEventListener('click', () => {
    hiddenElements.forEach((hidden) => {
      hidden.style.display = "block";
    });
  });
});

