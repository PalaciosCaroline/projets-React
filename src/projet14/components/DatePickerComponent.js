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
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
var dayjs_1 = __importDefault(require("dayjs"));
var employeeFormStateSlice_1 = require("../store/employeeFormStateSlice");
function DatePickerComponent(_a) {
    var nameDate = _a.nameDate, label = _a.label, minDate = _a.minDate, maxDate = _a.maxDate, dateOperation = _a.dateOperation;
    var dateInput = (0, react_redux_1.useSelector)(function (state) {
        return state.employeeFormState.formValues[nameDate];
    });
    var errorKey = "error".concat(nameDate);
    var errorDate = (0, react_redux_1.useSelector)(function (state) { return state.employeeFormState.formErrors[errorKey]; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var noBeforeDay = (0, dayjs_1.default)().subtract(minDate, 'year');
    var noAfterDay = dateOperation === 'add'
        ? (0, dayjs_1.default)().add(maxDate, 'year')
        : (0, dayjs_1.default)().subtract(maxDate, 'year');
    (0, react_1.useEffect)(function () {
        if (!dateInput) {
            dispatch((0, employeeFormStateSlice_1.setError)({ name: nameDate, message: '' }));
        }
    }, []);
    var handleDateChange = function (date) {
        var selectedDate = (0, dayjs_1.default)(date);
        var isValidDate = selectedDate.isValid() &&
            !(noBeforeDay > selectedDate || selectedDate > noAfterDay);
        dispatch((0, employeeFormStateSlice_1.setError)({
            name: nameDate,
            message: isValidDate ? '' : 'Please select a valid date',
        }));
        if (isValidDate) {
            dispatch((0, employeeFormStateSlice_1.setField)({
                name: nameDate,
                value: selectedDate.format('DD/MM/YYYY'),
            }));
        }
    };
    return (react_1.default.createElement("div", { className: "form-group box_".concat(nameDate) },
        react_1.default.createElement("p", { className: "text_".concat(nameDate) }, label),
        react_1.default.createElement("div", { className: "box_Input ", style: { display: 'flex', position: 'relative' } },
            react_1.default.createElement(DatePicker_1.DatePicker, { label: "".concat(label, " Select"), minDate: noBeforeDay, maxDate: noAfterDay, value: dateInput
                    ? typeof dateInput === 'string'
                        ? (0, dayjs_1.default)(dateInput, 'DD/MM/YYYY')
                        : dateInput
                    : null, views: ['year', 'month', 'day'], onChange: handleDateChange, sx: {
                    '& .MuiInputBase-input': {
                        height: '20px',
                        width: '160px',
                        margin: '10px',
                    },
                } }),
            errorDate ? react_1.default.createElement("p", { className: "errorMessage" }, errorDate) : '')));
}
exports.default = DatePickerComponent;
