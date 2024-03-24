import React from 'react'
import Children from './children'

const PropsDrilling = ({ students, counter }) => {
    // console.log(students, "students")
    return (
        <div>
            <Children students={students} counter={counter} />
        </div>
    )
}

export default PropsDrilling