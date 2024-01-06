const initialState: { id: number; label: string }[] = [
  { id: 0, label: "Home" },
  { id: 1, label: "E-Store" },
  { id: 2, label: "News" },
  { id: 3, label: "Clients" },
];

const navbarReducer = (state = initialState, action: any) => {
  return state;
};

export default navbarReducer;
