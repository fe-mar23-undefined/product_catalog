import { createContext } from "react";
import { Phone } from "../types/Phone";

interface GlobalContextProps {
  favourites: Phone[];
  cart: Phone[];
  addToCart: (phone: Phone) => void;
  removeFromCart: (phone: Phone) => void;
  addToFavourites: (phone: Phone) => void;
  emptyCart: () => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  favourites: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  addToFavourites: () => {},
  emptyCart: () => {},
});