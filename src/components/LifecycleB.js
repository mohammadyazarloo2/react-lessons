import React,{Component} from 'react'


class LifecycleB extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'walk'
        }
        console.log('life cycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleB getderivedfromprops')
        return null
    }

    componentDidMount(){
        console.log('lifecycleB componentdidmount')
    }


    shouldComponentUpdate(){
        console.log('lifecycleB shouldcomponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB getsnapshotBedforeUpdate')
    }

    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }

    render(){
        console.log('lifecyleB render')
        return <div>lifecycle B </div>
    }
}

export default LifecycleB