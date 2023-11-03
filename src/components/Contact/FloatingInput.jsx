/* eslint-disable react/prop-types */
import {
  ErrorMsg,
  Input,
  InputContainer,
  Label,
  TextArea,
} from "./Contact.style";

const FloatingInput = ({
  register,
  label,
  type,
  name,
  pattern = "",
  errors,
}) => {
  return (
    <InputContainer>
      {type === "text" || type === "email" ? (
        <Input
          type={type}
          name={name}
          placeholder=" "
          {...register(name, { required: true, pattern })}
        />
      ) : (
        <TextArea
          placeholder=" "
          name={name}
          {...register(name, { required: true })}
          cols="30"
          rows="10"
        />
      )}

      <Label htmlFor={name}>{label}</Label>
      {errors[name] && errors[name].type === "required" && (
        <ErrorMsg>{label} is required*</ErrorMsg>
      )}
      {errors[name] && errors[name].type === "pattern" && (
        <ErrorMsg>Invalid {name} format*</ErrorMsg>
      )}
    </InputContainer>
  );
};
export default FloatingInput;
