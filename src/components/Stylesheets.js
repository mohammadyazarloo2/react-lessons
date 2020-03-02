import React from 'react'
import './mystyle.css'

function Stylesheets(props){
    let className=props.primary ? 'primary' : ''
    return(
        <div>
            <h1 className={`${className} font-xl`}>my style css</h1>
        </div>
    )
}
export default Stylesheets