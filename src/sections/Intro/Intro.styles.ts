import styled from 'styled-components';

import { BasicSection } from 'components/Containers';
import { PageTitle } from 'components/Typography';

import { devices } from 'styles/baseTheme';

export const IntroSection = styled(BasicSection)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TitleSection = styled(PageTitle)`
  margin-bottom: ${({ theme }) => theme.offsets.section};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  text-align: center;
  @media ${devices.tablet} {
    align-items: flex-start;

    text-align: start;
  }
`;
