import { useReducer, useEffect } from 'react';

interface AuthState {
  validating: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState: AuthState = {
  validating: true,
  token: null,
  userName: '',
  name: '',
};
type LoginActionPayload = {
  userName: string;
  name: string;
};
type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginActionPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validating: false,
        token: null,
        userName: '',
        name: '',
      };

    case 'login':
      const { userName, name } = action.payload;
      return {
        validating: false,
        token: 'ABC123',
        userName,
        name,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState);
  const timeout = 1500;

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, timeout);
  }, []);

  if (validating) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validating...</div>
      </>
    );
  }

  /**
   * Dispactch action Login
   */
  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        name: 'Carlos',
        userName: 'carlosraez',
      },
    });
  };

  /**
   * Dispactch action Logout
   */
  const logout = () => {
    dispatch({ type: 'logout' });
  };

  /**
   * Returns  unauthenticated
   * @retuns {jsx}
   */
  const getUnauthenticatedUser = () => <div className="alert alert-danger">Unauthenticated...</div>;

  /**
   * Returns success
   * @retuns {jsx}
   */
  const getAuthenticated = () => <div className="alert alert-success">Authenticated as {name}</div>;

  /**
   * Returns Authenticaded div or Unautenticated user
   * @retuns {jsx}
   */
  const getUser = () => (token ? getAuthenticated() : getUnauthenticatedUser());

  /**
   * Returns button Login
   * @retuns {jsx}
   */
  const getButtonLogin = () => (
    <button onClick={login} className="btn btn-primary">
      Login
    </button>
  );

  /**
   * Returns button Logout
   * @retuns {jsx}
   */
  const getButtonLogout = () => (
    <button onClick={logout} className="btn btn-danger">
      Logout
    </button>
  );

  /**
   * Returns button Login or button Logout
   * @retuns {jsx}
   */
  const getButtonsLogin = () => (token ? getButtonLogout() : getButtonLogin());

  return (
    <>
      <h3>Login</h3>
      {getUser()}
      {getButtonsLogin()}
    </>
  );
};
