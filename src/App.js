import './App.css';
import Likes from './Likes';


function App(props) {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Likes store={props.store}></Likes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
