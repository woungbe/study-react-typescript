
import React from "react";
import Main from "../pages/main";
import StyleIndex from "../pages/styledStudy/index";
import TypesIndex from "../pages/studyTypes";
import StyleClone from '../pages/styleClone/index';

const allRouters = [
    { path:"/", element:<Main /> },    
    { path:"/styled/*", element:<StyleIndex />},
    { path:"/types/*", element:<TypesIndex />},
    { path:"/coins/*", element:<StyleClone />},

];

// 방법1 
// eslint-disable-next-line no-lone-blocks
{/* <Route path="web/*" element={<Web />}>
        <Route path=":id" element={<WebPost />} />
    </Route> */}

// 방법2
// eslint-disable-next-line no-lone-blocks
{/* 
    <Route path="web/*" element={<Web />} /> 

    Web.js   

    <BrowserRouter> 
      <Routes>
        <Route path=":id" element={<WebPost />} />
      </Routes>
    </BrowserRouter>
*/}


export {allRouters};


