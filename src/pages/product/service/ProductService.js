import client from "../../shared/http-client/Client"

const ProductService = () => {
    const getProducts = async (params) => {
        // const response = await axios.get("http://localhost:3000/products", {params})
        const response = await client.get("/products", {params})
        return response
    }
    
    const getProduct = async (id) => {
        // const response = await axios.get(`http://localhost:3000/products/${id}`)
        const response = await client.get(`/products/${id}`)
        return response
    }
    
    const createProduct = async (product) => {
        // const response = await axios.post("http://localhost:3000/products", product)
        const response = await client.post("/products", product)
        return response
    }
    
    const updateProduct = async (product) => {
        // const response = await axios.put("http://localhost:3000/products", product)
        const response = await client.put("/products", product)
        return response
    }
    
    const deleteProduct = async (id) => {
        // const response = await axios.delete(`http://localhost:3000/products/${id}`)
        const response = await client.delete(`/products/${id}`)
        return response
    }

    return{
        getProducts,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
    }
}

export default ProductService