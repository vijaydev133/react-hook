import React from 'react'
import {useNavigate, useParams} from "react-router-dom"

function Product() {
    let navigate = useNavigate()
    let params = useParams()
    console.log("params",params)

    React.useEffect(()=>{
        return ()=>{
            console.log("will unmount")
        }
    },[])
    
  return (
    <div>
Product
    <button onClick={()=>navigate("/subscribe")}>click me</button>
    </div>
  )
}

export default Product