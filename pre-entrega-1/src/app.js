//PRIMERA PRE-ENTREGA BACKEND 1

import express from "express";


const PORT = 8080;
const app = express();

import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/products.router.js";


app.use(express.json());

app.use("/", productsRouter);
app.use("/", cartsRouter);




app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}`);
})



/* visualizar por ID GET
app.get("/products/:id", (req, resp) => {
    let id = req.params.id;
    console.log(id);
    let searchProd = misProductos.find(product => product.id == id);
    if (searchProd) {
        res.send(searchProd);
    } else {
        resp.send("Item No Encontrado")
    }
})
*/

// METODO POST CARGAMOS NUEVO PRODUCTO AL ARRAY
/*app.post("/", (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);

    res.send({status: "success", message:"Producto Agregado"});
})*/