import { TDefaultTheme, ThemeProvider } from 'styled-components';

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

const Header = ({ menu }: THeaderProps) => (
  <ThemeProvider theme={{ colors: dark } as TDefaultTheme}>
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
