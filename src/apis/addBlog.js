import axios from "axios";

const addBlog = async (data, token) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/blog/add`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export default addBlog;
