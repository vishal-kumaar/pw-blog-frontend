import axios from "axios";

const deleteblog = async (blogId, token) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/api/blog/${blogId}`,
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

export default deleteblog;
