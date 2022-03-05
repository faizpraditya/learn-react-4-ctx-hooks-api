import { cleanup } from "@testing-library/react"
import ProductListBloc from "../../pages/product/bloc/ProductListBloc"

describe("Product List Bloc", () => {

    let productListRepositoryMock
    let useProductListMock
    let navigationMock

    beforeEach(() => {
        productListRepositoryMock = jest.fn()
        useProductListMock = jest.fn()
        navigationMock = jest.fn()
    })

    afterEach(cleanup)

    it("Should call set list with products", async () => {
        let productDummy = [
            { id: "001", name: "Saus"},
            { id: "002", name: "Susu"},
        ]

        let getProductListReturnMock = jest.fn().mockResolvedValue(
            {data: {products: productDummy}}
        )
        productListRepositoryMock.mockReturnValue({
            getProducts : getProductListReturnMock
        })

        let setProductListMock = jest.fn()
        useProductListMock.mockReturnValue({
            list: productDummy,
            setList: setProductListMock,
        })

        navigationMock.mockReturnValue({

        })

        let bloc = ProductListBloc(productListRepositoryMock, useProductListMock, navigationMock)
        await bloc.getProductsList()

        expect(setProductListMock).toHaveBeenCalledWith(productDummy)

    })
})