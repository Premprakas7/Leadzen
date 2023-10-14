import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Dashboard.css"

const Dashboard = () => {
    const [data, setData]=useState();
    const [loading, setLoading]=useState(false);
    const [error , setError]=useState(false);

    useEffect(()=>{
        setLoading(true)
        axios.get("http://localhost:5000/users")
        .then((res)=>setData(res.data),setLoading(false))
        .catch((err)=>console.log(err),setError(true))        
    },[])
    console.log(data)
  return (
        <div >
            <h1>Dashboard</h1>
    
    <div className='box' >
        {
            data?.data?.map((e)=><div key={e.id} className='item'>
            <div>
                <img src={e.image} className="image" alt="" />
                <div>
                    <p className='title'>Title : {e.title}</p>
                    <p className='title'>Price : {e.price}₹</p>
                </div>
            </div>
        </div>)
        }
    </div>
    </div> )
}

export default Dashboard
