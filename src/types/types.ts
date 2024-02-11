import { SlideProps } from "@mui/material";
import { ReactNode } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  isFavorite: boolean;
  isStock: boolean;
};

export type StoreCardProps = {
  item: Product;
  index: number;
  toggleFavorite: (productId: number) => void;
};

export type ShowOnlyPropsType = {
  setProducts: (products: Product[]) => void;
  originalProducts: Product[];
  selectedOption: string;
  handleCheckboxChange: (value: React.SetStateAction<string>) => void;
};

export type BarPropsType = {
  setProducts: (products: Product[]) => void;
  products: Product[];
  setSearch: (search: string) => void;
  filterFavorites: () => void;
  noFilters: () => void;
  setSelectedOption: (selectedOption: string) => void;
};

export type TransitionProps = Omit<SlideProps, "direction">;

export type NewsPostPropsType = {
  id: number;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  additionalText1: string;
  additionalText2: string;
  postDate: string;
};

export type TabPanelProps = {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
};

export enum LogoLabel {
  SAMSUNG = "samsung",
  APPLE = "apple",
  LENOVO = "lenovo",
  XIAOMI = "xiaomi",
  SONY = "sony",
  HUAWEI = "huawei",
}

export enum AboutTitle {
  TITLE1 = "aboutTitle1",
  TITLE2 = "aboutTitle2",
  TITLE3 = "aboutTitle3",
  TITLE4 = "aboutTitle4",
}

export enum AboutInfo {
  INFO1 = "aboutInfo1",
  INFO2 = "aboutInfo2",
  INFO3 = "aboutInfo3",
  INFO4 = "aboutInfo4",
}

export enum Locales {
  EN = "en",
  EE = "ee",
  RU = "ru",
}

export enum SocialLinks {
  LINKEDIN = "Linkedin",
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram",
  GITHUB = "Github",
}

export enum Contact {
  LOCATION = "location",
  PHONE = "phone",
  MAIL = "mail",
}

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

export type CartProviderPropsType = {
  children: ReactNode;
};

export type CloseButtonProps = {
  onClose: () => void;
};
