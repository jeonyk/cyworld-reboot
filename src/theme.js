import { css } from "vue-styled-components";

const Margins = {
  xs: '8px',
  sm: '12px',
  base: '16px',
  md: '24px',
  lg: '32px',
  xl: '',
};

const Paddings = {
  xs: '8px',
  sm: '12px',
  base: '16px',
  md: '24px',
  lg: '32px',
  xl: '',
};

const Fonts = {
  family: {
    base: "'GothicNeoaUni', sans-serif",
  },
  size: {
    xs: '12px',
    sm: '13px',
    base: '14px',
    md: '15px',
    lg: '16px',
    xl: '18px',
    xxl: '24px',
  },
  weight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  lineHeight: {
    sm: '',
    base: 1.4,
    md: '',
    lg: '',
    xl: '',
    xxl: '',
  },
};

const Colors = {
  // cyworld
  cy_orange: '#F36B2B',
  cy_orange_vari: '#d14905',
  cy_blue: '#129FCE',
  cy_blue_vari: '#0C80A7',
  cy_gray: '#3C3C3C',
  cy_black: '#000000',

  // error, disabled color
  error: '#411EC1',
  disabled: 'rgba(0, 0, 0, 0.38)',

  // hover, focus, pressed
  hover_orange: 'rgba(243, 107, 43, 0.04)',
  focus_orange: ' rgba(243, 107, 43, 0.12)',
  pressed_orange: ' rgba(243, 107, 43, 0.08)',
  hover_blue: 'rgba(18, 159, 206, 0.04)',
  focus_blue: ' rgba(18, 159, 206, 0.12)',
  pressed_blue: ' rgba(18, 159, 206, 0.08)',
  hover_gray: 'rgba(0, 0, 0, 0.04)',
  focus_gray: 'rgba(0, 0, 0, 0.12)',
  pressed_gray: 'rgba(0, 0, 0, 0.08)',

  // body contents
  gray_title: 'rgba(0, 0, 0, 0.9)',
  gray_title_sub: 'rgba(0, 0, 0, 0.8)',
  gray_body: 'rgba(0, 0, 0 ,0.7)',

  // line
  gray_light: 'rgba(0, 0, 0, 0.04)',
  gray_silver: 'rgba(0, 0, 0, 0.12)',
  gray_dark: 'rgba(0, 0, 0, 0.5)',

  // text
  text_title: '#1a1a1a',
  text_subtitle: '#333333',
  text_body: '#666666',
  text_subbody: '#808080',
  text_disabled: '#b3b3b3',
};

const Align = css`
  ${props => props.align && css`
    text-align: ${props.align};
  `}
  ${props => props.align === 'both' && css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `}
`;

const Space = css`
  ${props => props.p && css`
      padding: ${props.p}px !important;
  `}
  ${props => props.pt && css`
    padding-top: ${props.pt}px !important;
  `}
  ${props => props.pb && css`
    padding-bottom: ${props.pb}px !important;
  `}
  ${props => props.pl && css`
    padding-left: ${props.pl}px !important;
  `}

  ${props => props.m && css`
    margin: ${props.m}px !important;
  `}
  ${props => props.mt && css`
    margin-top: ${props.mt}px !important;
  `}
  ${props => props.mb && css`
    margin-bottom: ${props.mb}px !important;
  `}
`;

const BackgroundColor = css`
  ${props => props.bg && css`
      background-color: ${props.bg};
  `}
`;

// const Size = {
//   mobile: '425px',
//   tablet: '768px',
//   desktop: '1440px',
// };

// 미디어 쿼리
// const Device = {
//   mobile: `@media only screen and (max-width: ${Size.mobile})`,
//   tablet: `@media only screen and (max-width: ${Size.tablet})`,
//   desktop: `@media only screen and (max-width: ${Size.desktop})`,
// };

// 공통으로 사용되는 변수
const theme = {
  Margins,
  Paddings,
  Fonts,
  Colors,
  Space,
  Align,
  BackgroundColor,
};

export default theme;
