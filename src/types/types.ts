import { SlideProps } from "@mui/material";
import { ReactNode } from "react";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  isFavorite: boolean;
  isStock: boolean;
};

export type ClientType = {
  id: number;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  website: string;
  company: string;
};

export type ThemeType = {
  toggleDarkMode: () => void;
};

export type StoreCardProps = {
  item: ProductType;
  index: number;
  toggleFavorite: (productId: number) => void;
};

export type ShowOnlyPropsType = {
  setProducts: (products: ProductType[]) => void;
  originalProducts: ProductType[];
  selectedOption: string;
  handleCheckboxChange: (value: React.SetStateAction<string>) => void;
};

export type CommentFormPropsType = {
  commentContent: string;
  setCommentContent: (commentContent: string) => void;
};

export type CustomSelectPropsType = {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  filterFavorites: () => void;
};

export type EmptyBoxPropsType = {
  noFilters: () => void;
  setSelectedOption: (selectedOption: string) => void;
};

export type LikesBlockPropsType = {
  likes: number;
  dislikes: number;
};

export type LearnMorePropsType = {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
};

export type BarPropsType = {
  setProducts: (products: ProductType[]) => void;
  products: ProductType[];
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
  views: number;
};

export type TabPanelProps = {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
};

export enum LogoLabel {
  SAMSUNG = "samsung",
  GIGABYTE = "gigabyte",
  LENOVO = "lenovo",
  INTEL = "intel",
  PHILIPS = "philips",
  ASUS = "asus",
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

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  isFavorite: boolean;
  isStock: boolean;
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

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export type AboutBlocksType = {
  item: {
    id: number;
    label: AboutTitle;
    description: AboutInfo;
  };
};

export type ChatContentPropsType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  robotMessage: string[];
};

export type ChatAreaPropsType = {
  robotMessage: string[];
  sendedMessage: string[];
};
