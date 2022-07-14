import React from 'react';
import { Inputs } from './styles'


const Input = ({ type, value,setValue, placeholder}) => {
  return (

      <Inputs
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={({target}) => setValue(target.value)}
      />

  );
};

export default Input;
