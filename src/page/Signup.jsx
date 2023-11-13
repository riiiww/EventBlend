import "./signup.css";
import Lottie from 'lottie-react';
import animationLines from "./animation/animationLines.json"
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <header>
      <div className="container3">
        <Lottie animationData={animationLines} className="animationLines" />
        <div className="signupBlock"> 
          <div className="square">
            <div className="signupBlock1">
              <div className="signupBlock2">
                <h1>Логін:</h1>
                <input className="login" type="text" id="log" name="log" required minlength="4" maxlength="15" />
              </div>
              <div className="signupBlock3">
                <h1>E-mail:</h1>
                <input className="Email" type="email" id="email" name="email" required minlength="6" maxlength="35" />
              </div>
              <div className="signupBlock4">
                <h1>Пароль:</h1>
                <input className="password" type="password" id="password" name="password" required minlength="6" maxlength="20" />
              </div>
              <div className="signupBlock5">
                <button>Зареєструватися</button>
              </div>
              <div className="signupBlock6">
                <h1>Вже маєте аккаунт? -</h1>
                <button><Link to="/Signin" className="signinLink">Увійти</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Signup;