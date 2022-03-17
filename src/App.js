import logo from "./logo.svg";
import "./App.css";
import CustomAlert from "./Components/Alert";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CustomAlert name="Giorgio" />
        <MyBadge color="warning" text="Hello My name is Giorgio"></MyBadge>
        <SingleBook />
      </header>
    </div>
  );
}

export default App;
