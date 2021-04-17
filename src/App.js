import './App.css';
import Details from './components/details/Details';
import List from './components/list/List';

const App=()=> {

  return (
      <div className="wrapper">
        <List/>
        <Details/>
      </div>
  );
}

export default App;
