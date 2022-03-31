export default function getDrinksDetails(idDrink) {
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { drinks } = response;
      const { strDrink, strInstructions, strDrinkThumb, idDrink } = drinks[0];
      let ingredients = [];
      let index = 1;
      while (drinks[0][`strIngredient${index}`]) {
        ingredients.push({
          name: drinks[0][`strIngredient${index}`],
          quantity: drinks[0][`strMeasure${index}`],
        });
        index++;
      }
      return { strDrink, strInstructions, strDrinkThumb, ingredients, idDrink };
    })
    .catch((err) => console.log("Error", err));
}
