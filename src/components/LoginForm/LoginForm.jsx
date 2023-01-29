import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import useForm from 'shared/hooks/useForm';
import TextFieldItem from 'shared/components/TextField';
// import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import initialState from './initialState';
import fields from './fields';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const { email, password } = state;
  return (
    <Box
      marginTop={5}
      textAlign="left"
      component="form"
      onSubmit={handleSubmit}
    >
      <Stack spacing={3} marginBottom={4}>
        <TextFieldItem
          id={emailId}
          value={email}
          handleChange={handleChange}
          {...fields.email}
          required
        />

        <TextFieldItem
          id={passwordId}
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />
      </Stack>
      <Button variant="contained" size="small" type="submit">
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;

LoginForm.defaultProps = {
  onSubmit: () => {},
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
