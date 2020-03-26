import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserConctext from './UserContext'

class ComponentE extends Component{

    static contextType=UserConctext

    render(){
        return(
            <div>
                component E context {this.context}
                <ComponentF />
            </div>
        )
    }

}

//ComponentE.contextType=UserConctext

export default ComponentE