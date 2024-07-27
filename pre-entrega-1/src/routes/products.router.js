import { Router } from "express";
import ProductManager from "../controllers/product-manager.js";

const router = Router();
const manager = new ProductManager("./src/data/products.json")


router.get("/", async (req, res) => {
    const arrayProductos = await manager.getProducts();
    res.send(arrayProductos);

});

router.get("/:pid", async (req, res) => {
    let id = req.params.pid;

    const producto = await manager.getProductsbyId(parseInt(id));
    if (!producto) {
        res.send("Producto Inexistente")
    } else {
        res.send(producto);
    }
})

router.post("/", async (req, res) => {
    const nuevoProducto = req.body;
    await manager.addProduct(nuevoProducto);
    res.send("Producto Agregado Con Exito");
})




export default router;