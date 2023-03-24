function isValidName(value, setError, errorName, dispatch) {
  dispatch(setError({ name: errorName, message: '' }));
  const regex = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-'\s]{0,40}$/;
    if (value.length < 2) {
      dispatch(setError({ name: errorName, message: `The ${errorName} is required` }));
      return false;
    } else if (!regex.test(value)) {
      dispatch(setError({ name: errorName, message: `Invalid ${errorName} format` }));
      return false;
    } else if (regex.test(value) && value.length > 1) {
      dispatch(setError({ name: errorName, message: '' }));
      return true;
    }
}

export const validateNames = (firstname, lastname, setError, dispatch) => {
  let isNameValid = true;
  isNameValid = isValidName(firstname, setError, 'firstname', dispatch) && isNameValid;
  isNameValid = isValidName(lastname, setError, 'lastname', dispatch) && isNameValid;
  return isNameValid;
};
  