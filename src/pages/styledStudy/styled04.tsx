

import React from "react";
import styled, {keyframes} from "styled-components"

const Wrapper = styled.div`
    display: flex;
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


const Box = styled.div`
    height:100px;
    width:100px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotateAnimation} 1s linear infinite;
    span {
        font-size: 36px;
        &:hover {
            font-size:100px;
        }
        &:active {
            opacity: 0;
        }
    }
/* 
    // 이렇게 사용해야도 됨 
    span:hover {

    }
    span:active {

    } */

`;


const Styled04 = () => {
    return <>
    <h1>styled 임시 실험</h1>

     {/* 변경은 이렇게 되요  */}
     <Wrapper>
        <Box>
            <span>🥰</span>
        </Box>
     </Wrapper>
    </>
}

export default Styled04;