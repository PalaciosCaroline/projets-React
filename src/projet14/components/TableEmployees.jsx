import React from 'react'
import PropTypes from 'prop-types';
import { columns } from '../mocks/data';
import {Table} from 'table-component-library';

const EmployeeTable = React.memo(({ employees }) => {

  return (
    <div className='box_table'>
      <h1>List of employees</h1>
      <Table data={employees} columns={columns}/>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.employees === nextProps.employees
});

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeTable;