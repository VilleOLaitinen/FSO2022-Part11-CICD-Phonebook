import React from 'react'
import PropTypes from 'prop-types'

const NameFilter = ({ filter, handleFilterChange }) => {

  return (
    <>
      <label htmlFor="filter">filter shown with</label>
      <input id="filter" value={filter} onChange={handleFilterChange} />
    </>
  )
}

NameFilter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func.isRequired
}

export default NameFilter