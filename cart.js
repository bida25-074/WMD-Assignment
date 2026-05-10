window.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let tableBody = document.querySelector("#cartTable tbody");
  let total = 0;

  tableBody.innerHTML = "";

  cart.forEach(item => {
    let quantity = item.quantity || 1; 

    let row = tableBody.insertRow();
    row.insertCell(0).textContent = item.name;
    row.insertCell(1).textContent = quantity;

    let itemTotal = item.price * quantity;

    row.insertCell(2).textContent = "BWP " + itemTotal.toFixed(2);

    total += itemTotal;
  });

  document.getElementById("cartTotal").textContent = total.toFixed(2);
});