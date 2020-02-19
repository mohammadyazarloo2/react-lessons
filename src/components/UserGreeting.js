import React,{Component} from 'react'

class UserGreeting extends Component{

    constructor(props){
        super(props)
        this.state={
          isLoggedIn:false
        }
      }

    render(){


        return this.state.isLoggedIn && <div>welcome walk</div>


        //return(
        //    this.state.isLoggedIn ?
        //    <div>welcome walk</div> :
        //    <div>welcome gusts</div>
        //)



        //let message
        //if(this.state.isLoggedIn){
        //    message=<div>welcome walk</div>
        //}else{
        //    message=<div>welcome gusts</div>
        //}

        //return(
        //    <div>{message}</div>
        //)


        //if(this.state.isLoggedIn){
        //    return(
        //        <div>welcome walk</div>
        //    )
        //}else{
        //    return(
        //        <div>welcome gusts</div>
        //    )
        //}
    }

}

export default UserGreeting