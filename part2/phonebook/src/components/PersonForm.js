import React, {useState} from 'react';

const PersonForm = ({persons, setPersons}) => {
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')

    const handlePersonChange = (event) => {
        setNewName(event.target.value)
      }
      const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
      }

    function reset() {
        setNewName('')
        setNewPhone('')
    }

    const addPerson = (event) => {
        event.preventDefault()
    
        for (const p of persons) {
          if (p.name === newName){
            alert(`${p.name} is already added to phonebook!`)
            reset()
            return
          }
        }
    
        const p = {
          name: newName,
          number: newPhone,
          id: persons.length + 1
        }
        setPersons(persons.concat(p))
        reset()
      }

    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;