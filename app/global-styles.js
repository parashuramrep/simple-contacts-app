import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    color: #333;
  }

  h1 {
    margin: 20px 0 0;
  }
`;
