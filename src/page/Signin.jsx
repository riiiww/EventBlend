import "./signin.css"
import Lottie from 'lottie-react';
import animationLines from "./animation/animationLines.json"

function Signin() {
    return(
        <header>
            <div className="container4">
                <Lottie animationData={animationLines} className="animationLines" />
                <div className="signinBlock">
                    <div className="square1">
                        <div className="signinBlock1">
                            <div className="signinBlock2">
                                <h1>E-mail:</h1>
                                <input className="Email" type="email" id="email" name="email" required minlength="6" maxlength="35" />
                            </div>
                            <div className="signinBlock3">
                                <h1>Пароль:</h1>
                                <input className="password" type="password" id="password" name="password" required minlength="6" maxlength="20" />
                            </div>
                            <div className="signinBlock4">
                                <button>Увійти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Signin;