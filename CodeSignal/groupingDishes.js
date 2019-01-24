/* Naive solution, failed 2/8 tests */
function groupingDishes(dishes) {
  let arr = {};
  for (let i = 0; i < dishes.length; i++) {
    for (let j = 1; j < dishes[i].length; j++) {
      if (arr[dishes[i][j]] == undefined) {
        arr[dishes[i][j]] = [];
      }
      arr[dishes[i][j]].push(dishes[i][0]);
    }
  }
  arr = Object.entries(arr).sort();
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1].length > 1) {
      results.push([arr[i][0]].concat(arr[i][1].sort()));
    }
  }
  return results;
}

/* Less naive solution - passed all tests */
function groupingDishes(dishes) {
  let ingredientmap = {};
  for (let i = 0; i < dishes.length; i++) {
    let current = dishes[i][0];
    for (let j = 1; j < dishes[i].length; j++) {
      if (ingredientmap[dishes[i][j]] != undefined) {
        ingredientmap[dishes[i][j]].push(current);
      } else {
        ingredientmap[dishes[i][j]] = [current];
      }
    }
  }
  Object.keys(ingredientmap).forEach(ingredient => {
    if (ingredientmap[ingredient].length < 2) {
      delete ingredientmap[ingredient];
    }
  });
  let sorted = Object.keys(ingredientmap).sort();
  let ingredients = [];
  for (let i = 0; i < sorted.length; i++) {
    ingredients.push([sorted[i]].concat(ingredientmap[sorted[i]].sort()));
  }
  return ingredients;
}
groupingDishes([
  ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
  ["Chicken Curry", "Chicken", "Curry Sauce"],
  ["Fried Rice", "Rice", "Onions", "Nuts"],
  ["Salad", "Spinach", "Nuts"],
  ["Sandwich", "Cheese", "Bread"],
  ["Quesadilla", "Chicken", "Cheese"]
]);
