import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerFrom } from "./component/CustomerForm"
import { CustomerList } from "./component/CustomerList"


export const Customer = () => {
    return(
      <Routes>
          {/* <Route path='customers' element={<Customer/>} > */}
          <Route path="/" element={<Outlet/>}>
            <Route index element={<CustomerList/>} />
            <Route path='form' element={<CustomerFrom/>}/>
            <Route path=':name' element={<CustomerList/>} />
        </Route>
      </Routes>
    )
  }