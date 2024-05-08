import React, { useEffect ,useState} from 'react'
import axios from "axios"
import "./css/Fetch.css"





export const Fetch = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3500/posts")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    }, [])
  return (
    <>
    
    
        <div className='content'>
            <h1>List of users</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>{
                data.map((user,index)=>{
                    return <tr key={index}>
                        <td>{user.id}</td>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td>{user.address.city}</td>
                         <td>{user.address.street}</td>
                         <td>{user.address.zipcode}</td>
                    </tr>
                
                })
            }
                </tbody>
                
            </table>
        </div>
    
    </>
  )
}
