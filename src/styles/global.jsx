import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

html, body{
    width: 100%;
    min-height: 100%;
    -webKit-font-smoothing: antialiased !important;
}

button{
    cursor: pointer;
}

`;
