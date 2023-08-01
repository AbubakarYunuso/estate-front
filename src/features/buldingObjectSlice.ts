import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface BuldingObject {
  _id: string;
  name: string;
  final: boolean;
  geo: string;
  image: string[];
  discript: string;
  __v: number;
}

export interface BuldingState {
  state: BuldingObject[];
  error: null | unknown | string;
  loading: boolean;
}
export interface Data { 
  text: string,
  email: string
  number: string
}

export const buldingState: BuldingState = {
  state: [],
  error: null,
  loading: false,
};

export const submitData = createAsyncThunk<void ,Data>(
  "submit/posts",
  async ({ text, email, number }, thunkAPI) => {
    await fetch("http://localhost:4000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, text, number }),
    });
  }
);

export const getBuldingObject = createAsyncThunk<
  BuldingObject[],
  void,
  { rejectValue: string | unknown }
>("bulding/getbuldingonject", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/buldingObject");
    const buldingObjects = await res.json();
    return buldingObjects;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const buldingObjectSlice = createSlice({
  name: "buldingObject",
  initialState: buldingState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getBuldingObject.fulfilled,
        (state, action: PayloadAction<BuldingObject[]>) => {
          state.state = action.payload;
          state.error = null;
          state.loading = false;
        }
      )
      .addCase(getBuldingObject.pending, (state, _) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(
        getBuldingObject.rejected,
        (state, action: PayloadAction<string | unknown | null>) => {
          (state.error = action.payload), (state.loading = false);
        }
      )
  },
});

export default buldingObjectSlice.reducer;
