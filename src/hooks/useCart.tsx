import { createContext, useContext, useState } from "react";

import {
  CartContextType,
  CartItemType,
  CartProviderPropsType,
} from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderPropsType) {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const removeItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const addItem = (newItem: CartItemType) => {
    const newItems = [...cart, newItem];
    setCart(newItems);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
