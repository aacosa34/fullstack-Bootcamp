import React from "react"
import Country from './Country.js'
import CountryList from './CountryList.js'

const Countries = ({ countries, search }) => {
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    } else if (filteredCountries.length === 1) {
        return <Country country={filteredCountries[0]} />
    } else if (filteredCountries.length > 1) {
        return <CountryList countries={filteredCountries} />
    } else {
        return <p>No matches</p>
    }
}

export default Countries