

import React from "react";
import styled, {keyframes} from "styled-components"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
        border-radius: 0;
    }
    to {
        transform: rotate(360deg);
        border-radius: 100px;
    }
`;

const Emoji = styled.span`
    font-size: 36px;
    &:hover {
            font-size:100px;
        }
    &:active {
        opacity: 0;
    }
`;

const Box = styled.div`
    height:100px;
    width:100px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotateAnimation} 1s linear infinite;
    ${Emoji}
`;

const Styled05 = () => {
    return <>
    <h1>styled 임시 실험</h1>

     {/* 변경은 이렇게 되요  */}
     <Wrapper>
        <Box>
            <Emoji as="span">😎</Emoji>
        </Box>
        <Emoji as="span">🥶</Emoji>
     </Wrapper>
    </>
}

export default Styled05;