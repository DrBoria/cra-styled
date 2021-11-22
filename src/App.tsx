import Header from 'sections/Header';
import Intro from 'sections/Intro';

import ThemeProviderWrapper from 'styles/ThemeProviderWrapper';

const menuFields = [
  {
    id:    '1',
    title: 'title',
    url:   'url',
  },
  {
    id:    '2',
    title: 'title',
    url:   'url',
  },
  {
    id:    '3',
    title: 'title',
    url:   'url',
  },
  {
    id:    '4',
    title: 'title',
    url:   'url',
  },
];

const App = () => {
  return (
    <ThemeProviderWrapper>
      <Header menu={menuFields} />
      <Intro />
    </ThemeProviderWrapper>
  );
};

export default App;
