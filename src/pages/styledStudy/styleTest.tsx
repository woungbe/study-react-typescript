
import React from "react";
import styled from "styled-components";


const Title = styled.h1`
 color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width:100vw;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
`;


const StyledDefault = () => {
    return <>
    <h1>styled 임시 실험</h1>
    <Wrapper>
        <Title>안녕하세요 ~~ </Title>
    </Wrapper>
    </>
}

export default StyledDefault;