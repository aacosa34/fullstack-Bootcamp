import React from 'react'

const CountryList = ({ countries, handleShow }) => {
    return (
        <div>
            {countries.map(country => <div key={country.name}>{country.name} <button value={country.name} onClick={handleShow}>show</button></div>)}
        </div>
    )
}

export default CountryList