import "./signup-style.css"
import { Link } from "react-router-dom";

export const SignupView = () => {
    return (
        <div className="signup-wrapper">
            <div className="register-form-wrapper">
                <form className="register-form">
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" id="name" required />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input type="email" id="email" required />
                    <br />
                    <label htmlFor="username">Username:</label>
                    <br />
                    <input type="text" id="username" required minLength="5" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input type="password" id="password" required minLength="8" />
                    <br />
                    <input type="submit" value="Sign up" id="register-button" />
                    <br />
                    <Link to="/login">Already have an account? Log in here.</Link>
                </form>
            </div>
        </div>
    );
}