import React from 'react';

const Persons = ({data, filterPerson}) => {
    return (
        <div>
        {data.map((person) => person.number.includes(filterPerson) && <div>{person.name} {person.number}</div>)}
        </div>
    )
}

export default Persons;