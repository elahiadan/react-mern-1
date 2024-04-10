import React, { useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../store/actions";

import Moment from "react-moment";
import { LinkContainer } from "react-router-bootstrap";

const PostItem = () => {
  const postItems = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    dispatch(getPosts({}, 1, "desc", 8));
  }, [dispatch]);

  const loadMorePosts = () => {
    const page = postItems.page + 1;
    setSpinner(true);
    dispatch(getPosts(postItems, page, "desc", 8)).then(() => {
      setSpinner(false);
    });
  };

  return (
    <>
      <h1>Post Item</h1>

      <div className="my-masonry-grid">
        <div className="row">
          {postItems.posts
            ? postItems.posts.map((item) => {
                return (
                  <div className="col-3 mt-4" key={item.id}>
                 
                      <img
                        style={{ width: "100%", height: "200px" }}
                        src={item.image}
                        alt="Post Image"
                      />
                      <div className="author">
                        <span>{item.author} -</span>
                        <Moment format="DD MMMM">{item.createdAt}</Moment>
                      </div>
                      <div className="content">
                        <div className="title twoLine">{item.title}</div>
                        <div className="excerpt fiveLine">{item.excerpt}</div>
                        <LinkContainer to={`/post/${item.id}`} className="mt-2">
                          <Button variant="dark">Read More</Button>
                        </LinkContainer>
                      </div>
                    </div>
                 
                );
              })
            : null}
        </div>
      </div>

      {spinner ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : null}

      {!postItems.end & !spinner ? (
        <Button variant="outline-dark mt-3" onClick={() => loadMorePosts()}>
          Load More
        </Button>
      ) : null}
    </>
  );
};

export default PostItem;
