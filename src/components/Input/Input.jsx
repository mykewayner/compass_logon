import React from 'react';
import { Inputs } from './styles'
import PropTypes from 'prop-types';


const Input = ({ type, value,setValue, placeholder, errorColor}) => {
  return (

      <Inputs
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={({target}) => setValue(target.value)}
        errorColor={errorColor}
      />

  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  errorColor: PropTypes.bool,
}


Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  errorColor: false,
}
