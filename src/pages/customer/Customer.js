import { useNavigate, useParams } from "react-router-dom"

export const Customer = () => {
    let params = useParams()
    let navigate = useNavigate()
    return(
      <>
      <h2>Customer Name : {params.name} </h2>
      <button className='btn btn-primary' onClick={() => navigate("/formz")}>Add Customer</button>
      </>
    )
  }