

import React from "react";
import styled from "styled-components"

const Fater = styled.div`
    display:flex;
`;

const Red = styled.div`
background-color: red;
width: 100px;
height:100px;
`;
const Blue = styled.div`
background-color: blue;
width: 100px;
height:100px;
`;

const Text = styled.span`
color:white;
`;

const Sytled01 = () => {
    return <>
    <h1>styled01</h1>
     
     {/* 기존은 이렇게 만들었다고 해요 */}
     <div style={{display:"flex"}}>
        <div style={{backgroundColor:"red", width:"100px", height:"100px"}}></div>
        <div style={{backgroundColor:"blue", width:"100px", height:"100px"}}></div>
     </div>    

     <br /><br /><br /><br /><br />

     {/* 변경은 이렇게 되요  */}
     <Fater>
        <Red> <Text> 안녕하세요 ~ </Text> </Red>
        <Blue />
     </Fater>
    </>
}

export default Sytled01;