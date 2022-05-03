const powerPlantTypeService = require('../services/powerPlantType');

class PowerPlantTypeController {
  async createPowerPlantType(req, res) {
    try {
      const id = await powerPlantTypeService.createPowerPlantType(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async updatePowerPlantType(req, res) {
    try {
      const id = await powerPlantTypeService.updatePowerPlantType(req.body);
      res.status(200).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllPowerPlantTypes(req, res) {
    try {
      const powerPlants = await powerPlantTypeService.getAllPowerPlantTypes();
      res.status(200).json(powerPlants);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getPowerPlantTypeById(req, res) {
    try {
      const powerPlant = await powerPlantTypeService.getPowerPlantTypeById(
        req.params.id
      );
      res.status(200).json(powerPlant);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deletePowerPlantType(req, res) {
    try {
      const id = await powerPlantTypeService.deletePowerPlantType(
        req.params.id
      );
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new PowerPlantTypeController();
