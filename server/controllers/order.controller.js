import { Order } from "../models/oder.model.js";


const CreateOrder = async (req,res) => {
    const neworder = new Order(req.body);
    try {
        const savedorder = await neworder.save();
        return res.status(200).json({
            savedorder,
            message : "order is created successufully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "error in creating a order"
        }),console.log(error);
    }
}

const UpdateOrder = async (req,res) => {
    try {
        const updatedorder = await Order.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{new : true})
        // console.log(updateduser);
        return res.status(200).json({
            updatedorder,
            message : "orderdetails updated successfully!"
        })
    } catch (error) {
        return res.status(400).json({
            message : "error in updating the order"
        }),console.log(error);
    }
}

const DeleteOrder = async (req,res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message : "Order deleted sucessufully!"
        })
    } catch (error) {
        return res.status(400).json({
            message : "something went wrong in deleting the Order!"
        })
    }
}

//get user cart
const getUserOrder = async (req,res) => {
    try {
        const order = Order.find({userId : req.params.userId});
        res.status(200).json({
            order,
            message:"order cart fetched successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message : "error in finding userOrder"
        }),console.log(error);
    }
}

//get all
const getAllOrder = async (req,res) => {
    try {
        const order = await Order.find();
        return res.status(200).json({
            order,
            message : "all user order fetched successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message : "error in finding all userOrder"
        }),console.log(error);
    }
}

const getMonthlyIncome = async(req,res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() -1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));
    
    try {
        const income = await Order.aggregate([
            {$match : {createdAt: {$gte: previousMonth}}},
            {
                $project : {
                    month : {$month : "$createdAt"},
                    sales: "$amount",
                }
            },
            {
                $group : {
                    _id: "$month",
                    total : {$sum : "$sales"},
                }
            },
        ]);
        return res.status(200).json({
            income,
            message : "monthly income get successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message : "error in finding total income"
        }),console.log(error);
    }
}

export {CreateOrder,UpdateOrder,DeleteOrder,getUserOrder,getAllOrder,getMonthlyIncome};