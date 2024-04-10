import * as api from "../../api";
import {
  GET_POST,
  ADD_NEWS_LETTER,
  REMOVE_NEWS_LETTER,
  VIEW_POST,
  REMOVE_VIEW_POST,
  ADD_NEWS_LETTER_MONGO,
  GET_NEWS_LETTER_MONGO,
  REMOVE_NEWS_LETTER_MONGO,
  UPDATE_NEWS_LETTER_MONGO,
  EDIT_NEWS_LETTER_MONGO,
  RESET_ACTION_STATUS,
  RESET_EDIT_NEWS_LETTER
} from "../type";

export const getPosts = (pageItem, page, order, limit) => ({
  type: GET_POST,
  payload: api.getPosts(pageItem, page, order, limit),
});

export const addNewsletter = (data) => ({
  type: ADD_NEWS_LETTER,
  payload: api.addNewsletter(data),
});

export const removeNewsletter = (data) => ({
  type: REMOVE_NEWS_LETTER,
  payload: {
    newsletter: false,
    email: [],
  },
});

export const getPost = (id) => ({
  type: VIEW_POST,
  payload: api.getPost(id),
});

export const clearPostItem = () => ({
  type: REMOVE_VIEW_POST,
  payload: {},
});

export const getNewsletterByMongo = () => ({
  type: GET_NEWS_LETTER_MONGO,
  payload: api.getNewsletterByMongo(),
});

export const newsletterByMongo = (data) => ({
  type: ADD_NEWS_LETTER_MONGO,
  payload: api.newsletterByMongo(data),
});

export const editNewsletterfromMongo = (data) => ({
  type: EDIT_NEWS_LETTER_MONGO,
  payload: api.editNewsletterfromMongo(data),
});

export const updateNewsletterInMongo = (data) => ({
  type: UPDATE_NEWS_LETTER_MONGO,
  payload: api.updateNewsletterInMongo(data),
});

export const removeNewsletterFromMongo = (data) => ({
  type: REMOVE_NEWS_LETTER_MONGO,
  payload: api.removeNewsletterFromMongo(data),
});

export const resetActionStatus = () => ({
  type: RESET_ACTION_STATUS
})

export const resetEditNewsletter = () => ({
  type: RESET_EDIT_NEWS_LETTER
})
