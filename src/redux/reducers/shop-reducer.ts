const initialState = [
  {
    id: 0,
    title: "Apple iPhone 15 Pro",
    price: 1199.0,
    description: "iphone15pro",
    isFavorite: false,
  },
  {
    id: 1,
    title: "Apple Watch Series 8",
    price: 649.0,
    description: "applewatch8",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Apple AirPods 3",
    price: 199.0,
    description: "airpods3",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Apple iPhone XS Max",
    price: 339.0,
    description: "iphonexs",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Apple Watch Series 9",
    price: 899.0,
    description: "applewatch9",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Apple iPhone 15",
    price: 949.0,
    description: "iphone15",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Apple AirPods Pro 2",
    price: 279.0,
    description: "airpods2gen",
    isFavorite: false,
  },
  {
    id: 7,
    title: "Apple Watch Ultra 2",
    price: 869.0,
    description: "applewatchultra",
    isFavorite: false,
  },
  {
    id: 8,
    title: "Apple iPhone 12 Pro",
    price: 649.0,
    description: "iphone12promax",
    isFavorite: false,
  },
  {
    id: 9,
    title: "Samsung Watch 5",
    price: 299.0,
    description: "galaxywatch5",
    isFavorite: false,
  },
  {
    id: 10,
    title: "Apple iPhone 13 Pro",
    price: 799.0,
    description: "iphone13pro",
    isFavorite: false,
  },
  {
    id: 11,
    title: "Samsung Galaxy Flip5",
    price: 829.0,
    description: "galaxyflip",
    isFavorite: false,
  },
  {
    id: 12,
    title: "Apple iPhone 14 Plus",
    price: 979.0,
    description: "iphone14plus",
    isFavorite: false,
  },
  {
    id: 13,
    title: "Apple AirPods 2",
    price: 159.0,
    description: "airpods2",
    isFavorite: false,
  },
  {
    id: 14,
    title: "Samsung Galaxy S23",
    price: 699.0,
    description: "samsungs23",
    isFavorite: false,
  },
  {
    id: 15,
    title: "Apple Watch SE",
    price: 279.0,
    description: "applewatchse",
    isFavorite: false,
  },
];

const shopReducer = (state = initialState, action: any) => {
  return state;
};

export const actions = {};

export type ShopType = typeof initialState;
export default shopReducer;
