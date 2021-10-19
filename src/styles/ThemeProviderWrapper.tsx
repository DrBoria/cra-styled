import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './base';

const ThemeProviderWrapper: FC<any> = ({ children }) => {
  const [theme, setTheme] = useState(themes);

  return <ThemeProvider theme={{ ...theme, setTheme }}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
