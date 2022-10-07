import "./App.css";
import LoginForm from "./components/LoginForm";

function App({ isLogged, login }) {
  return (
    <div className="App">
      <h1>Welcome to redux-saga example</h1>
      {isLogged ? <button>Logout</button> : <LoginForm login={login} />}
    </div>
  );
}

export default App;
