export interface FormValues {
  email: string;
  password: string;
}

export interface OtherProps {
  errors: {
    login?: boolean;
    email?: string;
    password?: string;
  };
  touched: {
    login?: boolean;
    email?: boolean;
    password?: boolean;
  };
}
