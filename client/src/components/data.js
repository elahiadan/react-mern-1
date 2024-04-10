import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewsletterByMongo,
  removeNewsletterFromMongo,
  editNewsletterfromMongo,
} from "../store/actions";
import Newsletter from "./includes/newsletter";

const Data = () => {
  const getNewsEmail = useSelector((state) => state.users.getNewsletter);
  const editNewsEmail = useSelector((state) => state.users.editNewsletter);
  const dispatch = useDispatch();

  const getAllNews = () => {
    dispatch(getNewsletterByMongo());
  }

  useEffect(() => {
    getAllNews();
  }, []);

  const removeNews = (id) => {
    dispatch(removeNewsletterFromMongo(id));
  };

  const editNews = (id) => {
    dispatch(editNewsletterfromMongo(id));
  };

  return (
    <>
      <h1>Newsletter Subscribers List</h1>
      <div>
        {getNewsEmail
          ? getNewsEmail.map((item) => {
            return (
              <div key={item._id}>
                <div className="d-flex">
                  <p>{item.email}</p>
                  <button onClick={() => editNews(item._id)}>Edit</button>
                  <button onClick={() => removeNews(item._id)}>Remove</button>
                </div>
              </div>
            );
          })
          : null}
      </div>
      <Newsletter is_update={editNewsEmail ? true : false} getAllNews={getAllNews} />
    </>
  );
};

export default Data;
