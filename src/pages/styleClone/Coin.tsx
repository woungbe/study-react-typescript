import { useEffect, useState } from "react";
import { useLocation, Routes, Route, useParams, Link, NavLink } from "react-router-dom";
import styled from 'styled-components';

import Price from "./Price";
import Chart from "./Chart";



// 웬진 모르겠으나.  UseParams 에 데이터가 안들어감 
// interface CoinRouterParams {
//     coinID: string;
// }

// props설정할때는 타입을 우선적으로 하도록 해봐 .
type CoinRouterParams = {
    coinID: string;
}


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

const Title = styled.h1`
    font-size:48px;
    color: ${props => props.theme.textColor};
`;

const Loader = styled.span`
    text-align: center;
    display:block;
`;


const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
`;

const OverviewItem = styled.div`
    display: flex;
    flex-direction :column;
    align-items: center;

    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform:uppercase;
        margin-bottom:5px;
    }
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;
const Tab = styled.span<{ isActive: boolean}>`
    text-align:center;
    text-transform:uppercase;
    font-size: 12px;
    font-weight: 400; 
    background-color: rgba(0,0,0,0.5);
    padding: 7px 0px;
    border-radius: 10px;
    color: ${props => props.isActive ? props.theme.accentColor : props.theme.textColor};

    a {
        display: block;
    }

`;


// interface RouteStates {
//     name: string;
// }

interface IInfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_a: string;
}

interface IPriceData {
    id:string,
    name:string,
    symbol:string,
    rank:number,
    circulating_supply:number,
    total_supply:number,
    max_supply:number,
    beta_value:number,
    first_data_at:string,
    last_updated:string,
    quotes:Quotes,
}

interface Quotes {
    USD:{
        ath_date: string
        ath_price: number
        market_cap: number
        market_cap_change_24h:number
        percent_change_1h:number
        percent_change_1y:number
        percent_change_6h:number
        percent_change_7d:number
        percent_change_12h:number
        percent_change_15m:number
        percent_change_24h:number
        percent_change_30d:number
        percent_change_30m:number
        percent_from_price_ath:number
        price:number
        volume_24h:number
        volume_24h_change_24h:number
    }
}


// :id 
const Coin = () => {
    const [loading, setLoading] = useState(true);
    const { coinID } = useParams<CoinRouterParams>();
    const { state } = useLocation();
    const { pathname } = useLocation();
    const location = useLocation()
    // hash: ""
    // key: "jirg7n3w"
    // pathname: "/coins/coin/btc-bitcoin"
    // search: ""
    // state: {name: 'Bitcoin'}

    const [info, setInfo] = useState<IInfoData>();
    const [priceInfo, setPriceInfo] = useState<IPriceData>();

    const [active, setActive] = useState(false);

    

    useEffect(()=>{
        (async ()=>{
            const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinID}`)).json();
            // console.log("infoData : ", infoData);
            setInfo(infoData);
            const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinID}`)).json();
            // console.log("priceData : ", priceData);
            setPriceInfo(priceData);
            setLoading(false);
        })()

        console.log("pathname : ", pathname)
    },[]);


    return <>
     <Container>
            <Header>
                <Title>{ state?.name ? state.name : loading ? "Loging" : info?.name } </Title>    
                {/* <Title>{ state.name ? state.name : loading ? "Login" : (info.name ?? '')  }</Title> */}
            </Header>
            {
                loading ? <Loader>Loading...</Loader>
                : (
                    <>
                    <Overview>
                        <OverviewItem>
                            <span> Rank:</span>
                            <span>{ info?.rank }</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span> Symbol:</span>
                            <span>{ info?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span> OPEN SOURCE:</span>
                            <span>{ info?.open_source ? "Yes":"No"}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>
                        {info?.description}
                    </Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{priceInfo?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{priceInfo?.max_supply}</span>
                        </OverviewItem>
                    </Overview>
                        <div> 여기는 왜 안나오냐?</div>
                        
                        <Tabs>
                            <Tab isActive={pathname === `/coins/coin/${coinID}/price` }><Link to={`/coins/coin/${coinID}/price`}>Price</Link></Tab>
                            <Tab isActive={pathname === `/coins/coin/${coinID}/chart`}><Link to={`/coins/coin/${coinID}/chart`}>Chart</Link></Tab>
                        </Tabs>

                        <Routes>
                            <Route index={true} element={<Price />} />
                            <Route path={`price`} element={<Price />} />
                            <Route path={`chart`} element={<Chart />} />
                        </Routes>                    
                    </>
                ) 
            }
        </Container>
    </>

}
export default Coin;