import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"


export const ProductFrom = () => {
    const [newData, setNewData] = useState({
      // id:'',
      // name:'',
    })
    // let params = useLocation()
    // console.log(params)
    let params = useParams()
    console.log(params)

    useEffect(() => {
      // dikasih if else
      getDataById()
    }, [])

    const getDataById = async () => {
      const res = await axios.get(`http://localhost:3000/products/${params.id}`)
      console.log("res data",res.data);
      setNewData(res.data)
    }

    const handleOnChange = (event) => {
      setNewData({})
      event.preventDefault()
    }

    const handleUpdate = async (data) => {
        try {
          const res = await axios.put(`http://localhost:3000/products`)
          console.log("res data", res.data);
        } catch (error) {
            console.log("error ", error);
        }
    }

    // bikin button untuk put dan post untuk ngehit api

    return(
      <>
      <div>
      <h2>Product Form</h2>
          <div className="form-group row">
          <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
          <div className="col-sm-10">
            {/* handling kalo object ga ada isinya "useState({})", uncontrol form ke control form */}
          <input value={newData.id || ''} type="text" className="form-control" id="inputId" placeholder="Id"/>
          </div>
      </div>
      <br></br>
      <div className="form-group row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
          <input value={newData.name || ''} type="text" className="form-control" id="inputName" placeholder="Name"/>
          </div>
      </div>
      <br></br>
      <input className="btn btn-primary" type="submit" value="Submit" onClick={() => handleUpdate(newData)}/> 
      </div>
      </>
    )
  }