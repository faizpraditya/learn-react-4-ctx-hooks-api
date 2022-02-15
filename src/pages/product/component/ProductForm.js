import { useEffect } from "react"
import { useFormik } from 'formik'

import * as Yup from 'yup'

export const ProductFrom = ({bloc}) => {
  const {
    params,
    readable,
    getProductId,
    handleSubmit,
    handleUpdate,
    handleCancel,
    loading,
  } = bloc();

  useEffect(() => {
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
        handleUpdate(formik.values);
      }else{
        handleSubmit(formik.values)
      }
    }
  })

  const getDataById = async () => {
    const res = await getProductId()
    console.log("res data",res.data);
    formik.values.id = res.data.id
    formik.values.name = res.data.name
    formik.setFieldValue()
  }

  return(
    <div className="">
    {
        readable ? 
        loading ? 
        <>
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
        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        <input className="btn btn-primary" type="submit" value="Submit"/> 
        </form>
        </div>
        :
        loading ?
        <>
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
        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        <input className="btn btn-primary" type="submit" value="Submit"/> 
        </form>
        </div>
    }
    </div>
  )
}