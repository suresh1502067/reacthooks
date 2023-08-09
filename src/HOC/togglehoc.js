import React,{Component, useState} from 'react'

export default function ToggleSwitch(Wrapcomp) {

 
return class WithToogle extends Component{
    constructor(){
        super()
        this.state={
            toggle:true
        }
    }
    onToggle=()=>{
        this.setState({toggle:!this.state.toggle})
    }
    render(){
        return  <Wrapcomp toggle={this.state.toggle} onToggle={()=>this.onToggle()}/>
    }
}

}


//     const [toggle,setToggle]= useState(true);

//     const onToggle=()=>{
//         setToggle(!toggle)
//     }

//   return (
//     <div>
//         <Wrapcomp toggle={toggle} onToggle={onToggle}/>
//     </div>
//   )
