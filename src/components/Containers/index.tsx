import styled from 'styled-components';
import { Theme } from 'styles/baseTheme';
import { TWithBasicElementOffsets, withBasicElementOffsets, TFullWidth, withFullWidth } from 'styles/helpers';

type IContainersProps = {
  className?: string;
  style?: any;
};

type ISectionProps = {
  noHeightLimit?: boolean;
} & IContainersProps & { theme: Theme };

/**
 * @visibleName Containers
 */

// Use this conteiner for wrapping any section on page
// No usage restrictions
export const BasicSection = styled.div<ISectionProps>`
  ${({ noHeightLimit, theme: { screens, elements, colors, colorTheme, offsets } }) => `
    padding: ${offsets.section};

    background-color: ${colors[colorTheme].background.section};

    max-height: calc(${screens.desktop.height} - ${elements.header.height});
    height: calc(${screens.mobile.height}px - ${elements.header.height});

    @media (min-width: ${screens.tablet.width}) {
      height: calc(${screens.tablet.height} - ${elements.header.height});
    }
    @media (min-width: ${screens.desktop.width}) {
      height: calc(${screens.desktop.height} - ${elements.header.height});
      padding: ${offsets.section} ${offsets.container};
    }

    ${
      noHeightLimit
        ? `
          height: auto;
          min-height: calc(${screens.tablet.height} - ${elements.header.height});
          max-height: unset;
        `
        : ''
    }
  `}
`;

// Use this container for wrapping all page content
// Should be used only once per page
export const PageContainer = styled.div`
  ${({ theme: { elements, offsets } }) =>
    `
      padding: ${offsets.page};
      padding-top: ${elements.header.height};
      min-height: 100vh;
    `}
`;

export const HeadingContainer = styled.div<TWithBasicElementOffsets & TFullWidth>`
  width: 40%;
  text-align: left;

  ${withFullWidth}
  ${withBasicElementOffsets}
`;
