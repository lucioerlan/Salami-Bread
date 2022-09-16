import { InputField } from './styled';

const Input = ({ ...props }) => (
  <InputField {...props}>{props.label}</InputField>
);

export default Input;
