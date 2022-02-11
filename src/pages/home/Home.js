import { useNavigate } from "react-router-dom"


export const Home = () => {
    let navigate = useNavigate()
    return(
      <>
      <h2>Home</h2>
      <button className='btn btn-primary' onClick={() => navigate("/customers/Mason")}>Customer</button>
      </>
    )
}