import React from 'react';

const Filter = ({value, onChange}) => {
    return (
      <div>
        filterPerson show with phone <input value={value} onChange={onChange}/>
      </div>
    )
}

export default Filter;