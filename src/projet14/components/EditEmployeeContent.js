"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AddressAndDepartmentForm_1 = __importDefault(require("./AddressAndDepartmentForm"));
var EditEmployeeContent = function (_a) {
    var handleChangeSubmit = _a.handleChangeSubmit, selectedEmployeeId = _a.selectedEmployeeId, employeeFormEntree = _a.employeeFormEntree;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: "formChangeEmployee", action: "#", id: "edit-employee", onSubmit: handleChangeSubmit(selectedEmployeeId), "data-testid": "form" },
            react_1.default.createElement(AddressAndDepartmentForm_1.default, null),
            react_1.default.createElement("button", { className: "btnFormEdit", type: "submit", "data-testid": "btn_form" }, "Save Changes"))));
};
exports.default = EditEmployeeContent;
