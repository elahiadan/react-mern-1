import { GET_POST, VIEW_POST, REMOVE_VIEW_POST } from "../type";

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, ...action.payload };
    case VIEW_POST:
      return { ...state, postById: action.payload };
    case REMOVE_VIEW_POST:
      return { ...state, postById: action.payload };
    default:
      return state;
  }
}
