import "./style.css"

export const SignupView = () => {
    return (
        <div className="wrapper">
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
                </form>
            </div>
        </div>
    );
}