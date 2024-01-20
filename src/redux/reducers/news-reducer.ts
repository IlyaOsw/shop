const initialState = [
  {
    id: 0,
    title: "New XYZ Smartphone Unveiled",
    body: "Today, XYZ company announced its latest flagship smartphone featuring cutting-edge technologies and an improved camera.",
    likes: 3456,
    dislikes: 453,
    additionalText1:
      "Discover a world of possibilities with the new XYZ smartphone. Its advanced features include a high-resolution display, AI-powered camera enhancements, and a sleek, ergonomic design.",
    additionalText2:
      "Experience the future of mobile technology. The XYZ smartphone not only raises the bar for performance but also introduces innovative functionalities that cater to the diverse needs of users.",
  },
  {
    id: 1,
    title: "ABC Wireless Earbuds: Perfect Sound Without Wires",
    body: "Introducing the new ABC wireless earbuds - delivering incredible sound quality and long battery life without the hassle of wires.",
    likes: 5678,
    dislikes: 789,
    additionalText1:
      "Immerse yourself in a world of pristine sound with ABC's wireless earbuds. These earbuds redefine the audio experience with cutting-edge sound technology and a comfortable, wireless design.",
    additionalText2:
      "Say goodbye to tangled wires and hello to unparalleled audio freedom. The ABC wireless earbuds set a new standard for convenience and audio excellence, making them the perfect companion for music lovers on the go.",
  },
  {
    id: 2,
    title: "Flexible Smartwatch Innovation from DEF",
    body: "DEF company has introduced its latest breakthrough in wearable technology - flexible smartwatches that adapt to your style seamlessly.",
    likes: 8231,
    dislikes: 234,
    additionalText1:
      "Experience the fusion of style and technology with DEF's flexible smartwatches. These innovative wearables not only keep you connected but also complement your unique sense of fashion.",
    additionalText2:
      "DEF's commitment to innovation shines through in their flexible smartwatches, providing users with a customizable and versatile accessory that seamlessly integrates into their daily lives.",
  },
  {
    id: 3,
    title: "XYZ Tech Unveils Next-Gen Headphones",
    body: "XYZ Tech has revealed its next-generation headphones, offering advanced noise cancellation and an immersive audio experience for users.",
    likes: 4567,
    dislikes: 567,
    additionalText1:
      "Immerse yourself in a world of unparalleled audio quality with XYZ Tech's next-generation headphones. Featuring state-of-the-art noise cancellation technology, these headphones deliver a truly immersive listening experience.",
    additionalText2:
      "Elevate your audio experience with XYZ Tech's commitment to cutting-edge technology. The next-gen headphones provide users with a perfect blend of comfort, style, and exceptional sound performance.",
  },
  {
    id: 4,
    title: "Revolutionary Camera Tech in the New DEF Phone",
    body: "The latest DEF smartphone boasts revolutionary camera technology, promising stunning photos and enhanced low-light performance.",
    likes: 9123,
    dislikes: 243,
    additionalText1:
      "Capture life's moments in stunning detail with the revolutionary camera technology in the new DEF smartphone. From vivid landscapes to low-light environments, this phone redefines smartphone photography.",
    additionalText2:
      "Embrace the future of mobile photography with DEF's commitment to innovation. The new smartphone sets a benchmark for camera technology, ensuring that every photo you capture is a masterpiece.",
  },
  {
    id: 5,
    title: "Smart Home Innovations by ABC Electronics",
    body: "ABC Electronics introduces a range of smart home devices, including smart thermostats and lighting solutions, making homes more connected and efficient.",
    likes: 6789,
    dislikes: 890,
    additionalText1:
      "Transform your home into a smart, connected space with ABC Electronics' innovative range of smart home devices. From intelligent thermostats to lighting solutions, ABC Electronics redefines the concept of home automation.",
    additionalText2:
      "Experience the convenience and efficiency of a connected home. ABC Electronics' smart home innovations empower users to create a personalized and energy-efficient living environment.",
  },
  {
    id: 6,
    title: "GHI Fitness Tracker: Your Personal Health Companion",
    body: "Stay fit and healthy with the new GHI Fitness Tracker, equipped with advanced sensors and personalized health insights to help you achieve your wellness goals.",
    likes: 3453,
    dislikes: 527,
    additionalText1:
      "Embark on a journey to better health with GHI's Fitness Tracker. Packed with advanced sensors and personalized insights, this fitness tracker is your dedicated companion on the path to wellness.",
    additionalText2:
      "Achieve your fitness goals with precision and guidance. GHI's commitment to health shines through in their Fitness Tracker, ensuring that you stay motivated and informed on your fitness journey.",
  },
  {
    id: 7,
    title: "LMN Augmented Reality Glasses Transform Your World",
    body: "Experience the future with LMN Augmented Reality Glasses, providing an immersive blend of virtual and real-world interactions for gaming, productivity, and entertainment.",
    likes: 2345,
    dislikes: 462,
    additionalText1:
      "Step into a new dimension of entertainment and productivity with LMN's Augmented Reality Glasses. These glasses redefine your world by seamlessly integrating virtual and real-world experiences.",
    additionalText2:
      "Explore the possibilities of augmented reality. LMN's commitment to innovation brings you a pair of glasses that not only entertain but also enhance your daily life with unparalleled interactivity.",
  },
  {
    id: 8,
    title: "PQR Drones Redefine Aerial Photography",
    body: "Capture breathtaking aerial shots with PQR Drones, featuring state-of-the-art camera systems and intelligent flight modes for both beginners and professional photographers.",
    likes: 5678,
    dislikes: 304,
    additionalText1:
      "Elevate your photography to new heights with PQR Drones' advanced camera systems. From panoramic views to intricate details, these drones redefine the art of aerial photography.",
    additionalText2:
      "Whether you're a beginner or a seasoned photographer, PQR Drones offers intelligent flight modes and precision control, making aerial photography an accessible and thrilling experience for all.",
  },
];

const newsReducer = (state = initialState, action: any) => {
  return state;
};

export const actions = {};

export type NewsType = typeof initialState;
export default newsReducer;
