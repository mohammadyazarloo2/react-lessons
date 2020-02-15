import React,{Component} from 'react'

class ClassClick extends Component{

    clickHandler() {
        console.log('the cliecked button')
        
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>button clicked</button>
            </div>
        )
    }
}

export default ClassClick