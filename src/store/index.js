import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";
import studentReducer from "./modules/studentStore";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    student: studentReducer,
  },
});

export default store;
