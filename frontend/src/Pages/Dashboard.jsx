import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Dashboard.css"

const Dashboard = () => {
    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(false);
    const [error , setError]=useState(false);

    useEffect(()=>{
        setLoading(true)
        axios.get("https://lead-i2xp.onrender.com/users")
        .then((res)=>setData(res.data),setLoading(false))
        .catch((err)=>console.log(err),setError(true))        
    },[])
    
   
    const sortHandler=(e)=>{
         let value=e.target.value;
         let by={...data};
            if(value==="asc"){ by?.data.sort((a,b)=>{ return a.price-b.price })
            }
            else if(value==="desc"){ by?.data.sort((a,b)=>{ return b.price-a.price })
            }
            setData(by);  
    }
  return (
        <div >
            <h1>Dashboard</h1>
            <div>
                <p>Sort Price</p>
                <select onClick={sortHandler}>
                    <option value=""></option>
                    <option value="desc">High To Low</option>
                    <option value="asc">Low To High</option>
                </select>
            </div>
    
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
