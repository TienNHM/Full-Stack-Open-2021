import React, {useState} from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-1234567'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    for (const p of persons) {
      if (p.name === newName){
        alert(`${p.name} is already added to phonebook!`)
        setNewName('')
        setNewPhone('')
        return
      }
    }

    const p = {
      name: newName,
      phone: newPhone
    }
    setPersons(persons.concat(p))
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map((person, i) => <div key={i}>{person.name} {person.phone}</div>)}
    </div>
  )
}

export default App;