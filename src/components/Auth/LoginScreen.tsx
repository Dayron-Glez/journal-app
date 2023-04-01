import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <div>
          <h3 className="auth__title">Login</h3>
          <form>
            <input
              type="text"
              name="email"
              className="auth__input"
              autoComplete="off"
              placeholder="Email"
            />

            <input
              type="password"
              name="password"
              className="auth__input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
            <hr />
            <div className="auth__social-networks">
              <p>Link with social networks</p>
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google button"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
          </form>
          <a
            onClick={() => navigate("/auth/register")}
            className="pointer links"
          >
            Create new account
          </a>
        </div>
      </div>
    </div>
  );
};
