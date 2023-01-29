import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const TextFieldItem = ({
  id,
  label,
  value,
  name,
  handleChange,
  type,
  checked,
  placeholder,
  required,
  pattern,
}) => {
  return (
    <div>
      {/* {label && <label htmlFor={id}>{label}</label>} */}
      <TextField
        label={label}
        defaultValue="User email"
        id={id}
        value={value}
        checked={checked}
        name={name}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
    </div>
  );
};

export default TextFieldItem;

TextFieldItem.defaultProps = {
  type: 'text',
  required: false,
};

TextFieldItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  //   className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
};
