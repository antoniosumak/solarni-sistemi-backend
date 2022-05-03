const db = require('../db/db');

class PowerPlantTypeDAO {
  async createPowerPlantType(name) {
    const [id] = await db('power_plant_types').insert({
      name,
    });

    return id;
  }

  async updatePowerPlantType(id, name) {
    const returningId = await db('power_plant_types').where('id', id).update(
      {
        id,
        name,
      },
      ['id', 'name']
    );

    return returningId;
  }

  async getAllPowerPlantTypes() {
    const response = await db('power_plant_types')
      .select('*')
      .where({ isDeleted: null });

    return response;
  }

  async getPowerPlantTypeById(id) {
    const [response] = await db('power_plant_types').where({
      isDeleted: null,
      id: id,
    });

    return response;
  }

  async deletePowerPlantType(id) {
    const isDeleted = true;

    const returningId = await db('power_plant_types').where('id', id).update(
      {
        isDeleted,
      },
      ['isDeleted']
    );

    return returningId;
  }
}

module.exports = new PowerPlantTypeDAO();
