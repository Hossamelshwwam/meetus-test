import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const initialState: User = {
  user: {
    id: "",
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
