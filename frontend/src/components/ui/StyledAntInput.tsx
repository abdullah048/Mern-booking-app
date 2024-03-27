import { FC } from 'react';
import { Input } from 'antd';
import { InputProps, PasswordProps } from 'antd/lib/input';
import styled from 'styled-components';

interface StyledAntInputProps extends InputProps, PasswordProps {
  type: 'text' | 'password';
}

const StyledAntInput: FC<StyledAntInputProps> = ({
  children,
  type,
  ...rest
}) => {
  const renderInput = () => {
    if (type === 'text') {
      return <StyledInput {...rest}>{children}</StyledInput>;
    } else {
      return <StyledInputPassword {...rest}>{children}</StyledInputPassword>;
    }
  };
  return renderInput();
};

export default StyledAntInput;

export const StyledInput = styled(Input)`
  border-radius: 6px;
`;

export const StyledInputPassword = styled(Input.Password)`
  border-radius: 6px;
`;
