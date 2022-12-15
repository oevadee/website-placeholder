import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    letter-spacing: 0;
    color: #000000;
    margin: 0;
    padding: 0;
}
html {
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    background: #ffffff;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: #CDCDCD;
        border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
}
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    word-wrap: break-word;
}
a {
    text-decoration: none;
    color: #BDEBEA;
}
a:active,
a:hover {
    outline-width: 0;
}
svg:not(:root) {
    overflow: hidden;
}
@media only screen and (max-width: 480px) {
    html {
        font-size: 100%;
    }
}
`;
