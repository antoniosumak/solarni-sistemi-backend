const db = require('../db/db');

class ProductDAO {
  async createProduct(code, name, price, description, data) {
    const [id] = await db('products').insert({
      code,
      name,
      price,
      description,
      photo: data,
    });

    return id;
  }

  async getAllProducts() {
    const response = await db('products')
      .select('*')
      .where({ isDeleted: null });

    return response;
  }

  async getAllProductWithoutImage() {
    const response = await db('products')
      .where({ isDeleted: null })
      .select('id', 'name');

    return response;
  }

  async getProductById(id) {
    const [response] = await db('products').where({ id: id, isDeleted: null });

    return response;
  }

  async updateProduct(id, code, name, price, description, data, productImage) {
    const updateColumns = ['id', 'code', 'name', 'price', 'description'];
    if (data) {
      updateColumns.push('photo');
    }
    const returningId = await db('products')
      .where({ isDeleted: null, id: id })
      .update(
        {
          code,
          name,
          price,
          description,
          ...(data && { photo: data }),
        },
        updateColumns
      );

    return returningId;
  }

  async deleteProduct(id) {
    const isDeleted = true;

    const returningId = await db('products').where('id', id).update(
      {
        isDeleted,
        updated_at,
      },
      ['isDeleted']
    );

    return returningId;
  }
}

module.exports = new ProductDAO();
