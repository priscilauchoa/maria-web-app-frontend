import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Burger from './components/Burger/Burger';
import Contact from './components/Contact/Contact';

const history = createBrowserHistory();

function App() {
  return (
    <div className='App'>
      <Burger />
      <Router history={history}>
        <Routes>
          <Route exact path='/form' element={<Form to='/form' />} />
        </Routes>
        <Routes>
          <Route exact path='/contact' element={<Contact to='/contact' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
