import { createSlice } from "@reduxjs/toolkit";

const studentStore = createSlice({
  name: "student",
  initialState: {
    studentList: [
      { id: 1, name: "John" },
      { id: 2, name: "Tom" },
      { id: 3, name: "Jessica" },
    ],
  },
  reducers: {
    addStudent(state) {
      state.studentList = [...state.studentList, { id: 4, name: "Eric" }];
    },
    addAaron(state, action) {
      state.studentList = [...state.studentList, action.payload];
    },
  },
});

const { addStudent, addAaron } = studentStore.actions;
const reducer = studentStore.reducer;

export { addStudent, addAaron };
export default reducer;
