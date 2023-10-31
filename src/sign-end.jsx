import './form.css'
import icon_success from './assets/images/icon-success.svg'
function Sign_end (props) {
	var index = props.varEmail.indexOf('@')
	var link  = 'https://' +props.varEmail.slice(index)
	function back () {
		props.changeState('false');
	}
	return(
		<div className='sign_end'>
		<img id='icon_success' src={icon_success} alt="" />
		<h1>
		  Thanks for subscribing!
		</h1>
		<p>
				
	  A confirmation email has been sent to <a href={link} target='_blank'><b>{props.varEmail}</b></a> Please open it and click the button inside to confirm your subscription.
			</p>

  <button onClick={back}>Dismiss message</button>
		</div>
		)

}

export default Sign_end;