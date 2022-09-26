import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Types01 from './Types01';
import Types02 from './Types02';
import Types03 from './Types03';


const routes = [
    {path:"types01", element:<Types01 />, text:"타입 스크립 + interface"},
    {path:"types02", element:<Types02 />, text:"타입 스크립 + props-?"},
    {path:"types03", element:<Types03 />, text:"타입 스크립 + form"},
];

const TypesIndex = () => {
    return <>
    <h1> 타입스크립 적용하기 </h1>
    {
        routes.map((el,i) => <div><Link to={el.path}>{el.text}</Link></div>)
    }
        <Routes>
            {/* <Route path="styled01" element={<Styled01 />} />
            <Route path="test" element={<StyleTest />} /> */}
            {
                routes.map((el,i) => <Route {...el} key={i} />)
            }
        </Routes>
    

    </>
}

export default TypesIndex;