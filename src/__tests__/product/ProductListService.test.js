import ProductService from "../../pages/product/service/ProductService"
import client from "../../pages/shared/http-client/Client"

describe("Product list repository", () => {
    it("Should return product list successfuly", async () => {
        const productsDummy = [{id:"001", name:"sabun"}]

        // mocking function
        client.get = jest.fn()
        client.get.mockResolvedValue({data:{products:productsDummy}})

        const repo = await ProductService().getProducts()

        const actualResponseId = repo.data.products[0].id
        expect(client.get).toHaveBeenCalledWith('/products', {})
        expect(actualResponseId).toBe('001')
    })
})