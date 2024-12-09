// Declare the array to hold shopping list items
let shoppingList = [];

// declaring and selecting  elements
const form = document.querySelector('#shopping-form');
const productInput = document.getElementById('product');
const quantityInput = document.getElementById('quantity');
const listContainer = document.querySelector('.container');
const clearButtonSection = document.querySelector('.btn-sections');
const clearButton = document.querySelector('.clearlist');

// Function to display the shopping list
function displayList() {
  listContainer.innerHTML = ''; //To Clear the list container
  shoppingList.forEach((item, index) => {
    // Create a div for each item
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    if (item.purchased) listItem.classList.add('purchased');

    // Create a span for the item and quantity
    const itemText = document.createElement('span');
    itemText.textContent = `${item.name} - ${item.quantity}`;

    // Create a "mark as purchased" button
    const purchaseButton = document.createElement('button');
    purchaseButton.textContent = item.purchased ? 'Purchased' : 'Mark as Purchased';
    purchaseButton.classList.add('purchase-btn');

    // Append the item and button to the list item
    listItem.appendChild(itemText);
    listItem.appendChild(purchaseButton);

    // Add the list item to the container
    listContainer.appendChild(listItem);

    // Event listener to mark the item as purchased
    purchaseButton.addEventListener('click', () => {
      item.purchased = !item.purchased; // Toggle the purchased status
      displayList(); // Re-render the list
    });
  });

  // Show the "Clear list" button if the list is not empty
  if (shoppingList.length > 0) {
    clearButtonSection.classList.remove('hidden');
  } else {
    clearButtonSection.classList.add('hidden');
  }
}

// Event listener for adding an item to the list
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the page from reloading

  const productName = productInput.value.trim();
  const quantity = quantityInput.value.trim();

  // Check if inputs are valid
  if (productName && quantity) {
    // Add the new item to the shopping list array
    shoppingList.push({ name: productName, quantity: quantity, purchased: false });
    
    // Clear the input fields
    productInput.value = '';
    quantityInput.value = '';

    // Update the list display
    displayList();
  } else {
    alert('Please enter both product name and quantity!');
  }
});

// Event listener for clearing the entire shopping list
clearButton.addEventListener('click', () => {
  shoppingList = []; // Clear the array
  displayList(); // Re-render the list
});
