import React,{Component} from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'walk'
        }
        console.log('lifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getderivedfromprops')
        return null
    }

    componentDidMount(){
        console.log('lifecycleA componentdidmount')
    }

    render(){
        console.log('lifecyleA render')
        return (
            <div>
                <div>lifecycle A </div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA