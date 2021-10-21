import React, { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import themes, { Theme } from './baseTheme';

const MediaProvider = styled.div`
  ${({ theme: { variables, screens, offsets } }: { theme: Theme }) => `
    --border-radius: ${variables.border.radius}px;
    --border-size: ${variables.border.size}px;

    --container-offset: calc((100% - ${screens.desktop.width}px - ${offsets.section}) / 2);

    --height-header: ${variables.header.height.mobile}px;
    --offset-section: ${variables.offsets.section.mobile}px;
    --offset-between-elements: ${variables.offsets.betweenElements.mobile}px;
    --offset-element-content: ${variables.offsets.elementContent.mobile}px;

    @media (min-width: ${screens.tablet.width}px) {
      --height-header: ${variables.header.height.tablet}px;
      --offset-section: ${variables.offsets.section.tablet}px;
      --offset-between-elements: ${variables.offsets.betweenElements.tablet}px;
      --offset-element-content: ${variables.offsets.elementContent.tablet}px;
    }

    @media (min-width: ${screens.desktop.width}px) {
      --height-header: ${variables.header.height.desktop}px;
      --offset-section: ${variables.offsets.section.desktop}px;
      --offset-between-elements: ${variables.offsets.betweenElements.desktop}px;
      --offset-element-content: ${variables.offsets.elementContent.desktop}px;
    }
`}
`;

const ThemeProviderWrapper: FC<any> = ({ children }) => {
  const [theme, setTheme] = useState(themes);

  return (
    <ThemeProvider theme={{ ...theme, setTheme }}>
      <MediaProvider>{children}</MediaProvider>
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
