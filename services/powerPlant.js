const powerPlantDAO = require('../dao/powerPlant');

class PowerPlantService {
  createPowerPlant(powerPlantDto) {
    const { name, power_plant_type_id, power, price } = powerPlantDto;

    return powerPlantDAO.createPowerPlant(
      name,
      power,
      power_plant_type_id,
      price
    );
  }

  updatePowerPlant(powerPlantDto) {
    const { id, name, power_plant_type_id, power, price } = powerPlantDto;

    return powerPlantDAO.updatePowerPlant(
      id,
      name,
      power_plant_type_id,
      power,
      price
    );
  }

  getAllPowerPlants() {
    return powerPlantDAO.getAllPowerPlants();
  }

  getPowerPlantById(id) {
    return powerPlantDAO.getPowerPlantById(id);
  }

  deletePowerPlant(id) {
    return powerPlantDAO.deletePowerPlant(id);
  }
}

module.exports = new PowerPlantService();
