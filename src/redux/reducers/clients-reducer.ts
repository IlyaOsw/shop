const initialState = [
  {
    id: 0,
    name: "Martin Tammiks",
    email: "info@techlightconnect.com",
    phone: "+372 5678-1234",
    city: "Tartu",
    website: "techlight.com",
    company: "Tech Light",
  },
  {
    id: 1,
    name: "Kristina Veski",
    email: "contact@globalinfo.com",
    phone: "+372 5450-3218",
    city: "Tallinn",
    website: "globalinfo.net",
    company: "Global Info",
  },
  {
    id: 2,
    name: "Alan Laas",
    email: "support@ecosprinteco.com",
    phone: "+372 5098-1625",
    city: "Pärnu",
    website: "ecosprinteco.eu",
    company: "Eco Sprint",
  },
  {
    id: 3,
    name: "Anna Pärn",
    email: "inquiries@innovastream.com",
    phone: "+372 5839-2047",
    city: "Narva",
    website: "innovastream.ru",
    company: "Innova Stream",
  },
];

const clientsReducer = (state = initialState, action: any) => {
  return state;
};

export const actions = {};

export type ClientsType = typeof initialState;
export default clientsReducer;
