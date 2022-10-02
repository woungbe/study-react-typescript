import styled from "styled-components";


const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
    color:${props => props.theme.textColor};
`;

const Types03 = () => {

    return <>
    <h3> typescript + thema</h3>
    <Container>
        <H1> 안녕하세요 !! </H1>
    </Container>
    
    
    </>
}

export default Types03