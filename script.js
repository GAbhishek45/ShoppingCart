var ArrProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 2500,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
  },
  {
    id: 2,
    name: "Product 2",
    price: 3000,
    img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 4500,
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 4,
    name: "Product 4",
    price: 3800,
    img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    id: 5,
    name: "Product 5",
    price: 4000,
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 6,
    name: "Product 6",
    price: 6000,
    img: "https://images.unsplash.com/photo-1636718281370-b5e3f51a5af2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2,
  },
];
const body = document.querySelector("body"),
  products = document.querySelector(".products"),
  shoppingBasket = document.querySelector(".shoppingBasket"),
  cart = document.querySelector(".cart"),
  close = document.querySelector(".close"),
  productList = document.querySelector(".productList"),
  quantity = document.querySelector(".quantity"),
  total = document.querySelector(".total");

checkOutList = [];

shoppingBasket.addEventListener("click", () => {
  cart.style.display = "block";
  //   shoppingBasket.style.display = "none";
});
close.addEventListener("click", () => {
  cart.style.display = "none";
});
function onInit() {
  ArrProducts.forEach((item, key) => {
    let div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
    <img src=${item.img}/>
    <div class="name">${item.name}</div>
    <div class="price">${"$" + item.price}</div>
    <button type="button" onClick="addToCart(${key})" ><i class="fa-solid fa-bag-shopping" style="color: #ffffff;"></i>  Add to Cart</button>

    `;
    products.appendChild(div);
  });
}
onInit();

function addToCart(id) {
  if (checkOutList[id] == null) {
    checkOutList[id] = ArrProducts[id];
    checkOutList[id].quantity = 1;
  } else {
    checkOutList[id].quantity++;
  }
  reloadCart();
}

function reloadCart() {
  productList.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  checkOutList.forEach((item, key) => {
    totalPrice += parseInt(item.price * item.quantity);

    count += item.quantity;
    let li = document.createElement("li");
    li.innerHTML = `
    \<img src = ${item.img}/>
    <div >${item.name}</div>
    <div >${"$" + item.price}</div>
    <div class="pm">
    <button onClick="changeQuantity(${key},${item.quantity - 1})">-</button>
    <div class="count">${item.quantity}</div>
    <button onClick="changeQuantity(${key},${item.quantity + 1})">+</button>
    </div>`;

    productList.appendChild(li);
  });
  //   total.innerHTML = ${count} "$" + totalPrice;
  quantity.innerHTML = count;
  total.innerHTML = `<small>Subtotal(${count} items) $</small>  ${totalPrice}`;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete checkOutList[key];
  } else {
    checkOutList[key].quantity = quantity;
  }
  reloadCart();
}
