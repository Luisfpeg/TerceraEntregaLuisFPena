const express = require('express');
const bodyParser = require('body-parser');
const ProductManager = require('./ProductManager');

const app = express();
app.use(bodyParser.json());

// Endpoint para obtener los productos
app.get('/products', (req, res) => {
  const productManager = new ProductManager();
  let productos = productManager.getAll();
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit)) {
    productos = productos.slice(0, limit);
  }
  res.json(productos);
});

// Endpoint para obtener un producto por ID
app.get('/products/:pid', (req, res) => {
  const productManager = new ProductManager();
  const producto = productManager.getById(req.params.pid);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

app.listen(8080, () => {
  console.log('Servidor iniciado en el puerto 8080');
});