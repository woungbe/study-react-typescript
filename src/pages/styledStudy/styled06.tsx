
import React from "react";
import styled, { keyframes } from "styled-components";
import Sytled01 from './styled01';


// props 에 있는 내용을 정리해서 나와야됨 !! 
const Box = styled.div< {bgColor:string}>`
    background-color: ${props => props.bgColor};
    width: 100px;
    height: 100px;
`;

const Circle = styled(Box)`
    border-radius: 50px;
`;

const Input = styled.input.attrs({require:true, size:5})`
    border-color:1px solid greenyellow;
`;

const animation = keyframes`
    from {
        color:tomato;
    }
    to {
        color:teal;
    }
`;

const Btn = styled.button`
    animation: ${animation} 0.5s infinite;
`;

const Title = styled.h1`
   color:blue;
   &:hover {
    color:yellowgreen;
    font-size:40px;
   }
`;


const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height:100vh;
    h1 {
        color:tomato;
        &:hover {
            color:yellow
        }
    }
    h2 {
        color:red;
        &:hover {
            color:green;
        }
    }
    ${Title}
`

const Styled06 = () => {
    return <>
        <h1>styled 임시 실험</h1>
        <Box bgColor="red" ></Box>
        <Circle bgColor="blue"></Circle>
        <Btn as="button">Login </Btn>
        <Btn as="button">Logout</Btn>
        <Btn as="a" href="/this">Logout</Btn>

        <Wrapper>
            <h1>Hello</h1>
            <h2>Hello</h2>
            <Title> 힘들다..  그만할까? ㅋㅋㅋ </Title>
        </Wrapper>
    </>
}

export default Styled06;