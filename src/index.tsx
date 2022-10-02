import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider,createGlobalStyle } from 'styled-components';
import App from './App';

import { lightTheme, darkTheme } from './theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// 글로벌로 적용하고 싶을때 처리하는 방법 !! 
const GloabalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
    * {
        box-sizing: border-box;
    }
    body {
        color:red;
        font-family:'Source San pro', sans-serif;
        background-color: ${props => props.theme.bgColor};
        color:${props => props.theme.textColor};
    }
    a {
        text-decoration: none;
        color:inherit;
    }
`;


// ThemeProvider 를 사용하고 싶다면. 동일한 구성으로 맞춰야됨 .. 
// 한쪽에 textColor 가 있다면 .. 있어야되는 문제 !!
// const darkTheme = {
//     textColor: "whitesmoke",
//     backgroundColor:"#111",
// }

// const lightTheme = {
//     textColor: '#111',
//     backgroundColor: "whitesmoke",
// }

root.render(
    <ThemeProvider theme={lightTheme} >
        <GloabalStyle />
        <App />
    </ThemeProvider>
);
