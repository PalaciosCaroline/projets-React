"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputChange = void 0;
var react_redux_1 = require("react-redux");
var employeeFormStateSlice_1 = require("../store/employeeFormStateSlice");
function useInputChange(type) {
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleInputChange = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        var newValue;
        if (type === 'text') {
            newValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
        else if (type === 'number') {
            newValue = value;
        }
        else {
            newValue = '';
        }
        dispatch((0, employeeFormStateSlice_1.setField)({ name: name, value: newValue }));
        dispatch((0, employeeFormStateSlice_1.setError)({ name: name, message: '' }));
    };
    return handleInputChange;
}
exports.useInputChange = useInputChange;
