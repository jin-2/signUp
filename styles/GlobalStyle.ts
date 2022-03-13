import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    color: ${(props) => (props.theme as any).colors.secondary};
    font-size: 14px;
    font-weight: 400;
    font-family: "Apple SD Gothic Neo", Arial, Dotum, sans-serif;
    line-height: 1.25em;
    word-break: keep-all;
    word-wrap: break-word;
  }
  
  html {
    height: 100%;
  }

  body {
    background-color: #fff;
  }

  a {
    display: inline-block;
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  b,
  strong {
    font-weight: 400;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  textarea {
    overflow: auto;
    resize: none;
    border-radius: 0;
    -webkit-box-shadow: none;
    -webkit-appearance: none;
  }

  ul,
  ol,
  li {
    list-style-type: none;
  }

  input,
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    border-radius: 0;
    font-weight: 400;
  }
  
  address,
  em {
    font-style: normal;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }

  button:disabled {
    cursor: default;
  }

  label {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-weight: 400;
    font-size: inherit;
    color: inherit;
  }

  button,
  select,
  textarea {
    line-height: inherit;
  }

  img {
    vertical-align: top;
    border: 0;
  }
  
  input[type="text"]:disabled,
  input[type="email"]:disabled,
  input[type="search"]:disabled,
  input[type="password"]:disabled,
  input[type="number"]:disabled,
  input[type="tel"]:disabled,
  input[type="email"]:disabled {
    background-color: #fff;
  }

  [hidden],
  select::-ms-expand,
  img[src=""] {
    display: none;
  }

  img,
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
  }

  ::-moz-selection,
  ::selection {
    text-shadow: none;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyle;
