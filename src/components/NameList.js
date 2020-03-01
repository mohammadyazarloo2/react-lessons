import React from 'react'
import Person from './Person'

function NameList(){
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:20,
            skill:'react'
        },
        {
            id:2,
            name:'Clerk',
            age:22,
            skill:'angular',
        },
        {
            id:3,
            name:'Diana',
            age:24,
            skill:'vue'
        }
    ]
const personsList=persons.map(person =><Person key={person.id} person={person} />)

    return(
        <div>
            {
                personsList
            }
        </div>
    )
}

export default NameList