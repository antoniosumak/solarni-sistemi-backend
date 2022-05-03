const db = require('../db/db');

class StatusDAO {
  async createStatus(name) {
    const [id] = await db('statuses').insert({ name });

    return id;
  }

  async getAllStatuses() {
    const response = await db('statuses')
      .select('*')
      .where({ isDeleted: null });

    return response;
  }

  async deleteStatus(id) {
    const updated_at = new Date().toISOString();
    const isDeleted = true;

    const returningId = await db('statuses').where('id', id).update(
      {
        isDeleted,
        updated_at,
      },
      ['isDeleted', 'updated_at']
    );

    return returningId;
  }
}

module.exports = new StatusDAO();
