const productsProjectsDao = require('../dao/productsProjects');

class ProductsProjectsService {
  getProjectInformation(id) {
    return productsProjectsDao.getProjectInformation(id);
  }

  addProductToProject(productsProjectDto) {
    const { project_id, product_id, quantity } = productsProjectDto;

    return productsProjectsDao.addProductToProject(
      project_id,
      product_id,
      quantity
    );
  }

  deleteProductFromProject(project_id, product_id) {
    return productsProjectsDao.deleteProductFromProject(project_id, product_id);
  }
}

module.exports = new ProductsProjectsService();
