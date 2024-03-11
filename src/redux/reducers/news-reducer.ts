const initialState = [
  {
    id: 0,
    title: "title1",
    body: "body1",
    likes: 4456,
    dislikes: 453,
    additionalText1: "text1.1",
    additionalText2: "text1.2",
    postDate: "2february2024",
    views: 15234,
  },
  {
    id: 1,
    title: "title2",
    body: "body2",
    likes: 5678,
    dislikes: 789,
    additionalText1: "text2.1",
    additionalText2: "text2.2",
    postDate: "30january2024",
    views: 21345,
  },
  {
    id: 2,
    title: "title3",
    body: "body3",
    likes: 8231,
    dislikes: 234,
    additionalText1: "text3.1",
    additionalText2: "text3.2",
    postDate: "27january2024",
    views: 28765,
  },
  {
    id: 3,
    title: "title4",
    body: "body4",
    likes: 5567,
    dislikes: 567,
    additionalText1: "text4.1",
    additionalText2: "text4.2",
    postDate: "25january2024",
    views: 19456,
  },
  {
    id: 4,
    title: "title5",
    body: "body5",
    likes: 9123,
    dislikes: 243,
    additionalText1: "text5.1",
    additionalText2: "text5.2",
    postDate: "22january2024",
    views: 26543,
  },
  {
    id: 5,
    title: "title6",
    body: "body6",
    likes: 6789,
    dislikes: 890,
    additionalText1: "text6.1",
    additionalText2: "text6.2",
    postDate: "17january2024",
    views: 17689,
  },
  {
    id: 6,
    title: "title7",
    body: "body7",
    likes: 8453,
    dislikes: 527,
    additionalText1: "text7.1",
    additionalText2: "text7.2",
    postDate: "15january2024",
    views: 21347,
  },
  {
    id: 7,
    title: "title8",
    body: "body8",
    likes: 4345,
    dislikes: 462,
    additionalText1: "text8.1",
    additionalText2: "text8.2",
    postDate: "10january2024",
    views: 16983,
  },
  {
    id: 8,
    title: "title9",
    body: "body9",
    likes: 5678,
    dislikes: 304,
    additionalText1: "text9.1",
    additionalText2: "text9.2",
    postDate: "7january2024",
    views: 28765,
  },
  {
    id: 9,
    title: "title10",
    body: "body10",
    likes: 3453,
    dislikes: 623,
    additionalText1: "text10.1",
    additionalText2: "text10.2",
    postDate: "3january2024",
    views: 19678,
  },
  {
    id: 10,
    title: "title11",
    body: "body11",
    likes: 7089,
    dislikes: 536,
    additionalText1: "text11.1",
    additionalText2: "text11.2",
    postDate: "30december2023",
    views: 25874,
  },
  {
    id: 11,
    title: "title12",
    body: "body12",
    likes: 8327,
    dislikes: 932,
    additionalText1: "text12.1",
    additionalText2: "text12.2",
    postDate: "28december2023",
    views: 21123,
  },
];

const newsReducer = (state = initialState, action: any) => {
  return state;
};

export const actions = {};

export type NewsType = typeof initialState;

export default newsReducer;
