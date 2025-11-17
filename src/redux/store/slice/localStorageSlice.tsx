import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

const loginResponseData: any = JSON.parse(
  window.localStorage.getItem("loginResponse") || "{}"
);

const initialState: unknown = {
  token: loginResponseData.token,
  
};

const localStorageSlice = createSlice({
  name: "localStorageSlice",
  initialState,
  reducers: {
    storeLoginResponse: (state, action: PayloadAction<any>) => {
      console.log("$$$$$$=>loginResponse", current(state));
      localStorage.setItem("loginResponse", JSON.stringify(action.payload));
      return { ...state, ...action.payload };
    },
    clearLoginResponse: () => {
      window.localStorage.removeItem("loginResponse");
      return {
        token: "",
        username: "",
        isExist: false,
        isCustomerExist: false,
      };
    },
  },
});

export const { storeLoginResponse, clearLoginResponse } = jwtTokenSlice.actions;
export default localStorageSlice.reducer;
