import axios from 'axios'
import { useEffect, useState } from 'react'
import FilterCountries from './components/FilterCountries';
import Countries from './components/Countries'

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  const handleSearch = (event) => {
    console.log('handleSearch')
    setSearch(event.target.value)
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then(response => {
      const { data } = response
      setCountries(data)
    })
  }, [])

  return (
    <div>
      <FilterCountries search={search} handleSearch={handleSearch} />

      <Countries countries={countries} search={search} />
    </div>
  );
}

export default App;
