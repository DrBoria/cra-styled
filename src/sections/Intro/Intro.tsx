import { TDefaultTheme, ThemeProvider } from 'styled-components';

import Button from 'components/Button';
import { Highlighted } from 'components/Typography';

import { dark } from 'styles/themes';

import { TitleSection, Column, IntroSection } from './Intro.styles';

const Intro = () => (
  <ThemeProvider theme={{ colors: dark } as TDefaultTheme}>
    <IntroSection>
      <Column>
        <TitleSection>
          We
          <Highlighted>design</Highlighted>&<Highlighted>develop</Highlighted>
          robust solutions for your products
        </TitleSection>
        <Button>MAKE ORDER</Button>
      </Column>

      {/* Position relative is fix for absolute positioning of image */}
      <Column style={{ position: 'relative' }}>
        <img src='https://images.pexels.com/photos/4406335/pexels-photo-4406335.jpeg' width='400' height='400' alt='' />
      </Column>
    </IntroSection>
  </ThemeProvider>
);

export default Intro;
