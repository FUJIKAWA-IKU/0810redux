import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialCountState = {
  count: 200,
};

const countReducer = ( state = initialCountState, action ) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const initialPostsState = {
  posts: [],
};

const postsReducer = ( state = initialPostsState, action ) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
})

export const getPosts = () => {
  return async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({
      type: 'GET_POST_DATA',
      payload: data,
    });
  };
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
