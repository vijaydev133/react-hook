import React from 'react'
import {useNavigate, useParams} from "react-router-dom"

function Product() {
    let navigate = useNavigate()
    let params = useParams()
    console.log("params",params)
  return (
    <div>
Product
    <button onClick={()=>navigate("/subscribe")}>click me</button>
    </div>
  )
}

export default Product