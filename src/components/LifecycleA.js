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

    shouldComponentUpdate(){
        console.log('lifecycleA shouldcomponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA getsnapshotBedforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'walk'
        })
    }

    render(){
        console.log('lifecyleA render')
        return (
            <div>
                <div>lifecycle A </div>
                <LifecycleB />
                <button onClick={this.changeState}>chnage state</button>
            </div>
        )
    }
}

export default LifecycleA