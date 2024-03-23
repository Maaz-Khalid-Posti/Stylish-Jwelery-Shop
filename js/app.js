
  // Function to handle the click event for each item
  function handleItemClick(itemName) {
    // You can perform any action here, such as showing a popup, navigating to a new page, etc.
    alert("You clicked on: " + itemName);
  }

  // Get all the item cards
  const itemCards = document.querySelectorAll(".card");

  // Loop through each item card and add a click event listener
  itemCards.forEach((card) => {
    // Get the item name from the card
    const itemName = card.querySelector(".card-title").innerText;

    // Add a click event listener to the card
    card.addEventListener("click", () => {
      // Call the handleItemClick function with the item name as an argument
      handleItemClick(itemName);
    });
  });


