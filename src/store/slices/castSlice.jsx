import { createSlice } from "@reduxjs/toolkit";
import { castDetailLink, options } from "../../utils/constant";

const castSlice = createSlice({
  name: "castInfo",
  initialState: null,
  reducers: {
    setCastInfo(state, action) {
      return action.payload;
    },
  },
});

export const fetchCastInfo = (castId) => async (dispatch) => {
  try {
    console.log(castId);
    const res = await fetch(
      castDetailLink + castId + "?append_to_response=movie_credits",
      options
    );
    const data = await res.json();
    dispatch(setCastInfo(data));
  } catch (error) {
    console.error("Error in fetching cast info:", error);
  }
};

export const { setCastInfo } = castSlice.actions;
export default castSlice.reducer;
