import { createContext, useContext, useState, ReactNode } from "react";

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  isFavorite: boolean;
};

export type CartContextType = {
  cart: CartItemType[];
  addItem: (newItem: CartItemType) => void;
  removeItem: (id: number) => void;
};

type CartProviderPropsType = {
  children: ReactNode;
};

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

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
