"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDates = void 0;
function isDate(value, setError, nameForError, dispatch) {
    var errorName = nameForError.replace(/\s/g, '');
    dispatch(setError({ name: errorName, message: '' }));
    if (!value) {
        dispatch(setError({
            name: errorName,
            message: "This date is required",
        }));
        return false;
    }
    else {
        dispatch(setError({ name: errorName, message: '' }));
        return true;
    }
}
exports.default = isDate;
var validateDates = function (dateOfBirth, startDate, setError, dispatch) {
    var isDateValid = true;
    isDateValid =
        isDate(dateOfBirth, setError, 'date Of Birth', dispatch) && isDateValid;
    isDateValid =
        isDate(startDate, setError, 'start Date', dispatch) && isDateValid;
    return isDateValid;
};
exports.validateDates = validateDates;
