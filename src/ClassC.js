import React from "react"
import ClassC1 from "./CLassC1"


export default class CLassC extends React.Component{
    constructor(){
        super()
        
        this.state = {
            fName : "chellak",
            lName : "kutty",
            age : 4,
            gender : "male"
        }
    }

    lnameChange=()=>{
        this.setState({lName : "KUTTY"})
    }

    nameChange(){
        this.setState({fName : "CHELLAK"})
    }

    changeAge(data){
        this.setState({age : data})
    }

    componentDidMount(){
        console.log("did mount");
    }
    componentDidUpdate(){
        console.log("did update");
    }
    render(){
        return(
            <div>
                <h1>{this.state.fName}</h1>
                <h1>{this.state.lName}</h1>
                <ClassC1 age = {this.state.age} func = {this.changeAge.bind(this)}/>
                <button onClick={this.lnameChange}>change fName</button>
                <button onClick={this.nameChange.bind(this)}>changeName</button>
            </div>
        )
        
    }
       
}