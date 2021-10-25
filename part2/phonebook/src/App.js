import React, {useState} from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterPerson, setFilterPerson ] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilterPerson(event.target.value)

  }

  function reset() {
    setNewName('')
    setNewPhone('')
    setFilterPerson('')
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
    <div>
      <h2>Phonebook</h2>
      <div>
        filterPerson show with phone <input value={filterPerson} onChange={handleFilterChange}/>
      </div>

      <h2>Add New</h2>
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
      {persons.map((person) => person.number.includes(filterPerson) && <div>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App;