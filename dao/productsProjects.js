const db = require('../db/db');

class ProductsProjectsDAO {
  async getProjectInformation(id) {
    const [response] = await db('projects').where({ id: id, isDeleted: null });
    const [client] = await db('clients').where({
      id: response.client_id,
      isDeleted: null,
    });

    const [status] = await db('statuses').where({
      id: response.status_id,
      isDeleted: null,
    });

    const [power_plant] = await db('power_plants').where({
      id: response.power_plant_id,
      isDeleted: null,
    });

    const [power_plant_type] = await db('power_plant_types').where({
      id: power_plant.power_plant_type_id,
      isDeleted: null,
    });

    power_plant.powerPlantTypeName = power_plant_type.name;

    delete response.client_id;
    delete response.status_id;
    delete response.power_plant_id;

    response.client = client;
    response.status = status;
    response.power_plant = power_plant;

    const productsOfProject = await db('products').whereIn(
      'id',
      db('products_projects').select('product_id').where('project_id', id)
    );

    const quantities = await db('products_projects')
      .select('product_id', 'quantity')
      .sum('quantity as summedQuantity')
      .groupBy('product_id');

    productsOfProject.forEach((value) => {
      const image = value.photo;
      value.photo = image.toString('base64');

      value.quantity = quantities.filter(
        (quantity) => value.id === quantity.product_id
      )[0].summedQuantity;
    });

    response.products = productsOfProject;

    return response;
  }

  async addProductToProject(project_id, product_id, quantity) {
    const returningId = await db('products_projects').insert({
      project_id,
      product_id,
      quantity,
    });

    returningId;
  }

  async deleteProductFromProject(project_id, product_id) {
    const returningId = await db('products_projects')
      .where({ project_id: project_id, product_id: product_id })
      .del();

    return returningId;
  }
}

module.exports = new ProductsProjectsDAO();
