import React from 'react'
import PropTypes from 'prop-types'
const PersonForm = ({ addName, handleNameChange, handleNumberChange, newName, newNumber }) => {

  return (
    <form onSubmit={addName}>
      <div>
                name:
        <input id='name' value={newName} onChange={handleNameChange} />
      </div>
      <div>
                number:
        <input id='number' value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button id='add' type="submit">add</button>
      </div>
    </form>
  )
}

PersonForm.propTypes = {
  addName: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  newName: PropTypes.string,
  newNumber: PropTypes.number,
}

export default PersonForm