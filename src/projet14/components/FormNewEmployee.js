"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormNewEmployee = void 0;
var react_1 = __importStar(require("react"));
var employeeFormStateSlice_1 = require("../store/employeeFormStateSlice");
var react_redux_1 = require("react-redux");
var employeesSlice_1 = require("../store/employeesSlice");
var Modal_1 = __importDefault(require("./Modal"));
var InputField_1 = require("./InputField");
var AddressAndDepartmentForm_1 = __importDefault(require("./AddressAndDepartmentForm"));
var controlName_1 = require("../utils/controlName");
var x_date_pickers_1 = require("@mui/x-date-pickers");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var DatePickerComponent_1 = __importDefault(require("./DatePickerComponent"));
var fa_1 = require("react-icons/fa");
var FormNewEmployee = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var employees = (0, react_redux_1.useSelector)(function (state) { return state.employees.active; });
    // const selectedEmployee = employees.find((employee: any) => employee.id === employeeId);
    var _a = (0, react_1.useState)(false), isModalOpen = _a[0], setIsModalOpen = _a[1];
    var _b = (0, react_1.useState)({
        firstname: '',
        lastname: '',
    }), employeeName = _b[0], setEmployeeName = _b[1];
    var newEmployeeEntree = (0, react_redux_1.useSelector)(function (state) { return state.employeeFormState.formValues; });
    var newEmployeeErrors = (0, react_redux_1.useSelector)(function (state) { return state.employeeFormState.formErrors; });
    var firstname = newEmployeeEntree.firstname, lastname = newEmployeeEntree.lastname, startDate = newEmployeeEntree.startDate, department = newEmployeeEntree.department, dateOfBirth = newEmployeeEntree.dateOfBirth, street = newEmployeeEntree.street, city = newEmployeeEntree.city, state = newEmployeeEntree.state, zipCode = newEmployeeEntree.zipCode;
    var errordateOfBirth = newEmployeeErrors.errordateOfBirth, errorstartDate = newEmployeeErrors.errorstartDate;
    (0, react_1.useEffect)(function () { 
            dispatch((0, employeeFormStateSlice_1.clearInput)());
    }, []);
    var handleFormSubmit = function (e) {
        e.preventDefault();
        var isNameValid = (0, controlName_1.validateNames)(firstname, lastname, employeeFormStateSlice_1.setError, dispatch);
        if (!isNameValid) {
            return;
        }
        else if (errordateOfBirth || errorstartDate) {
            return;
        }
        else {
            var newEmployee = {
                firstname: firstname,
                lastname: lastname,
                startDate: startDate,
                department: department,
                dateOfBirth: dateOfBirth,
                street: street,
                city: city,
                state: state,
                zipCode: zipCode,
            };
            dispatch((0, employeesSlice_1.addEmployee)(newEmployee));
            // setEmployeeName({ firstname, lastname });
            setEmployeeName({ firstname: firstname, lastname: lastname });
            setIsModalOpen(true);
            dispatch((0, employeeFormStateSlice_1.clearInput)());
            e.target.reset();
        }
    };
    var inputFieldsName = [
        { name: 'firstname', label: 'First Name' },
        { name: 'lastname', label: 'Last Name' },
    ];
    return (react_1.default.createElement("div", { className: "box_formEntree" },
        react_1.default.createElement("form", { action: "#", id: "create-employee", onSubmit: handleFormSubmit, "data-testid": "form" },
            react_1.default.createElement("div", { className: "boxName" }, inputFieldsName.map(function (input) {
                var _a;
                return (react_1.default.createElement(InputField_1.InputField, { key: input.name, isWrapped: true, name: input.name, label: input.label, error: (_a = newEmployeeErrors["error".concat(input.name)]) === null || _a === void 0 ? void 0 : _a.toString() }));
            })),
            react_1.default.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                react_1.default.createElement("div", { className: "boxDate" },
                    react_1.default.createElement(DatePickerComponent_1.default, { nameDate: "dateOfBirth", label: "Date of Birth", minDate: 90, maxDate: 12, dateOperation: "subtract" }),
                    react_1.default.createElement(DatePickerComponent_1.default, { nameDate: "startDate", label: "Start Date", minDate: 1, maxDate: 1, dateOperation: "add" }))),
            react_1.default.createElement(AddressAndDepartmentForm_1.default, null),
            react_1.default.createElement("button", { className: "btnFormSave", type: "submit", "data-testid": "btn_form" }, "Save the new employee")),
        isModalOpen && (react_1.default.createElement(Modal_1.default, { setIsModalOpen: setIsModalOpen, isModalOpen: isModalOpen, closeModal: function () { return setIsModalOpen(false); }, className: "confirmationModal" },
            react_1.default.createElement("div", { className: "box_titleModal" },
                react_1.default.createElement(fa_1.FaUserCheck, { className: "iconCheckedModal" }),
                react_1.default.createElement("h2", { id: "modal-title" }, "Confirmation")),
            react_1.default.createElement("p", { tabIndex: 0, id: "confirmation-text" },
                "The new employee, ",
                employeeName.firstname,
                " ",
                employeeName.lastname,
                ", has been registered successfully.")))));
};
exports.FormNewEmployee = FormNewEmployee;
