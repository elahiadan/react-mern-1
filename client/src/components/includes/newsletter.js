import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import {
  removeNewsletter,
  newsletterByMongo,
  updateNewsletterInMongo,
  resetActionStatus,
  resetEditNewsletter
} from "../../store/actions";
import { showToast } from "../includes/toast";

const Newsletter = (props) => {
  const userData = useSelector((state) => state.users);
  const editNewsEmail = useSelector((state) => state.users.editNewsletter);
  const [inputVal, setInputVal] = useState({
    email: "",
    _id: ""
  });
  const dispatch = useDispatch();
  const inputText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const textValue = inputText.current.value;
    if (editNewsEmail) {
      dispatch(updateNewsletterInMongo({ id: inputVal._id, email: inputVal.email }));
    } else {
      dispatch(newsletterByMongo({ email: textValue }));
    }
  };

  useEffect(() => {
    if (userData.newletter) {
      if (userData.newletter === "added") {
        showToast("SUCCESS", "Added Successfully");
        inputText.current.value = "";
      }
      else if (userData.newletter === "updated") {
        showToast("SUCCESS", "Updated Successfully");
        inputText.current.value = "";
        ResetEditForm();
      } else if (userData.newletter === "deleted") {
        showToast("SUCCESS", "Deleted Successfully");
        inputText.current.value = "";
      }
      else {
        showToast("ERROR", "already exist");
        inputText.current.value = "";
      }
      dispatch(resetActionStatus());
    } else if (props.is_update) {
      setInputVal({ email: userData.editNewsletter.email, _id: userData.editNewsletter._id });
    }

  }, [userData]);

  useEffect(() => {
    if (userData.newletter || userData.removeNewsletter || userData.updateNewsletter) {
      props.getAllNews()
    }
  }, [userData.addNewsletter, userData.removeNewsletter, userData.updateNewsletter])

  useEffect(() => {
    return () => {
      dispatch(removeNewsletter());
    };
  }, []);

  const handleChange = (e) => {
    setInputVal({ ...inputVal, email: e.target.value });
  }

  const ResetEditForm = () => {
    dispatch(resetEditNewsletter())
    setInputVal({ email: "", _id: "" });
  }

  return (
    <>
      <div className="newsletter_container mb-5">
        <h1>Join Our Newsletter</h1>
        <div className="form">
          <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group>
              {props.is_update ? (
                <Form.Control type="text" name="id" ref={inputText} value={inputVal._id} onChange={() => { }} />
              ) : null}

              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                ref={inputText}
                onChange={handleChange}
                value={inputVal.email}
              />

              {props.is_update ? (
                <>
                  <Button variant="warning mt-2" type="submit">
                    Update
                  </Button>
                  <Button variant="primary mt-2" onClick={ResetEditForm}>
                    Reset
                  </Button>
                </>
              ) : (
                <Button variant="dark mt-2" type="submit">
                  Submit
                </Button>
              )}
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
