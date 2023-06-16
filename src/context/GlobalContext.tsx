import { createContext } from "react";
import { CartPhone } from "../types/CartPhone";
import { Phone } from "../types/Phone";

interface GlobalContextProps {
  favourites: Phone[];
  cart: CartPhone[];
  addToCart: (phone: Phone) => void;
  removeFromCart: (phone: Phone) => void;
  addToFavourites: (phone: Phone) => void;
  emptyCart: () => void;
  decreaseQuantity: (phone: Phone) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  favourites: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  addToFavourites: () => {},
  emptyCart: () => {},
  decreaseQuantity: () => {},
});