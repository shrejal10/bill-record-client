import moment from 'moment';
import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { USER_PROFILE_COLUMNS } from './UserProfileColumns';

const styles = require('./BillRecordsTable.scss');

const BillRecords  = ({ records = [] }) => {
    const columns = useMemo(() => USER_PROFILE_COLUMNS, []);
    const data = useMemo(() => records, [records]);
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  
    return (
      <>
        {records.length > 0 && (
          <table className={`border-collapse	w-[100%] mx-4  `} {...getTableProps()}>
            <thead className={`${styles.tableHeader}`}>
              {headerGroups.map((headerGroup) => (
                <tr key={Math.random()} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    if (['Username'].includes(column.Header)) {
                      column.canSort = false;
                    }
                    return (
                      <th key={Math.random()} {...column.getHeaderProps(column.getSortByToggleProps())}>
                        <div className="flex items-center p-2 text-lg not-italic font-semibold leading-normal text-center text-black">
                          {column.render('Header')}
                          {!['Username'].includes(column.Header) && (
                            <span className={`pl-2`}>
                              <div className="mt-[0.22rem] w-[1rem] h-[10]">
                                {/*Not using Next image component here due to styling issues for this particular image*/}
                                <img
                                  height="100%"
                                  width="100%"
                                  src={column.isSortedDesc ? '/images/upDark.png' : '/images/downDark.png'}
                                  alt=""
                                />
                              </div>
                            </span>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className=" divide-y">
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr key={Math.random()} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td key={Math.random()} {...cell.getCellProps()}>
                          <div className={`flex items-center justify-between  `}>
                            <div className={`py-1 px-5 flex flex-col`}>
                              <div
                                className={`${
                                  ['Username', 'Month'].includes(cell.column.Header)
                                    ? 'text-lg 	text-black-400 text-left first-letter:uppercase'
                                    : 'text-lg 	text-black-400 text-left first-letter:uppercase'
                                } flex items-center `}
                              >
                                {cell.render('Cell')}
                              </div>
                              {cell.column.Header === 'Month' && (
                                <div className={`text-lg 	text-gray-800 text-left p-2`}>
                                  {moment(cell.value).month()}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  };
  
  export default BillRecords;