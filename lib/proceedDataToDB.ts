import { createUrlProduct, deleteUrlProducts } from "./actions/product.actions";

interface Product {
    id: string | null,
    name: string | null,
    isAvailable: boolean,
    quantity: number,
    url: string | null,
    priceToShow: number,
    price: number,
    images: (string | null)[],
    vendor: string | null,
    description: string | null,
    params: {
        name: string | null,
        value: string | null
    }[],
    isFetched: boolean
}

export async function proceedDataToDB(data: Product[], selectedRowsIds: (string | null)[] ){
    try {
        await deleteUrlProducts();

        for(const product of data){
            if(product.id && selectedRowsIds.includes(product.id)){
                await createUrlProduct({ id: product.id, name: product.name, isAvailable: product.isAvailable, quantity: product.quantity, url: product.url, priceToShow: product.priceToShow, price: product.price, images: product.images, vendor: product.vendor, description: product.description, params: product.params, isFetched: product.isFetched});
            }
        }
    } catch (error: any) {
        throw new Error(`Error proceeding products to DB: ${error.message}`)
    }
}