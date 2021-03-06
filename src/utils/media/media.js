import mapValues from 'lodash/mapValues';
import { css } from 'styled-components';
import { BREAKPOINTS } from '../../config.js';

export default mapValues(BREAKPOINTS, breakpoint => ({
  css: (...args) => css`
    @media (min-width: ${breakpoint}rem) {
      ${css(...args)}
    }
  `,
}));
