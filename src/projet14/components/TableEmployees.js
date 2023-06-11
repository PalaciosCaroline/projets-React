"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importStar(require("react"));
var data_1 = require("../mocks/data");
var typescript_table_1 = require("typescript-table");
var react_redux_1 = require("react-redux");
var employeesSlice_1 = require("../store/employeesSlice");
var typescript_exportdata_1 = require("typescript-exportdata");
var employeesSlice_2 = require("../store/employeesSlice");
var employeeFormStateSlice_1 = require("../store/employeeFormStateSlice");
var Modal_1 = __importDefault(require("./Modal"));
var fi_1 = require("react-icons/fi");
var EditEmployeeContent_1 = __importDefault(require("./EditEmployeeContent"));
var ArchiveEmployeeContent_1 = __importDefault(require("./ArchiveEmployeeContent"));
var DeleteEmployeeContent_1 = __importDefault(require("./DeleteEmployeeContent"));
var TableEmployees = (0, react_1.memo)(function (_a) {
    var employees = _a.employees;
    var dispatch = (0, react_redux_1.useDispatch)();
    var _b = (0, react_1.useState)('none'), modalType = _b[0], setModalType = _b[1];
    var _c = (0, react_1.useState)(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    var _d = (0, react_1.useState)({ x: 0, y: 0 }), modalPosition = _d[0], setModalPosition = _d[1];
    var employeeFormEntree = (0, react_redux_1.useSelector)(function (state) { return state.employeeFormState.formValues; });
    var employeeEntreeErrors = (0, react_redux_1.useSelector)(function (state) { return state.employeeFormState.formErrors; });
    var _e = (0, react_1.useState)(null), selectedEmployeeId = _e[0], setSelectedEmployeeId = _e[1];
    // const [isModalChangeOpen, setIsModalChangeOpen] = useState(false);
    // const [isModalArchiveOpen, setIsModalArchiveOpen] = useState(false);
    // const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    var archivedEmployees = (0, react_redux_1.useSelector)(function (state) { return state.employees.archived; });
    (0, react_1.useEffect)(function () {
        console.log('active employees:', JSON.stringify(employees, null, 2));
        console.log('archived employees:', JSON.stringify(archivedEmployees, null, 2));
    }, [employees, archivedEmployees]);
    var handleEditRow = function (id, e) {
        e.persist();
        openModal(id, 'edit', e);
    };
    var handleArchiveRow = function (id, e) {
        e.persist();
        openModal(id, 'archive', e);
    };
    var handleDeleteRow = function (id, e) {
        e.persist();
        openModal(id, 'delete', e);
    };
    var closeModal = function () {
        dispatch((0, employeeFormStateSlice_1.clearInput)());
        setIsModalOpen(false);
        setSelectedEmployeeId(null);
        setModalType('none');
    };
    var openModal = function (id, type, e) {
        setSelectedEmployeeId(id);
        var selectedEmployee = employees.find(function (employee) { return employee.id === id; });
        if (selectedEmployee) {
            var employeeData = __assign({}, selectedEmployee);
            dispatch((0, employeeFormStateSlice_1.setEmployeeData)(employeeData));
            setModalType(type);
            setModalPosition({ x: e.clientX, y: e.clientY });
            console.log({ x: e.clientX, y: e.clientY });
            setIsModalOpen(true);
            console.log('delete: ' + id);
        }
        else {
            console.error('No employee found with id: ', id);
            return;
        }
    };
    var handleChangeSubmit = function (employeeId) { return function (e) {
        e.preventDefault();
        dispatch((0, employeesSlice_2.updateEmployee)({
            id: employeeId,
            department: employeeFormEntree.department,
            street: employeeFormEntree.street,
            city: employeeFormEntree.city,
            state: employeeFormEntree.state,
            zipCode: employeeFormEntree.zipCode,
        }));
        closeModal();
    }; };
    var handleArchiveSubmit = function (employeeId) { return function (e) {
        e.preventDefault();
        console.log(employeeFormEntree.endDate);
        var endDate = employeeFormEntree.endDate;
        if (!endDate) {
            dispatch((0, employeeFormStateSlice_1.setError)({
                name: 'endDate',
                message: 'Veuillez sélectionner une date valide',
            }));
            return;
        }
        else if (employeeEntreeErrors.errorendDate) {
            return;
        }
        else {
            dispatch((0, employeesSlice_1.archiveEmployee)({ id: employeeId, endDate: endDate }));
            closeModal();
        }
    }; };
    var handleDeleteSubmit = function (employeeId) {
        setSelectedEmployeeId(employeeId);
        console.log('delete: ' + employeeId);
        dispatch((0, employeesSlice_1.deleteEmployee)(employeeId));
        closeModal();
    };
    var handleCancel = function () {
        closeModal();
    };
    return (react_1.default.createElement("div", { className: "box_table", "data-testid": "employee-table" },
        react_1.default.createElement("h1", null, "Current employees"),
        react_1.default.createElement(typescript_table_1.Table, { data: employees, columns: data_1.dataColumnsMock, editRowColumnVisible: true, handleEditRow: handleEditRow, archiveRowColumnVisible: true, handleArchiveRow: handleArchiveRow, deleteRowColumnVisible: true, handleDeleteRow: handleDeleteRow, renderExportDataComponent: function (filteredData, columnsManaged) { return (react_1.default.createElement(typescript_exportdata_1.ExportDataComponent, { filteredData: filteredData, columnsManaged: columnsManaged, headerProperty: "label", csvExport: true, excelExport: true, pdfExport: true })); } }),
        isModalOpen && selectedEmployeeId && (react_1.default.createElement(Modal_1.default, { style: {
                top: modalPosition.y,
            }, setIsModalOpen: setIsModalOpen, isModalOpen: isModalOpen, closeModal: closeModal, className: "editEmployeeModal ".concat(modalType === 'delete' ? 'deleteEmployeeModal' : '') },
            react_1.default.createElement("div", { className: "box_titleModal" },
                react_1.default.createElement(fi_1.FiEdit3, { className: "iconCheckedModal" }),
                react_1.default.createElement("h2", { id: "modal-TitleChange" },
                    ' ',
                    modalType === 'edit'
                        ? 'Change Employee Data'
                        : modalType === 'archive'
                            ? 'Archive Employee'
                            : modalType === 'delete'
                                ? 'Delete Employee'
                                : '')),
            react_1.default.createElement("div", { className: "box_changeModalName", style: { display: 'flex' } },
                react_1.default.createElement("p", null,
                    "First Name:",
                    react_1.default.createElement("span", { className: "name" },
                        " ",
                        employeeFormEntree.firstname)),
                react_1.default.createElement("p", null,
                    "Last Name:",
                    ' ',
                    react_1.default.createElement("span", { className: "name" }, employeeFormEntree.lastname))),
            react_1.default.createElement("div", { className: "box_changeModalName", style: { display: 'flex' } },
                react_1.default.createElement("p", null,
                    "Date of Birthday:",
                    react_1.default.createElement("span", { className: "name" },
                        " ",
                        employeeFormEntree.dateOfBirth)),
                react_1.default.createElement("p", null,
                    "Start Date:",
                    ' ',
                    react_1.default.createElement("span", { className: "name" }, employeeFormEntree.startDate))),
            modalType === 'edit' && (react_1.default.createElement(EditEmployeeContent_1.default, { handleChangeSubmit: handleChangeSubmit, selectedEmployeeId: selectedEmployeeId, employeeFormEntree: employeeFormEntree })),
            modalType === 'archive' && (react_1.default.createElement(ArchiveEmployeeContent_1.default, { handleArchiveSubmit: handleArchiveSubmit, selectedEmployeeId: selectedEmployeeId, employeeFormEntree: employeeFormEntree })),
            modalType === 'delete' && (react_1.default.createElement(DeleteEmployeeContent_1.default, { handleDeleteSubmit: handleDeleteSubmit, selectedEmployeeId: selectedEmployeeId, handleCancel: handleCancel }))))));
}, function (prevProps, nextProps) {
    return prevProps.employees === nextProps.employees;
});
exports.default = TableEmployees;
