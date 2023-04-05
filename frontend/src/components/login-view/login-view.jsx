import "./style.css"

export const LoginView = () => {
    return (
        <div className="wrapper">
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
                </form>
            </div>
        </div>
    );
}