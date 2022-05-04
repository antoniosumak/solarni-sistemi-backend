const powerPlantDAO = require('../dao/powerPlant');

class PowerPlantService {
  createPowerPlant(powerPlantDto) {
    const { name, power_plant_type_id, price, power } = powerPlantDto;

    return powerPlantDAO.createPowerPlant(
      name,
      power,
      price,
      power_plant_type_id
    );
  }

  updatePowerPlant(powerPlantDto) {
    const { id, name, power_plant_type_id, price, power } = powerPlantDto;

    return powerPlantDAO.updatePowerPlant(
      id,
      name,
      power_plant_type_id,
      price,
      power
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
