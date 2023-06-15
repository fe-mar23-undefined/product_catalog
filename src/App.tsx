import { Navigate, Route, Routes } from "react-router-dom";
import { AccessoriesPage } from "./pages/AccessoriesPage";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/PageNotFound";
import { PhonesPage } from "./pages/PhonesPage";
import { TabletsPage } from "./pages/TabletsPage";
import { Header } from "./components/header/Header";
import { CartPage } from "./pages/CartPage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { Footer } from "./components/Footer";
import './App.scss';


export const App = () => (
  <div className="App">
    <Header />
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/phones" element={<PhonesPage />}>
          <Route path=":phoneId" element={<PhonesPage />} />
        </Route>
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favourites" element={<FavouritesPage />}>
          <Route path=":phoneId" element={<FavouritesPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    <Footer />
  </div>
);


