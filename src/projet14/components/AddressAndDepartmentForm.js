"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var InputField_1 = require("./InputField");
// import DropdownState from './DropdownState';
var Dropdown_1 = __importDefault(require("./Dropdown"));
var states_1 = require("../utils/states");
var department_1 = require("../utils/department");
function AddressAndDepartmentForm() {
    var dispatch = (0, react_redux_1.useDispatch)();
    var stateOptions = states_1.states.map(function (state) { return state.name; });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("fieldset", { className: "address" },
            react_1.default.createElement("legend", null, "Address"),
            react_1.default.createElement(InputField_1.InputField, { name: "street" }),
            react_1.default.createElement(InputField_1.InputField, { name: "city" }),
            react_1.default.createElement(Dropdown_1.default, { label: "State", dropdownLabel: "dropdownLabelState", placeholder: "select a state", options: stateOptions, style: { margin: '8px', width: '100%' } }),
            react_1.default.createElement(InputField_1.InputField, { name: "zipCode", type: "number" })),
        react_1.default.createElement(Dropdown_1.default, { label: "Department", dropdownLabel: "dropdownLabelDepartment", placeholder: "select a department", options: department_1.departmentOptions, style: { margin: '8px', width: '100%' } })));
}
exports.default = AddressAndDepartmentForm;
