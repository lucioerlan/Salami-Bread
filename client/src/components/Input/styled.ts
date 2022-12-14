import styled from 'styled-components';
import { Field } from 'formik';

export const InputField = styled(Field)`
  width: 88%;
  padding: 15px 0 15px 42px;
  border: 1px solid ${(props) => (props.color ? props.color : '#24292F')};
  outline: 0;
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : '#24292F')};
  margin: 14px 0;
  font-family: Roboto, sans-serif;
  background: url(${({ image }) => (image ? image : null)}) no-repeat 10px 11px;
  background-size: 24px;
  &:hover {
    border: none;
    border: solid 2px rgb(235, 233, 233);
    color: ${(props) => (props.color ? props.color : '#24292F')};
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => (props.color ? props.color : '#24292F')};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => (props.color ? props.color : '#24292F')};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => (props.color ? props.color : '#24292F')};
  }
`;
