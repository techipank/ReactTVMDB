import React from 'react'

const Search = (props)=>{
    return (
        <input 
            className="form-control w-100 dropdown-toggle" 
            type="text" 
            placeholder="Search Shows" 
            aria-label="Search"
            onChange={props.onChange}
            value={props.value}
            onKeyPress={props.onEnter}
            data-toggle="dropdown"
            onBlur={props.onBlur}
        />
    )
}
export default Search;