import axios from "axios";
import * as type from "../actions-types/users.types";

export const register = (data) => async (dispatch) => {
  console.log(data);
  try {
    const res = await axios.post("http://localhost:5000/users", data);
    console.log("exito");
    dispatch({
      type: type.REGISTER_USER,
    });
  } catch (error) {
    console.log(error);
  }
};
