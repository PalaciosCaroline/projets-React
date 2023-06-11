"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Header_1 = require("../../components/Header");
var linkData_1 = require("./../../utils/linkData");
var FormNewEmployee_1 = require("../../components/FormNewEmployee");
require("./../../index.scss");
function NewEmployee() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'wrapper_projet14' },
            react_1.default.createElement(Header_1.Header, { linkProps: linkData_1.linkCurrentEmployees }),
            react_1.default.createElement("main", { className: "main_newEmployee containerNewEmployee", "data-testid": "newEmployee" },
                react_1.default.createElement("h1", null, "Create Employee"),
                react_1.default.createElement(FormNewEmployee_1.FormNewEmployee, null)))));
}
exports.default = NewEmployee;
