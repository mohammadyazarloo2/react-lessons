import React from 'react'

function MemoComp({name}){
    console.log('memo component rendering')
    return(
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)