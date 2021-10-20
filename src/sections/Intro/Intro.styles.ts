import styled from 'styled-components';
import { BasicSection } from 'components/Containers';
import { PageTitle } from 'components/Typography';
import { Theme } from 'styles/baseTheme';

export const IntroSection = styled(BasicSection)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  ${({ theme: { screens } }: { theme: Theme }) => `
    @media (min-width: ${screens.tablet.width}px) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const TitleSection = styled(PageTitle)`
  ${({ theme: { offsets } }) => `
    margin-bottom: ${offsets.section};
  `}
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ theme: { screens } }: { theme: Theme }) => `
    @media (min-width: ${screens.tablet.width}px) {
      align-items: flex-start;
      text-align: start;
    }
  `}
`;
