import {injectGlobal} from '@emotion/css'
import {resetStyles} from './reset.style'
import {colors} from './constants'

export default injectGlobal`
  ${resetStyles}
  body {
    background-color: ${colors.white};
    scroll-behavior: smooth;
  }

  a {
    color: transparent;
    text-decoration: none;
  }
`
