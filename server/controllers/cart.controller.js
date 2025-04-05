import { Cart } from "../models/cart.model.js";


const CreateCart = async (req,res) => {
    const newcart = new Cart(req.body);
    try {
        const savedcart = await newcart.save();
        return res.status(200).json({
            savedcart,
            message : "cart is created successufully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "error in creating a cart"
        }),console.log(error);
    }
}

const UpdateCart = async (req,res) => {
    try {
        const updatedcart = await Cart.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{new : true})
        // console.log(updateduser);
        return res.status(200).json({
            updatedcart,
            message : "cartdetails updated successfully!"
        })
    } catch (error) {
        return res.status(400).json({
            message : "error in updating the cart"
        }),console.log(error);
    }
}

const DeleteCart = async (req,res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message : "Cart deleted sucessufully!"
        })
    } catch (error) {
        return res.status(400).json({
            message : "something went wrong in deleting the Cart!"
        })
    }
}

//get user cart
const getUserCart = async (req,res) => {
    try {
        const cart = Cart.findOne({userId : req.params.userId});
        res.status(200).json({
            cart,
            message:"user cart fetched successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message : "error in finding userCart"
        }),console.log(error);
    }
}

//get all
const getAllCart = async (req,res) => {
    try {
        const cart = await Cart.find();
        return res.status(200).json({
            cart,
            message : "all user cart fetched successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message : "error in finding all userCart"
        }),console.log(error);
    }
}

export {CreateCart,UpdateCart, DeleteCart, getUserCart,getAllCart};