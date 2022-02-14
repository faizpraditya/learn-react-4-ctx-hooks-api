import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, getProduct, updateProduct } from "../service/ProductService";


const ProductFormBloc = () => {
    let params = useParams()
    const readable = params.id ? true : false
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const getProductId = async () => {
        try {
            const res = await getProduct(params.id)
            return res
        } catch (error) {
            console.log(error)
        }
    }    

    const handleSubmit = async (values) => {
        try {
            setLoading(true)
            let res = await createProduct(values)
            setLoading(false)
            console.log(res);
            console.log(res.data);
            navigate("/products")
        } catch (error) {
            console.log("error ", error);
        }
    }

    const handleUpdate = async (values) => {
        try {
            setLoading(true)
            let res = await updateProduct(values)
            setLoading(false)
            console.log(res);
            console.log(res.data);
            navigate("/products")
        } catch (error) {
            console.log("error ", error);
        }
    }

    const handleCancel = () => {
        navigate("..")
    }

    return {
        params,
        readable,
        getProductId,
        handleSubmit,
        handleUpdate,
        handleCancel,
        loading,
    }
}

export default ProductFormBloc