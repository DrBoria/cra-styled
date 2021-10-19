import React, { FC } from 'react';

import Button from 'components/Button';
import { TMenu } from 'api/types';

import { HeaderSection } from './Header.styles';

export type THeaderProps = {
  menu: TMenu[];
};

const Header: FC<THeaderProps> = ({ menu }) => (
  <HeaderSection data-theme="dark">
    {menu.map((field, index) => (
      <a href={field.url} key={index}>
        <Button>{field.title}</Button>
      </a>
    ))}
  </HeaderSection>
);

export default Header;
