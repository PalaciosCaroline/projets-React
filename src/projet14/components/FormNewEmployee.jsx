import React, {useState} from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
import FieldsetAddress from './FieldsetAddress'
import DropdownDepartment from './DropdownDepartment'
import {  videInput,  setError} from './../store/newEmployeeEntreeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from "../store/employeesSlice";
import BoxName from './BoxName';
import { validateNames } from '../utils/controlName';
import StartDate from './StartDate';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DateOfBirth from './DateOfBirth';
import PropTypes from 'prop-types';

export default function FormNewEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.newEmployeeEntree.firstname);
  const lastname = useSelector((state) => state.newEmployeeEntree.lastname);
  const startDate = useSelector((state) => state.newEmployeeEntree.startDate);
  const department = useSelector((state) => state.newEmployeeEntree.department);
  const dateOfBirth = useSelector((state) => state.newEmployeeEntree.dateOfBirth);
  const errordateOfBirth = useSelector((state) => state.newEmployeeEntree.errordateOfBirth);
  const errorstartDate = useSelector((state) => state.newEmployeeEntree.errorstartDate);
  const street = useSelector((state) => state.newEmployeeEntree.street);
  const city = useSelector((state) => state.newEmployeeEntree.city);
  const state = useSelector((state) => state.newEmployeeEntree.state);
  const zipCode = useSelector((state) => state.newEmployeeEntree.zipCode);
  const [initialValues, setInitialValues] = useState({ 
    startDateInput: null,
    dateOfBirthInput: null,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateNames(firstname, lastname, setError, dispatch);
    if (!isNameValid) {
        setError({ firstname, lastname });
        return;
    } else if(errordateOfBirth || errorstartDate){ 
          return;
    } else {
        const newEmployee = {firstname, lastname,startDate,department,dateOfBirth,street,city,state,zipCode};
        dispatch(addEmployee(newEmployee))
        setInitialValues({ startDateInput: null, dateOfBirthInput: null });
        dispatch(videInput());
        setIsModalOpen(true);
        e.target.reset();
    };
  };
  
  return (
    <div className='box_formEntree'>
      <form action="#" id="create-employee" onSubmit={handleFormSubmit}>
        <BoxName />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className='boxDate'>
            <DateOfBirth className="form-group box-input" 
              errordateOfBirth={errordateOfBirth}
              setInitialValues={setInitialValues}
              initialValues={initialValues}
            />
            <StartDate className='box-input' errorstartDate={errorstartDate}  
              setInitialValues={setInitialValues}
              initialValues={initialValues}
            /> 
          </div>
        </LocalizationProvider>
        <FieldsetAddress/>
        <DropdownDepartment/>
        <button className='btnFormSave' type="submit">Save the new employee</button>
      </form>
      {isModalOpen && (<ConfirmationModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>)}
    </div>
  )
}

ConfirmationModal.propTypes = {
  setIsModalOpen: PropTypes.func,
  isModalOpen: PropTypes.bool
};

FieldsetAddress.propTypes = {
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipCode: PropTypes.string,
};

DropdownDepartment.propTypes = {
  department: PropTypes.string,
};

BoxName.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};

DateOfBirth.propTypes = {
  dateOfBirth: PropTypes.any,
  errordateOfBirth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

StartDate.propTypes = {
  startDate: PropTypes.string,
  errorstartDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};