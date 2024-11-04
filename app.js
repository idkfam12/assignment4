/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 *      Name:       <Atharva Dalwadi>
 *      Student ID: <170578231>
 *      Date:       <11-03-2024>
 */

// Get our data from the window object
const { products, categories } = window;

// Format price from cents to dollars
function formatPrice(cents) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(cents / 100);
}

// Show products for a specific category
function showProducts(categoryId) {
  // Get elements we need to update
  const categoryTitle = document.querySelector("#selected-category");
  const tbody = document.querySelector("#category-products");

  // Find the category name
  const category = categories.find((c) => c.id === categoryId);
  categoryTitle.textContent = category.name;

  // Clear existing products
  tbody.innerHTML = "";

  // Filter products for this category that aren't discontinued
  const categoryProducts = products.filter(
    (product) => product.categories.includes(categoryId) && !product.discontinued
  );

  // Create rows for each product
  categoryProducts.forEach((product) => {
    const tr = document.createElement("tr");

    // Add click handler to log product info
    tr.addEventListener("click", () => {
      console.log({ product });
    });

    // Create and append cells
    const titleCell = document.createElement("td");
    titleCell.textContent = product.title;

    const descCell = document.createElement("td");
    descCell.textContent = product.description;

    const priceCell = document.createElement("td");
    priceCell.textContent = formatPrice(product.price);

    tr.appendChild(titleCell);
    tr.appendChild(descCell);
    tr.appendChild(priceCell);

    tbody.appendChild(tr);
  });
}

// Initialize the page
function initialize() {
  const menu = document.querySelector("#menu");

  // Create category buttons
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.addEventListener("click", () => showProducts(category.id));
    menu.appendChild(button);
  });

  // Show first category by default
  showProducts(categories[0].id);
}

// Run initialization when page loads
window.addEventListener("load", initialize);
