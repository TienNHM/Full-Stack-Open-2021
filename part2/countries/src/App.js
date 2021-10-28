import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Country = ({country}) => {
  return (
      <>
          <h1>{country.name.official}</h1>
          <p>Captital: {country.capital.join(', ')}</p>
          <p>Population: {country.population}</p>

          <h3>Languages:</h3>
          <ul>
              {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
          </ul>

          <img src={country.flags.png} alt={country.name.official} />
      </>
  )
}

const App = () => {
  const [data, setData] = useState([])
  const [country, setCountry] = useState('')
  const [countriesFilter, setCountriesFilter] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setData(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setCountry(event.target.value)
    
    setCountriesFilter(
      data.filter(
        c => c.name.official.toLowerCase().search(country.toLowerCase()) !== -1
      )
    )  
  }

  const showInfo = () => {
    if (countriesFilter.length === 1)
      return (
        <Country key={countriesFilter[0].name.official} country={countriesFilter[0]} />
      )
    else if (countriesFilter.length > 10)
      return (<p>Too many matches, specify another filter</p>)    
    else if (countriesFilter.length > 0)
      return (
        <>
          {countriesFilter.map(c => <p key={c.name.official}>{c.name.official}</p>)}
        </>
      )    
  }

  return (
    <>
      Find countries <input value={country} onChange={handleFilterChange}/>
      {showInfo()}
    </>
  )
}

export default App;
