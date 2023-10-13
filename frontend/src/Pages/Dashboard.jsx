import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div>
        {
            data?.data?.map((e)=><div key={e.id}>{e.title}</div>)
        }

      
    </div>
  )
}

export default Dashboard
