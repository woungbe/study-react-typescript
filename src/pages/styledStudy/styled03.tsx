

import React from "react";
import styled from "styled-components"

const Fater = styled.div`
    display:flex;
`;

const Btn = styled.button` /// as=""
  color : white; 
  background-color:  tomato;
  border:0;
  border-radius:15px;
`;

// interface AdditionalProps {
//     readonly size: string;
// }

interface InputPros {
    required?:boolean|undefined;
    maxLength?:Number|undefined;
}

const Input = styled.input.attrs<InputPros>({required:true, maxLength:10})`
    background-color: tomato;
`

const Style03 = () => {
    return <>
    <h1>styled 임시 실험</h1>

     {/* 변경은 이렇게 되요  */}
     <Fater as="header"> 
        <Btn> Login </Btn>
        <Btn as="a" href="/"> Login </Btn>
        <Btn as="div"> Login </Btn>

        <Input required={true} />
        <Input />
        


     </Fater>
    </>
}

export default Style03;