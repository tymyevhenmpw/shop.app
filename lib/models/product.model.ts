import mongoose, { Model } from "mongoose";

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

const productSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true},
    images: [
        {
            type: String
        }
    ],
    isAvailable: {
        type: Boolean
    },
    quantity: {
        type: Number
    },
    url: {
        type: String
    },
    priceToShow: {
        type: Number
    },
    price: {
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId
    },
    vendor: {
        type: String
    },
    description: {
        type: String
    },
    params: [
        {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        }
    ],
    isFetched: {
        type: Boolean
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    orderedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

const Product: Model<Product> = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;