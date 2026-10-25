let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  document.querySelectorAll("#cartCount").forEach(el => {
    el.textContent = cart.length;
  });

  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  alert(name + " added to cart!");
}

function searchProducts() {
  let input = document.getElementById("search");
  if (!input) return;

  let word = input.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(word)
      ? ""
      : "none";
  });
}

function filterProducts(category) {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      category === "All" || card.dataset.category === category
        ? ""
        : "none";
  });
}

function showDetails(name, price, description) {
  let popup = document.getElementById("popup");
  if (!popup) return;

  document.getElementById("detailName").textContent = name;
  document.getElementById("detailPrice").textContent = "₹" + price;
  document.getElementById("detailDescription").textContent = description;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

function validateContact(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  event.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  updateCart();
});
function showCart() {
  let list = document.getElementById("cartItems");
  if (!list) return;

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    list.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p class="price">₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>`;
  });

  document.getElementById("total").textContent = "₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
  showCart();
}