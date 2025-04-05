import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';

//update user
const UpdateUser = async (req,res) => {

    if(req.body.password){
        req.body.password = await bcrypt.hash(req.body.password,10);
    }
    try {
        const updateduser = await User.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{new : true})
        console.log(updateduser);
        return res.status(200).json({
            updateduser,
            message : "userdetails updated successfully!"
        })
    } catch (error) {
        return res.status(500).json({
            message : "Something went wrong on updating"
        }),console.log(error);
    }
}

//delete user
const DeleteUser = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message : "user deleted sucessufully!"
        })
    } catch (error) {
        return res.status(400).json({
            message : "something went wrong in deleting the user!"
        })
    }
}

//get user
const GetUser = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json({
            user,
            message : "User fetched sucessufully!"
        })
    } catch (error) {
        return res.status(400).json({
            message : "something went wrong in Getting the user!"
        })
    }
}

//Get all user
const GetAllUser = async (req,res) => {
    try {
        const query = req.query.new;

        const users = query ? await User.find().sort({_id : -1}).limit(5) :  await User.find();
        return res.status(200).json({
            users,
            message : "All user fetched sucessufully!"
        }) 
    } catch (error) {
        return res.status(400).json({
            message : "something went wrong in Getting All user!"
        })
    }
}

//get user stats
const GetUserStats = async (req,res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
            $project: {
            month: { $month: "$createdAt" },
            },
        },
        {
            $group: {
            _id: "$month",
            total: { $sum: 1 },
            },
        },
        ]);
        res.status(200).json({
            data,
            message : "fetched user stats sucessfully!"
        })
    } catch (error) {
        return res.status(500).json({
            message : "something went wrong in fetching the user stats"
        })
    }
}

export {UpdateUser,DeleteUser,GetUser,GetAllUser,GetUserStats};