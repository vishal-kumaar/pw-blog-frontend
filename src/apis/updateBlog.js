import axios from "axios";

const updateBlog = async (blogId, data, token) => {
  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/api/blog/${blogId}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default updateBlog;
