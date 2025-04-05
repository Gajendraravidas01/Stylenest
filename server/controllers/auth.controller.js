import express from 'express'
import {User} from '../models/user.model.js'
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

const CreateUser = async (req,res) => {
    const {username,email,password} = req.body;
    try {
        if(!username || !email || !password){
            return res.status(400).json({
                message : "Username or password or email is required!"
            })
        }
        const hashpassword = await bcrypt.hash(password,10);
        // console.log(hashpassword);
        const user = await User.create({
            username : username,
            email : email,
            password : hashpassword
        });

        await user.save();
        return res.status(200).json({
            user,
            message : "user is created successfully !"
        })
    } catch (error) {
        return res.status(500).json({
            message : "error in creating the user"
        }),console.log(error);
    }
}

const LoginUser = async (req,res) => {
    const {email, password} = req.body;
    // console.log(req.body);
    try {
        if(!email || !password){
            return res.status(400).json({
                message : "email or password is required!"
            })
        }
        const user = await User.findOne({
            // $or : [{username},{email}]
            email
        })
        if(!user){
            return res.status(400).json({
                message : "user not found!"
            })
        }
        const ispasswordcorrect = await bcrypt.compare(password,user.password);
        // console.log(ispasswordcorrect);
        if(!ispasswordcorrect){
            return res.status(400).json({
                message : "invalid credentials!!"
            })
        }
        const token = jwt.sign(
            {
                id : user._id,
                isAdmin : user.isAdmin
            },
            process.env.JWT_SEC_KEY,
            {
                expiresIn : "3d"
            }
        );
        return res.status(200).json({
            token,
            user : {
                user_Id : user._id,
                email : user.email,
                username : user.username,
                isAdmin : user.isAdmin
            },
            message : "user login successfully!"
        })
    } catch (error) {
        return res.status(500).json({
            message:"something went wrong in login user! please try again later"
        }),console.log(error);
    }
}

export {CreateUser,LoginUser};