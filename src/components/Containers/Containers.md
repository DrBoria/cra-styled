### Containers:

```jsx
import { PageContainer, BasicSection, HeadingContainer } from 'components/Containers';
import { PlainText, SectionTitle } from 'components/Typography';

<PageContainer>
  <BasicSection>
    <SectionTitle>Light theme</SectionTitle>
    <PlainText>Page container got offset from top for header</PlainText>
  </BasicSection>

  <BasicSection type="dark">
    <HeadingContainer>
      <SectionTitle withOffset>Dark theme</SectionTitle>
      <PlainText>Basic section + heading container usage</PlainText>
    </HeadingContainer>
  </BasicSection>
</PageContainer>;
```
