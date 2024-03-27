import Item from '../main/Item.js'

export const Products=async(req,res)=>{
    
    const gmail=req.body.gmail;
    const name=req.body. name;
    const company=req.body.company;
    const price=req.body.price;
    const reason=req.body.reason;
    const number=req.body.number;
    const image=req.body.image;
    //console.log(gmail,name,company,price,reason,number,image)
    try {
        const item=await Item.create({gmail,name,number,company,price,reason,image})
        res.status(200).send({message:"Item Added sucessfully"})
    } catch (error) {
        res.status(403).send({message:"Failed to upload items"})
        console.log(error);
    }

}
export const Sendproducts=async(req,res)=>{
    const data=await Item.find({})
    res.send({data})
    //console.log(data);
}
export const GetProductDetails=async(req,res)=>{
    const _id=req.body.id;
    const data=await Item.find({_id});
    res.send({data})
}
export const ProductDeleteitem=async(req,res)=>{
    const itemId = req.params.id;
    console.log(itemId)
    try {
        const datacar=await Item.findOneAndDelete({ _id: itemId });
res.status(200).send({message:"Deletetion suceesfull"})
        
    } catch (error) {
        res.status(403).send({message:"Deletion Failed"})
        
    }
    const datacar=await Item.findOneAndDelete({ _id: itemId });
}
export const MyproductsItems=async(req,res)=>{
    const gmail = req.body.gmail;
    const data=await Item.find({gmail});
    res.send({data})
}
