import { useEffect } from "react"

export const ProductList = ({bloc}) => {
  const {list, getProductsList, handleDelete, add, update} = bloc()
  useEffect(() => {
      getProductsList()
  }, []) 

  const handleDel = (data) => {
    // window confirm harusnya di UI
    if(window.confirm(`Are you sure to delete ${data.name}?`)) {
        handleDelete(data)
    }
  }

  return(
      <>
      <div>
          <h2>Product List</h2>
          <button
          type="button"
          className="btn btn-success" 
        //   onClick={() => navigate("form")}
          onClick={() => add()}
          > Add Product </button>
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
                            //   onClick={() => navigate(`form/${product.id}`)}
                            onClick={() => update(product.id)}
                              >
                                  Update
                              </button>
                              <button
                              className="btn btn-danger"
                              onClick={() => handleDel(product)}
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