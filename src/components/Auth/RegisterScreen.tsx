import { useNavigate } from "react-router-dom";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="auth__main">
        <div className="auth__box-container">
          <h3 className="auth__title">Register</h3>
          <form>
            <input
              type="text"
              name="Name"
              className="auth__input"
              autoComplete="off"
              placeholder="Name"
            />

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

            <button type="submit" className="btn btn-primary btn-block mb-5">
              Register
            </button>
            <hr />
          </form>
          <a onClick={() => navigate("/auth/login")} className="pointer links">
            Already registered?
          </a>
        </div>
      </div>
    </div>
  );
};
