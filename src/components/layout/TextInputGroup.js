import React from 'react';
import PropTypes from 'prop-types';


const TextInputGroup = (props) => {

  const {type, label, name, value, placeholder, onChange, error} = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type= {type}
        name= {name}
        placeholder= {placeholder}
        value={value}
        onChange={onChange}
      />
      <p>{error && {error}}</p>
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;