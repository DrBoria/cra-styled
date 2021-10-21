### Typography:

```jsx
import { ThemeProvider } from 'styled-components';
import { dark } from 'styles/themes';

import { PageContainer, BasicSection } from 'components/Containers';
import { PageTitle, Highlighted, SubTitle, SectionTitle, PlainText, Label } from 'components/Typography';

<PageContainer>
  <BasicSection>
    <PageTitle>
      Page Title
      <Highlighted> Page Title Highlighted </Highlighted>
    </PageTitle>
    <br />
    <SectionTitle>Section Title</SectionTitle>
    <br />
    <SubTitle>Sub Title </SubTitle>
    <br />
    <SubTitle>
      Sub Title <Highlighted> Sub Title Highlighted </Highlighted>
    </SubTitle>
    <br />
    <PlainText>Plain Text</PlainText>
    <br />
    <Label>Label Text</Label>
  </BasicSection>

  <ThemeProvider theme={{ colors: dark }}>
    <BasicSection>
      <PageTitle>
        Page Title
        <Highlighted> Page Title Highlighted </Highlighted>
      </PageTitle>
      <br />
      <SectionTitle>Section Title</SectionTitle>
      <br />
      <SubTitle>Sub Title </SubTitle>
      <br />
      <SubTitle>
        Sub Title <Highlighted> Sub Title Highlighted </Highlighted>
      </SubTitle>
      <br />
      <PlainText>Plain Text</PlainText>
      <br />
      <Label>Label Text</Label>
    </BasicSection>
  </ThemeProvider>
</PageContainer>;
```
