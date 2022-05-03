const powerPlantTypeDAO = require('../dao/powerPlantType');

class PowerPlantTypeService {
  createPowerPlantType(powerPlantTypeDto) {
    const { name } = powerPlantTypeDto;

    return powerPlantTypeDAO.createPowerPlantType(name);
  }

  updatePowerPlantType(powerPlantTypeDto) {
    const { id, name } = powerPlantTypeDto;

    return powerPlantTypeDAO.updatePowerPlantType(id, name);
  }

  getAllPowerPlantTypes() {
    return powerPlantTypeDAO.getAllPowerPlantTypes();
  }

  getPowerPlantTypeById(id) {
    return powerPlantTypeDAO.getPowerPlantTypeById(id);
  }

  deletePowerPlantType(id) {
    return powerPlantTypeDAO.deletePowerPlantType(id);
  }
}

module.exports = new PowerPlantTypeService();
