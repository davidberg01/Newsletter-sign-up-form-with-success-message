import './form.css'
import icon_list from'./assets/images/icon-list.svg'
import React, { useState } from 'react';
import Sign_up from './sign-up.jsx';
import Sign_end from './sign-end.jsx';
function Form () {
    const [RegisterOn,setRegisterOn] = useState('false');
    const [Email,setEmail] = useState('');
    const changeState = (novoValor,novoEmail) =>{
        setRegisterOn(novoValor);
        setEmail(novoEmail)


    };
    if (RegisterOn == 'true' ){
        return <Sign_end varEmail={Email} changeState={changeState}/>;
        
    };
    return <Sign_up changeState={changeState} />

}

export default Form;

