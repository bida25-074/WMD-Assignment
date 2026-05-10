document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".addtocart");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];


      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          name: name,
          price: price,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(name + " added to cart!");
    });
  });
});