const productsProjectsService = require('../services/productsProjects');

class ProductsProjectsController {
  async getProjectInformation(req, res) {
    try {
      const response = await productsProjectsService.getProjectInformation(
        req.params.id
      );

      res.status(200).json(response);
    } catch (error) {
      console.log(error);

      res.status(500).json(error);
    }
  }

  async addProductToProject(req, res) {
    try {
      const id = await productsProjectsService.addProductToProject(req.body);

      res.status(201).json(id);
    } catch (error) {
      console.log(error);

      res.status(500).json(error);
    }
  }

  async deleteProductFromProject(req, res) {
    try {
      const response = await productsProjectsService.deleteProductFromProject(
        req.params.project_id,
        req.params.product_id
      );

      res.status(204).send();
    } catch (error) {
      console.log(error);

      res.status(500).json(error);
    }
  }
}

module.exports = new ProductsProjectsController();
