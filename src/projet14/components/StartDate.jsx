import React from 'react'
import { useDispatch} from 'react-redux';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import {
    setField,
    setError
  } from './../store/newEmployeeEntreeSlice';
import PropTypes from 'prop-types';

export default function StartDate({errorstartDate,initialValues, setInitialValues}) {
// export default function StartDate({errorstartDate,startDate}) {
    const dispatch = useDispatch();
    const noBeforeDay = dayjs().subtract(1, 'year');
    const noAfterDay = dayjs().add(1, 'year');

    const handleDateChange = (date) => {
      setInitialValues({ ...initialValues, startDateInput: date }); 
      dispatch(setError({name:'startDate', message:'' }))
      const isInvalid = noBeforeDay > date || date > noAfterDay;
      if(isInvalid){
        dispatch(setError({name:'startDate', message:'Please select a valid date ' }))
        return;
      }else {
        dispatch(setError({name:'startDate', message:'' }))   
        dispatch(setField({ name:'startDate', value: dayjs(date).format('DD/MM/YYYY') }));       
      }
    };
   
  return (
    <>
    <div className='form-group box_startDate'>    
        <p>Start Date</p>
        <div className='box_Input ' style={{display:'flex', position:'relative'}}>
        <DatePicker 
        label="Start Date Select" 
        minDate={noBeforeDay}
        maxDate={noAfterDay}
        views={['year', 'month', 'day']}
        value={initialValues.startDateInput}
        // value={startDate}
        onChange={handleDateChange}   
        sx={{
          '& .MuiInputBase-input': {
            height: '20px',
            width: '160px',
            margin:'10px',
          },
        }}
        />
        {errorstartDate  ? <p className='errorMessage'>{errorstartDate}</p> : ''}
        </div>        
    </div>
    </>
  )
}


StartDate.propTypes = {
  // initialValues: PropTypes.any,
  startDate: PropTypes.string,
  errorstartDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};
