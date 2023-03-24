import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newEmployeeEntreeSlice from "./newEmployeeEntreeSlice";
import employeesSlice from "./employeesSlice";

const rootReducer = combineReducers({
  employees: employeesSlice.reducer,
  newEmployeeEntree: newEmployeeEntreeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;