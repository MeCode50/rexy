import express from "express";
import { getAllUsers } from "../controllers/admin/users/get_all_users";
import { deleteUser } from "../controllers/admin/users/delete_user";

const app = express.Router(); 

app.get('/admin/users/all', getAllUsers); 
app.put('/admin/users/delete/:id', deleteUser); 

const adminRouter = app
export default adminRouter; 