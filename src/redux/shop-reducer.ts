const initialState: {
  id: number;
  title: string;
  price: number;
  description: string;
}[] = [
  {
    id: 0,
    title: "Apple iPhone 15 Pro Max 256GB",
    price: 1489.0,
    description: "iphone15promax",
  },
  {
    id: 1,
    title: "Apple Watch Series 8 GPS/LTE 45mm",
    price: 649.0,
    description: "applewatch8",
  },
  {
    id: 2,
    title: "Apple AirPods with Lightning",
    price: 199.0,
    description: "airpods3",
  },
  {
    id: 3,
    title: "Apple iPhone 14 Pro Max 1TB",
    price: 1649.0,
    description: "iphone14promax",
  },
  {
    id: 4,
    title: "Apple Watch Series 9 GPS/LTE 45mm",
    price: 899.0,
    description: "applewatch9",
  },
  {
    id: 5,
    title: "Apple iPhone 15 128GB",
    price: 949.0,
    description: "iphone15",
  },
  {
    id: 6,
    title: "Apple AirPods Pro 2nd gen",
    price: 279.0,
    description: "airpods2gen",
  },
  {
    id: 7,
    title: "Apple Watch Ultra 2 GPS/LTE 49mm",
    price: 869.0,
    description: "applewatchultra",
  },
  {
    id: 8,
    title: "Apple iPhone 12 Pro 128GB",
    price: 649,
    description: "iphone12promax",
  },
  {
    id: 9,
    title: "Google Pixel Watch LTE",
    price: 449.0,
    description: "googlepixel",
  },
  {
    id: 10,
    title: "Apple iPhone 13 Pro 128GB",
    price: 799.0,
    description: "iphone13pro",
  },
  {
    id: 11,
    title: "Samsung Galaxy Flip5 5G",
    price: 829.0,
    description: "galaxyflip",
  },
];

const shopReducer = (state = initialState, action: any) => {
  return state;
};

export const actions = {};
export default shopReducer;
