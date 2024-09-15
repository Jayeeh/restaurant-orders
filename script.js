// Arrays representing different types of food with their details
const thaiFood = [{
    mealName: "Pad Thai",
    quantity: 1,
    price: 8
  }];
  
  const italianFood = [{
    mealName: "Pasta Bolognese",
    quantity: 3,
    price: 7
  }, {
    mealName: "Pepperoni pizza",
    quantity: 2,
    price: 10
  }];
  
  const indianFood = [{
    mealName: "Chapati",
    quantity: 8,
    price: 7
  }, {
    mealName: "Chicken Massala",
    quantity: 5,
    price: 9
  }, {
    mealName: "Tandoori Chicken",
    quantity: 5,
    price: 9
  }];
  
  // Function to find a meal by name in a given menu
  function findMeal(name, menu) {
    // Iterate through the menu array
    for (let i = 0; i < menu.length; i++) {
      // Check if the current meal's name matches the given name
      if (menu[i].mealName === name) {
        // Return the meal object if a match is found
        return menu[i];
      }
    }
    // Implicitly returns undefined if no match is found
  }
  
  // Function to select a meal based on its name and type of cuisine
  function selectMeal(name, type) {
    // Check the type of cuisine and call findMeal with the appropriate menu
    if (type == "italian") {
      return findMeal(name, italianFood);
    } else if (type == "indian") {
      return findMeal(name, indianFood);
    } else if (type == "thai") {
      return findMeal(name, thaiFood);
    } else {
      // Return "not found" if the type does not match any known cuisine
      return "not found";
    }
  }
  
  // Function to create a summary of the order
  function createSummary(name, type, amount) {
    // Select the meal based on name and type
    let order = selectMeal(name, type);
    // Check if the order is valid and the requested amount is available
    let orderPossible = order !== "not found" && amount <= order.quantity;
    // Default error message
    let errorMessage = "Something went wrong, please try again";
    // If the order is possible, calculate the total price and return the summary
    if (orderPossible == true) {
      const total = amount * order.price;
      return `You ordered ${amount} ${name} for a total of ${total} euros`;
    } else {
      // Return the error message if the order is not possible
      return errorMessage;
    }
  }
  
  // Example function call to create a summary for an order
  console.log(createSummary("Pasta Bolognese", "italian", 3));
  