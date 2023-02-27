import { loginFailure, loginStart, loginSuccess,registerSuccess,registerStart,registerFailure } from "../slices/userRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";
export const login = async (dispatch:any, user:any) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch:any, user:any) => {
    dispatch(registerStart());
    try {
      const res = await axios.post("http://localhost:4001/api/auth/register", user);
      dispatch(registerSuccess(res.data));
    } catch (err) {
      dispatch(registerFailure());
    }
  };