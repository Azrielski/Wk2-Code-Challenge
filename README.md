### WEEK1 CODE CHALLENGE
In this repo you will find 3 files index.js, index.html and styles.css

### Shopping List Manager
This Shopping List Manager is a web application that allows users to create, view, and manage their shopping list. Users can add items with quantities, mark items as purchased, and clear the entire shopping list.

## Features
Add Items:

Users can add items to the shopping list by entering the product name and quantity.
Mark as Purchased:

Items can be marked as purchased, visually distinguishing them from other items.
Dynamic List Updates:

The shopping list is dynamically updated in the DOM as items are added or marked.
Clear Shopping List:

Users can clear the entire shopping list with a single click.
Responsive UI:

Automatically shows or hides the "Clear List" button based on the list's state.
How to Use
Adding an Item
Enter the product name and quantity in the input fields.
Click the "Add" button (or submit the form).
The item will be added to the shopping list and displayed in the UI.
Marking an Item as Purchased
Click the "Mark as Purchased" button next to the item.
The button will toggle to "Purchased" and the item will be styled accordingly.
Clearing the List
Click the "Clear List" button.
All items will be removed from the shopping list.
### Project Structure

## HTML Elements Used
Form: Used to submit new shopping list items.

<form id="shopping-form">
Input Fields:
Product Name:

<input id="product" type="text" placeholder="Enter product name" />
Quantity:

<input id="quantity" type="number" placeholder="Enter quantity" />
Container:
Displays the shopping list items dynamically.

<div class="container"></div>
Clear List Button:
Allows users to remove all items.

<button class="clearlist hidden">Clear List</button>

## JavaScript Logic
# Array for Shopping List:

Stores shopping list items as objects with properties: name, quantity, and purchased.

# Functions:
 displayList(): Renders the shopping list dynamically in the DOM.

# Event Listeners:
Handles adding new items and marking them as purchased.
Clears the entire shopping list.
Dynamic Updates:

Automatically updates the DOM whenever items are added, marked as purchased, or removed.
## Example Usage

# Adding Items
Enter:
Product Name: Milk
Quantity: 2
Submit the form or click "Add."
Output in the list:
Milk - 2 [Mark as Purchased]

# Marking Items as Purchased
Click the "Mark as Purchased" button next to Milk.
The item will be updated to:

Milk - 2 [Purchased]

Clearing the List
# Click "Clear List."
The list will be emptied.
# Installation
Prerequisites
*Browser: Modern web browser that supports JavaScript.
*Editor: Use an editor like VS Code to modify the code if needed.
# Setup
Save the JavaScript file as shoppingList.js.
Link it to an HTML file using:
html
Copy code
<script src="shoppingList.js"></script>
Open the HTML file in your browser.

## Enhancements
# Future Improvements
Add local storage to persist the shopping list between sessions.
Include an option to edit item names or quantities.
Implement sorting options (e.g., alphabetically or by purchase status).
Add filters (e.g., show only purchased or unpurchased items).

## License
This project is open source and free to use.

### Author
Created by Victor Azriel Ngae.