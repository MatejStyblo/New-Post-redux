import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Matej" },
  { id: "1", name: "Honza" },
  { id: "2", name: "Jakub" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
