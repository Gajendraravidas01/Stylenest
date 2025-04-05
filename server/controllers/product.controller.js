import {Product} from '../models/product.model.js'

const CreateProduct = async (req,res) => {
    const newproduct = new Product(req.body);
    try {
        const savedproduct = await newproduct.save();
        return res.status(200).json({
            savedproduct,
            message : "product is created successufully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "error in creating a product"
        }),console.log(error);
    }
}
const updateProduct = async (req,res) => {
    try {
        const updatedproduct = await Product.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{new : true})
        // console.log(updateduser);
        return res.status(200).json({
            updatedproduct,
            message : "productdetails updated successfully!"
        })
    } catch (error) {
        return res.status(400).json({
            message : "error in updating the product"
        }),console.log(error);
    }
}

const getProduct = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json({
            product,
            message : "product fetched sucessufully!"
        })
    } catch (error) {
        return res.status(400).json({
            message : "something went wrong in Getting the product!"
        })
    }
}

//get all product
const getAllProduct = async (req,res) => {
    try {
        const qNew = req.query.new;
        const qCategory = req.query.category;

        let products;
        if(qNew){
            products = await Product.find().sort({createdAt : -1}).limit(5);
        }else if(qCategory){
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            })
        }else{
            products = await Product.find();
        }
        return res.status(200).json({
            products,
            message : "All products fetched sucessufully!"
        }) 
    } catch (error) {
        return res.status(400).json({
            message : "something went wrong in Getting All product!"
        })
    }
}

export {CreateProduct,updateProduct,getProduct,getAllProduct};