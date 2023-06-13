"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNames = void 0;
function isValidName(value, setError, nameForError, dispatch) {
    var errorName = nameForError.replace(/\s/g, '');
    dispatch(setError({ name: errorName, message: '' }));
    var regex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'\s-]{0,40}$/;
    if (!value || value.length < 2) {
        dispatch(setError({ name: errorName, message: "The ".concat(nameForError, " is required") }));
        return false;
    }
    else if (value.length >= 2 && !regex.test(value)) {
        dispatch(setError({ name: errorName, message: "Invalid ".concat(nameForError, "     format") }));
        return false;
    }
    else if (regex.test(value) && value.length > 1) {
        dispatch(setError({ name: errorName, message: '' }));
        return true;
    }
    else {
        return false;
    }
}
var validateNames = function (firstname, lastname, setError, dispatch) {
    var isNameValid = true;
    isNameValid =
        isValidName(firstname, setError, 'first name', dispatch) && isNameValid;
    isNameValid =
        isValidName(lastname, setError, 'last name', dispatch) && isNameValid;
    return isNameValid;
};
exports.validateNames = validateNames;
