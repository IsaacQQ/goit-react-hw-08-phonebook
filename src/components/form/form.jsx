import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { InputForm, FormField } from './form.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useForm from 'shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';

const Form = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const nameId = useMemo(() => nanoid(), []);
  const numberId = useMemo(() => nanoid(), []);

  const { name, number } = state;

  return (
    <InputForm onSubmit={handleSubmit}>
      <FormField>
        <TextField
          id={nameId}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          {...fields.name}
        ></TextField>
      </FormField>
      <FormField>
        <TextField
          id={numberId}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          onChange={handleChange}
          {...fields.number}
        ></TextField>
      </FormField>
      <Button type="submit" variant="contained" size="small">
        Add contact
      </Button>
    </InputForm>
  );
};

export default Form;

Form.defaultProps = {
  onSubmit: () => {},
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
