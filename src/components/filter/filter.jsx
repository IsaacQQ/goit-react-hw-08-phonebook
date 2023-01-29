import PropTypes from 'prop-types';
import React from 'react';
import { FilterContainer, FilterName } from './Filter.styled';
import TextField from '@mui/material/TextField';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterName>Find contacts by name</FilterName>
      <TextField
        variant="outlined"
        size="small"
        type="text"
        name={value}
        onChange={onChange}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
