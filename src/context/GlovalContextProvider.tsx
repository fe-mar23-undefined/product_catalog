import { useState, useContext, ReactNode } from "react";
import { Phone } from "../types/Phone";
import { GlobalContext } from "./GlobalContext";


interface ProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<Phone[]>([]);
  const [cart, setCart] = useState<Phone[]>([]);

  const addToFavourites = (phone: Phone) => {
    setFavourites((prevFavourites) => [...prevFavourites, phone]);
  };

  const removeFromFavourites = (phone: Phone) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== phone.id)
    );
  };

  const addToCart = (phone: Phone) => {
    setCart((prevCart) => [...prevCart, phone]);
  };

  const removeFromCart = (phone: Phone) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== phone.id));
  };


  return (
    <GlobalContext.Provider 
      value= {{
        favourites,
        cart,
        addToCart,
        removeFromCart,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
