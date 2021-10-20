import styled from 'styled-components';
import { Theme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TButton = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  type?: 'navigation' | 'menu';
  theme: Theme;
} & TWithBasicElementOffsets &
  TFullWidth;

const Button = styled.button<TButton>`
  ${({ type = 'navigation', theme: { border, offsets, colors, colorTheme } }) => `
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    font-size: 1rem;
    outline: inherit;
    padding: ${offsets.elementContent};
    border-radius: ${border.radius};

    ${
      type === 'navigation'
        ? `
          border: ${border.size} solid ${colors[colorTheme].decoration.border};
          color: ${colors[colorTheme].typography.navigationText};
          text-transform: uppercase;
        `
        : ''
    }

    ${
      type === 'menu'
        ? `
          border: none;
          color: ${colors[colorTheme].typography.navigationText};
          text-transform: uppercase;
        `
        : ''
    }

  `}

  ${withBasicElementOffsets}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export default Button;
