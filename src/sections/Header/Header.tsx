import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { TMenu } from 'api/types';

import Button from 'components/Button';

import { HeaderSection } from './Header.styles';

export type THeaderProps = {
  menu: TMenu[];
};

const Header: FC<THeaderProps> = ({ menu }) => (
  <ThemeProvider theme={{ colorTheme: 'dark' }}>
    <HeaderSection>
      {menu.map((field, index) => (
        <a href={field.url} key={index}>
          <Button>{field.title}</Button>
        </a>
      ))}
    </HeaderSection>
  </ThemeProvider>
);

export default Header;
