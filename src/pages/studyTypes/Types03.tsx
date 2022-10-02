import React, { useState } from 'react';
import styled from "styled-components";


const Types03 = () => {
    const [value, setValue] =useState("");

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hi")
    }

    return <>
        <div>
            <form onSubmit={onSubmit}>
                <input 
                onChange={(e:React.FormEvent<HTMLInputElement>)=>{
                    
                    // 1.첫번째 방식 
                    // const { currentTarget:{value}} = e
                    // setValue(value);
                    
                    // 두번째 방식. -- 난 2번째가 더 난거 같은데.
                    setValue(e.currentTarget.value); 
                    // target => currentTarget
                }}
                value={value}                
                type="text" placeholder='username' />
                <button>Log in</button>


            </form>

        </div>    
    </>
}

export default Types03;