const db = require('../db/db');

class PowerPlantDAO {
  async createPowerPlant(name, power, power_plant_type_id, price) {
    const [id] = await db('power_plants').insert({
      name,
      power_plant_type_id,
      power,
      price,
    });

    return id;
  }

  async updatePowerPlant(id, name, power_plant_type_id, power, price) {
    const returningId = await db('power_plants').where('id', id).update(
      {
        id,
        name,
        power_plant_type_id,
        power,
        price,
      },
      ['id', 'name', 'power_plant_type_id', 'power', 'price']
    );

    return returningId;
  }

  async getAllPowerPlants() {
    const response = await db('power_plants')
      .select('*')
      .where({ isDeleted: null });

    const list = await response.map(async (powerPlant) => {
      const [powerPlantType] = await db('power_plant_types').where({
        id: powerPlant.power_plant_type_id,
        isDeleted: null,
      });

      powerPlant.powerPlantTypeName = powerPlantType.name;
    });

    const resolved = await Promise.all(list);

    return response;
  }

  async getPowerPlantById(id) {
    const [response] = await db('power_plants').where({
      isDeleted: null,
      id: id,
    });

    return response;
  }

  async deletePowerPlant(id) {
    const isDeleted = true;

    const returningId = await db('power_plants').where('id', id).update(
      {
        isDeleted,
      },
      ['isDeleted']
    );

    return returningId;
  }
}

module.exports = new PowerPlantDAO();
