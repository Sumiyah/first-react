import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className='text-secondary'>Hello Dojo!</h1>
        </div>
        <div className="card-body bg-dark">

        <h3 className="text-danger">Things I need to do:</h3>
        <ul className=' text-light '>
          <li>Get Coffee</li>
          <li>Eat breakfast</li>
          <li>Finish Todays assignments</li>
          <li>Learn React</li>
          <li className='text-primary'>Sleep Early!!!</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
