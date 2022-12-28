import './Login.css';
import bowen from '../../assets/Image/bowen-logo-1-awesome-copy.png';
import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
        <div className="login">
            <div className="login-image"></div>
            <div className="login-field">
                <img src={bowen} alt="Bowen Logo"></img>
                <p className="login-field-text">Log In with Your Credentials</p>
                <form className='login-form'>
                    <label for="matricnumber"></label>
                    <input type="text" placeholder="matriculation number" name="matricnumber" required></input>
                    <label for="password"></label>
                    <input type="password" placeholder="password" name="password" required></input>
                    <Link to='/home'><input type="submit" name="submit" id="" value="log in"></input></Link>
                </form>
                <p className="login-text-password">Forgot Password?</p>
                <p className="login-text">Do Not Have an Account? <Link to="/register"><span>Register Here</span></Link></p>
            </div>
        </div>
    );
}
 
export default Login;