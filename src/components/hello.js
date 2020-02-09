import React from 'react'

const Hello=()=>{
//    return(
//        <div>
//            <h1>Mohammad Yazarloo</h1>
//        </div>
//    )
return(
    React.createElement('div',{id:'hello',className:'class'},React.createElement('h1',null,'hello mohammad'))
)

}

export default Hello