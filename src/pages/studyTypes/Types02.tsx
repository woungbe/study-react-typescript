
/**
 * 
 * form test
 */

import {useState } from 'react';

const Types02 = () => {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {        
        const {currentTarget:{value}} = event;
        setValue(value);
    }

    const onSumbit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("onSubmit ", value);
    }

    return <>
    <div>
        <h3> typescript + from </h3>
        <form onSubmit={onSumbit}>
            <input value={value}
            onChange={onChange}
            type="text"
            placeholder='username'
            />
            <button>log in </button>
        </form>
    </div>
    
    </>
}

export default Types02;