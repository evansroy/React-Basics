import logo from './logo.svg';
import './App.css';
import Greet from './components/Greeting';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <Message/>
      {/* <Greet name = "Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name = "Roy" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name = "Kelvin" heroName="Wonder Woman"/>

      <Welcome name = "Bruce" heroName="Batman"/>
      <Welcome  name = "Roy" heroName="Superman"/>
      <Welcome name = "Kelvin" heroName="Wonder Woman"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
