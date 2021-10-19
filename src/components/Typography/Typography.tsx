import styled, { css } from 'styled-components';
import { TWithBasicElementOffsets, withBasicElementOffsets } from 'styles/helpers';

const basicFont = css`
  font-family: $font-text;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  margin: 0;
`;

/**
 * @visibleName Typography
 */

export const PageTitle = styled.h1`
  ${basicFont}
  ${withBasicElementOffsets}
  
  font-weight: 700;
  text-transform: capitalize;
`;

export const SubTitle = styled.h2<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}

  font-size: 1.3125rem;
  line-height: 1.8125rem;
`;

export const SectionTitle = styled.h3`
  ${basicFont}
  ${withBasicElementOffsets}

  font-weight: 700;
  text-transform: capitalize;
`;

export const PlainText = styled.p<TWithBasicElementOffsets>`
  ${basicFont}
  ${withBasicElementOffsets}
  
  font-size: 1.1875rem;
  line-height: 1.6875rem;
`;

export const Highlighted = styled.span<TWithBasicElementOffsets>``;

export const Label = styled.span<TWithBasicElementOffsets>``;
