import { Outlet, useNavigate } from "react-router-dom"


export const Product = () => {
  let navigate = useNavigate()
    return(
      <>
      <h2>Product</h2>
      {/* <button className='btn btn-primary' onClick={() => navigate("/products/form")}>Product Form</button> */}
      <button className='btn btn-primary' onClick={() => navigate("form")}>Product Form</button>
      {/* form akan muncul di bawah button */}
      {/* <Outlet/> */}
      </>
    )
  }