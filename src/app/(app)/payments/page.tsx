"use client"

import { useState,useEffect } from "react";
import axios from 'axios';
// import { RootState } from "../store";
// import { useSelector } from "react-redux";

const OdemePlani = () =>{
    const [payments,setPayments]=useState([]);
    // const user = useSelector((state:RootState)=>(state.user.user));
    
    // useEffect(()=>{
    //     if(user){
    //         fetchPaymnets(); 
    //     }
    // },[user]);

    const fetchPaymnets =async ()=>{
    const response = await axios.get(`http://localhost/api/payments/ ${user.id}`);
    setPayments(response.data);
};
return(
    <div>
        <h1>Ödeme Plani</h1>
        <ul>
            {payments.map((payment:any)=>(
              <li key={payment.id}>
                {payment.amount}-{payment.date}
              </li>  
            ))}
        </ul>
    </div>
);
};

export default OdemePlani; 