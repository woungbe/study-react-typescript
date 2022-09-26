import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// ThemeProvider 를 사용하고 싶다면. 동일한 구성으로 맞춰야됨 .. 
// 한쪽에 textColor 가 있다면 .. 있어야되는 문제 !!
const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor:"#111",
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lightTheme = {
    textColor: '#111',
    backgroundColor: "whitesmoke",
}

root.render(
    <ThemeProvider theme={darkTheme} >
        <App />
    </ThemeProvider>
);
