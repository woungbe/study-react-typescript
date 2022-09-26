import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import StyleTest from './styleTest';
import Styled01 from './styled01';
import Styled02 from './styled02';
import Styled03 from './styled03';
import Styled04 from './styled04';
import Styled05 from './styled05';
import Styled06 from './styled06';
import Styled07 from './styled07';


const routes = [
    {path:"styled01", element:<Styled01 />, text:"01-원본-styled 차이"},
    {path:"styled02", element:<Styled02 />, text:"02-styled 상속"},
    {path:"styled03", element:<Styled03 />, text:"03-styled 태그"},
    {path:"styled04", element:<Styled04 />, text:"styled 애니메이션 "},
    {path:"styled05", element:<Styled05 />, text:"styled 애니메이션 - Emoji"},
    {path:"styled06", element:<Styled06 />, text:"styled 전체 복습"},
    {path:"styled07", element:<Styled07 />, text:"styled thema"},
    {path:"test", element:<StyleTest />, text:"styled 임시"},

];

const StyleIndex = () => {
   return <>
{/* <BrowserRouter>
    <Header />
    <Routes>
        <Route path="web/*" element={<Web />} />
    </Routes>
    </BrowserRouter> */}
    <>
    <h1>스타일드 컴포넌트 입니다.</h1>
        <h3>메뉴</h3>
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
   </>;
}

export default StyleIndex