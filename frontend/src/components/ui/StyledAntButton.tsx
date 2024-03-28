import { CSSProperties, FC } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';

interface StyledAntButtonProps extends ButtonProps {
  style?: CSSProperties;
  htmlType: 'button' | 'reset' | 'submit';
}

const StyledAntButton: FC<StyledAntButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default StyledAntButton;

export const StyledButton = styled(Button)`
  border-radius: 6px;
`;
