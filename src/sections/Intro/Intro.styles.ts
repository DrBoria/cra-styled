import styled from 'styled-components';
import { BasicSection } from 'components/Containers';
import { PageTitle } from 'components/Typography';

export const IntroSection = styled(BasicSection)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @include tablet {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TitleSection = styled(PageTitle)`
  margin-bottom: var(--offset-section);
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @include tablet {
    align-items: flex-start;
    text-align: start;
  }
`;
