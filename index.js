// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { name: "Garlic Bread", price: 25 },
        { name: "Bruschetta", price: 30 }
    ],
    MainCourses: [
        { name: "Margherita Pizza", price: 85 },
        { name: "Spaghetti Carbonara", price: 95 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 50 },
        { name: "Cheesecake", price: 55 }
    ]
};
// Function to display menu items by category
function displayMenuItems(menu) {
    // Get a reference to the menu container in your HTML
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an h3 element for the category
        const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = category;

        // Append the category heading to the menu container
        menuContainer.appendChild(categoryHeading);

        // Create a list element for the items in the category
        const itemList = document.createElement('ul');

        // Loop through the items in the category and create list items
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - R${item.price}`;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));

            // Append the list item to the category's list
            itemList.appendChild(listItem);
        });

        // Append the list to the menu container
        menuContainer.appendChild(itemList);
    }
}

// Callback function for adding an item to the order
function addToOrder(item) {
    // Get references to the order items list and order total element in your HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElem = document.getElementById('order-total');

    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = `${item.name} - R${item.price}`;

    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElem.textContent);
    const newTotal = currentTotal + item.price;
    orderTotalElem.textContent = newTotal.toFixed(2);

    // Attach a click event listener to the order item to remove it when clicked
    orderItem.addEventListener('click', () => removeFromOrder(orderItem, item.price));
}


// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
