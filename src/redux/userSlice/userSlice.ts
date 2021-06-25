import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/API";

export const register = createAsyncThunk<{}, {}, { rejectValue: string }>(
  "user/register",
  async (inputValue, { rejectWithValue }) => {
    try {
      const data = await API.post(`/users`, inputValue).then(
        (response) => response.data
      );

      return data;
    } catch (error) {
      let errMessage = "Error";

      if (error.response) {
        errMessage = error.response.data.message;
      }

      return rejectWithValue(errMessage);
    }
  }
);

interface Props {
  status: string;
  data: {};
  error: string | null | undefined;
}

const userInitialState: Props = {
  status: "loaded",
  data: {},
  error: "",
};

const userSlice = createSlice({
  name: "posts",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(register.pending, (state, { payload }) => {
      state.status = "loading";
    });

    builder.addCase(register.fulfilled, (state, { payload }): void => {
      state.status = "loaded";
      state.data = payload;
    });

    builder.addCase(register.rejected, (state, { payload }): void => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default userSlice.reducer;
