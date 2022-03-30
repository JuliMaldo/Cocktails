import React, { useCallback } from "react";
import CocktailItem from "./CocktailItem";
import "./styles/CocktailsList.css";
import { useNavigate } from "react-router-dom";

export default function CocktailsList({ cocktails }) {
  const navigate = useNavigate();
  const onItemClick = useCallback((id, data) => {
    navigate(`cocktail/${id}`, { state: { data } });
  }, []);
  console.log(cocktails);
  return (
    <div className="cocktails">
      {cocktails.map((item, index) => (
        <CocktailItem
          data={item}
          key={index}
          onItemClick={(data) => onItemClick(item.idDrink, data)}
        />
      ))}
    </div>
  );
}
