// dummyData
const dummyPost = {
  id: 2,
  content: "끼리리리",
  User: {
    id: 1,
    nickname: "aaaaaaa",
  },
  Images: [],
  Comments: [],
};

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "파사스",
      },
      content: "첫 번째 게시글 #해시태그",
      // Sequelize는 정보간에 관계가 있는 경우 그것들을 합쳐주는데, 이때 반환되는 키는 첫글자가 대문자로 됨
      Images: [
        {
          src: "https://picsum.photos/id/25/700/1080",
        },
        {
          src: "https://picsum.photos/id/22/700/1080",
        },
        {
          src: "https://picsum.photos/id/87/700/1080",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "하이맨",
          },
          content: "우왕",
        },
        {
          User: {
            nickname: "빠이맨",
          },
          content: "우왕하하하하하하",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const actions = {
  addPost: "ADD_POST",
};

export const addPost = (data) => ({
  type: actions.addPost,
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.addPost:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
