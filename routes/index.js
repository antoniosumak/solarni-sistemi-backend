const express = require('express');
const clientController = require('../controllers/client');
const statusController = require('../controllers/status');
const productController = require('../controllers/product');
const powerPlantController = require('..//controllers/powerPlant');
const documentController = require('../controllers/document');
const projectController = require('../controllers/project');
const productsProjectsController = require('../controllers/productsProjects');
const powerPlantTypeController = require('../controllers/powerPlantType');

const router = express.Router();

//Clients
router.post('/api/clients', clientController.createClient);
router.get('/api/clients', clientController.getAllClients);
router.get('/api/clients/:id', clientController.getClientById);
router.put('/api/clients/:id', clientController.updateClient);
router.delete('/api/clients/:id', clientController.deleteClient);

//Statuses
router.post('/api/statuses', statusController.createStatus);
router.get('/api/statuses', statusController.getAllStatuses);
router.delete('/api/statuses/:id', statusController.deleteStatus);

//Products
router.post('/api/products', productController.createProduct);
router.get('/api/products/:id', productController.getProductById);
router.get('/api/products', productController.getAllProducts);
router.put('/api/products/:id', productController.editProduct);
router.get('/api/no-image', productController.getAllProductsWithoutImage);
router.delete('/api/products/:id', productController.deleteProject);

//Powerplants
router.post('/api/power-plants', powerPlantController.createPowerPlant);
router.get('/api/power-plants', powerPlantController.getAllPowerPlants);
router.get('/api/power-plants/:id', powerPlantController.getPowerPlantById);
router.put('/api/power-plants/:id', powerPlantController.updatePowerPlant);
router.delete('/api/power-plants/:id', powerPlantController.deletePowerPlant);

//PowerPlantTypes
router.post(
  '/api/power-plant-types',
  powerPlantTypeController.createPowerPlantType
);
router.get(
  '/api/power-plant-types',
  powerPlantTypeController.getAllPowerPlantTypes
);
router.get(
  '/api/power-plant-types/:id',
  powerPlantTypeController.getPowerPlantTypeById
);
router.put(
  '/api/power-plant-types/:id',
  powerPlantTypeController.updatePowerPlantType
);
router.delete(
  '/api/power-plant-types/:id',
  powerPlantTypeController.deletePowerPlantType
);

//Documents
router.post(
  '/api/projects/:id/details/documents/create',
  documentController.createDocument
);
router.get('/api/documents/:id', documentController.getAllProjectDocuments);
router.delete('/api/documents/:id', documentController.deleteProject);

//Projects
router.post('/api/projects', projectController.createProject);
router.put('/api/projects/:id', projectController.updateProject);
router.get('/api/projects', projectController.getAllProjects);
router.get('/api/projects/:statusId', projectController.getAllProjectsByStatus);
router.get('/api/projects/:id/edit', projectController.getProject);
router.delete('/api/projects/:id', projectController.deleteProject);

//Joint table
router.get(
  '/api/projects/:id/details',
  productsProjectsController.getProjectInformation
);
router.post(
  '/api/projects/:id/products/add',
  productsProjectsController.addProductToProject
);
router.delete(
  '/api/projects/:project_id/product/:product_id/delete',
  productsProjectsController.deleteProductFromProject
);

module.exports = router;
