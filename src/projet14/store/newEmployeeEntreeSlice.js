// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   firstNameEntree: '',
//   errorFirstNameEntree : '',
//   lastNameEntree: '',
//   errorLastNameEntree: '',
//   startDateEntree: '',
//   errorStartDateEntree: '',
//   departmentEntree: '',
//   errorDepartmentEntree: '',
//   dateOfBirthEntree: '',
//   errorDateOfBirthEntree: '',
//   streetEntree: '',
//   cityEntree: '',
//   stateEntree: '',
//   zipCodeEntree: '',
//   errorNewEntree: '',
// };

// const newEmployeeEntreeSlice = createSlice({
//   name: 'newEmployeeEntree',
//   initialState,
//   reducers: {
//     setFirstNameEntree: (state, action) => {
//       state.firstNameEntree = action.payload;
//     },
//     setLastNameEntree: (state, action) => {
//       state.lastNameEntree = action.payload;
//     },
//     setStartDateEntree: (state, action) => {
//       state.startDateEntree = action.payload;
//     },
//     setDepartmentEntree: (state, action) => {
//       state.departmentEntree = action.payload;
//     },
//     setDateOfBirthEntree: (state, action) => {
//       state.dateOfBirthEntree = action.payload;
//     },
//     setStreetEntree: (state, action) => {
//       state.streetEntree = action.payload;
//     },
//     setCityEntree: (state, action) => {
//       state.cityEntree = action.payload;
//     },
//     setStateEntree: (state, action) => {
//       state.stateEntree = action.payload;
//     },
//     setZipCodeEntree: (state, action) => {
//       state.zipCodeEntree = action.payload;
//     },
//     VideInput: (state) => {
//       Object.keys(initialState).forEach((key) => {
//         state[key] = '';
//       });
//     },
//     setErrorNewEntree: (state, action) => {
//       state.errorNewEntree = action.payload;
//     },
//     setErrorFirstNameEntree: (state, action) => {
//       state.errorFirstNameEntree = action.payload;
//     },
//     setErrorLastNameEntree: (state, action) => {
//       state.errorLastNameEntree = action.payload;
//     },
//     setErrorDateOfBirthEntree: (state, action) => {
//       state.errorDateOfBirthEntree = action.payload;
//     },
//     setErrorStartDateEntree: (state, action) => {
//       state.errorStartDateEntree = action.payload;
//     },
//     setIsLoadingNewEntree: (state, action) => {
//       state.isLoadingNewEntree = action.payload;
//     },
//   },
// });

// export const {
//   setFirstNameEntree,
//   setLastNameEntree,
//   setStartDateEntree,
//   setDepartmentEntree,
//   setDateOfBirthEntree,
//   setStreetEntree,
//   setCityEntree,
//   setStateEntree,
//   setZipCodeEntree,
//   VideInput,
//   setErrorNewEntree,
//   setErrorFirstNameEntree,
//   setErrorLastNameEntree,
//   setIsLoadingNewEntree,
//   setErrorDateOfBirthEntree,
//   setErrorStartDateEntree
// } = newEmployeeEntreeSlice.actions;

// export default newEmployeeEntreeSlice;




//utilisation dans le composant
// import {
//   setField,
//   VideInput,
//   setError,
//   setIsLoadingNewEntree,
// } from './newEmployeeEntreeSlice';

// dispatch(setField({ name: 'firstNameEntree', value: 'John' }));

// dispatch(setError({ name: 'FirstNameEntree', message: 'Please enter a valid first name' }));

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  lastname: '',
  startDate: '',
  department: '',
  dateOfBirth: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
};

// setField: (state, action) => {
//   state[action.payload.name] = action.payload.value;
// },
const newEmployeeEntreeSlice = createSlice({
  name: 'newEmployeeEntree',
  initialState,
  reducers: {
    setField: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    },
    videInput: (state) => {
      Object.keys(initialState).forEach((key) => {
        state[key] = '';
      });
    },
    setError: (state, action) => {
      const { name, message } = action.payload;
      state[`error${name}`] = message;
    },
    setIsLoadingNewEntree: (state, action) => {
      state.isLoadingNewEntree = action.payload;
    },
  },
});

export const {
  setField,
  videInput,
  setError,
  setIsLoadingNewEntree,
} = newEmployeeEntreeSlice.actions;

export default newEmployeeEntreeSlice;

