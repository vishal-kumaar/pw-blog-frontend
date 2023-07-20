import axios from "axios";

const loginUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/user/login`,
      data
    );

    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export default loginUser;