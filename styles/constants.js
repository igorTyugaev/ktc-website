export const colors = {
  white: '#FFFFFF',
  black: '#101010',
  yellow: '#FFD246',
  turquoise: '#82D2CD',
  pink: '#F0BEC8',
  grey: '#CDD2D2',
  blue: '#3C7DFF',
  red: '#E63C41',
  darkBlue: '#28328C',
  burgundy: '#5F2341',
}

export const fontFamilies = {
  mainFont: '"Steelfish", Arial, sans-serif',
  subFont: '"HelveticaNeue", Arial, sans-serif',
}

export const namesOfBreakpoints = {
  desktopXXLG: 'desktopXXLG',
  desktopXLG: 'desktopXLG',
  desktopLG: 'desktopLG',
  desktopMD: 'desktopMD',
  desktopSM: 'desktopSM',
  tabletLG: 'tabletLG',
  tabletSM: 'tabletSM',
  phone: 'phone',
}

const {
  desktopXXLG,
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
} = namesOfBreakpoints

export const subsequenceOfBreakpoints = [
  desktopXXLG, // больше чем 1920px
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
]

export const breakpointsWidth = {
  [desktopXXLG]: '1920px',
  [desktopXLG]: '1920px',
  [desktopLG]: '1600px',
  [desktopMD]: '1440px',
  [desktopSM]: '1280px',
  [tabletLG]: '1024px',
  [tabletSM]: '768px',
  [phone]: '600px',
}

export const offsets = {
}

export const zindex = {

}
