import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { deleteProduct, getProducts } from "../service/ProductService"
import { ProductFrom } from "./ProductForm"


export const ProductList = () => {
  const [list, setList] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
      getProductsList()
  }, []) // supaya menghentikan rerender yang berulang2

  // pakai async await agar getProductsList nunggu axios.get dapet data
  const getProductsList = async () => {
      try {
        //   const response = await axios.get("http://localhost:3000/products")
        const response = await getProducts()
        //   console.log(response);
        //   console.log(response.data.products);
          setList(response.data.products)
      } catch (error) {
          console.log(error);
      }
  }

  const handleDelete = async (data) => {
      try {
          if(window.confirm(`Are you sure to delete ${data.name}?`)) {
            //   await axios.delete(`http://localhost:3000/products/${data.id}`)
            await deleteProduct(data.id)
            await getProductsList()
          }
      } catch (error) {
          console.log("error ", error);
      }
  }

  return(
      <>
      <div>
          <h2>Product List</h2>
          <button type="button" className="btn btn-success" onClick={() => navigate("form")}> Add Product </button>
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Id</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
                  {
                  list.map((product, index) => {
                      return (
                        <tr key={product.id}>
                          <td>{index + 1}</td>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>
                              {/* <button
                              className="btn btn-success"
                              onClick={() => navigate("form",{state:product})}
                              >
                                  Update
                              </button> */}

                              <button
                              className="btn btn-success"
                              onClick={() => navigate(`form/${product.id}`)}
                              >
                                  Update
                              </button>
                              <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(product)}
                              >
                                  Delete
                              </button>
                          </td>
                        </tr>
                      );
                    })
                  }
              </tbody>
          </table>
      </div> 
      </>
  )
}