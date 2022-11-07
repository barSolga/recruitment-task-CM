import { Schema, model } from 'mongoose';

interface IProduct {
    name: string;
    price: Number;
    updateDate: Date;
}

const productSchema: Schema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true
    },
    updateDate: {
        type: Date,
        default: new Date()
    }
})

export const Product = model<IProduct>('Product', productSchema);
