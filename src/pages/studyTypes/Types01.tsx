import React from 'react';
import Circle from "./Circle";


interface PlayerShape {
    name:string;
    age:number;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name}  ${playerObj.age}`;

sayHello({name:"nico", age:12});
// sayHello({name:"nico", age:12, hello:1});

const Types01 = () => {
    return <div>
        <Circle bgColor="tomato"></Circle>
        <Circle bgColor="yellow"></Circle>
    </div>
}

export default Types01;


