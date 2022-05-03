const powerPlantService = require('../services/powerPlant');

class PowerPlantController {
  async createPowerPlant(req, res) {
    try {
      const id = await powerPlantService.createPowerPlant(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async updatePowerPlant(req, res) {
    try {
      const id = await powerPlantService.updatePowerPlant(req.body);
      res.status(200).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllPowerPlants(req, res) {
    try {
      const powerPlants = await powerPlantService.getAllPowerPlants();
      res.status(200).json(powerPlants);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getPowerPlantById(req, res) {
    try {
      const powerPlant = await powerPlantService.getPowerPlantById(
        req.params.id
      );
      res.status(200).json(powerPlant);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deletePowerPlant(req, res) {
    try {
      const id = await powerPlantService.deletePowerPlant(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new PowerPlantController();
