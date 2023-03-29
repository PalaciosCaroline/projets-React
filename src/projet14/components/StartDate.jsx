import React from 'react'
import { useDispatch} from 'react-redux';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
//import { InputLabel, TextField } from '@mui/material';
import dayjs from 'dayjs';
import {
    setField,
    setError
  } from './../store/newEmployeeEntreeSlice';

export default function StartDate({errorstartDate}) {
    const dispatch = useDispatch();
    const noBeforeDay = dayjs().subtract(1, 'year');
    const noAfterDay = dayjs().add(1, 'year');

    const handleDateChange = (date) => {
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
        // value={startDate}
        onChange={handleDateChange}   
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          '& .MuiInputBase-input': {
            height: '25px',
            width: '160px',
            margin:'10px',
          },
        }}
        />
        {errorstartDate ? <p className='errorMessage'>{errorstartDate}</p> : ''}
        </div>   
          
    </div>
    </>
  )
}
