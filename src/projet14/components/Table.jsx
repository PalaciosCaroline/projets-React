import React, { useState, useEffect } from 'react';
import { FaSortDown, FaSortUp, FaSearch } from 'react-icons/fa';
import { sortDates } from '../utils/controlDate';

export default function Table({ data, columns}) {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [sortedData, setSortedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerms, setSearchTerms] = useState({});
  const initialInputValues = {};
  columns.forEach(({ property }) => {
    initialInputValues[property] = '';
  });
  const [inputValues, setInputValues] = useState(initialInputValues);

  useEffect(() => {
    let sortedData = data;
    if (sortKey !== null) {
      sortedData = data.slice().sort((a, b) => {
        if (typeof sortedData[0][sortKey] === 'string' && sortedData[0][sortKey].match(/^\d{2}([./-])\d{2}\1\d{4}$/)) {
          return sortDates(a, b, sortKey, sortOrder);
        } else {
          const valueA = a[sortKey] && a[sortKey].toLowerCase();
          const valueB = b[sortKey] && b[sortKey].toLowerCase();
          return valueA.localeCompare(valueB, undefined, { sensitivity: 'base' }) * (sortOrder === 'asc' ? 1 : -1);
        }
      });
    }
  setSortedData(sortedData);
  }, [data, sortKey, sortOrder]);

  useEffect(() => {
    setTotalPages(Math.ceil(sortedData.length / perPage));
    setPage(1);
  }, [sortedData, perPage]);

  const handleSort = (key, sortOrder) => {
    setSortKey(key);
    setSortOrder(sortOrder);
  };

  const handlePerPageChange = (event) => {
    setPerPage(parseInt(event.target.value));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchByProperty = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputValues((prevInputValues) => ({ ...prevInputValues, [name]: value }));
    setSearchTerms((prevSearchTerms) => ({ ...prevSearchTerms, [name]: value }));
  };

  const filterData = (data) => {
    let filteredData = data;
    if (searchTerm) {
      filteredData = filteredData.filter((item) =>
        Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    filteredData = filteredData.filter((item) =>
    Object.keys(searchTerms).every((property) =>
      item[property] && item[property]
        .toString()
        .toLowerCase()
        .includes(searchTerms[property].toLowerCase() || '')
      )
    );
    return filteredData;
  };

  const filteredData = filterData(sortedData);

  const handleResetSearch = () => {
    setSearchTerm('');
    setSearchTerms({});
    setInputValues(initialInputValues);
  };

  const renderHeader = () => {
    return (
      <thead> 
      <tr>
      {columnData.map(({ label, property, selectedBtnSort }) => (
          <th key={property}>
            <input
                type="text"
                value={inputValues[property]}
                onChange={handleSearchByProperty}
                placeholder="Search..."
                name={property}
                style={{width:'120px', fontSize:'0.8rem', height:'30px'}}
                className='inputSearchByProperty'
              />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className='label'>{label}</p>
                <div>
                  <button
                  type="button"
                  onClick={() => handleSort(property, 'desc')}
                  className={`btnForSort ${selectedBtnSort && sortOrder === 'desc' ? 'selectedBtnSort' : ''}`}
                    >
                      <FaSortUp  style={{ height:'1.4rem', width: '1.4rem',verticalAlign: 'center' }} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSort(property, 'asc')}
                      style={{ marginLeft: '8px', width: '50px',display: 'block', marginTop: '8px'}}
                      className={`btnForSort ${selectedBtnSort && sortOrder === 'asc' ? 'selectedBtnSort' : ''}`}
                    >
                      <FaSortDown />
                    </button>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
      );
    };

  const renderBody = () => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    // const currentData = sortedData.slice(start, end);
    const currentData = filteredData.slice(start, end);

    return (
      <tbody>
        {currentData.map((item, index) => (
          <tr key={index}>
            {columns.map(({ property }) => (
              <td key={`cell-${index}-${property}`}>{item[property]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };
        
  const columnData = columns.map(({ label, property }) => ({
    label,
    property,
    selectedBtnSort: sortKey === property,
  }));

  return (
    <>
    <div className='box_searchReset'>
        <div className='box_searchGlobal'>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." id='y
            '/>
            <label htmlFor="searchGlobal"><FaSearch/></label>  
        </div>
        <button onClick={handleResetSearch} style={{marginRight:'20px'}} className='btn_Reset'>Reset all search</button>
    </div>
    <div className='box_ChoiceEntries' style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'350px', height:'30px', marginBottom:'20px'}}>
      <div className='boxNumberOfEntriesPerPage'>
        <span>Show</span>
        <select value={perPage} onChange={handlePerPageChange} style={{margin:'8px'}} className='selectNumberOfEntriesPerPage'>
          <option value={sortedData.length}>All</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>entries of {sortedData.length} per page</span>
      </div>
    </div>

    <table>
     
      {renderHeader(columnData)}
      {renderBody()}
    </table> 
    <div className="pagination" style={{display:'flex', alignItems:'center', margin:'20px', justifyContent:'center'}}>
      {page > 1 && (
        <button
          className="paginationButton"
          style={{border:'none', fontSize:'1.2rem'}}
          onClick={() => handlePageChange(page - 1)}
        >
          &lt;
        </button>
      )}
      <span className="paginationText">
        Page {page} sur {totalPages}
      </span>
      {page < totalPages && (
        <button
          className="paginationButton"
          style={{border:'none', fontSize:'1.2rem'}}
          onClick={() => handlePageChange(page + 1)}
        >
          &gt;
        </button>
      )}
      </div>
    </>
  );
}
    