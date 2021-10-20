import styled, { css } from 'styled-components';
import { TWithBasicElementOffsets, withBasicElementOffsets } from 'styles/helpers';

const basicFont = css`
  ${({ theme: { font } }) => `
    font-family: ${font.family.text};
    font-size: ${font.size};
  `}

  font-style: normal;
  font-weight: 500;

  margin: 0;
`;

/**
 * @visibleName Typography
 */

export const PageTitle = styled.h1<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}

  font-weight: 700;
  text-transform: capitalize;

  ${({ theme: { colors, colorTheme, font } }) => `
    color: ${colors[colorTheme].typography.title};
    font-family: ${font.family.title};
  `}
`;

export const SubTitle = styled.h2<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}
  
  font-size: 1.3125rem;
  line-height: 1.8125rem;

  ${({ theme: { colors, colorTheme, font } }) => `
    color:  ${colors[colorTheme].typography.title};
    font-family: ${font.family.title};
  `}
`;

export const SectionTitle = styled.h3<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}

  font-weight: 700;
  text-transform: capitalize;

  ${({ theme: { colors, colorTheme, font } }) => `
    color: ${colors[colorTheme].typography.title};
    font-family: ${font.family.title};
  `}
`;

export const PlainText = styled.p<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}
  
  font-size: 1.1875rem;
  line-height: 1.6875rem;

  ${({ theme: { colors, colorTheme } }) => `
    color: ${colors[colorTheme].typography.plainText}
  `}
`;

export const Highlighted = styled.span<TWithBasicElementOffsets>`
  ${({ theme: { colors, colorTheme } }) => `
    color: ${colors[colorTheme].decoration.highliter}
  `}
`;

export const Label = styled.span<TWithBasicElementOffsets>`
  display: inline-block;

  ${({ theme: { colors, colorTheme, border, offsets } }) => `
    background-color: ${colors[colorTheme].background.label};
    color:  ${colors[colorTheme].typography.label};
    border-radius: ${border.radius};
    
    padding: calc(${offsets.elementContent} / 2);
  `}
`;
