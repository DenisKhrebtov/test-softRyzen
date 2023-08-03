import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  * {
    box-sizing: border-box;
    color: ${p => p.theme.text};
  }

  html {
    scroll-behavior: smooth;
  }


  body {
font-family: 'Poppins', sans-serif;
  margin: 0;


  }

a {
  text-decoration: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  width: 100%;
}

button, input {
  font-family: inherit;
}

button {
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: none;
}
`;

export default GlobalStyle;
