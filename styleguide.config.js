const path = require('path');
const isReactProp = require('is-react-prop').default;

const NO_FILTER_PROPS = ['width', 'height', 'margin', 'padding', 'color'];

module.exports = {
  // Fix for fixed element to be in block
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Helvetica',
      },
    },
    Playground: {
      preview: {
        position: 'relative',
        transform: 'translate3d(0, 0, 0)',
        outline: '1px solid #661',
      },
    },
  },

  // Fix for displaying only component props
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
  updateDocs(docs, file) {
    return {
      ...docs,
      props: docs.props.filter((p) => {
        const isDefaultProp = isReactProp(p.name);
        return (
          // should be with description
          p.description &&
          // not default prop
          (!isDefaultProp ||
            // if default prop
            (isDefaultProp &&
              // should be with @override tag
              (p.tags.hasOwnProperty('override') ||
                // or should be listed at NO_FILTER_PROPS
                NO_FILTER_PROPS.includes(p.name))))
        );
      }),
    };
  },

  // Sections that is displayed in styleguidelist
  sections: [
    {
      name: 'Containers',
      components: ['src/components/Containers/Page.ts', 'src/components/Containers/Section.ts'],
    },
    {
      name: 'Elements',
      components: 'src/components/Elements/**/index.ts*',
    },
    {
      name: 'Typography',
      components: [
        'src/components/Typography/Basic.ts',
        'src/components/Typography/Table.ts',
        'src/components/Typography/Graphics.ts',
      ],
    },
    {
      name: 'Modals',
      components: 'src/components/Modals/**/index.ts*',
    },
    {
      name: 'Charts',
      components: 'src/components/Charts/**/index.ts*',
    },
  ],

  // Theme provider
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/ThemeProviderWrapper.tsx'),
  },
};
