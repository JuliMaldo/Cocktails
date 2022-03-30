import "./App.css";
import CocktailsList from "./components/CocktailsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailDetail from "./components/CocktailDetail";
import { useDrinks } from "./hooks/useDrinks";

function App() {
  const { loading, drinks } = useDrinks();
  if (loading) return "cargando";
  return (
    <BrowserRouter>
      <h1 className="title">Cocktails App</h1>
      <Routes>
        <Route path="/" element={<CocktailsList cocktails={drinks} />} />
        <Route path="/cocktail/:id" element={<CocktailDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
