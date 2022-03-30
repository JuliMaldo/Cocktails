import { useEffect, useState } from "react";
import getDrinks from "../services/getDrinks";
import getDrinksDetails from "../services/getDrinksDetails";

export function useDrinks() {
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    setLoading(true);
    getDrinks().then((drinks) => {
      drinks.map((item) =>
        getDrinksDetails(item.idDrink).then((cocktail) =>
          setDrinks((prev) => [...prev, cocktail])
        )
      );
      setLoading(false);
    });
  }, [setDrinks]);

  return { loading, drinks };
}
