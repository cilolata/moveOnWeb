import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

*:focus{
    outline: 0;
}

html, body, #root{
    width: 100%;
    height: 100%;
    -webKit-font-smoothing: antialiased !important;
}

body, input, button{
    font-family: 'Montserrat', sans-serif;

}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

`;
