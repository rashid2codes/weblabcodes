let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(name, price) {
  wishlist.push({ name, price });

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert(name + " added to wishlist ❤️");
}

function showWishlist() {
  let list = document.getElementById("wishlistItems");

  if (!list) return;

  list.innerHTML = "";

  wishlist.forEach((item, index) => {
    list.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeWishlist(${index})">Remove</button>
      </div>
    `;
  });
}

function removeWishlist(index) {
  wishlist.splice(index, 1);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  showWishlist();
}