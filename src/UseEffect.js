import React from "react"

export default function UseEffect(){
    const [rety,setRety] = React.useState("posts")
    const [items,setItems] = React.useState("")
    React.useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${rety}`)
        .then(res => res.json())
        .then(res => setItems(res))
    },[rety])
    return(
        <>
            <button onClick={()=>setRety("posts")}>Posts</button>
            <button onClick={()=>setRety("users")}>Users</button>
            <button onClick={()=>setRety("comments")}>Comments</button>
            <h1>{rety}</h1>
            {items.map(item => {
              return  <pre>{JSON.stringify(item)}</pre>
            })}
            {/* <h1>{items}</h1> */}
        </>
    )
}