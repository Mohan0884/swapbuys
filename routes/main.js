
import express from 'express';
const router=express.Router();
import  {Login,Register,Reset,verifyEmail,Forgotpassword} from '../Controllers/main.js'
 
import {authorizePermissions} from '../middleware/authentication.js'
import {Products,Sendproducts,GetProductDetails,ProductDeleteitem,MyproductsItems} from '../main/Itemroutes.js'




router.post('/main',Products);
router.get('/main',Sendproducts);
router.post('/main/getproduct',GetProductDetails);

router.delete('/main/delete/:id',ProductDeleteitem);
router.post('/main/products',MyproductsItems)

router.post('/login',Login);
router.post('/register',Register)
router.post('/reset-password',Reset);
router.post('/verifygmail', verifyEmail);
router.post('/forgot-password',Forgotpassword);




 
 
export default router;
