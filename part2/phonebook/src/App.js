import axios from 'axios'
import { useEffect, useState } from 'react'

const Filter = ({ filter, handleSearch }) => {
  return (
    <div>
      filter shown with: <input value={filter} onChange={handleSearch} />
    </div>
  )
}

const PersonForm = ({ handleSubmit, handleChangeName, handleChangeNumber, newName, newNumber }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleChangeNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const PersonList = ({ persons, filter }) => {
  return (
    <div>
      {persons.map(person => {
        if (person.name.toUpperCase().includes(filter.toUpperCase()))
          return <p key={person.id}>{person.name} {person.number}</p>
        else
          return ""
      }
      )}
    </div>
  )
}

const App = () => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      const { data } = response
      setPersons(data)
    })
  }, [])

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length === 0) {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <PersonList persons={persons} filter={filter} />
    </div>
  )
}

export default App