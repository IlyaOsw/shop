import { createContext, useContext } from "react";

import React from "react";

import {
  CartContextType,
  CartItemType,
  CartProviderPropsType,
} from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderPropsType) => {
  const [cart, setCart] = React.useState<CartItemType[]>([]);
  const [disabledButtons, setDisabledButtons] = React.useState<{
    [key: string]: boolean;
  }>({});

  const disableCartButton = (id: string, value: boolean) => {
    setDisabledButtons((prevDisabledButtons) => {
      return { ...prevDisabledButtons, [id]: value };
    });
  };

  const removeItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const addItem = (newItem: CartItemType) => {
    const newItems = [...cart, newItem];
    setCart(newItems);
  };

  return (
    <CartContext.Provider
      //@ts-ignore
      value={{ cart, addItem, removeItem, disableCartButton, disabledButtons }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
