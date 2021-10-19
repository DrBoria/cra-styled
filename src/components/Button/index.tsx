import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & TWithBasicElementOffsets & TFullWidth;

const Button: FC<TButton> = styled.button<TButton>`
  ${withBasicElementOffsets}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export default Button;
