import React  from 'react';
import reactDOM from 'react-dom';
import {Counter} from './components/counter'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return <Counter/>;
}

reactDOM.render(<App/>, document.getElementById('root'));