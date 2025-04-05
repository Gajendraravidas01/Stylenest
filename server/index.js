import express from 'express'
import cors from 'cors';
import 'dotenv/config.js'
import ConnectDB from './db/index.js'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js';
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js'
import orderRouter from './routes/order.routes.js';
import sripeRouter from './routes/sripe.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();

app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/carts",cartRouter);
app.use("/api/orders",orderRouter);
app.use("/api/checkout",sripeRouter);

app.listen(process.env.PORT || 6000, () => {
    console.log("server is running on port : ",process.env.PORT)
})