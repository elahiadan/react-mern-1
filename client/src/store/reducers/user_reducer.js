import {
  ADD_NEWS_LETTER,
  REMOVE_NEWS_LETTER,
  ADD_NEWS_LETTER_MONGO,
  GET_NEWS_LETTER_MONGO,
  REMOVE_NEWS_LETTER_MONGO,
  UPDATE_NEWS_LETTER_MONGO,
  EDIT_NEWS_LETTER_MONGO,
  RESET_ACTION_STATUS,
  RESET_EDIT_NEWS_LETTER
} from "../type";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case ADD_NEWS_LETTER:
      return { ...state, ...action.payload };
    case ADD_NEWS_LETTER_MONGO:
      return { ...state, ...action.payload };
    case GET_NEWS_LETTER_MONGO:
      return { ...state, ...action.payload };
    case EDIT_NEWS_LETTER_MONGO:
      return { ...state, ...action.payload };
    case UPDATE_NEWS_LETTER_MONGO:
      return { ...state, ...action.payload };
    case REMOVE_NEWS_LETTER_MONGO:
      return { ...state, ...action.payload, newletter: "" };
    case REMOVE_NEWS_LETTER:
      return {};
    case RESET_ACTION_STATUS:
      return { ...state, newletter: "" }
    case RESET_EDIT_NEWS_LETTER:
      return { ...state, editNewsletter: null }
    default:
      return state;
  }
}
