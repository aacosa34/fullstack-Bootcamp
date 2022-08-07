import React from "react";

const FilterCountries = ({ search, handleSearch }) => {
    return (
        <form>
            <label>
                find countries <input type="text" onChange={handleSearch} value={search} />
            </label>
        </form>
    )
}

export default FilterCountries