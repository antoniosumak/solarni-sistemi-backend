const productService = require('../services/product');

class ProductController {
  async createProduct(req, res) {
    try {
      const id = await productService.createProduct(
        req.body,
        req?.files?.productImage
      );
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async editProduct(req, res) {
    try {
      const id = await productService.updateProduct(
        req.body,
        req?.files?.productImage
      );
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllProductsWithoutImage(req, res) {
    try {
      const products = await productService.getAllProductsWithoutImage();
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getProductById(req, res) {
    try {
      const product = await productService.getProductById(req.params.id);
      res.status(200).send(product);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deleteProject(req, res) {
    try {
      const id = await productService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new ProductController();
