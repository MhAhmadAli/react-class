import logo from './logo.svg';
import './App.css';
import MyClass from './Components/MyClass';
import MyFunction from './Components/MyFunction';
import MyEvents from './Components/MyEvents';
import MyForm from './Components/MyForm';

function App() {
  return (
    <div className="App">
      <MyClass />
      <hr />
      <MyFunction />
      <hr />
      <MyEvents />
      <hr />
      <MyForm />
    </div>
  );
}

export default App;
