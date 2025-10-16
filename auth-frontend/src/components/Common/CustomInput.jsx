import PropTypes from "prop-types";
import { TextInput, Label } from "flowbite-react";

const CustomInput = ({ name, label, placeholder, type = "text", ...rest }) => {
  return (
    <div className="mb-2 block">
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        id={label}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        {...rest}
      />
    </div>
  );
};

// ✅ Add prop-type validation here
CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default CustomInput;
