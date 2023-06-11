"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DatePickerComponent_1 = __importDefault(require("./DatePickerComponent"));
var x_date_pickers_1 = require("@mui/x-date-pickers");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var ArchiveEmployeeContent = function (_a) {
    var handleArchiveSubmit = _a.handleArchiveSubmit, selectedEmployeeId = _a.selectedEmployeeId, employeeFormEntree = _a.employeeFormEntree;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: "formChangeEmployee", action: "#", id: "archive-employee", onSubmit: handleArchiveSubmit(selectedEmployeeId), "data-testid": "form" },
            react_1.default.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                react_1.default.createElement("div", { className: "boxDate" },
                    react_1.default.createElement(DatePickerComponent_1.default, { nameDate: "endDate", label: "Finish Date", minDate: 1, maxDate: 1, dateOperation: "add" }))),
            react_1.default.createElement("button", { className: "btnFormArchive", type: "submit", "data-testid": "btn_form" }, "Archive Employee"))));
};
exports.default = ArchiveEmployeeContent;
