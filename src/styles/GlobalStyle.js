import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { dir } from 'lib/styled-components-direction';
import {
  lineHight, darkColorsTheme, lightColorsTheme, cssVarColorsNames,
} from './theme';

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
      box-sizing: border-box;
      font-size: ${(props) => props.theme.fontSizes.init};

      --color-background: ${lightColorsTheme.colors.background};
      --color-backgroundAccent: ${lightColorsTheme.colors.backgroundAccent};
      --color-foreground: ${lightColorsTheme.colors.foreground};
      --color-foregroundAccent: ${lightColorsTheme.colors.foregroundAccent};
      --color-foregroundError: ${lightColorsTheme.colors.foregroundError};

      &.dark {
        --color-background: ${darkColorsTheme.colors.background};
        --color-backgroundAccent: ${darkColorsTheme.colors.backgroundAccent};
        --color-foreground: ${darkColorsTheme.colors.foreground};
        --color-foregroundAccent: ${darkColorsTheme.colors.foregroundAccent};
        --color-foregroundError: ${darkColorsTheme.colors.foregroundError};
      }
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        background-color: var(--color-background);
        color: var(--color-foreground);
        font-size: ${(props) => props.theme.fontSizes.base};
        font-family: monospace,monospace;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: "liga", "tnum", "case", "calt", "zero", "ss01", "locl";
        line-height: ${lineHight}
    }
    h1 {
        font-size: ${(props) => props.theme.fontSizes.h1};
    }
    h2 {
        font-size: ${(props) => props.theme.fontSizes.h2};
    }
    h3 {
        font-size: ${(props) => props.theme.fontSizes.h3};
    }
    h4 {
        font-size: ${(props) => props.theme.fontSizes.h4};
    }
    h5 {
        font-size: ${(props) => props.theme.fontSizes.h5};
    }
    h6 {
        font-size: ${(props) => props.theme.fontSizes.h6};
    }
    h1, h2, h3, h4, h5, h6 {
      font-weight: bold;
    }
    h1, h2, h3, h4, h5, h6, ul, p {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    a, a:link, a:visited, a:focus, a:hover, a:active {
        color: var(--color-foregroundAccent);
        text-decoration:none;
        cursor: pointer;
    }
    button {
      color: var(--color-foregroundAccent);
    }
    img {
        width: 100%;
        vertical-align: bottom;
    }
    button {
      cursor: pointer;
      outline: none;
      border: solid 2px ${cssVarColorsNames.foregroundAccent};
      border-radius: 10px;
      background-color: ${cssVarColorsNames.backgroundAccent};
      padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};

      &:hover {
        background-color: ${cssVarColorsNames.foregroundAccent};
        color: #fff;
      }

      svg {
        ${dir`
          margin-right: ${(props) => props.theme.space[3]};
        `}
      }
    }
    ul {
      list-style: none;
    }
    input[type=text] {
      width: 100%;
      padding: 1rem 2rem;
    }
    svg {
      pointer-events: none;
    }
`;

export default GlobalStyle;
