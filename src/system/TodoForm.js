import React, {useEffect, useState} from "react";
import { useMutation, useQuery } from '@apollo/client';
import client from 'src/apollo-client';
import {ADD_RECORD_MUTATION} from './../graphql/mutations/index'
import DatePicker from "react-datepicker";


const  TodoForm = () =>
{
    const[meterNo, setMeterNo] = useState('');
    const[username, setUsername] = useState('');
    const[units, setUnits] = useState('');
    const[address, setAddress] = useState('');
    const[month, setMonth] = useState(new Date());


    const [addResponseData, setAddResponseData] = useState({
    data: {
        message : ''
    } 
  });
  const [addBillRecord] = useMutation(ADD_RECORD_MUTATION, { client: client });


   
      const handleSubmit = ()=> {
       
        if(meterNo.equals(''))
        {
            alert("Please enter Meter No. !!")
        }
        else if(username.equals(''))
        {
            alert("Please enter Username !!")
        }
        else if(units.equals(''))
        {
            alert("Please enter Units !!")
        }else if(address.equals(''))
        {
            alert("Please enter Address !!")
        }
        else if (month == ''){
            alert("Please select month !!")
        }
        else{
            addBillRecord({ variables: {  "meterNo": meterNo,
            "username": username,
            "address": address,
            "units": units,
            "month": month } })
            .then((result) => {
                setAddResponseData(result.data.createBill.message);
                
              })
        }
      
      };

    return (

        <>
            <div className = "container">

                    <form action="handleSubmit">
                        <div class="single-container">
                            <label className="label">Meter No.</label>
                            <div class="inputText">
                            <input type="text"   placeholder="Meter No."
                                value= {meterNo}
                                onChange={e => setMeterNo(e.target.value)}
                            
                            /> 
                            </div>
                        </div>
                         <div class="single-container">
                            <label className="label">Username</label>
                            <div class="inputText">
                            <input type="text"   placeholder="Username"
                            value= {username}
                            onChange={e => setUsername(e.target.value)}
                        
                            
                            /> 
                            </div>
                        </div>   

                        <div class="single-container">
                            <label className="label">Units</label>
                            <div class="inputText">
                            <input type="text"   placeholder="Units"
                            value= {units}
                            onChange={e => setUnits(e.target.value)}
                        
                            /> 
                            </div>
                        </div>

                        <div class="single-container">
                            <label className="label">Address</label>
                            <div class="inputText">
                            <input type="text"   placeholder="Address"
                            value= {address}
                            onChange={e => setAddress(e.target.value)}
                        
                            /> 
                            </div>
                        </div>

                        <div class="single-container">
                            <label className="label"> Select Month</label>
                            <div class="inputText">
                            <DatePicker selected={month} onChange={(date) => setMonth(date)} />
                            </div>
                        </div>
                        
                     
                    </form>


            </div>
        </>
    );

}

export default TodoForm;