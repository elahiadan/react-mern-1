import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, clearPostItem } from "../store/actions";
import Moment from "react-moment";
import Newsletter from "./includes/newsletter";
import { showToast } from "./includes/toast";

const Post = (props) => {
  const postItem = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  // const [spinner, setSpinner] = useState(false);

  // console.log(dispatch.props.match.params.id);

  useEffect(() => {
    dispatch(getPost(1));
  }, [dispatch.props]);

  useEffect(() => {
    if (postItem.postById === "404") {
      showToast("ERROR", "Page doesn't exist");
      props.history.push("/");
    }
  }, [postItem,props.history]);

  useEffect(() => {
    return () => {
      dispatch(clearPostItem());
    };
  }, [dispatch]);

  return (
    <>
      <h1>Post Page</h1>
      {postItem.postById ? (
        <div className="article_container">
          <h1>{postItem.postById.title}</h1>
          <div
            style={{ background: `url(${postItem.postById.imagexl})` }}
            className="image"
          ></div>
          <div className="author">
            <span>{postItem.postById.author} -</span>
            <Moment format="DD MMMM">{postItem.postById.createdAt}</Moment>
          </div>
          <div className="mt-3 content">
            <div
              dangerouslySetInnerHTML={{ __html: postItem.postById.content }}
            ></div>
          </div>
        </div>
      ) : null}
      <Newsletter />
    </>
  );
};

export default Post;
