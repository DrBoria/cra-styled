import styled from 'styled-components';
import { Theme } from 'styles/baseTheme';

export const HeaderSection = styled.div`
  ${({ theme: { colors, offsets, zIndex, elements, screens } }: { theme: Theme }) => `
    position: fixed;
    z-index: ${zIndex.navigation};
    top: 0;
    left: 0;

    display: flex;

    width: 100%;
    height: ${elements.header.height};

    background-color: ${colors.background.section};

    padding: calc(${offsets.section} / 2) ${offsets.section};


    @media (min-width: ${screens.desktop.width}px) {
      padding: calc(${offsets.section} / 2) ${offsets.container};
    }
  `}
`;
