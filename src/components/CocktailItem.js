import React, { useState } from "react";
import "./styles/CocktailItem.css";

export default function CocktailItem({ data, onItemClick }) {
  const [size] = useState(2);

  return (
    <div className="card-drink" onClick={() => onItemClick(data)}>
      <div className="card-drink-information">
        <h1 className="card-drink-information-title">{data.strDrink}</h1>
        <ul className="card-drink-information-ingredients">
          {data.ingredients.slice(0, size).map((item, index) => (
            <li className="card-drink-information-ingredients-item" key={index}>
              {item.name}
            </li>
          ))}
          {data.ingredients.length > size && (
            <li className="card-drink-information-ingredients-textAlt">
              and {data.ingredients.length - size} ingredients more
            </li>
          )}
        </ul>
      </div>
      <div className="card-drink-image">
        <img src={data.strDrinkThumb} alt={data.strDrink} />
      </div>
    </div>
  );
}
