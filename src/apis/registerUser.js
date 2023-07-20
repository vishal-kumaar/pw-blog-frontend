import axios from "axios";

const registerUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/user/register`,
      data
    );

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default registerUser;
