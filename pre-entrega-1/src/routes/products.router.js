import { Router } from "express";

const router = Router();

const products = [];

router.get("/", (req, res) => {
    res.send(products);
});

router.post("/", (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.send({status: "success", message:"Producto Agregado Exitosamente"});
}) 


export default router;