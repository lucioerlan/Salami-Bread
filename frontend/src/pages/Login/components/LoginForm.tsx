import { FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FullcycleLogo, Mail, Pass } from 'src/assets';
import { Block, Button, ErrorMessage, Input, Form, Logo } from 'src/components';
import { FormValues, OtherProps } from 'src/types/formik';

import { Password } from './Password';

export const LoginForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const { touched, errors, isSubmitting } = props;

  const handleClickPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <Block>
      <Form>
        <Logo src={FullcycleLogo} alt="Logo" />
        <Input
          color="#fff"
          image={Mail}
          type="email"
          name="email"
          placeholder={t('input.email')}
          className={`form-control ${
            touched.email && errors.email ? '-invalid' : ''
          }`}
        />
        <ErrorMessage
          component="div"
          name="email"
          className="error-form"
        />
        <Input
          color="#fff"
          image={Pass}
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder={t('input.password')}
          className={`form-control ${
            touched.password && errors.password ? '-invalid' : ''
          }`}
        />
        <Password
          showPassword={showPassword}
          handleClickPassword={handleClickPassword}
        />
        <ErrorMessage
          component="div"
          name="password"
          className="error-form"
        />
        <Button
          type="submit"
          color="#fff"
          hover="rgb(235, 233, 233)"
          Submitting={isSubmitting}
          disabled={
            isSubmitting ||
            !!(errors.login && touched.login) ||
            !!(errors.password && touched.password)
          }
          label={isSubmitting ?
            t('button.isSubmitting') : t('button.enter')}
        />
      </Form>
    </Block>
  );
};
