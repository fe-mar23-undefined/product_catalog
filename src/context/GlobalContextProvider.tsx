import { useState, useContext, ReactNode, useEffect } from "react";
import { CartPhone } from "../types/CartPhone";
import { Phone } from "../types/Phone";
import { GlobalContext } from "./GlobalContext";


interface ProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<Phone[]>([]);
  const [cart, setCart] = useState<CartPhone[]>([]);

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
    setCart((prevCart) => {
      const foundPhone = cart.find(telephone => telephone.phone.itemId === phone.itemId);

      if (foundPhone) {
        foundPhone.quantity += 1;
  
      } else {
        prevCart.push({ phone, quantity: 1 });
      }

      return [...prevCart];
    })
    
  };

  const decreaseQuantity = (phone: Phone) => {
     setCart((prevCart) => {
      const foundPhone = prevCart.find((item) => item.phone.id === phone.id);

      if (foundPhone) {
        if (foundPhone.quantity > 1) {
          foundPhone.quantity -= 1;
        } 
      }

      return [...prevCart];
    });
  }
  
  const removeFromCart = (phone: Phone) => {
    setCart(prevCart => prevCart.filter(telephone => telephone.phone.itemId !== phone.itemId))
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
        decreaseQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);
