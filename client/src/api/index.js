import axios from "axios";

const URL_SERVER = "http://localhost:3004";

export const getPosts = async (
  oldPostItems,
  page = 1,
  order = "asc",
  limit = 10,
  sort = "id"
) => {
  try {
    // const headers = {
    //   "Access-Control-Allow-Origin": "*",
    // };

    const response = await axios.get(`/api/posts`);

    // const response = await axios.get(
    //   `${URL_SERVER}/posts?_page=${page}&_order=${order}&_limit=${limit}&_sort=${sort}`,
    //   {}
    // );

    // console.log(response.data.posts);
    return {
      posts: oldPostItems.posts
        ? [...oldPostItems.posts, ...response.data.posts]
        : response.data.posts,
      page: page,
      end: response.data.length === 0 ? true : false,
    };
  } catch (error) {
    throw error;
  }
};

export const addNewsletter = async (data) => {
  try {
    const findUser = await axios.get(
      `${URL_SERVER}/newsletter?email=${data.email}`
    );
    if (!Array.isArray(findUser.data) || !findUser.data.length) {
      const response = await axios({
        method: "POST",
        url: `${URL_SERVER}/newsletter`,
        data: {
          email: data.email,
        },
      });
      return {
        newletter: "added",
        email: response.data,
      };
    } else {
      return {
        newletter: "exist",
      };
    }
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(`/api/post/${id}`);
    return response.data;
  } catch (error) {
    return "404";
  }
};

// Get Newsletters
export const getNewsletterByMongo = async () => {
  const response = await axios.get("/api/get-newsletter");
  return {
    getNewsletter: response.data,
  };
};

// Add Newsletter
export const newsletterByMongo = async (data) => {
  const response = await axios({
    method: "POST",
    url: `/api/add-newsletter`,
    data: {
      email: data.email,
    },
  });
  return {
    newletter: "added",
    addNewsletter: response.data,
  };
};

// Edit Newsletter
export const editNewsletterfromMongo = async (id) => {
  const response = await axios.post("/api/edit-newsletter", { id });
  return {
    editNewsletter: response.data,
  };
};

// Update Newsletter
export const updateNewsletterInMongo = async (obj) => {
  const response = await axios.post("/api/update-newsletter", { obj });
  return {
    newletter: "updated",
    updateNewsletter: response.data,
  };
};

// Delete Newsletter
export const removeNewsletterFromMongo = async (id) => {
  const response = await axios.post("/api/remove-newsletter", { id });
  return {
    newletter: "deleted",
    removeNewsletter: response.data,
  };
};
