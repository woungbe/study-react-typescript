



const plus = (a:number, b:number) => a+b; 

interface DummyProps {
    text: string 
    value?: string
}

const Dummy = ({text, value = 'helper'} : DummyProps) => {
    return <h1>{text} : {value}</h1>
}

const Types04 = () => {
    const onClick = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    // const onEvents = (e:React.MouseEvent<HTMLButtonElement>)

    return <>
    <h3>전체 베워서 해보자고!!</h3>
    <div>
        이벤트에 대해 더 알고 싶다면.  
        SyntheticEvent  {'<<<'}  이걸 검색하시면 됩니다. 

        <Dummy text={'안녕하세요!!'} />
        <Dummy text={'안녕히 계세요'} value={'그러자!!'} />

        <button onClick={onClick}></button>
    </div>    
    </>
}

export default Types04