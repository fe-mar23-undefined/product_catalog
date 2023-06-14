import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccessoriesPage } from "./pages/AccessoriesPage";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/PageNotFound";
import { PhonesPage } from "./pages/PhonesPage";
import { TabletsPage } from "./pages/TabletsPage";
import { Header } from "./components/Header";
import { CartPage } from "./pages/CartPage";
import { FavouritesPage } from "./pages/FavouritesPage";

import './App.scss';
import { Footer } from "./components/Footer";


export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  
    if (isMenuOpen) {
      console.log("Menu opened");
    } else {
      console.log("Menu closed");
    }
  };

  return (
    <div className="App">
      <Header onToggleMenu={handleMenuToggle} />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/phones" element={<PhonesPage />}>
            <Route path=":id" element={<PhonesPage />} />
          </Route>
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

