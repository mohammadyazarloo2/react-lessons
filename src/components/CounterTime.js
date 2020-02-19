import React, { Component } from 'react'

class CounterTime extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            value:'',
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert('a name was subitted:'+this.state.value)
        event.preventDefault();
    }

    render(){
        const {count}=this.state
        const {timer}=this.state
        return(
            <div>
                <h1>{count}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>only numbers from 0 to 9</label>
                    <input type="text" pattern="[0-9]" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
                
            </div>
        )
    }

    componentDidMount() {


        this.myInterval=setInterval(()=>{
            const {count}=this.state

            for (let i = 0; i < 1; i++) {
                this.setState({
                    count:this.state.count=this.state.count+1,
                    
                })
                
            }

            if(this.state.count >= 10){
                this.countdown()
                
            }
            
        },1000)

        
        
    }

    countdown(){
        clearInterval(this.myInterval)
        this.myInterval=setInterval(()=>{
            const {count}=this.state

            for (let i = 0; i < 1; i++) {
                
                this.setState({
                    count:this.state.count=this.state.count-1,
                    
                })

                if(count===0){
                    this.stopit();
                }
                
            }
        },1000)
        
        
    }

    stopit(){
        clearInterval(this.myInterval)
    }

}

export default CounterTime