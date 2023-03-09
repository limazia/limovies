import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
//import '../assets/css/responsive.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    height: 100vh;
  }

  body {
    background: #f2f2f2;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
  }

  button:hover,
  button:focus,
  button:active,
  button:active:focus:not(:disabled):not(.disabled),
  button:focus,
  button:active,
  button:hover {
    box-shadow: none !important;
    outline: 0 !important;
  }

  .form-control {
    border-color: #00C0FF;
  }

  .form-control:focus {
    border-color: #00C0FF;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .btn:hover,
  .btn:focus,
  .btn:active,
  .btn:active:focus:not(:disabled):not(.disabled),
  .btn:focus,
  .btn:active,
  .btn:hover {
    box-shadow: none !important;
    outline: 0 !important;
  }

  ::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background: #FFFFFF;
  }

  ::-webkit-scrollbar-thumb {
    background: #9466FF;
  }
`;