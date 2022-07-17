import React, {useEffect, useState, useRef} from "react";
import TodoForm from "./TodoForm";
import {ALL_BILL_RECORD, SINGLE_BILL_RECORD} from './../graphql/queries/index';
import { useQuery } from '@apollo/client';
import Todo from './Todo';
import client from 'src/apollo-client';
import BillRecords from "./BillRecordsTable";

const TodoList =() =>
{
    const [recordList, setRecordList] = useState([]);
    const [singleRecord, setSingleRecord] = useState([]);

    const {error, data, loading } = useQuery(ALL_BILL_RECORD, {
        client: client,   
      });
      useEffect (()=>{
        if(data && data.getAllRecords)
        {
            setRecordList(data.getAllRecords);
        }
      },[data]);

      //// single record ////
      const {err, singleData, loadingRecord } = useQuery(SINGLE_BILL_RECORD, {
        client: client,   
            variables :{
                getSingleBillId : ""
            }
      });
      useEffect (()=>{
        if(singleData && singleData.getSingleBill)
        {
            setSingleRecord(singleData.getSingleBill);
        }
      },[singleData]);

	return (
        <>
          <div>
          <div className={` mt-5 overflow-scroll scrollbar-hide md:scrollbar-default h-[55%] `}>
          {loading && (
            <div className={`w-full h-full flex justify-center items-center`}>
             Loading ......
            </div>
          )}
          {data && recordList && recordList.length > 0 ? <BillRecords records={recordList} /> : 'No Data Found'}
        </div>
          </div>
        </>
	);
}


export default TodoList;