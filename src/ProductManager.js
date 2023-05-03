const fs = require('fs');

class ProductManager {
  constructor(filename = 'productos.json') {
    this.filename = filename;
    this.data = [];
    this.load();
  }

  load() {
    try {
      const data = fs.readFileSync(this.filename, 'utf-8');
      this.data = JSON.parse(data);
    } catch (error) {
      this.data = [];
    }
  }

  getAll() {
    return this.data;
  }

  getById(id) {
    return this.data.find(producto => producto.id === id);
  }
}

module.exports = ProductManager;