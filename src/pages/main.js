import { Link } from "react-router-dom"

const Main = () =>{
    return <>
        메인에 오신걸 환영합니다.
        <div>
            <div><Link to="/styled/test">1.styled-component</Link></div>            
            <div><Link to="/types/TypesIndex">2.typescript</Link></div>
            <div><Link to="/coins/StyleClone">3.Mini Project coinList </Link></div>
        </div>
    </>    
}

export default Main