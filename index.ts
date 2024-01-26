import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
import userController from './controllers/userController';
import categoryController from './controllers/categoryController';
import productController from './controllers/productController';
import cartProductController from './controllers/cartProductController';
import orderController from './controllers/orderController';


const app: Express = express();

mongoose.connect("mongodb+srv://root:qwerty12345@test.nyvxqnm.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});


app.use('/', commentController);
app.use('/', articleController);
app.use('/', authorController);
app.use('/', userController);
app.use('/', categoryController);
app.use('/', productController);
app.use('/', cartProductController);
app.use('/', orderController);


app.listen(3000, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});
