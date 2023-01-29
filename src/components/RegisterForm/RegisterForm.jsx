import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import useForm from 'shared/hooks/useForm';

import TextFieldItem from 'shared/components/TextField';

import initialState from './initialState';
import fields from './fields';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const { name, email, password } = state;

  return (
    <Box
      marginTop={5}
      textAlign="left"
      component="form"
      onSubmit={handleSubmit}
    >
      <Stack spacing={3} marginBottom={4}>
        <TextFieldItem
          id={nameId}
          value={name}
          handleChange={handleChange}
          {...fields.name}
        />
        <TextFieldItem
          id={emailId}
          value={email}
          handleChange={handleChange}
          {...fields.email}
        />
        <TextFieldItem
          id={passwordId}
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />
      </Stack>
      <Button type="submit" variant="contained" size="small">
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;

RegisterForm.defaultProps = {
  onSubmit: () => {},
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
