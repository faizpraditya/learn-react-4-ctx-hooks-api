import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material"
import { createProduct, getProduct, updateProduct } from "../service/ProductService"
import { useFormik } from 'formik'

import * as Yup from 'yup'

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

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
    },
    validationSchema: Yup.object({
      id : Yup.string().required("This field is required"),
      name : Yup.string().required("This field is required").min(3, "Minimum 3 character"),
    }),
    onSubmit: () => {
      if(params.id){
        handleUpdate();
      }else{
        handleAdd()
      }
    }
  })

  const getDataById = async () => {
    // const res = await axios.get(`http://localhost:3000/products/${params.id}`)
    const res = await getProduct(params.id)
    console.log("res data",res.data);
    setNewData(res.data)
    formik.values.id=res.data.id
    formik.values.name=res.data.name
    formik.setFieldValue(res)
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

  // const handleUpdate = async (data) => {
  const handleUpdate = async () => {
      try {
        setLoading(true)
        // const res = await axios.put(`http://localhost:3000/products`,data)
        // const res = await updateProduct(data)
        const res = await updateProduct(formik.values)
        console.log("res data", res.data);
        setLoading(false)
        navigate("..")
      } catch (error) {
          console.log("error ", error);
      }
  }

  // const handleAdd = async (data) => {
  const handleAdd = async () => {
      try {
        setLoading(true)
        // const res = await axios.post(`http://localhost:3000/products`,data)
        // const res = await createProduct(data)
        const res = await createProduct(formik.values)
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
        <form onSubmit={formik.handleSubmit}>
        <h2>Product Form Update</h2>
            <div className="form-group row">
            <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10">
              {/* handling kalo object ga ada isinya "useState({})", uncontrol form ke control form */}
            {/* <input value={newData.id || ''} type="text" className="form-control" id="inputId" placeholder="Id" name="id" onChange={handleOnChange}/> */}
            <input 
            value={formik.values.id || ''} 
            type="text" 
            className="form-control" 
            id="inputId" 
            placeholder="Id" 
            name="id" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.errors.id && formik.touched.id ? (
            <small className="text-danger">{formik.errors.id}</small>
            ) : null}
            </div>
        </div>
        <br></br>
        <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
            {/* <input value={newData.name || ''} type="text" className="form-control" id="inputName" placeholder="Name" name="name" onChange={handleOnChange}/> */}
            <input 
            value={formik.values.name || ''} 
            type="text" 
            className="form-control" 
            id="inputName" 
            placeholder="Name" 
            name="name" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
            <small className="text-danger">{formik.errors.name}</small>
            ) : null}
            </div>
        </div>
        <br></br>
        {/* <input className="btn btn-primary" type="submit" value="Submit" onClick={() => handleUpdate(newData)}/>  */}
        <input className="btn btn-primary" type="submit" value="Submit"/> 
        </form>
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
        <form onSubmit={formik.handleSubmit}>
        <div className="form-group row">
            <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10">
              {/* handling kalo object ga ada isinya "useState({})", uncontrol form ke control form */}
            {/* <input type="text" className="form-control" id="inputId" placeholder="Id" name="id" onChange={handleOnChange}/> */}
            <input 
            type="text" 
            className="form-control" 
            id="inputId" 
            placeholder="Id" 
            name="id" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.errors.id && formik.touched.id ? (
            <small className="text-danger">{formik.errors.id}</small>
            ) : null}
            </div>
        </div>
        <br></br>
        <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
            {/* <input type="text" className="form-control" id="inputName" placeholder="Name" name="name" onChange={handleOnChange}/> */}
            <input 
            type="text" 
            className="form-control" 
            id="inputName" 
            placeholder="Name" 
            name="name" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
            <small className="text-danger">{formik.errors.name}</small>
            ) : null}
            </div>
        </div>
        <br></br>
        {/* <input className="btn btn-primary" type="submit" value="Submit" onClick={() => handleAdd(newData)}/>  */}
        <input className="btn btn-primary" type="submit" value="Submit"/> 
        </form>
        </div>
    }
    </div>
  )
}