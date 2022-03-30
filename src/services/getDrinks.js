export default function getDrinks() {
  const apiUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { drinks } = response;
      return drinks;
    })
    .catch((err) => console.log("Error", err));
}
