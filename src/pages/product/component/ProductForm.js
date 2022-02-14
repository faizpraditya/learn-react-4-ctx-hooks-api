import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material"
import { createProduct, getProduct, updateProduct } from "../service/ProductService"


export const ProductFrom = () => {
  let params = useParams()
  const [newData, setNewData] = useState({})
  const navigate = useNavigate()
  const readable = params.id ? true : false
  const [loading, setLoading] = useState(false)
  
  // const [productF, setProductF] = useState({
  //   isUpdate:false
  // })

  useEffect(() => {
    // if (typeof(params.id) != "undefined") {
    //   setProductF({
    //     isUpdate:true
    //   })
    // } else {
    //   setProductF({
    //     isUpdate:false
    //   })
    // }
    // console.log(readable);
    if(params.id){
      getDataById()
    }
  }, [])

  const getDataById = async () => {
    // const res = await axios.get(`http://localhost:3000/products/${params.id}`)
    const res = await getProduct(params.id)
    console.log("res data",res.data);
    setNewData(res.data)
  }

  const handleOnChange = (event) => {
    if(event.target.name === 'id'){
        setNewData({
            ...newData,
            id:event.target.value
        })
    } else if(event.target.name === 'name'){
        setNewData({
            ...newData,
            name:event.target.value
        })
    }
  }

  const handleUpdate = async (data) => {
      try {
        setLoading(true)
        // const res = await axios.put(`http://localhost:3000/products`,data)
        const res = await updateProduct(data)
        console.log("res data", res.data);
        setLoading(false)
        navigate("..")
      } catch (error) {
          console.log("error ", error);
      }
  }

  const handleAdd = async (data) => {
      try {
        setLoading(true)
        // const res = await axios.post(`http://localhost:3000/products`,data)
        const res = await createProduct(data)
        console.log("res data", res.data);
        setLoading(false)
        navigate("..")
      } catch (error) {
          console.log("error ", error);
      }
  }

  // bikin button untuk put dan post untuk ngehit api

  return(
    <div className="d-flex justify-content-center">
    {
        // productF.isUpdate ? 
        readable ? 
        loading ? 
        <>
        <CircularProgress />
        <h1>Loading...</h1>
        </>
        :
        <div>
        <h2>Product Form Update</h2>
            <div className="form-group row">
            <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10">
              {/* handling kalo object ga ada isinya "useState({})", uncontrol form ke control form */}
            <input value={newData.id || ''} type="text" className="form-control" id="inputId" placeholder="Id" name="id" onChange={handleOnChange}/>
            </div>
        </div>
        <br></br>
        <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
            <input value={newData.name || ''} type="text" className="form-control" id="inputName" placeholder="Name" name="name" onChange={handleOnChange}/>
            </div>
        </div>
        <br></br>
        <input className="btn btn-primary" type="submit" value="Submit" onClick={() => handleUpdate(newData)}/> 
        </div>
        :
        loading ?
        <>
        <CircularProgress />
        <h1>Loading...</h1>
        </>
        :

        <div>
        <h2>Product Form Add</h2>
            <div className="form-group row">
            <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10">
              {/* handling kalo object ga ada isinya "useState({})", uncontrol form ke control form */}
            <input type="text" className="form-control" id="inputId" placeholder="Id" name="id" onChange={handleOnChange}/>
            </div>
        </div>
        <br></br>
        <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="inputName" placeholder="Name" name="name" onChange={handleOnChange}/>
            </div>
        </div>
        <br></br>
        <input className="btn btn-primary" type="submit" value="Submit" onClick={() => handleAdd(newData)}/> 
        </div>
    }
    </div>
  )
}