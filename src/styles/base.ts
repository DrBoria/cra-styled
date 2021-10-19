const basicOffset = 8;
const colors = {
  black: '#000000',
  white: '#ffffff',
  gray1: '#F9F9F9',
  gray2: '#F1F1F1',
  gray3: '#C9CFCD',
  gray4: '#A9B6B2',
  gray5: '#5C6864',
  gray6: '#191F1D',
  iconGray: '#888E8C',
  navyGreen: '#38433F',
  navyGreenLight: '#F2F7F5',
  greenExtraDark: '#178C61',
  greenDark: '#28AA7A',
  greenMedium: '#3DC694',
  greenLight: '#5BDBAD',
  greenExtraLight: '#E4F8F0',
  redExtraDark: '#D9432E',
  redDark: '#F2604C',
  redMedium: '#FF7664',
  redLight: '#FF9B8D',
  redExtraLight: '#FFF0EE',
  yellowDark: '#EA8D21',
  yellowMedium: '#FFAD4F',
  yellowLight: '#FCF2E7',
  blueDark: '#2B71DB',
  blueMedium: '#498DF2',
  blueLight: '#E9F0FB',
  purple: '#4a489e',
};

const base: any = {
  fonts: {},
  colors: {
    error: colors.redMedium,
    success: colors.greenMedium,
    warning: colors.yellowMedium,
    background: colors.white,
    border: colors.black,
    separator: colors.gray6,
    text: {
      subTitle: colors.navyGreen,
      title: colors.black,
    },
    icons: {
      primary: colors.navyGreen,
      secondary: colors.redLight,
    },
  },
  offsets: {
    basic: basicOffset,
    section: basicOffset * 2,
    page: basicOffset * 3,

    horizontal: {
      betweenColumns: basicOffset * 2,
    },
    form: {
      inElementHorizontal: basicOffset * 2,
      betweenElements: basicOffset,
      betweenColumns: basicOffset * 2,
    },
  },
  sizes: {
    form: {
      elementHeight: '40px',
      elementWidth: '200px',
    },
    icons: {
      small: '3rem',
      big: '6rem',
    },
  },
  borders: {
    borderSizes: {
      default: '1px',
    },
    borderRadius: {
      default: `${basicOffset * 2}px`,
      formElements: '10px',
    },
  },
};

export type Theme = typeof base;

export type Color = keyof Theme['colors'];

export default base;
