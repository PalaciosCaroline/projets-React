"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputField = void 0;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var employeeFormStateSlice_1 = require("../store/employeeFormStateSlice");
var InputField = function (_a) {
    var label = _a.label, name = _a.name, error = _a.error, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.isWrapped, isWrapped = _c === void 0 ? false : _c;
    var dispatch = (0, react_redux_1.useDispatch)();
    var inputValue = (0, react_redux_1.useSelector)(function (state) { var _a; return (_a = state.employeeFormState.formValues[name]) === null || _a === void 0 ? void 0 : _a.toString(); });
    var handleInputChange = function (event) {
        var value = event.target.value;
        if (type === 'text') {
            value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        dispatch((0, employeeFormStateSlice_1.setField)({ name: name, value: value }));
        dispatch((0, employeeFormStateSlice_1.setError)({ name: name, message: '' }));
    };
    var isFirstNameOrLastName = name === 'firstname' || name === 'lastname';
    var inputComponent = (react_1.default.createElement("input", { id: name, name: name, type: type, value: inputValue, onChange: handleInputChange, className: error ? 'errorBorder' : '' }));
    var inputElement = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { htmlFor: name }, label ? label : name.charAt(0).toUpperCase() + name.slice(1)),
        isWrapped ? (react_1.default.createElement("div", { style: { position: 'relative' } },
            inputComponent,
            error ? (react_1.default.createElement("p", { className: "errorMessage", "data-testid": "error-".concat(name) }, error)) : (''))) : (inputComponent)));
    return isFirstNameOrLastName ? (react_1.default.createElement("div", { key: name, className: "box_input", style: { display: 'flex', alignItems: 'center' } }, inputElement)) : (inputElement);
};
exports.InputField = InputField;
