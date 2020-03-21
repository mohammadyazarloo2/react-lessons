import React from 'react'
// در کنار اوجینال کمپوننت یک پارامتر دیگه میتونه تعریف بشه که عمل ضرب یا جمع رو انجام میده و این پاراامتر رو در جمع مقدار میذاریم یعنی قسمت استیت قرار میدیم و در تابعی که اکسپورت میکنیم کنار پارامتر تابع که همون تابع اصلی ما است مقدار دلخواه میذاریم
const UpdatedComponent=OriginalComponent =>{
    class NewComponent extends React.Component{

        constructor(props){
            super(props)
    
            this.state={
                count:0
            }
        }
    
        incrementHandler=()=>{
            this.setState(prevState=>{
                return {count:prevState.count+1}
            })
        }


        render(){
            console.log(this.props.name)
            return (
                <OriginalComponent
                count={this.state.count} 
                incrementCount={this.incrementHandler}
                { ... this.props}  />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent