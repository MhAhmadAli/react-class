import './App.css';
import MyClass from './Components/MyClass';
import MyFunction from './Components/MyFunction';
import MyEvents from './Components/MyEvents';
import MyForm from './Components/MyForm';
import MyConditional from './Components/MyConditional';

function App() {
  return (
    <div className="App1">
      <MyClass />
      <hr />
      <MyFunction />
      <hr />
      <MyEvents />
      <hr />
      <MyForm />
      <hr />
      <MyConditional userType={'admin'} isLoggedIn={false}/>
    </div>
  );
}

export default App;
