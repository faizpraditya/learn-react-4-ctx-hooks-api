import { Outlet, Route, Routes } from "react-router-dom"
import { Customer } from "../pages/customer/Customer"
import { Home } from "../pages/home/Home"
import ProductFormBloc from "../pages/product/bloc/ProductFormBloc"
import ProductListBloc from "../pages/product/bloc/ProductListBloc"
import { ProductFrom } from "../pages/product/component/ProductForm"
import { ProductList } from "../pages/product/component/ProductList"
import { NotFoundPage } from "../pages/shared/PageNotFound"

const AppRouters = () => {
    return(
      <Routes>
      <Route path='/' element={<Home/>} />
      {/* placeholdeer untuk component childnya ke rerender */}
      <Route path='products' element={<Outlet/>} >
        {/* <Route index element={<Product/>}/> */}
        <Route 
        index 
        element={<ProductList bloc={() => ProductListBloc()}/>}
        />
        <Route 
        path='form' 
        element={<ProductFrom bloc={() => ProductFormBloc()}/>}
        />
        <Route 
        path='form/:id' 
        element={<ProductFrom bloc={() => ProductFormBloc()}/>} 
        />
      </Route>
      {/* <Route path='customers' element={<Outlet/>} ></Route> */}
      <Route path='customers/*' element={<Customer/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    )
}

export default AppRouters;