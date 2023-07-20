import axios from "axios";

const getAllBlogs = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/blog`);

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default getAllBlogs;
