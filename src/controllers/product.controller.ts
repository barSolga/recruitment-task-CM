import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { Product } from '../models/product.model';

// @desc    get all products
// @route   GET /api/products
export const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find({});
    res.status(200).json(products);
});

// @desc    add product
// @route   POST /api/products
export const addProduct = asyncHandler(async (req:Request, res:Response) => {
    const { name, price } = req.body;
    const date: Date = new Date();

    if ( !name || !price ) {
        res.status(400)
        throw new Error('Please add all fields')
      }
    
      // Create Product
      const product = await Product.create({
        name: name,
        price: price,
        updateDate: date,
      })
    
      if (product) {
        res.status(201).json({
          _id: product._id,
          name: product.name,
          price: product.price,
          updateDate: product.updateDate
        })
      } else {
        res.status(400)
        throw new Error('Invalid task data')
      }
});

// @desc    get one product
// @route   GET /api/products/:id
export const getProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(400)
      throw new Error('Product not found')
    }

    res.status(200).json(product);
});

// @desc    update product
// @route   PUT /api/products
export const updateProduct = asyncHandler(async (req:Request, res:Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(400)
        throw new Error('Product not found')
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(updatedProduct)
});

// @desc    delete product
// @route   DELETE /api/products/:id
export const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(400)
      throw new Error('Product not found')
    }

    await product.remove();

    res.status(200).json({ 
      message: `Product: ${product.name} | id: ${req.params.id } -> deleted successfully`
    });
});
