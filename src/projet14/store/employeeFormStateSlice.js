"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEmployeeData = exports.setError = exports.clearInput = exports.setField = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    formValues: {
        id: null,
        firstname: '',
        lastname: '',
        startDate: '',
        department: '',
        dateOfBirth: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        endDate: '',
    },
    formErrors: {
        errorfirstname: '',
        errorlastname: '',
        errordateOfBirth: '',
        errorstartDate: '',
        errorendDate: '',
    },
    isLoadingNewEntree: false,
};
var employeeFormStateSlice = (0, toolkit_1.createSlice)({
    name: 'employeeFormState',
    initialState: initialState,
    reducers: {
        setField: function (state, action) {
            state.formValues[action.payload.name] = action.payload.value;
        },
        clearInput: function (state) {
            state.formValues = initialState.formValues;
            state.formErrors = initialState.formErrors;
        },
        // setError: (state, action: PayloadAction<Error>) => {
        //   state.formErrors[`error${action.payload.name}`] = action.payload.message;
        // },
        setError: function (state, action) {
            state.formErrors["error".concat(action.payload.name)] = action.payload.message;
        },
        setEmployeeData: function (state, action) {
            state.formValues = action.payload;
        },
    },
});
// exports.setField = (_a = employeeFormStateSlice.actions, _a.setField), exports.clearInput = _a.clearInput, exports.setError = _a.setError, exports.setEmployeeData = _a.setEmployeeData;
const { setField, clearInput, setError, setEmployeeData } = employeeFormStateSlice.actions;

exports.setField = setField;
exports.clearInput = clearInput;
exports.setError = setError;
exports.setEmployeeData = setEmployeeData;
exports.default = employeeFormStateSlice;
exports.default = employeeFormStateSlice;
