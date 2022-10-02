

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin:0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display:flex;
    justify-content:center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color:${props => props.theme.bgColor};
    margin-bottom: 10px;
    padding:20px;
    border-radius:15px;
    a {
        display: flex;
        align-items: center;
        padding:20xp;
        transition:color 0.2s ease-in;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor}
        }
    }
`;


const Title = styled.h1`
    font-size:48px;
    color: ${props => props.theme.textColor};
`;

const Loader = styled.span`
    text-align: center;
    display:block;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    display: flex;
`;


interface CoinInterface {
    id: string, 
    name: string,
    symbol:string, 
    rank:number,
    is_new:boolean,
    is_active:boolean,
    type:string,
}

const Coins = () => {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCoinList = async () => {
        const response = await fetch("https://api.coinpaprika.com/v1/coins");
        const json = await response.json();
        setCoins(json.slice(0,100));
        setLoading(false);
        console.log(json.slice(0,100));
    }

    useEffect(()=>{
        // 즉시실행
        // (async()=>{
        //     fetch("https://api.coinpaperika.com/v1/coins");
        // })()

        fetchCoinList();

    },[]);
    

    return <>
        <Container>
            <Header>
                <Title>Coin 리스트 화면 </Title>    
            </Header>
            {
                loading ? <Loader>Loading...</Loader>
                : <CoinsList>
                    {coins.map(coin => (
                        <Coin key={coin.id}>                        
                        {/* 
                        v6 이전에 보내던 방식임                        
                        <Link to={{
                                pathname:`/coins/coin/${coin.id}`,
                                state: { name: coin.name },
                            }}
                        > */}
                        {/* v6이후 사용하는 방식 */}
                        <Link 
                            to={`/coins/coin/${coin.id}`} 
                            state={{ name: coin.name }}
                        >
                        <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`} />                            
                            {coin.name}</Link>
                    </Coin>
                    ))}
                </CoinsList>
            }            
        </Container>
    </>    
}

export default Coins;