import React from 'react'
import { CartContext } from './Context/CartContext'
import { useContext } from 'react'

function SearchBar() {
    const dataContext = useContext(CartContext)
    const { setSearchValue } = dataContext

    return (
        <div className="col-4">
            <input className="form-control form-control-sm" type="text" placeholder="Search for products..." onChange={e => setSearchValue(e.target.value)}>
            </input>
        </div>
    )
}

export default SearchBar
