import './form.css'
import icon_list from'./assets/images/icon-list.svg'
function Sign_up() {
  return (
<div className="sign_up">
    <h1>Stay updated!</h1>

    <p>Join 60,000+ product managers receiving monthly updates on:</p>
    <ul>
    <li><img src={icon_list}/>Product discovery and building what matters</li>
    <li><img src={icon_list}/>Measuring to ensure updates are a success</li>
    <li><img src={icon_list}/>And much more!</li>
    </ul>
    <form>
    <label for="email">Email address</label>
    <input id="email" name="email" value="email@company.com"/>
    </form>
    <button >Subscribe to monthly newsletter</button>
    </div>
  );
}

export default Sign_up;

