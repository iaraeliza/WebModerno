import React from 'react';
import PropTypes from 'prop-types';
//Icone formulário +
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ handleChange, handleSubimit, novaTarefa }) {
  return (
    <form onSubmit={handleSubimit} action="#" className='form'>
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa} />
      <button type="submit">
        <FaPlus /> </button>
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubimit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string,
}
