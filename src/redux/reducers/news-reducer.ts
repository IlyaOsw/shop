const initialState = [
  {
    id: 0,
    title: "New XYZ Smartphone Unveiled",
    body: "Today, XYZ company announced its latest flagship smartphone featuring cutting-edge technologies and an improved camera.",
    likes: 3456,
    dislikes: 453,
  },
  {
    id: 1,
    title: "ABC Wireless Earbuds: Perfect Sound Without Wires",
    body: "Introducing the new ABC wireless earbuds - delivering incredible sound quality and long battery life without the hassle of wires.",
    likes: 5678,
    dislikes: 789,
  },
  {
    id: 2,
    title: "Flexible Smartwatch Innovation from DEF",
    body: "DEF company has introduced its latest breakthrough in wearable technology - flexible smartwatches that adapt to your style seamlessly.",
    likes: 8231,
    dislikes: 234,
  },
  {
    id: 3,
    title: "XYZ Tech Unveils Next-Gen Headphones",
    body: "XYZ Tech has revealed its next-generation headphones, offering advanced noise cancellation and an immersive audio experience for users.",
    likes: 4567,
    dislikes: 567,
  },
  {
    id: 4,
    title: "Revolutionary Camera Tech in the New DEF Phone",
    body: "The latest DEF smartphone boasts revolutionary camera technology, promising stunning photos and enhanced low-light performance.",
    likes: 9123,
    dislikes: 243,
  },
  {
    id: 5,
    title: "Smart Home Innovations by ABC Electronics",
    body: "ABC Electronics introduces a range of smart home devices, including smart thermostats and lighting solutions, making homes more connected and efficient.",
    likes: 6789,
    dislikes: 890,
  },
  {
    id: 6,
    title: "GHI Fitness Tracker: Your Personal Health Companion",
    body: "Stay fit and healthy with the new GHI Fitness Tracker, equipped with advanced sensors and personalized health insights to help you achieve your wellness goals.",
    likes: 3453,
    dislikes: 527,
  },
  {
    id: 7,
    title: "LMN Augmented Reality Glasses Transform Your World",
    body: "Experience the future with LMN Augmented Reality Glasses, providing an immersive blend of virtual and real-world interactions for gaming, productivity, and entertainment.",
    likes: 2345,
    dislikes: 462,
  },
  {
    id: 8,
    title: "PQR Drones Redefine Aerial Photography",
    body: "Capture breathtaking aerial shots with PQR Drones, featuring state-of-the-art camera systems and intelligent flight modes for both beginners and professional photographers.",
    likes: 5678,
    dislikes: 304,
  },
];

const newsReducer = (state = initialState, action: any) => {
  return state;
};

export const actions = {};

export type NewsType = typeof initialState;
export default newsReducer;
