
import { Link, Route, Routes } from "react-router-dom";
import Home from './home';
import Coins from './Coins';
import Coin from './Coin';

const routes = [
    {path:"home", element:<Home />, text:"메인화면"},
    {path:"coins", element:<Coins/>, text:"코인리스트화면"},
    {path:"coin/:coinID/*", element:<Coin />, text:"코인상세화면"},
    
];

const StyleClone = () => {
    return <>
        <h1>만나서 반갑습니다. - 나도 상항 경계를 하니까 !! </h1>
        {
            routes.map((el,i) => <div key={i}><Link to={el.path}>{el.text}</Link></div>)
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

export default StyleClone