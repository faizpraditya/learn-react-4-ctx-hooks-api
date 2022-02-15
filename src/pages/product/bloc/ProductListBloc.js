import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductListBloc = (productService) => {
    let {
        getProducts,
        deleteProduct,
    } = productService()
    
    const [list, setList] = useState([])
    const navigate = useNavigate()

    // contoh: getListProduct
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
            // window confirm harusnya di UI
            //   await axios.delete(`http://localhost:3000/products/${data.id}`)
            await deleteProduct(data.id)
            await getProductsList()
        } catch (error) {
            console.log("error ", error);
        }
    }

    // const add = () => navigate("form")
    const add = () => {navigate("form")}
    // const update = (id) => navigate(`form/${id}`)
    const update = (id) => {navigate(`form/${id}`)}

    return {
        list,
        getProductsList,
        handleDelete,
        add,
        update
    }
}

export default ProductListBloc;