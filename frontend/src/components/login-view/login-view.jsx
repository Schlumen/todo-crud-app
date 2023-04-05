import "./login-style.css"
import { Link } from "react-router-dom";

export const LoginView = () => {
    return (
        <div className="login-wrapper">
            <div className="login-form-wrapper">
                <form className="login-form">
                    <label htmlFor="username">Username:</label>
                    <br />
                    <input type="text" id="username" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input type="password" id="password" />
                    <br />
                    <input type="submit" value="Log in" id="login-button" />
                    <br />
                    <Link to="/signup">Don't have an account? Sing up here.</Link>
                </form>
            </div>
        </div>
    );
}