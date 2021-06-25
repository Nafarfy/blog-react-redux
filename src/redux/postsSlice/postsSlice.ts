import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/API";

export const fetchPosts = createAsyncThunk<[], [], { rejectValue: string }>(
  "posts/loadPosts",
  async (posts, { rejectWithValue }) => {
    try {
      const data = await API.get(`/posts`, {
        params: { skip: posts.length },
      }).then((response) => response.data);

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
  prevData: [];
  data: [];
  error: string | null | undefined;
}

const postsInitialState: Props = {
  status: "loaded",
  prevData: [],
  data: [],
  error: "",
};

// const postsSlice = createSlice({
//   name: "posts",
//   initialState: postsInitialState,
//   reducers: {},
//   extraReducers: {
//     [fetchPosts.pending.toString()]: (state, action) => {
//       return {
//         ...state,
//         status: "loading",
//       };
//     },
//     [fetchPosts.fulfilled.toString()]: (state, action) => {
//       return {
//         ...state,
//         status: "loaded",
//         data: action.payload,
//       };
//     },
//     [fetchPosts.rejected.toString()]: (state, action) => {
//       return {
//         ...state,
//         status: "error",
//         error: action.payload,
//       };
//     },
//   },
// });

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(fetchPosts.pending, (state, { payload }) => {
      state.status = "loading";
    });

    builder.addCase(fetchPosts.fulfilled, (state, { payload }): void => {
      state.status = "loaded";
      state.prevData = [...state.data];
      state.data = [...state.data, ...payload];
    });

    builder.addCase(fetchPosts.rejected, (state, { payload }): void => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default postsSlice.reducer;
