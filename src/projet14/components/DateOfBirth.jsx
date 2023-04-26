import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import {
    setField,
    setError
  } from './../store/newEmployeeEntreeSlice';
import PropTypes from 'prop-types';

export default function DateOfBirth({errordateOfBirth, initialValues, setInitialValues}) {
    const dispatch = useDispatch();
    const dateOfBirth = useSelector((state) => state.newEmployeeEntree.dateOfBirth);
    const noBeforeDay = dayjs().subtract(90, 'year');
    const noAfterDay = dayjs().subtract(12, 'year');

    useEffect(() => {
      if (!dateOfBirth || !initialValues.dateOfBirthInput) {
        dispatch(setError({ name: 'dateOfBirth' , message: '' }))
        }
    }, []);

    const handleDateChange = (date) => {
        setInitialValues({ ...initialValues, dateOfBirthInput: date }); 
        dispatch(setError({name:'dateOfBirth', message:'' }))
        const isInvalid = noBeforeDay > date || date > noAfterDay;
        if(isInvalid){
            dispatch(setError({name:'dateOfBirth', message:'Please select a valid date ' }))
            return;
        }else {
            dispatch(setError({name:'dateOfBirth', message:'' }))
            dispatch(setField({ name:'dateOfBirth', value: dayjs(date).format('DD/MM/YYYY') }));        
        }
    };
   
  return (
    <div className='form-group box_dateOfBirth'>       
        <p>Date of Birth</p>
        <div className='box_Input ' style={{display:'flex', position:'relative'}}>
        <DatePicker 
        label="Date of Birth Select" 
        minDate={noBeforeDay}
        maxDate={noAfterDay}
        views={['year', 'month', 'day']}
        onChange={handleDateChange}
        value={initialValues.dateOfBirthInput}
        sx={{
          '& .MuiInputBase-input': {
            height: '20px',
            width: '160px', 
            margin:'10px',
          },
          '& .MuiOutlinedInput-input': {
            height: '20px',
            width: '160px', 
            margin:'10px',
          },
        }}
        />
         {errordateOfBirth ? <p className='errorMessage'>{errordateOfBirth}</p> : ''}
        </div>
    </div>
  )
}

DateOfBirth.propTypes = {
  dateOfBirth: PropTypes.instanceOf(Date),
  errordateOfBirth: PropTypes.string
};

