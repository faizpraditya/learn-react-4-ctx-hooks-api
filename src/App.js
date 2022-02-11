import './App.css';
import { BrowserRouter as Router, Link, Outlet, Route, Routes, useNavigate} from 'react-router-dom'
import { Home } from './pages/home/Home';
import { Product } from './pages/product/Product';
import { Customer } from './pages/customer/Customer';
import { ProductFrom } from './pages/product/ProductForm';
import { NotFoundPage } from './pages/shared/PageNotFound';
import { CustomerFrom } from './pages/customer/component/CustomerForm';

const App = () => {
  return (
    <Router>
      <nav>
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
      </nav>

      {/* Configurasi */}
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* placeholdeer untuk component childnya ke rerender */}
        <Route path='products' element={<Outlet/>} >
          <Route index element={<Product/>}/>
          <Route path='form' element={<ProductFrom/>} />
        </Route>
        {/* <Route path='customers' element={<Outlet/>} ></Route> */}
        <Route path='customers/*' element={<Customer/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}


export default App;
