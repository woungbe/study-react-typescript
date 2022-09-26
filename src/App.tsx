import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {allRouters} from './router/allRouters';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Main />} ></Route>
        <Route path="/styled" element={<Main />} ></Route> */}
        {
          allRouters.map((el,key) =>   <Route {...el} key={key} />
            // <Route path={el.path} Component={()=> el.element } /> // v5
            // <Route path={el.path} element={el.element} /> // v6          
          )
        }
    </Routes>    
    </BrowserRouter>

  );
}

export default App;
