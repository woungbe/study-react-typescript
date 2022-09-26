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
    text?:string;
}

const Circle = ({bgColor,borderColor, text="hi"}: CircleProps) =>{
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>
}
interface PlayerShape {
    name:string;
    age:number;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name}  ${playerObj.age}`;

sayHello({name:"nico", age:12});
// sayHello({name:"nico", age:12, hello:1});

const Types01 = () => {
    return <div>
        <Circle borderColor="white" bgColor="tomato"></Circle>
        <Circle bgColor="yellow" text="안녕"></Circle>
    </div>
}

export default Types01;


