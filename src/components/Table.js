import React from 'react'
import Columns from './Columns'

function Table(){
    return(
        <table border="2px">
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    )
}

export default Table