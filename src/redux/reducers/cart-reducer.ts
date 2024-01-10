const initialState: { id: number; name: string; qty: number; price: number }[] =
  [
    { id: 1, name: "Apple iPhone 15 Pro Max 256GB", qty: 1, price: 1489 },
    {
      id: 2,
      name: "Apple Watch Series 8 GPS/LTE 45mm",
      qty: 1,
      price: 649,
    },
    { id: 3, name: "Apple AirPods Pro 2nd gen", qty: 1, price: 279 },
  ];

const cartReducer = (state = initialState, action: any) => {
  return state;
};

export const actions = {};

export default cartReducer;
