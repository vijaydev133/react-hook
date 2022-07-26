import React from "react"

export default class ClassC1 extends React.Component{
    render(){
        return(
            <>
                <h1>{this.props.age}</h1>
                <button onClick={()=>this.props.func(9)}>changeAge</button>

            </>
            
            
        )
    }
}