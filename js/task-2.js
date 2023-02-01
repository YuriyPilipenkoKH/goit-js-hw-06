const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  
  const ingredientsList = document.getElementById("ingredients");
  const elements = []

ingredients.forEach(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
   
    item.classList.add('item')
    // console.log(item);
    elements.push(item)

  });

    // console.log(elements)
    ingredientsList.append(...elements);

    console.log(ingredientsList);
