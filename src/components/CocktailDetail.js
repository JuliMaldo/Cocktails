import React from "react";
import "./styles/CocktailDetail.css";
import { useLocation, Link } from "react-router-dom";

export default function CocktailDetail() {
  const {
    state: { data },
  } = useLocation();
  return (
    <div className="card-detail">
      <h1>{data.strDrink}</h1>
      <img
        src={data.strDrinkThumb}
        alt="cocktail"
        className="card-detail-image"
      />
      <div className="card-detail-ingredients">
        {data.ingredients.map((item, index) => (
          <p key={index}>
            {item.quantity}- {item.name}
          </p>
        ))}
      </div>
      <div className="card-detail-instructions">
        <p>How to prepare</p>
        <p>{data.strInstructions}</p>
      </div>

      <Link to={"/"} className="arrow-back">
        <img
          src="https://img.icons8.com/flat-round/64/000000/back--v1.png"
          alt="goBack"
        />
      </Link>
    </div>
  );
}
