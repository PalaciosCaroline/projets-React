import { createAction, createSlice } from '@reduxjs/toolkit';
import { dataEmployeesMock } from '../mocks/data';

const employeesSlice = createSlice({
  name: 'employees',
  initialState: dataEmployeesMock,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const addEmployee = createAction('employees/addEmployee');
export default employeesSlice;