import { useState, useContext, ReactNode, useEffect } from "react";
import { Phone } from "../types/Phone";
import { GlobalContext } from "./GlobalContext";


interface ProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<Phone[]>([]);
  const [cart, setCart] = useState<Phone[]>([]);

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    const localFavs = localStorage.getItem('favourites');

    if (localCart) {
      setCart(JSON.parse(localCart))
    }

    if (localFavs) {
      setFavourites(JSON.parse(localFavs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites])

  const addToFavourites = (phone: Phone) => {
    const isFavorited = favourites.some(favPhone => favPhone.id === phone.id);

    if (isFavorited) {
      setFavourites((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== phone.id)
    );
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, phone]);
    }
  };

  
  const addToCart = (phone: Phone) => {
    setCart((prevCart) => [...prevCart, phone]);
  };
  
  const removeFromCart = (phone: Phone) => {
    const foundPhone = cart
      .find(phoneToFind => phoneToFind.phoneId === phone.phoneId);

    if (foundPhone) {
      const cartIds = cart.map(item => item.itemId);
      const indexToRemove = cartIds.indexOf(foundPhone.itemId);

      const updatedCart = [...cart]
      updatedCart.splice(indexToRemove, 1);
      setCart(updatedCart)

    }
  };

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <GlobalContext.Provider 
      value= {{
        favourites,
        cart,
        addToCart,
        removeFromCart,
        addToFavourites,
        emptyCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
