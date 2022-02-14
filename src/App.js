import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import AppRouters from './routes/AppRouters';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import ColumnLayout from './layout/ColumnLayout';

const App = () => {
  return (
    <Router>
      <ColumnLayout/>
      {/* <Header/> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/customers">Customer</Link>
          </li>
        </ul>
      </nav> */}
      {/* <Sidebar/> */}

      {/* Configurasi */}
      {/* <AppRouters/> */}
    </Router>
  );
}


export default App;
