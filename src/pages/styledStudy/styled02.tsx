
import React from "react";
import styled from "styled-components"

const Fater = styled.div`
    display:flex;
`;

const Text = styled.span`
color:white;
`;


// < {bgColor:string}>

const BoxOne = styled.div< {bgColor?:string|undefined} >`
background-color: ${props => props.bgColor || 'green'};
width: 100px;
height: 100px;
`;

// const Circle = styled.div`
// background-color: ${props => props.bgColor || 'green'};
// width: 100px;
// height: 100px;
// border-radius: 50px;
// `

const Circle = styled(BoxOne)`
    // width:200px; => 상속 받아도 이렇게 변경하는 것도 됩니다. 
    // height:200px; => 하나만 해도 됩니다. 
    border-radius: 100px;
`;

const Styled02 = () => {
    return <>
    <h1>styled 임시 실험</h1>

     {/* 변경은 이렇게 되요  */}
     <Fater>
        <BoxOne bgColor="red"> <Text> 안녕하세요 ~ </Text> </BoxOne>
        <BoxOne bgColor="blue"> <Text> 안녕하세요 ~ </Text> </BoxOne>
        <BoxOne> <Text> 안녕하세요 ~ </Text> </BoxOne>
        <Circle bgColor="yellow" />
     </Fater>
    </>
}


export default Styled02;