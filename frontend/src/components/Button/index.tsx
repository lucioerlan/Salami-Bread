import { ButtonWrapper } from './styled';

export type ButtonProps = {
  color?: string;
  disabled?: boolean;
  'data-testid'?: string;
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  hover?: string;
  Submitting?: boolean;
  onClick?: () => void;
};

export const Button = ({ ...props }: ButtonProps) => (
  <ButtonWrapper {...props}>{props.label}</ButtonWrapper>
);

export default Button;
