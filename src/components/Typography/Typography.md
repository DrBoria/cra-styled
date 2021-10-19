### Typography:

```jsx
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

  <BasicSection type="dark">
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
</PageContainer>;
```
