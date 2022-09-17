import { configureStore } from "@reduxjs/toolkit";
import currentStore from "./currentStore";


const store =  configureStore({reducer:currentStore.reducer});

export default store