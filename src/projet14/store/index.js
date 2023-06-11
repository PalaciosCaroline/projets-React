"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var employeeFormStateSlice_1 = __importDefault(require("./employeeFormStateSlice"));
var employeesSlice_1 = __importDefault(require("./employeesSlice"));
var rootReducer = (0, toolkit_1.combineReducers)({
    employees: employeesSlice_1.default.reducer,
    employeeFormState: employeeFormStateSlice_1.default.reducer,
});
var store = (0, toolkit_1.configureStore)({
    reducer: rootReducer,
});
exports.default = store;
