import './form.css'
import icon_list from'./assets/images/icon-list.svg'
import React, { useState } from 'react';
import illustration_desktop from './assets/images/illustration-sign-up-desktop.svg'
import illustration_mobile from './assets/images/illustration-sign-up-mobile.svg'

function Sign_up(props) {
    
    function isEmail(email) {
        var re = /\S+@\S+\.\S+/;
        var two = /@\S+\.\S+/;
        console.log(two.test(email));
        return re.test(email);
    }
    function validateEmail(){
    const email = document.getElementById("email").value;
    const erro_message = document.getElementById("erro_message");
    const entrada = document.querySelector("input");
        if (isEmail(email) ){
            props.changeState('true',email);

        }
        erro_message.innerHTML ='Valid email required';
        erro_message.style.color ='hsl(4, 100%, 67%)';
        entrada.style.color ='hsl(4, 100%, 67%)';
        entrada.style.backgroundColor ="hsl(4, 100%, 67%,0.2)";
        entrada.style.borderColor ="hsl(4, 100%, 67%)";



    }
    const [valorInput, setValorInput] = useState('');

    const handleChange = (event) => {
    setValorInput(event.target.value);
    }
    return (
    <div className="sign_up">
    <img id='illustration_mobile' src={illustration_mobile}/>
    <div className="sign_up_text">
    <h1>Stay updated!</h1>

    <p>Join 60,000+ product managers receiving monthly updates on:</p>
    <ul>
    <li><img src={icon_list}/>Product discovery and building what matters</li>
    <li><img src={icon_list}/>Measuring to ensure updates are a success</li>
    <li><img src={icon_list}/>And much more!</li>
    </ul>
    <form>
    <div id="erro">
    <label for="email">Email address</label>
    <p id="erro_message"></p>
    </div>
    <input id="email" name="email" onChange={handleChange} defaultValue="email@company.com" />
    </form>
    <button type='button' onClick={validateEmail} >Subscribe to monthly newsletter</button>
    
    </div>

<img id='illustration_desktop' src={illustration_desktop}/>
</div>
    );
}


export default Sign_up;

