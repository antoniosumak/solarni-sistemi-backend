const productDAO = require('../dao/product');

class ProductService {
  createProduct(productDto, image) {
    const { code, name, price, description } = productDto;
    const { data } = image ?? {};

    return productDAO.createProduct(code, name, price, description, data);
  }

  async getAllProducts() {
    const products = await productDAO.getAllProducts();

    products.forEach((product, index) => {
      const image = product.photo;
      if (image) {
        product.photo = image.toString('base64');
      }
    });

    return products;
  }

  async getAllProductsWithoutImage() {
    return productDAO.getAllProductWithoutImage();
  }

  async updateProduct(productDto, image) {
    const { id, code, name, price, description, productImage } = productDto;
    const { data } = image ?? {};

    return productDAO.updateProduct(
      id,
      code,
      name,
      price,
      description,
      data,
      productImage
    );
  }

  async getProductById(id) {
    const product = await productDAO.getProductById(id);
    const image = product?.photo;
    if (image) {
      product.photo = image.toString('base64');
    }

    return product;
  }

  deleteProduct(id) {
    return productDAO.deleteProduct(id);
  }
}

module.exports = new ProductService();
