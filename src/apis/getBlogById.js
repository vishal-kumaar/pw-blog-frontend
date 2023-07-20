import axios from "axios";

const getBlogById = async (blogId) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/blog/${blogId}`);

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default getBlogById;
