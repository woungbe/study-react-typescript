import React, { useState } from 'react';
import styled from "styled-components";

interface ContainerProps { 
    bgColor: string
    borderColor:string;
}

const Container = styled.div<ContainerProps>`
    width: 200px; 
    height: 200px; 
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border:1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?:string;
}

interface TestProps {
    searchText?:string;
    selectorText?:string; 
}

const Circle = ({bgColor,borderColor}: CircleProps) =>{

    const [form,setForm] = useState<TestProps>();

    setForm({
        ...form, 
        selectorText:'USDT'
    });

    const [value, setValue]= useState<string|number|object>({})
    setValue("2");
    setValue(2);
    setValue({help:'123'});

    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
}

const Types02 = () => {
    return <div>
        <Circle borderColor="white" bgColor="tomato"></Circle>
        <Circle bgColor="yellow"></Circle>
    </div>
}

export default Types02;


