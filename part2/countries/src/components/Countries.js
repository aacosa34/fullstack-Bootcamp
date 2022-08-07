import React from "react"
import Country from './Country.js'
import CountryList from './CountryList.js'
import { useState } from 'react'

const Countries = ({ countries, search }) => {
    const [showCountry, setShowCountry] = useState();

    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

    const handleShow = (event) => {
        const coun = countries.filter(country => {
            return country.name.includes(event.target.value)
        })

        setShowCountry(coun[0])
    }

    if (showCountry !== undefined) {
        return <Country country={showCountry} />
    }

    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    if (filteredCountries.length === 1) {
        return <Country country={filteredCountries[0]} />
    }
    if (filteredCountries.length > 1) {
        return <CountryList countries={filteredCountries} handleShow={handleShow} />
    }
    if (filteredCountries.length === 0) {
        return <p>No matches</p>
    }
}

export default Countries