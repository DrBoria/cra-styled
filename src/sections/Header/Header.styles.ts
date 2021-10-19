import styled from 'styled-components';

export const HeaderSection = styled.div`
  position: fixed;
  z-index: $z-index-navigation;
  top: 0;
  left: 0;

  display: flex;

  width: 100%;
  height: var(--height-header);

  padding: calc(var(--offset-section) / 2) var(--offset-section);

  background-color: $color-section-background-dark;

  @include desktop {
    padding: calc(var(--offset-section) / 2) calc((100% - var(--width-container-content-max)) / 2);
  }
`;
