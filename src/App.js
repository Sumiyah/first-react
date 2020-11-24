import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className='text-secondary'>Hello Dojo!</h1>
      <h3 className="text-danger">Things I need to do:</h3>
      <ul className='bg-dark text-light '>
        <li>Get Coffee</li>
        <li>Eat breakfast</li>
        <li>Finish Todays assignmnets</li>
        <li>Learn React</li>
        <li className='text-primary'>Sleep Early!!!</li>
      </ul>
    </div>
  );
}

export default App;
