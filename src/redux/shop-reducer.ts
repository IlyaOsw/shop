enum PhoneDescription {
  IPHONE15PROMAX = "iphone15promax",
  APPLEWATCH8 = "applewatch8",
  AIRPODS3 = "airpods3",
  IPHONE14PROMAX = "iphone14promax",
  APPLEWATCH9 = "applewatch9",
  AIRPODS2GEN = "airpods2gen",
  APPLEWATCHULTRA = "applewatchultra",
  IPHONE15 = "iphone15",
  GOOGLEPIXEL = "googlepixel",
  IPHONE13PRO = "iphone13pro",
  GALAXYFLIP = "galaxyflip",
}

const initialState: {
  id: number;
  title: string;
  price: string;
  description: PhoneDescription;
}[] = [
  {
    id: 0,
    title: "Apple iPhone 15 Pro Max 256GB",
    price: "1489.00 €",
    description: PhoneDescription.IPHONE15PROMAX,
  },
  {
    id: 1,
    title: "Apple Watch Series 8 GPS/LTE 45mm",
    price: "649.00 €",
    description: PhoneDescription.APPLEWATCH8,
  },
  {
    id: 2,
    title: "Apple AirPods with Lightning",
    price: "199.00 €",
    description: PhoneDescription.AIRPODS3,
  },
  {
    id: 3,
    title: "Apple iPhone 14 Pro Max 1TB",
    price: "1649.00 €",
    description: PhoneDescription.IPHONE14PROMAX,
  },
  {
    id: 4,
    title: "Apple Watch Series 9 GPS/LTE 45mm",
    price: "899.00 €",
    description: PhoneDescription.APPLEWATCH9,
  },
  {
    id: 5,
    title: "Apple iPhone 15 128GB",
    price: "949.00 €",
    description: PhoneDescription.IPHONE15,
  },
  {
    id: 6,
    title: "Apple AirPods Pro 2nd gen",
    price: "279.00 €",
    description: PhoneDescription.AIRPODS2GEN,
  },
  {
    id: 7,
    title: "Apple Watch Ultra 2 GPS/LTE 49mm",
    price: "869.00 €",
    description: PhoneDescription.APPLEWATCHULTRA,
  },
  {
    id: 8,
    title: "Apple iPhone 15 128GB",
    price: "949.00 €",
    description: PhoneDescription.IPHONE15,
  },
  {
    id: 9,
    title: "Google Pixel Watch LTE",
    price: "449.00 €",
    description: PhoneDescription.GOOGLEPIXEL,
  },
  {
    id: 10,
    title: "Apple iPhone 13 Pro 128GB",
    price: "799.00 €",
    description: PhoneDescription.IPHONE13PRO,
  },
  {
    id: 11,
    title: "Samsung Galaxy Flip5 5G",
    price: "829.00 €",
    description: PhoneDescription.GALAXYFLIP,
  },
];

const shopReducer = (state = initialState) => {
  return state;
};

export default shopReducer;
