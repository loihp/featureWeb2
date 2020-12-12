(function () {
  const bars = document.querySelector(".bars");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  bars.addEventListener("click", () => {
    //toogle nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0
        }s`;
      }
    });

    bars.classList.toggle("fa-times");
  });
})();

const items = [
  {
    name: "Pizza 001",
    price: 3.3,
    quantity: 1,
  },
  {
    name: "Pizza 001",
    price: 3.3,
    quantity: 1,
  },
  {
    name: "Pizza 001",
    price: 3.3,
    quantity: 1,
  },
];
const ship = 2;

function render() {
  let subTotal = 0;

  items.forEach((item) => {
    subTotal += item.price + item.quantity;
  });

  const html = items
    .map(
      (item) =>
        ` <div class="main__order">
      <p class="main__order-name">${item.name}</p>
      <div class="main__order btn">
          <button class="btn-down">-</button>
          <input type="number" value=${item.quantity}>
          <button class="btn-up">+</button>
      </div>
      <div class="main__order-detail">
          <p class="order__detail-price">$${item.price}
          </p>
          <button class="delete btn-remove">X</button>
      </div>
  </div>`
    )
    .join("");
  document.getElementById("render").innerHTML = html;
  let detele = document.querySelectorAll("delete");
  for (let i = 0; i < detele.length; i++) {
    detele[i].addEventListener("click", () => {
      remove(i);
    });
  }

  let total = subTotal + ship;

  console.log(items.length);
  console.log(items.map((item) => item.price));
  document.getElementById("sub").innerText = `$${subTotal.toFixed(2)}`;
  document.getElementById("ship").innerText = `$${ship}`;
  document.getElementById("total").innerText = `$${total.toFixed(2)}`;
}

function add() {
  items.push({
    name: `Pizza ${Math.floor(Math.random() * 10)}`,
    price: parseFloat((Math.random() * 10).toFixed(2)),
    quantity: 1,
  });
  render();
}

function remove(index) {
  items.splice(index, 1);
  render;
}

document.getElementById("add").addEventListener("click", () => {
  add();
});
render();
