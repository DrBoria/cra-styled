import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button';

import { dark } from 'styles/themes';

import { HeaderSection } from './Header.styles';

type TMenu = {
  id: string;
  title: string;
  url: string;
};

export type THeaderProps = {
  menu: TMenu[];
};

const Header: FC<THeaderProps> = ({ menu }) => (
  <ThemeProvider theme={{ colors: dark }}>
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
