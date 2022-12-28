import './Register.css';
import bowen from '../../assets/Image/bowen-logo-1-awesome-copy.png';
import { Link } from 'react-router-dom';
const Register = () => {
    return ( 
        <div className="register">
            <div className="image">
            </div>
            <div className="register-fields">
                <img src={bowen} alt="Bowen Logo"></img>
                <p className="welcome login-field-text">Welcome, Create an Account</p>
                <form className='login-form register-form'>
                    <label for="name"></label>
                    <input type="text" placeholder="name" name="name" required></input>
                    <label for="matricnumber"></label>
                    <input type="text" placeholder="matriculation number" name="matricnumber" required></input>
                    {/* <!-- <label for="level"></label>
                    <input type="number" placeholder="level" name="level" className="level" required> --></input> */}
                    <label for="email"></label>
                    <input type="email" placeholder="email" name="email" required></input>
                    {/* <!-- <label for="college"></label>
                    <input type="text" placeholder="college" name="college" required> --> */}
                    
                    <label for="college"></label>
                    <select name="collegelist" id="college" form="field">
                    <option value="0">College of Health Sciences(CHS)</option>
                    <option value="1">College of Computing and Communication Studies(COCCS)</option>
                    <option value="2">College of Law(COLAW)</option>
                    </select>
                    <label for="level"></label>
                    <select name="levellist" id="level" form="field">
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    </select>
                    <label for="parentphone"></label>
                    <input type="tel" placeholder="parent phone number" name="parent phone" required></input>
                    <label for="parentemail"></label>
                    <input type="email" placeholder="parent email" name="parent email" required></input>
                    <label for="password"></label>
                    <input type="password" placeholder="password" name="password" required id="password"></input>
                    <label for="confirmpassword"></label>
                    <input type="password" placeholder="confirm password" name="confirmpassword" required id="pass"></input>
                    <input type="submit" value="register"></input>
                </form>
                <p className="login-text">Already Have an Account? <Link to='/'><span>Sign in</span></Link></p>
            </div>
        </div>
     );
}
 
export default Register;