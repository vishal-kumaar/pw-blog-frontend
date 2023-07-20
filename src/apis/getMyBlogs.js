import axios from "axios";

const getMyBlogs = async (token) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/myblog/`,
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

export default getMyBlogs;
